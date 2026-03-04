import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPageWrapper } from '@/components/legal-page-wrapper';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente',
  description: "CGV d'Orchestra Intelligence. Services Agent Studio, formations IA, pilotage agentique. Tarifs, paiement, responsabilité.",
  openGraph: {
    title: 'Conditions Générales de Vente',
    description: "Conditions générales de vente des prestations Orchestra Intelligence.",
    url: 'https://www.orchestraintelligence.fr/cgv',
  },
};

export default function CGVPage() {
  return (
    <LegalPageWrapper title="Conditions Générales de Vente">
      <h2>1. Objet</h2>
      <p>
        Les présentes Conditions Générales de Vente (CGV) définissent les modalités et conditions
        dans lesquelles Orchestra Intelligence fournit ses prestations de services en intelligence
        artificielle : développement d&apos;agents IA (Agent Studio), formations IA, et missions de
        pilotage agentique.
      </p>

      <h2>2. Identification du prestataire</h2>
      <p>
        <strong>Orchestra Intelligence</strong><br />
        Siège social : Toulouse, France<br />
        Email : sales@orchestraintelligence.fr<br />
        Directeur : Ludovic Goutel
      </p>

      <h2>3. Services proposés</h2>
      <h3>3.1 Agent Studio</h3>
      <p>
        Conception, développement et déploiement d&apos;agents IA personnalisés. Tarification à partir
        de 3 000€/mois (engagement minimum 6 mois). Setup initial à partir de 4 500€.
        Tarif de développement : 950€/jour.
      </p>
      <h3>3.2 Formations IA</h3>
      <p>
        Programmes de formation sur mesure pour dirigeants et équipes. Tarification sur devis
        selon la durée, le format (présentiel/distanciel) et le nombre de participants.
      </p>
      <h3>3.3 Pilotage Agentique</h3>
      <p>
        Missions ponctuelles ou récurrentes déléguées à des agents IA supervisés.
        Tarification à partir de 1 000€ par mission (one-shot). Packs mensuels à partir de 2 500€/mois.
      </p>

      <h2>4. Devis et commande</h2>
      <p>
        Toute prestation fait l&apos;objet d&apos;un devis préalable validé par le client.
        Le devis est valable 30 jours à compter de son émission. La commande est considérée
        comme ferme après signature du devis et versement de l&apos;acompte.
      </p>

      <h2>5. Tarifs et paiement</h2>
      <ul>
        <li>Les tarifs sont indiqués en euros hors taxes (HT)</li>
        <li>TVA applicable selon la législation en vigueur</li>
        <li>Acompte de 30% à la commande, solde à la livraison (sauf accord contraire)</li>
        <li>Paiement par virement bancaire sous 30 jours fin de mois</li>
        <li>Pénalités de retard : 3 fois le taux d&apos;intérêt légal + indemnité forfaitaire de 40€</li>
      </ul>

      <h2>6. Délais de livraison</h2>
      <p>
        Les délais sont communiqués à titre indicatif dans le devis. Orchestra Intelligence
        s&apos;engage à informer le client de tout retard prévisible. Un retard ne peut donner lieu
        à annulation de la commande ni à des dommages et intérêts, sauf accord contraire.
      </p>

      <h2>7. Propriété intellectuelle</h2>
      <p>
        Sauf mention contraire dans le devis, le client acquiert un droit d&apos;usage non exclusif
        sur les livrables (agents IA, code source, documentation). Orchestra Intelligence conserve
        la propriété intellectuelle de ses méthodologies, frameworks et outils génériques.
      </p>

      <h2>8. Confidentialité</h2>
      <p>
        Les parties s&apos;engagent à maintenir confidentielles toutes les informations échangées
        dans le cadre de la prestation, pendant toute la durée du contrat et 2 ans après son terme.
      </p>

      <h2>9. Protection des données</h2>
      <p>
        Orchestra Intelligence traite les données personnelles conformément au RGPD.
        Un accord de traitement des données (DPA) peut être conclu sur demande.
        Voir notre{' '}
        <Link href="/confidentialite" className="text-indigo-400 underline">
          politique de confidentialité
        </Link>{' '}
        pour plus de détails.
      </p>

      <h2>10. Responsabilité</h2>
      <p>
        Orchestra Intelligence s&apos;engage à exécuter ses prestations avec diligence et professionnalisme
        (obligation de moyens). Sa responsabilité est limitée au montant des sommes effectivement
        versées par le client au titre de la prestation concernée. Orchestra Intelligence ne pourra
        être tenue responsable des dommages indirects (perte de données, perte de chiffre d&apos;affaires,
        atteinte à l&apos;image).
      </p>

      <h2>11. Résiliation</h2>
      <ul>
        <li>Prestations mensuelles : résiliation avec préavis de 30 jours après la période d&apos;engagement minimum</li>
        <li>Missions one-shot : non résiliables après démarrage des travaux</li>
        <li>Résiliation immédiate pour manquement grave d&apos;une des parties (mise en demeure restée sans effet sous 15 jours)</li>
      </ul>

      <h2>12. Force majeure</h2>
      <p>
        Aucune des parties ne pourra être tenue responsable de l&apos;inexécution de ses obligations
        en cas de force majeure telle que définie par l&apos;article 1218 du Code civil.
      </p>

      <h2>13. Droit applicable et juridiction</h2>
      <p>
        Les présentes CGV sont soumises au droit français. Tout litige relatif à leur interprétation
        ou exécution relèvera de la compétence exclusive des tribunaux de Toulouse, y compris en
        cas de pluralité de défendeurs ou d&apos;appel en garantie.
      </p>

      <div className="mt-12 pt-8 border-t border-white/10 text-sm text-gray-500">
        <p>Dernière mise à jour : Mars 2026</p>
      </div>
    </LegalPageWrapper>
  );
}
