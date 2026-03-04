import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let _supabase: SupabaseClient | null = null;

function getSupabase(): SupabaseClient {
  if (_supabase) return _supabase;
  
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!url || !key) {
    // During build time, create a dummy client that won't actually connect
    console.warn('Missing Supabase environment variables — using placeholder client');
    _supabase = createClient('https://placeholder.supabase.co', 'placeholder-key');
    return _supabase;
  }
  
  _supabase = createClient(url, key);
  return _supabase;
}

// ===== Lead Submission Functions =====

interface LeadData {
  first_name?: string;
  last_name?: string;
  email: string;
  message?: string;
  source: string;
  language: string;
}

interface FormationLeadData {
  full_name: string;
  phone?: string;
  email: string;
  formation_type?: string;
  message?: string;
  language: string;
}

interface StudioLeadData {
  first_name?: string;
  last_name?: string;
  email: string;
  company?: string;
  project_description?: string;
  language: string;
}

export async function submitLead(data: LeadData) {
  try {
    const supabase = getSupabase();
    const { error } = await supabase.from('leads').insert([data]);
    if (error) throw error;
    return { success: true };
  } catch (err) {
    console.error('Error submitting lead:', err);
    return { success: false };
  }
}

export async function submitFormationLead(data: FormationLeadData) {
  try {
    const supabase = getSupabase();
    const { error } = await supabase.from('formation_leads').insert([data]);
    if (error) throw error;
    return { success: true };
  } catch (err) {
    console.error('Error submitting formation lead:', err);
    return { success: false };
  }
}

interface AuditLeadData {
  email: string;
  audit_score: number;
  audit_level: string;
  audit_summary: string;
  audit_responses: unknown;
  chart_data: unknown;
  strengths: string[];
  weaknesses: string[];
  roadmap: unknown;
  language: string;
}

export async function submitAuditLead(data: AuditLeadData) {
  try {
    const supabase = getSupabase();
    const { error } = await supabase.from('audit_leads').insert([data]);
    if (error) throw error;
    return { success: true };
  } catch (err) {
    console.error('Error submitting audit lead:', err);
    return { success: false };
  }
}

export async function subscribeNewsletter(email: string, language: string) {
  try {
    const supabase = getSupabase();
    const { error } = await supabase.from('newsletter_subscribers').insert([{ email, language }]);
    if (error) throw error;
    return { success: true };
  } catch (err) {
    console.error('Error subscribing to newsletter:', err);
    return { success: false };
  }
}

export async function submitStudioLead(data: StudioLeadData) {
  try {
    const supabase = getSupabase();
    const { error } = await supabase.from('studio_leads').insert([data]);
    if (error) throw error;
    return { success: true };
  } catch (err) {
    console.error('Error submitting studio lead:', err);
    return { success: false };
  }
}
