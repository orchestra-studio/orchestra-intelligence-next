import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPageWrapper } from '@/components/legal-page-wrapper';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: "Mentions légales du site Orchestra Intelligence. Éditeur, hébergeur, propriété intellectuelle.",
  openGraph: {
    title: 'Mentions Légales',
    description: "Mentions légales du site Orchestra Intelligence.",
    url: 'https://www.orchestraintelligence.fr/mentions-legales',
  },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPageWrapper title="Mentions Légales">
      <h2>1. Éditeur du site</h2>
      <p>
        <strong>Orchestra Intelligence</strong><br />
        Forme juridique : Entreprise individuelle<br />
        Siège social : Toulouse, France<br />
        Email : sales@orchestraintelligence.fr<br />
        Site web : https://www.orchestraintelligence.fr<br />
        Directeur de la publication : Ludovic Goutel
      </p>

      <h2>2. Hébergeur</h2>
      <p>
        <strong>Vercel Inc.</strong><br />
        340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
        Site web : https://vercel.com
      </p>

      <h2>3. Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble du contenu de ce site (textes, images, graphismes, logos, icônes, logiciels, etc.)
        est la propriété exclusive d&apos;Orchestra Intelligence ou de ses partenaires et est protégé par les lois
        françaises et internationales relatives à la propriété intellectuelle.
      </p>
      <p>
        Toute reproduction, représentation, modification, distribution ou exploitation de tout ou partie
        du contenu de ce site, par quelque procédé que ce soit, sans l&apos;autorisation préalable écrite
        d&apos;Orchestra Intelligence, est strictement interdite et constitue une contrefaçon sanctionnée
        par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
      </p>

      <h2>4. Limitation de responsabilité</h2>
      <p>
        Orchestra Intelligence s&apos;efforce de fournir des informations aussi précises que possible.
        Toutefois, elle ne pourra être tenue responsable des omissions, inexactitudes ou
        carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait de tiers.
      </p>
      <p>
        Les informations et les conseils diffusés sur ce site ne sauraient se substituer à une
        consultation ou un audit personnalisé. L&apos;utilisation des informations fournies relève
        de la seule responsabilité de l&apos;utilisateur.
      </p>

      <h2>5. Liens hypertextes</h2>
      <p>
        Le site peut contenir des liens vers d&apos;autres sites. Orchestra Intelligence n&apos;exerce
        aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
      </p>

      <h2>6. Droit applicable</h2>
      <p>
        Les présentes mentions légales sont soumises au droit français.
        En cas de litige, les tribunaux de Toulouse seront seuls compétents.
      </p>

      <div className="mt-12 pt-8 border-t border-white/10 text-sm text-gray-500">
        <p>Dernière mise à jour : Mars 2026</p>
      </div>
    </LegalPageWrapper>
  );
}
