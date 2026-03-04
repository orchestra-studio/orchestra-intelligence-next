import type { Metadata } from 'next';
import { LegalPageWrapper } from '@/components/legal-page-wrapper';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité — RGPD',
  description: 'Politique de confidentialité et protection des données personnelles (RGPD) d\'Orchestra Intelligence.',
  openGraph: {
    title: 'Politique de Confidentialité — RGPD',
    description: 'Protection des données personnelles, cookies, droits RGPD.',
    url: 'https://www.orchestraintelligence.fr/confidentialite',
  },
};

export default function ConfidentialitePage() {
  return (
    <LegalPageWrapper title="Politique de Confidentialité">
      <p>
        Orchestra Intelligence s&apos;engage à protéger la vie privée de ses utilisateurs conformément
        au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679)
        et à la loi française Informatique et Libertés du 6 janvier 1978 modifiée.
      </p>

      <h2>1. Responsable du traitement</h2>
      <p>
        <strong>Orchestra Intelligence</strong><br />
        Représenté par : Ludovic Goutel<br />
        Siège social : Toulouse, France<br />
        Contact DPO : sales@orchestraintelligence.fr
      </p>

      <h2>2. Données collectées</h2>
      <p>Nous collectons les données suivantes :</p>
      <ul>
        <li><strong>Formulaires de contact &amp; diagnostic :</strong> nom, prénom, adresse email, nom d&apos;entreprise, message, réponses au questionnaire d&apos;audit IA</li>
        <li><strong>Newsletter :</strong> adresse email</li>
        <li><strong>Navigation :</strong> cookies techniques (fonctionnement du site), cookies analytiques (avec votre consentement)</li>
        <li><strong>Données techniques :</strong> adresse IP, type de navigateur, pages consultées (logs serveur)</li>
      </ul>

      <h2>3. Finalité des traitements</h2>
      <ul>
        <li>Répondre à vos demandes de contact et de devis</li>
        <li>Générer votre rapport d&apos;audit IA personnalisé</li>
        <li>Vous envoyer notre newsletter (avec votre consentement explicite)</li>
        <li>Améliorer le fonctionnement et l&apos;ergonomie du site</li>
        <li>Établir des statistiques de fréquentation anonymisées</li>
      </ul>

      <h2>4. Base légale</h2>
      <ul>
        <li><strong>Consentement :</strong> newsletter, cookies analytiques</li>
        <li><strong>Intérêt légitime :</strong> réponse aux demandes de contact, amélioration du service</li>
        <li><strong>Exécution contractuelle :</strong> prestation de services</li>
      </ul>

      <h2>5. Durée de conservation</h2>
      <ul>
        <li><strong>Données de contact :</strong> 3 ans à compter du dernier contact</li>
        <li><strong>Données de newsletter :</strong> jusqu&apos;au désabonnement + 1 an d&apos;archivage</li>
        <li><strong>Cookies :</strong> 13 mois maximum</li>
        <li><strong>Données comptables :</strong> 10 ans (obligation légale)</li>
      </ul>

      <h2>6. Destinataires des données</h2>
      <p>Vos données peuvent être traitées par :</p>
      <ul>
        <li><strong>Supabase Inc.</strong> — hébergement base de données (serveurs UE)</li>
        <li><strong>Vercel Inc.</strong> — hébergement du site web</li>
        <li><strong>Google (Gemini API)</strong> — génération du rapport d&apos;audit IA (données anonymisées)</li>
      </ul>
      <p>
        Aucune donnée n&apos;est vendue, louée ou transmise à des tiers à des fins commerciales.
      </p>

      <h2>7. Transferts hors UE</h2>
      <p>
        Certains sous-traitants sont basés aux États-Unis (Vercel, Supabase, Google).
        Ces transferts sont encadrés par les clauses contractuelles types de la Commission européenne
        et/ou le Data Privacy Framework (DPF) UE-US.
      </p>

      <h2>8. Vos droits</h2>
      <p>Conformément au RGPD, vous disposez des droits suivants :</p>
      <ul>
        <li><strong>Droit d&apos;accès</strong> — obtenir une copie de vos données personnelles</li>
        <li><strong>Droit de rectification</strong> — corriger des données inexactes ou incomplètes</li>
        <li><strong>Droit à l&apos;effacement</strong> — demander la suppression de vos données</li>
        <li><strong>Droit à la portabilité</strong> — recevoir vos données dans un format structuré</li>
        <li><strong>Droit d&apos;opposition</strong> — vous opposer au traitement de vos données</li>
        <li><strong>Droit à la limitation</strong> — restreindre le traitement de vos données</li>
        <li><strong>Droit de retirer votre consentement</strong> — à tout moment, sans affecter la licéité du traitement antérieur</li>
      </ul>
      <p>
        Pour exercer vos droits : <strong>sales@orchestraintelligence.fr</strong><br />
        Nous répondons sous 30 jours maximum.
      </p>
      <p>
        En cas de litige, vous pouvez introduire une réclamation auprès de la
        <strong> CNIL</strong> (Commission Nationale de l&apos;Informatique et des Libertés) :
        www.cnil.fr
      </p>

      <h2>9. Cookies</h2>
      <p>Ce site utilise les cookies suivants :</p>
      <ul>
        <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site (préférence de langue, consentement cookies). Pas de consentement requis.</li>
        <li><strong>Cookies analytiques :</strong> mesure d&apos;audience anonymisée. Déposés uniquement avec votre consentement explicite via le bandeau cookies.</li>
      </ul>
      <p>
        Vous pouvez modifier vos préférences à tout moment en supprimant les cookies dans les
        paramètres de votre navigateur.
      </p>

      <h2>10. Sécurité</h2>
      <p>
        Orchestra Intelligence met en œuvre des mesures techniques et organisationnelles appropriées
        pour protéger vos données : chiffrement TLS/SSL, accès restreint, mots de passe robustes,
        sauvegardes régulières, et surveillance continue des systèmes.
      </p>

      <div className="mt-12 pt-8 border-t border-white/10 text-sm text-gray-500">
        <p>Dernière mise à jour : Mars 2026</p>
      </div>
    </LegalPageWrapper>
  );
}
