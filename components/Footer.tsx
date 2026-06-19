import Image from "next/image";
import Link from "next/link";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "Maîtrise d'Œuvre",   href: "/#expertise"   },
    { label: "Pilotage de Projet",  href: "/#processus"   },
    { label: "Conseil & Audit",     href: "/#engagement"  },
  ],
  Entreprise: [
    { label: "À propos",   href: "/#manifeste" },
    { label: "Nos valeurs", href: "/#engagement" },
    { label: "Carrières",  href: "/#contact"   },
  ],
};

const legalNav: { label: string; href: string }[] = [
  { label: "Mentions légales",           href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
];


const CITIES = [
  "Saint-Jory", "Castelnau-d'Estrétefonds", "Merville", "Larra", "Daux",
  "Lévignac", "Ondes", "Aussonne", "Seilh", "Beauzelle",
  "Blagnac", "Fenouillet", "Lespinasse", "Aucamville", "Colomiers",
  "Tournefeuille", "Plaisance-du-Touch", "Cornebarrieu", "Gagnac-sur-Garonne", "Bruguières",
];

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-[#1c1c1c]">

      {/* ── Main footer ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 md:gap-8">

          {/* Brand */}
          <div>
            <Image
              src="/lpm-logo.png"
              alt="LPM — Maître d'œuvre Haute-Garonne, construction maison sur mesure"
              width={80}
              height={40}
              className="h-9 w-auto object-contain mb-6 opacity-80"
            />
            <p className="text-[#8A8A8A] text-xs leading-[2] font-light max-w-xs">
              Loïc Petit — Maître d&apos;Œuvre en Haute-Garonne. Construction
              de maison individuelle sur-mesure, norme RE2020, coûts maîtrisés.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a href="tel:+33782922112"
                 className="text-[#C9A84C]/70 text-[11px] font-light tracking-wide hover:text-[#D4AF37] transition-colors duration-300"
                 aria-label="Appeler LPM au 07 82 92 21 12">
                07 82 92 21 12
              </a>
              <a href="mailto:contact@lpmoe.com"
                 className="text-[#8A8A8A]/70 text-[11px] font-light hover:text-[#C9A84C] transition-colors duration-300"
                 aria-label="Envoyer un email à LPM">
                contact@lpmoe.com
              </a>
              <span className="text-[#8A8A8A]/50 text-[10px] font-light">
                31330 Grenade, Haute-Garonne
              </span>
            </div>
            <div className="mt-8 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" aria-hidden="true" />
              <span className="text-[#C9A84C]/70 text-[10px] tracking-[0.2em] uppercase font-light ml-2">
                Disponible pour nouveaux projets
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[#F5F0E8]/40 text-[9px] tracking-[0.4em] uppercase font-light mb-6">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[#8A8A8A] text-xs font-light hover:text-[#C9A84C] transition-colors duration-300"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Légal */}
          <div>
            <h4 className="text-[#F5F0E8]/40 text-[9px] tracking-[0.4em] uppercase font-light mb-6">
              Légal
            </h4>
            <ul className="flex flex-col gap-3">
              {legalNav.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[#8A8A8A] text-xs font-light hover:text-[#C9A84C] transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Zone d'intervention — SEO local ─────────────────────────── */}
      <div className="border-t border-[#1c1c1c] px-6 md:px-12 lg:px-20 py-14">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C9A84C] text-[9px] tracking-[0.4em] uppercase font-light mb-3">
            Zone d&apos;intervention
          </p>
          <p className="text-[#F5F0E8]/60 text-sm font-light mb-6 max-w-xl leading-[1.7]">
            Votre Maître d&apos;œuvre en{" "}
            <strong className="text-[#F5F0E8]/80 font-medium">Haute-Garonne</strong> et{" "}
            <strong className="text-[#F5F0E8]/80 font-medium">Tarn-et-Garonne</strong>.
            Nous intervenons dans un rayon de 80 km autour de Toulouse pour la construction
            de votre maison individuelle sur-mesure.
          </p>

          {/* Grille de villes — lisible par Google */}
          <ul
            className="flex flex-wrap gap-x-4 gap-y-2"
            aria-label="Communes d'intervention LPM maître d'œuvre"
          >
            {CITIES.map((city) => (
              <li key={city}>
                <span className="text-[#8A8A8A]/70 text-[10px] tracking-[0.15em] font-light hover:text-[#C9A84C]/80 transition-colors duration-200">
                  {city}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────────────── */}
      <div className="border-t border-[#1c1c1c] px-6 md:px-12 lg:px-20 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8A8A8A]/50 text-[10px] tracking-[0.15em] font-light">
            © {new Date().getFullYear()} LPM — Maître d&apos;Œuvre Haute-Garonne. Tous droits réservés.
          </p>
          <div className="flex items-center gap-5">
            {legalNav.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-[#8A8A8A]/40 text-[10px] tracking-[0.15em] font-light
                           hover:text-[#C9A84C] transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
