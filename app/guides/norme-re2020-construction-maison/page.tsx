import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RE2020 Construction Maison 2026 | Guide Pratique LPM Haute-Garonne",
  description:
    "Tout comprendre sur la RE2020 pour construire votre maison neuve. Isolation, chauffage, matériaux biosourcés, impacts sur le coût — expliqué par LPM maître d'œuvre.",
  keywords: [
    "RE2020 construction maison neuve",
    "norme RE2020 2026",
    "maison RE2020 Haute-Garonne",
    "isolation RE2020 maison",
    "chauffage RE2020 pompe à chaleur",
  ],
  openGraph: {
    title:
      "RE2020 Construction Maison 2026 | Guide Pratique LPM Haute-Garonne",
    description:
      "Tout comprendre sur la RE2020 pour construire votre maison neuve. Isolation, chauffage, matériaux biosourcés, impacts sur le coût.",
    url: "https://lpm-archi.fr/guides/norme-re2020-construction-maison",
    siteName: "LPM — Maître d'Œuvre Haute-Garonne",
    locale: "fr_FR",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Norme RE2020 : Ce Qu'Elle Change Pour Votre Construction de Maison",
  description:
    "Tout comprendre sur la RE2020 pour construire votre maison neuve. Isolation, chauffage, matériaux biosourcés, impacts sur le coût.",
  author: {
    "@type": "Person",
    name: "Loïc Petit — LPM",
  },
  publisher: {
    "@type": "Organization",
    name: "LPM — Maître d'Œuvre",
    url: "https://lpm-archi.fr",
  },
  datePublished: "2025-09-01",
  dateModified: "2026-01-15",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://lpm-archi.fr/guides/norme-re2020-construction-maison",
  },
};

export default function ArticleRE2020() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="bg-[#080808] text-[#F5F0E8] min-h-screen">
        {/* Hero article */}
        <section className="pt-32 md:pt-40 pb-16 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav
            aria-label="Fil d'Ariane"
            className="flex items-center gap-2 text-[#8A8A8A] text-[10px] tracking-[0.2em] uppercase mb-10"
          >
            <Link
              href="/"
              className="hover:text-[#C9A84C] transition-colors"
            >
              Accueil
            </Link>
            <span>/</span>
            <Link
              href="/#conseils"
              className="hover:text-[#C9A84C] transition-colors"
            >
              Guides
            </Link>
            <span>/</span>
            <span className="text-[#C9A84C]">
              Norme RE2020 Construction Maison
            </span>
          </nav>

          {/* Category */}
          <p className="text-[#C9A84C] text-[10px] tracking-[0.45em] uppercase font-light mb-4">
            Réglementation
          </p>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F0E8] leading-[1.1] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Norme RE2020 : Ce Qu'Elle Change Pour Votre Construction de Maison
          </h1>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-[#8A8A8A] text-xs font-light mb-12">
            <span>Par Loïc Petit — LPM</span>
            <span className="hidden md:inline">·</span>
            <span>5 min de lecture</span>
            <span className="hidden md:inline">·</span>
            <span>Mis à jour 2026</span>
          </div>

          <div className="w-16 h-px bg-[#C9A84C] mb-16" />
        </section>

        {/* Article body */}
        <article className="px-6 md:px-12 lg:px-20 max-w-4xl mx-auto pb-24">
          {/* Introduction */}
          <p className="text-[#C0B9AE] leading-[1.9] mb-6 text-lg">
            La{" "}
            <strong className="text-[#F5F0E8] font-semibold">
              Réglementation Environnementale 2020 (RE2020)
            </strong>{" "}
            est entrée en vigueur le 1er janvier 2022 pour toutes les
            constructions de maisons individuelles neuves en France. Elle
            remplace la RT2012 (Réglementation Thermique 2012) et marque un
            changement de paradigme majeur : on passe d'une logique purement{" "}
            <em>énergétique</em> à une logique{" "}
            <em>environnementale</em> globale. Si vous faites construire votre
            maison en 2026, comprendre la RE2020 est indispensable pour ne pas
            avoir de mauvaises surprises — ni budgétaires, ni techniques.
          </p>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            En tant que maître d'œuvre en Haute-Garonne, LPM intègre la RE2020
            dès la phase de conception de chaque projet. Ce guide vous explique
            les trois piliers de la norme, ses implications concrètes sur le
            chantier, et les pièges à éviter pour ne pas découvrir les
            contraintes réglementaires trop tard dans votre projet.
          </p>

          {/* H2 — Les 3 piliers */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Les 3 piliers fondamentaux de la RE2020
          </h2>
          <p className="text-[#C0B9AE] leading-[1.9] mb-8">
            La RE2020 repose sur trois axes d'évaluation distincts, chacun avec
            ses propres indicateurs et ses seuils réglementaires. Le
            non-respect de l'un de ces seuils interdit l'obtention du permis de
            construire.
          </p>

          <div className="space-y-6 mb-12">
            {/* Pilier 1 */}
            <div className="border border-[#1c1c1c] p-6 bg-[#0d0d0d] rounded">
              <h3 className="text-[#C9A84C] font-semibold text-lg mb-3">
                Pilier 1 — Performance énergétique
              </h3>
              <p className="text-[#C0B9AE] leading-[1.8] text-sm mb-4">
                Ce pilier s'articule autour de trois indicateurs issus de l'étude
                thermique :
              </p>
              <ul className="list-none pl-0 space-y-2">
                {[
                  {
                    key: "Bbio (Besoin Bioclimatique)",
                    value:
                      "mesure les besoins en énergie de la maison indépendamment des systèmes de chauffage et de refroidissement. Un Bbio faible récompense la conception bioclimatique (orientation, surfaces vitrées, compacité).",
                  },
                  {
                    key: "Cep (Consommation d'Énergie Primaire)",
                    value:
                      "mesure la consommation réelle en tenant compte des équipements (chauffage, eau chaude, éclairage, auxiliaires). Le seuil Cep,nr limite la part non-renouvelable.",
                  },
                  {
                    key: "Cep,nr (Consommation non-renouvelable)",
                    value:
                      "indicateur clé qui pénalise les systèmes fortement consommateurs d'énergies fossiles. C'est lui qui rend le chauffage au gaz seul non conforme RE2020.",
                  },
                ].map(({ key, value }) => (
                  <li key={key} className="flex items-start gap-3 text-[#C0B9AE] text-sm">
                    <span className="text-[#C9A84C] mt-1 flex-shrink-0">•</span>
                    <span>
                      <strong className="text-[#F5F0E8]">{key}</strong> :{" "}
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pilier 2 */}
            <div className="border border-[#1c1c1c] p-6 bg-[#0d0d0d] rounded">
              <h3 className="text-[#C9A84C] font-semibold text-lg mb-3">
                Pilier 2 — Impact carbone (analyse du cycle de vie)
              </h3>
              <p className="text-[#C0B9AE] leading-[1.8] text-sm mb-4">
                C'est la grande nouveauté par rapport à la RT2012 : la RE2020
                évalue l'empreinte carbone globale de la maison sur 50 ans, de
                la fabrication des matériaux à leur démolition. Deux indicateurs
                sont suivis :
              </p>
              <ul className="list-none pl-0 space-y-2">
                {[
                  {
                    key: "Ic énergie",
                    value:
                      "empreinte carbone des consommations énergétiques en exploitation. Dépend du mix énergétique des équipements choisis.",
                  },
                  {
                    key: "Ic construction",
                    value:
                      "empreinte carbone des matériaux de construction (extraction, fabrication, transport, fin de vie). C'est cet indicateur qui valorise les matériaux biosourcés.",
                  },
                ].map(({ key, value }) => (
                  <li key={key} className="flex items-start gap-3 text-[#C0B9AE] text-sm">
                    <span className="text-[#C9A84C] mt-1 flex-shrink-0">•</span>
                    <span>
                      <strong className="text-[#F5F0E8]">{key}</strong> :{" "}
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pilier 3 */}
            <div className="border border-[#1c1c1c] p-6 bg-[#0d0d0d] rounded">
              <h3 className="text-[#C9A84C] font-semibold text-lg mb-3">
                Pilier 3 — Confort d'été (degrés-heures)
              </h3>
              <p className="text-[#C0B9AE] leading-[1.8] text-sm">
                L'indicateur DH (Degrés-Heures d'inconfort) mesure la durée et
                l'intensité de la surchauffe estivale à l'intérieur du logement.
                Ce pilier est particulièrement important en Haute-Garonne où les
                étés peuvent être caniculaires. Il pousse à concevoir des maisons
                avec de l'inertie thermique, des protections solaires extérieures
                (brise-soleil, débords de toiture) et une ventilation efficace,
                plutôt que de recourir à la climatisation.
              </p>
            </div>
          </div>

          {/* H2 — Ce qui change concrètement */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ce qui change concrètement sur votre chantier
          </h2>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            La fin du gaz comme unique source de chauffage
          </h3>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            La RT2012 permettait de chauffer une maison uniquement avec une
            chaudière à gaz. La RE2020 ne l'interdit pas formellement, mais les
            seuils de{" "}
            <strong className="text-[#F5F0E8] font-semibold">Cep,nr</strong>{" "}
            (consommation non-renouvelable) et d'
            <strong className="text-[#F5F0E8] font-semibold">Ic énergie</strong>{" "}
            rendent en pratique impossible la conformité d'une maison chauffée
            uniquement au gaz naturel à partir de 2022. Pour les maisons
            individuelles neuves, il faut désormais recourir à{" "}
            <strong className="text-[#F5F0E8] font-semibold">
              au moins une source d'énergie renouvelable
            </strong>{" "}
            comme principale solution de chauffage.
          </p>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            L'isolation renforcée
          </h3>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            La RE2020 impose une justification des performances d'isolation via
            les coefficients de transmission thermique U (en W/m²·K). Les seuils
            typiques pour une maison individuelle en zone climatique H2d
            (Toulouse et sa région) sont :
          </p>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#111111]">
                  <th className="px-4 py-3 border border-[#1c1c1c] text-left text-[#C9A84C] font-semibold">
                    Paroi
                  </th>
                  <th className="px-4 py-3 border border-[#1c1c1c] text-left text-[#C9A84C] font-semibold">
                    U maximal RE2020 (indicatif)
                  </th>
                  <th className="px-4 py-3 border border-[#1c1c1c] text-left text-[#C9A84C] font-semibold">
                    Épaisseur isolant typique
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Murs extérieurs", "≤ 0,36 W/m²·K", "14 à 20 cm"],
                  ["Toiture / plafond combles", "≤ 0,20 W/m²·K", "24 à 36 cm"],
                  ["Plancher bas sur vide sanitaire", "≤ 0,27 W/m²·K", "10 à 16 cm"],
                  ["Menuiseries (vitrage)", "≤ 1,3 W/m²·K (Uw)", "Double ou triple vitrage"],
                ].map(([paroi, u, ep], i) => (
                  <tr key={paroi} className={i % 2 === 1 ? "bg-[#0d0d0d]" : ""}>
                    <td className="px-4 py-3 border border-[#1c1c1c] text-[#C0B9AE]">
                      {paroi}
                    </td>
                    <td className="px-4 py-3 border border-[#1c1c1c] text-[#F5F0E8] font-medium">
                      {u}
                    </td>
                    <td className="px-4 py-3 border border-[#1c1c1c] text-[#8A8A8A]">
                      {ep}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* H2 — Matériaux */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Les matériaux valorisés par la RE2020
          </h2>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            L'indicateur{" "}
            <strong className="text-[#F5F0E8] font-semibold">
              Ic construction
            </strong>{" "}
            crée pour la première fois une incitation réglementaire à utiliser
            des matériaux à faible empreinte carbone. Les isolants biosourcés
            sont les grands gagnants de cette évolution :
          </p>
          <ul className="list-none pl-0 space-y-4 mb-8">
            {[
              {
                mat: "Laine de chanvre",
                detail:
                  "Excellent isolant thermique et acoustique, régulateur d'humidité naturel, stockage carbone positif. Utilisée en isolation des murs, des combles et des cloisons.",
              },
              {
                mat: "Laine de bois",
                detail:
                  "Forte densité pour l'isolation phonique et la protection contre la surchauffe estivale. Idéale pour les toitures-terrasses et les murs à forte inertie.",
              },
              {
                mat: "Ouate de cellulose",
                detail:
                  "Fabriquée à partir de papier recyclé, excellent rapport performance/coût carbone. Soufflée en combles perdus ou injectée en murs ossature bois.",
              },
              {
                mat: "Structure bois",
                detail:
                  "Les maisons en ossature bois bénéficient d'un Ic construction très favorable. Le bois stocke du carbone pendant toute la durée de vie de la maison.",
              },
              {
                mat: "Béton bas-carbone",
                detail:
                  "Des cimentiers proposent désormais des bétons avec ajout de laitier de haut fourneau ou de cendres volantes, réduisant les émissions de CO₂ de 30 à 50 % par rapport au béton Portland standard.",
              },
            ].map(({ mat, detail }) => (
              <li key={mat} className="border border-[#1c1c1c] p-5 bg-[#0d0d0d] rounded">
                <p className="text-[#F5F0E8] font-semibold mb-2">{mat}</p>
                <p className="text-[#C0B9AE] text-sm leading-[1.8]">{detail}</p>
              </li>
            ))}
          </ul>

          {/* H2 — Systèmes de chauffage */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Systèmes de chauffage compatibles avec la RE2020
          </h2>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Le choix du système de chauffage est l'une des décisions les plus
            structurantes d'un projet RE2020. Voici les solutions adoptées par
            LPM sur ses chantiers en Haute-Garonne :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              {
                title: "Pompe à chaleur air/eau",
                tag: "Solution recommandée",
                text: "Capte les calories de l'air extérieur pour chauffer le circuit d'eau. COP (coefficient de performance) de 3 à 5 : produit 3 à 5 kWh de chaleur pour 1 kWh électrique consommé. Couplée à un plancher chauffant basse température, c'est la solution la plus répandue en RE2020.",
              },
              {
                title: "Pompe à chaleur géothermique",
                tag: "Solution premium",
                text: "Puise l'énergie dans le sol (sondes géothermiques verticales ou capteurs horizontaux). Plus efficiente que l'air/eau, mais investissement initial plus élevé. Idéale sur les grands terrains en périphérie toulousaine.",
              },
              {
                title: "Poêle à granulés (pellets)",
                tag: "En complément",
                text: "Énergie renouvelable à faible Ic énergie. Utilisé en appoint ou comme chauffage principal dans les maisons très bien isolées. Le label Flamme Verte 7 étoiles est recommandé.",
              },
              {
                title: "VMC double flux",
                tag: "Obligatoire en pratique",
                text: "La ventilation mécanique contrôlée à double flux récupère 70 à 90 % de la chaleur de l'air extrait avant de le rejeter. Obligatoire pour atteindre les seuils Bbio et Cep dans les maisons étanches à l'air RE2020.",
              },
            ].map(({ title, tag, text }) => (
              <div key={title} className="border border-[#1c1c1c] p-6 bg-[#0d0d0d] rounded">
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#C9A84C] opacity-70">
                  {tag}
                </span>
                <h3 className="text-[#F5F0E8] font-semibold mt-2 mb-3 leading-snug">
                  {title}
                </h3>
                <p className="text-[#C0B9AE] text-sm leading-[1.8]">{text}</p>
              </div>
            ))}
          </div>

          {/* H2 — Impact coût */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Impact RE2020 sur la construction : un surcoût amorti par les
            économies d'énergie
          </h2>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            La RE2020 implique un surcoût de construction par rapport à
            l'ancienne RT2012. Ce surcoût se concentre principalement sur trois
            postes :
          </p>
          <ul className="list-none pl-0 space-y-3 mb-8">
            {[
              "L'isolation renforcée : épaisseurs plus importantes et recours possible à des matériaux biosourcés plus performants",
              "Le système de chauffage : passage obligatoire à une source d'énergie renouvelable (pompe à chaleur, plancher chauffant basse température)",
              "La ventilation : la VMC double flux, nécessaire pour atteindre les seuils Bbio dans les maisons très étanches, est plus coûteuse qu'une simple flux",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#C0B9AE]">
                <span className="text-[#C9A84C] mt-1 flex-shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            En contrepartie, une maison RE2020 consomme en moyenne{" "}
            <strong className="text-[#F5F0E8] font-semibold">
              30 à 40 % moins d'énergie
            </strong>{" "}
            qu'une maison RT2012. Dans un contexte de hausse tendancielle des
            prix de l'énergie, l'investissement dans une construction plus
            performante se rentabilise sur la durée et protège la valeur
            patrimoniale du bien.
          </p>

          <div className="border-l-2 border-[#C9A84C] pl-6 py-4 bg-[#111111] my-8 rounded-r">
            <p className="text-[#C0B9AE] leading-[1.8] text-sm">
              <strong className="text-[#F5F0E8]">Bon à savoir :</strong>{" "}
              LPM intègre dès la phase de conception les choix techniques qui
              permettent d'atteindre les seuils RE2020 avec le meilleur rapport
              performance/qualité, en lien avec les bureaux d'études thermiques
              partenaires.
            </p>
          </div>

          {/* H2 — LPM et RE2020 */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Comment LPM intègre la RE2020 dès la conception
          </h2>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            La RE2020 ne s'applique pas en fin de projet : elle se construit dès
            la conception architecturale. Chez LPM, chaque projet est pensé de
            manière{" "}
            <strong className="text-[#F5F0E8] font-semibold">
              bioclimatique
            </strong>{" "}
            dès l'esquisse :
          </p>
          <ul className="list-none pl-0 space-y-3 mb-8">
            {[
              "Orientation de la maison plein sud pour maximiser les apports solaires passifs en hiver et faciliter leur contrôle en été",
              "Dimensionnement des surfaces vitrées sud (40-60 % de la façade sud) pour le chauffage passif, avec brise-soleils calculés pour couper le soleil haut d'été",
              "Compacité de la forme architecturale pour minimiser les déperditions thermiques (ratio surface/volume)",
              "Choix des matériaux d'isolation en cohérence avec l'indicateur Ic construction",
              "Coordination avec le bureau d'études thermique RE2020 tout au long de la conception pour s'assurer que les seuils sont atteints avant le dépôt du permis",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#C0B9AE]">
                <span className="text-[#C9A84C] mt-1 flex-shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* H2 — Étude thermique */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            L'étude thermique RE2020 : obligatoire et à prévoir dès la
            conception
          </h2>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            L'étude thermique RE2020 est réalisée par un{" "}
            <strong className="text-[#F5F0E8] font-semibold">
              bureau d'études thermiques agréé
            </strong>
            . Elle modélise numériquement la maison pour calculer les indicateurs
            Bbio, Cep, Cep,nr, Ic énergie, Ic construction et DH. Son coût est
            variable selon la complexité du projet et le bureau d'études
            retenu.
          </p>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Deux livrables sont attendus dans le dossier de permis de construire :
          </p>
          <ul className="list-none pl-0 space-y-3 mb-8">
            {[
              "L'Attestation de Prise en Compte de la RE2020 (ATTEST RE2020 — phase dépôt PC), produite par le bureau d'études à partir des plans et descriptifs architecturaux",
              "L'Attestation de Conformité RE2020 (phase réception des travaux), qui confirme que la construction réalisée est conforme aux calculs prévisionnels",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#C0B9AE]">
                <span className="text-[#C9A84C] mt-1 flex-shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            LPM coordonne directement avec ses bureaux d'études partenaires en
            Haute-Garonne. Nous transmettons les plans dès la phase d'avant-projet
            pour obtenir une simulation RE2020 préliminaire, qui permet d'ajuster
            les choix architecturaux et techniques avant d'engager les dépenses
            de production des plans définitifs.
          </p>

          {/* H2 — Pièges */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Les 3 pièges à éviter avec la RE2020
          </h2>

          <div className="space-y-5 mb-10">
            {[
              {
                num: "01",
                title: "Confondre RE2020 et DPE",
                text: "Le Diagnostic de Performance Énergétique (DPE) est un outil de mesure de la performance d'un bâtiment existant. La RE2020 est une réglementation de construction pour les bâtiments neufs. Ces deux outils ne sont pas comparables et ne s'appliquent pas dans les mêmes situations. Une maison neuve RE2020 obtient généralement un DPE A ou B, mais le DPE n'est pas l'attestation de conformité RE2020.",
              },
              {
                num: "02",
                title: "Commander l'étude thermique trop tard",
                text: "L'erreur classique est de commander l'étude thermique RE2020 uniquement pour le dépôt du permis, une fois les plans figés. Si les calculs révèlent une non-conformité, modifier les plans à ce stade coûte cher (honoraires supplémentaires, report du dépôt). L'étude doit être lancée en parallèle de l'avant-projet sommaire.",
              },
              {
                num: "03",
                title: "Négliger le confort d'été (DH)",
                text: "En Haute-Garonne, les étés sont de plus en plus chauds. Beaucoup de maîtres d'ouvrage se concentrent sur la performance hivernale sans anticiper la surchauffe estivale. Une maison très bien isolée mais sans protection solaire extérieure, sans inertie et sans ventilation nocturne peut devenir un four en juillet. LPM intègre systématiquement des brise-soleils, des casquettes de toiture et des volets roulants à guidage thermique dans ses projets.",
              },
            ].map(({ num, title, text }) => (
              <div
                key={num}
                className="border border-[#1c1c1c] p-6 bg-[#0d0d0d] rounded"
              >
                <div className="flex items-start gap-5">
                  <span
                    className="text-4xl font-bold text-[#C9A84C] opacity-30 leading-none flex-shrink-0"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {num}
                  </span>
                  <div>
                    <h3 className="text-[#F5F0E8] font-semibold mb-2">
                      {title}
                    </h3>
                    <p className="text-[#C0B9AE] leading-[1.8] text-sm">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Conclusion : la RE2020, une contrainte transformée en atout
          </h2>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            La RE2020 est souvent perçue comme une contrainte supplémentaire par
            les futurs maîtres d'ouvrage. En réalité, bien intégrée dès la
            conception, elle est l'opportunité de construire une maison qui
            consomme peu, qui est confortable été comme hiver, et dont la valeur
            patrimoniale est pérenne dans un marché immobilier de plus en plus
            sensible à l'étiquette énergétique.
          </p>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Chez LPM, nous considérons la RE2020 non pas comme un plancher
            réglementaire à atteindre, mais comme un cadre qui nous pousse à
            concevoir des maisons meilleures. Nos projets en Haute-Garonne
            visent systématiquement à dépasser les seuils minimaux pour vous
            offrir un confort durable.
          </p>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Pour compléter votre préparation, découvrez les{" "}
            <Link
              href="/guides/etapes-construction-maison-individuelle"
              className="text-[#C9A84C] underline hover:text-[#E8C97A] transition-colors"
            >
              5 étapes d'une construction individuelle réussie
            </Link>{" "}
            et notre guide pour{" "}
            <Link
              href="/guides/maitre-oeuvre-architecte-constructeur"
              className="text-[#C9A84C] underline hover:text-[#E8C97A] transition-colors"
            >
              choisir entre maître d'œuvre, architecte ou constructeur
            </Link>
            .
          </p>

          {/* Back to home */}
          <div className="mt-16 pt-10 border-t border-[#1c1c1c]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#8A8A8A] text-xs tracking-[0.2em] uppercase hover:text-[#C9A84C] transition-colors"
            >
              <span>←</span>
              <span>Retour à l'accueil</span>
            </Link>
          </div>
        </article>

        {/* CTA section */}
        <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#1c1c1c] bg-[#060606]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#C9A84C] tracking-[0.4em] text-[10px] uppercase mb-4">
              Votre projet
            </p>
            <h2
              style={{ fontFamily: "var(--font-playfair)" }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Construire une maison conforme RE2020 en Haute-Garonne
            </h2>
            <p className="text-[#8A8A8A] mb-10 max-w-lg mx-auto leading-relaxed">
              LPM maîtrise la RE2020 et vous accompagne dans la conception d'une
              maison performante, confortable et durable. Premier échange
              gratuit pour évaluer votre projet.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-4 gold-btn-shine px-10 py-4 text-xs tracking-[0.3em] uppercase font-bold"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </section>

        {/* Related guides */}
        <section className="px-6 md:px-12 lg:px-20 py-16 border-t border-[#1c1c1c]">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#8A8A8A] text-[10px] tracking-[0.4em] uppercase mb-8">
              À lire aussi
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/guides/maitre-oeuvre-architecte-constructeur"
                className="group border border-[#1c1c1c] p-6 bg-[#0d0d0d] hover:border-[#C9A84C] transition-colors rounded"
              >
                <p className="text-[#C9A84C] text-[9px] tracking-[0.4em] uppercase mb-3">
                  Guide Pratique
                </p>
                <h3 className="text-[#F5F0E8] font-semibold leading-snug group-hover:text-[#C9A84C] transition-colors">
                  Maître d'Œuvre, Architecte ou Constructeur : Lequel Choisir
                  Pour Votre Projet ?
                </h3>
                <p className="text-[#8A8A8A] text-xs mt-3">7 min de lecture →</p>
              </Link>
              <Link
                href="/guides/etapes-construction-maison-individuelle"
                className="group border border-[#1c1c1c] p-6 bg-[#0d0d0d] hover:border-[#C9A84C] transition-colors rounded"
              >
                <p className="text-[#C9A84C] text-[9px] tracking-[0.4em] uppercase mb-3">
                  Guide Pratique
                </p>
                <h3 className="text-[#F5F0E8] font-semibold leading-snug group-hover:text-[#C9A84C] transition-colors">
                  Les 5 Étapes Clés d'une Construction de Maison Individuelle
                  Réussie
                </h3>
                <p className="text-[#8A8A8A] text-xs mt-3">6 min de lecture →</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
