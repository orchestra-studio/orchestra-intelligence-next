import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

// ── Rate-limit store (in-memory — resets on deploy) ────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5;         // max 5 requests per window per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// ── Types ──────────────────────────────────────────────────────────

interface HistoryEntry {
  category: string;
  question: string;
  answerLabel: string;
  score: number;
}

interface AuditPayload {
  history: HistoryEntry[];
  lang: 'fr' | 'en';
  /** Honeypot — must be empty */
  website?: string;
}

// ── POST handler ───────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 },
    );
  }

  try {
    const body: AuditPayload = await request.json();
    const { history, lang, website } = body;

    // Honeypot check — bots fill hidden fields
    if (website) {
      // Silently return a fake success to not tip off the bot
      return NextResponse.json({ result: generateFallbackResult([], lang) });
    }

    // Validation
    if (!Array.isArray(history) || history.length === 0) {
      return NextResponse.json(
        { error: 'Missing or invalid history' },
        { status: 400 },
      );
    }

    // Always generate deterministic results first
    const fallback = generateFallbackResult(history, lang);

    // Try Gemini enhancement (non-blocking fallback)
    const geminiKey = process.env.GEMINI_API_KEY;
    if (!geminiKey) {
      return NextResponse.json({ result: fallback });
    }

    try {
      const enhanced = await generateGeminiReport(history, lang, geminiKey);
      return NextResponse.json({
        result: { ...fallback, ...enhanced },
      });
    } catch (geminiError) {
      console.error('[audit/route] Gemini call failed, using fallback:', geminiError);
      return NextResponse.json({ result: fallback });
    }
  } catch (err) {
    console.error('[audit/route] Error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

// ── Deterministic scoring (always works) ───────────────────────────

function generateFallbackResult(history: HistoryEntry[], lang: string) {
  const totalScore =
    history.length > 0
      ? Math.round(history.reduce((a, b) => a + b.score, 0) / history.length)
      : 0;

  let level = '';
  if (totalScore < 40) {
    level = lang === 'fr' ? 'Débutant IA' : 'AI Beginner';
  } else if (totalScore < 60) {
    level = lang === 'fr' ? 'En Transition' : 'In Transition';
  } else if (totalScore < 80) {
    level = lang === 'fr' ? 'Avancé' : 'Advanced';
  } else {
    level = lang === 'fr' ? 'Expert IA' : 'AI Expert';
  }

  let summary = '';
  if (lang === 'fr') {
    if (totalScore < 40) {
      summary = `Votre entreprise en est aux premiers stades de l'adoption IA avec un score de ${totalScore}/100. Des opportunités significatives d'automatisation existent. Nous recommandons de commencer par une formation IA pour vos équipes.`;
    } else if (totalScore < 60) {
      summary = `Avec un score de ${totalScore}/100, votre entreprise est en phase de transition numérique. Vous avez posé les bases, mais il reste du potentiel à exploiter avec des agents IA spécialisés.`;
    } else if (totalScore < 80) {
      summary = `Score de ${totalScore}/100 - Votre maturité IA est avancée. Vous utilisez déjà des outils efficaces. L'étape suivante : orchestrer plusieurs agents pour maximiser votre ROI.`;
    } else {
      summary = `Excellent score de ${totalScore}/100 ! Vous êtes un leader en adoption IA. Continuez à innover avec des systèmes multi-agents et du pilotage agentique avancé.`;
    }
  } else {
    if (totalScore < 40) {
      summary = `Your company is in the early stages of AI adoption with a score of ${totalScore}/100. Significant automation opportunities exist. We recommend starting with AI training for your teams.`;
    } else if (totalScore < 60) {
      summary = `With a score of ${totalScore}/100, your company is in digital transition. You've laid the foundation, but there's still potential to tap with specialized AI agents.`;
    } else if (totalScore < 80) {
      summary = `Score of ${totalScore}/100 - Your AI maturity is advanced. You're already using effective tools. Next step: orchestrate multiple agents to maximize your ROI.`;
    } else {
      summary = `Excellent score of ${totalScore}/100! You're an AI adoption leader. Keep innovating with multi-agent systems and advanced agentic piloting.`;
    }
  }

  const sortedByScore = [...history].sort((a, b) => b.score - a.score);
  const strengths = sortedByScore.slice(0, 2).map((h) =>
    lang === 'fr' ? `${h.category} : ${h.answerLabel}` : `${h.category}: ${h.answerLabel}`,
  );
  const weaknesses = sortedByScore.slice(-2).map((h) =>
    lang === 'fr' ? `${h.category} nécessite une amélioration` : `${h.category} needs improvement`,
  );

  const roadmap =
    lang === 'fr'
      ? [
          { step: 'Phase 1', action: "Audit approfondi et identification des quick wins" },
          { step: 'Phase 2', action: "Déploiement d'agents IA sur les processus prioritaires" },
          { step: 'Phase 3', action: 'Orchestration multi-agents et optimisation continue' },
        ]
      : [
          { step: 'Phase 1', action: 'Deep audit and quick wins identification' },
          { step: 'Phase 2', action: 'AI agent deployment on priority processes' },
          { step: 'Phase 3', action: 'Multi-agent orchestration and continuous optimization' },
        ];

  return {
    score: totalScore,
    level,
    summary,
    chartData: history.map((h) => ({ subject: h.category, A: h.score, fullMark: 100 })),
    strengths,
    weaknesses,
    roadmap,
  };
}

// ── Gemini-enhanced report ─────────────────────────────────────────

async function generateGeminiReport(
  history: HistoryEntry[],
  lang: string,
  apiKey: string,
) {
  const ai = new GoogleGenAI({ apiKey });

  const prompt =
    lang === 'fr'
      ? `Tu es un consultant IA expert. Voici les résultats d'un audit de maturité IA d'une entreprise :

${history.map((h) => `- ${h.category}: "${h.answerLabel}" (score: ${h.score}/100)`).join('\n')}

Génère un résumé exécutif (3-4 phrases max), 3 forces clés et 3 axes d'amélioration prioritaires. 
Réponds en JSON : { "summary": "...", "strengths": ["...", "...", "..."], "weaknesses": ["...", "...", "..."], "roadmap": [{"step": "Phase 1", "action": "..."}, {"step": "Phase 2", "action": "..."}, {"step": "Phase 3", "action": "..."}] }`
      : `You are an expert AI consultant. Here are the results of a company's AI maturity audit:

${history.map((h) => `- ${h.category}: "${h.answerLabel}" (score: ${h.score}/100)`).join('\n')}

Generate an executive summary (3-4 sentences max), 3 key strengths and 3 priority improvement areas.
Reply in JSON: { "summary": "...", "strengths": ["...", "...", "..."], "weaknesses": ["...", "...", "..."], "roadmap": [{"step": "Phase 1", "action": "..."}, {"step": "Phase 2", "action": "..."}, {"step": "Phase 3", "action": "..."}] }`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: prompt,
    config: {
      responseMimeType: 'application/json',
    },
  });

  const text = response.text ?? '';
  const parsed = JSON.parse(text);

  return {
    summary: parsed.summary,
    strengths: parsed.strengths,
    weaknesses: parsed.weaknesses,
    roadmap: parsed.roadmap,
  };
}
