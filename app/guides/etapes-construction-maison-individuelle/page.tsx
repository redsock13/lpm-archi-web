import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "5 Étapes Construction Maison Individuelle | Guide LPM Haute-Garonne",
  description:
    "De l'esquisse aux clés : découvrez les 5 étapes incontournables pour construire votre maison individuelle en Haute-Garonne. Programme, permis, chantier, réception.",
  alternates: { canonical: "/guides/etapes-construction-maison-individuelle" },
  keywords: [
    "étapes construction maison individuelle",
    "processus construction maison neuve",
    "permis de construire Haute-Garonne",
    "maîtrise d'œuvre étapes",
    "chantier maison neuve",
  ],
  openGraph: {
    title:
      "5 Étapes Construction Maison Individuelle | Guide LPM Haute-Garonne",
    description:
      "De l'esquisse aux clés : découvrez les 5 étapes incontournables pour construire votre maison individuelle en Haute-Garonne.",
    url: "https://lpmoe.com/guides/etapes-construction-maison-individuelle",
    siteName: "LPM — Maître d'Œuvre Haute-Garonne",
    locale: "fr_FR",
    type: "article",
    images: [{ url: "/hero-bg-poster.jpg", width: 1280, height: 720, alt: "LPM — Maître d'œuvre Haute-Garonne" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Étapes Construction Maison Individuelle | Guide LPM Haute-Garonne",
    images: ["/hero-bg-poster.jpg"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Les 5 Étapes Clés d'une Construction de Maison Individuelle Réussie",
  description:
    "De l'esquisse aux clés : découvrez les 5 étapes incontournables pour construire votre maison individuelle en Haute-Garonne.",
  author: {
    "@type": "Person",
    name: "Loïc Petit — LPM",
  },
  publisher: {
    "@type": "Organization",
    name: "LPM — Maître d'Œuvre",
    url: "https://lpmoe.com",
  },
  datePublished: "2025-09-01",
  dateModified: "2026-01-15",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://lpmoe.com/guides/etapes-construction-maison-individuelle",
  },
};

export default function ArticleEtapesConstruction() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Guides", path: "/#conseils" },
          { name: "Étapes Construction Maison Individuelle", path: "/guides/etapes-construction-maison-individuelle" },
        ]}
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
              Étapes Construction Maison Individuelle
            </span>
          </nav>

          {/* Category */}
          <p className="text-[#C9A84C] text-[10px] tracking-[0.45em] uppercase font-light mb-4">
            Guide Pratique
          </p>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F0E8] leading-[1.1] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Les 5 Étapes Clés d'une Construction de Maison Individuelle Réussie
          </h1>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-[#8A8A8A] text-xs font-light mb-12">
            <span>Par Loïc Petit — LPM</span>
            <span className="hidden md:inline">·</span>
            <span>6 min de lecture</span>
            <span className="hidden md:inline">·</span>
            <span>Mis à jour 2026</span>
          </div>

          <div className="w-16 h-px bg-[#C9A84C] mb-16" />
        </section>

        {/* Article body */}
        <article className="px-6 md:px-12 lg:px-20 max-w-4xl mx-auto pb-24">
          {/* Introduction */}
          <p className="text-[#C0B9AE] leading-[1.9] mb-6 text-lg">
            Construire sa maison individuelle est souvent le projet d'une vie.
            Pourtant, faute de méthode et d'accompagnement, nombre de chantiers
            dérapent en délais, en budget, ou en qualité. La bonne nouvelle :
            une construction maîtrisée suit un processus clair et structuré.
            Chez LPM, nous avons accompagné des dizaines de familles en
            Haute-Garonne à travers ces 5 étapes fondamentales — du premier
            coup de crayon à la remise des clés.
          </p>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Ce guide est destiné à quiconque envisage de faire construire en
            Haute-Garonne, que vous soyez en phase de réflexion ou déjà
            propriétaire d'un terrain. Il vous donnera une vision précise du
            processus, des délais à anticiper et du rôle que joue un maître
            d'œuvre à chaque étape.
          </p>

          {/* Étape 1 */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Étape 1 — Définir son programme et trouver son terrain
          </h2>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            Le programme : la fondation de tout projet
          </h3>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Avant même d'explorer les terrains, définissez précisément votre{" "}
            <strong className="text-[#F5F0E8] font-semibold">programme</strong>{" "}
            : surface souhaitée, nombre de chambres, besoins spécifiques
            (bureau, garage double, pool house, suite parentale). Ce document
            de référence guidera toutes les décisions architecturales et permet
            à votre maître d'œuvre de calibrer un budget réaliste dès la
            faisabilité.
          </p>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Intégrez dans votre réflexion la dimension familiale à long terme :
            une maison conçue pour une famille de 3 personnes aujourd'hui doit
            pouvoir évoluer. Les extensions futures, les garages transformables,
            ou les combles aménageables sont des options à anticiper dès la
            conception.
          </p>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            Le terrain : analyse avant achat
          </h3>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            L'acquisition d'un terrain sans analyse préalable est l'une des
            erreurs les plus coûteuses. Avant de signer le compromis de vente,
            vérifiez :
          </p>
          <ul className="list-none pl-0 space-y-3 mb-8">
            {[
              "Le Plan Local d'Urbanisme (PLU) de la commune : zone constructible, règles de hauteur, coefficient d'emprise au sol, reculs obligatoires",
              "La viabilité du terrain : présence de réseaux (eau, électricité, assainissement) à proximité et coût de raccordement estimatif",
              "La nature du sol : commandez une étude géotechnique préliminaire G1 avant l'achat si le terrain est en zone argileuse (obligation légale depuis 2020 pour le vendeur en zone d'aléa fort)",
              "Les servitudes et contraintes (servitude de passage, zone inondable, périmètre ABF si secteur patrimonial)",
              "L'orientation et la topographie : un terrain bien orienté plein sud permet de concevoir une maison bioclimatique et d'optimiser la RE2020",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#C0B9AE]">
                <span className="text-[#C9A84C] mt-1 flex-shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="border-l-2 border-[#C9A84C] pl-6 py-4 bg-[#111111] my-8 rounded-r">
            <p className="text-[#C0B9AE] leading-[1.8] text-sm">
              <strong className="text-[#F5F0E8]">Conseil LPM :</strong> avant
              de signer un compromis, contactez-nous pour une analyse de
              faisabilité rapide (2–3 jours). Nous vérifions la constructibilité,
              les règles PLU et estimons un budget global pour votre programme.
              Ce service est inclus dans notre mission.
            </p>
          </div>

          {/* Étape 2 */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Étape 2 — Conception architecturale & plans
          </h2>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            De l'esquisse au projet définitif
          </h3>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            La phase de conception se déroule en trois sous-étapes progressives.
            L'
            <strong className="text-[#F5F0E8] font-semibold">esquisse</strong>{" "}
            traduit vos besoins en plans de masse et volumétrie générale. Elle
            permet d'ajuster l'organisation des espaces avant d'engager les
            études détaillées. L'
            <strong className="text-[#F5F0E8] font-semibold">
              avant-projet sommaire
            </strong>{" "}
            (APS) affine les surfaces, les façades, la structure et les
            équipements principaux. Enfin, le{" "}
            <strong className="text-[#F5F0E8] font-semibold">
              projet définitif
            </strong>{" "}
            produit l'ensemble des plans d'exécution (plans de coupe, plans
            techniques fluides, détails constructifs) qui serviront à la fois
            au permis de construire et aux appels d'offres entreprises.
          </p>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            Le permis de construire
          </h3>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Le dépôt du permis de construire est réalisé en mairie. Le dossier
            comprend les plans de masse, les façades, les coupes, la notice
            architecturale, le plan de situation, et depuis 2022 l'
            <strong className="text-[#F5F0E8] font-semibold">
              étude thermique RE2020
            </strong>{" "}
            (obligatoire). Le délai d'instruction légal est de{" "}
            <strong className="text-[#F5F0E8] font-semibold">2 mois</strong>{" "}
            pour une maison individuelle, mais peut s'étendre à 3 mois si la
            commune est soumise à l'avis de l'Architecte des Bâtiments de France
            (ABF) ou si des pièces complémentaires sont demandées.
          </p>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Une fois le permis accordé, un délai de{" "}
            <strong className="text-[#F5F0E8] font-semibold">2 mois</strong>{" "}
            d'affichage sur le terrain est obligatoire avant de pouvoir ouvrir
            le chantier (délai de recours des tiers). LPM supervise l'ensemble
            de cette procédure administrative.
          </p>

          {/* Étape 3 */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Étape 3 — Sélection des entreprises et lancement du chantier
          </h2>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            Appels d'offres et mise en concurrence
          </h3>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Cette étape est cruciale pour maîtriser le budget final. LPM rédige
            les{" "}
            <strong className="text-[#F5F0E8] font-semibold">
              descriptifs techniques
            </strong>{" "}
            (CCTP — Cahier des Clauses Techniques Particulières) lot par lot :
            terrassement, gros œuvre, charpente-couverture, menuiseries
            extérieures, isolation, plâtrerie, carrelage, plomberie,
            électricité, chauffage. Ces documents précis permettent de comparer
            les devis entreprises sur une base rigoureusement identique et
            d'éviter les dépassements de budget liés à des prestations floues.
          </p>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Nous consultons pour chaque lot{" "}
            <strong className="text-[#F5F0E8] font-semibold">
              2 à 4 entreprises locales
            </strong>{" "}
            qualifiées RGE ou Qualibat, analysons leurs offres et négocions dans
            votre intérêt. Cette mise en concurrence rigoureuse est l'un des
            principaux avantages d'un maître d'œuvre indépendant.
          </p>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            Garanties et assurances avant l'ouverture de chantier
          </h3>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Avant tout commencement, vérifiez que chaque entreprise dispose d'une{" "}
            <strong className="text-[#F5F0E8] font-semibold">
              garantie décennale valide
            </strong>{" "}
            couvrant l'année du chantier. En tant que maître d'ouvrage, vous
            devez également avoir souscrit votre{" "}
            <strong className="text-[#F5F0E8] font-semibold">
              assurance dommages-ouvrage
            </strong>{" "}
            avant le premier coup de pelle. Cette assurance (obligatoire en
            France) vous protège en cas de désordres relevant de la garantie
            décennale, en vous permettant d'être indemnisé rapidement sans
            attendre la décision d'un tribunal.
          </p>

          {/* Étape 4 */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Étape 4 — Pilotage et suivi de chantier
          </h2>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            L'Ordonnancement, Pilotage et Coordination (OPC)
          </h3>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Le pilotage de chantier est la mission la plus chronophage d'un
            projet de construction. Elle consiste à coordonner l'intervention
            des différents corps d'état dans le bon ordre, gérer les
            interfaces entre lots (exemple : le plombier intervient avant le
            carreleur, le plaquiste après le plombier), et s'assurer que le{" "}
            <strong className="text-[#F5F0E8] font-semibold">
              planning général de 8 à 10 mois
            </strong>{" "}
            est respecté.
          </p>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            LPM organise des{" "}
            <strong className="text-[#F5F0E8] font-semibold">
              réunions de chantier hebdomadaires
            </strong>{" "}
            avec l'ensemble des entreprises. Chaque réunion donne lieu à un
            compte-rendu écrit transmis à tous les intervenants : état
            d'avancement, points de blocage, décisions prises, planning des
            interventions à venir. Ces comptes-rendus constituent également une
            protection juridique en cas de litige.
          </p>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            Contrôle qualité et gestion des aléas
          </h3>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Chaque phase du chantier fait l'objet d'un contrôle qualité avant
            de passer à l'étape suivante. LPM vérifie notamment :
          </p>
          <ul className="list-none pl-0 space-y-3 mb-8">
            {[
              "La conformité des fondations (profondeur, ferraillage) avant coulage du béton",
              "L'étanchéité à l'air et la qualité de l'isolation (blower door test si prévu)",
              "La mise en œuvre des menuiseries extérieures et leur calfeutrement",
              "La conformité des installations électriques et de plomberie avant fermeture des cloisons",
              "La planéité des chapes et dallages avant pose des revêtements",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#C0B9AE]">
                <span className="text-[#C9A84C] mt-1 flex-shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Les aléas de chantier (intempéries, retard de livraison de
            matériaux, défaillance d'une entreprise) sont gérés en temps réel.
            Grâce à notre réseau d'artisans partenaires en Haute-Garonne, nous
            pouvons rapidement trouver des solutions de substitution sans
            pénaliser l'avancement global.
          </p>

          <div className="border-l-2 border-[#C9A84C] pl-6 py-4 bg-[#111111] my-8 rounded-r">
            <p className="text-[#C0B9AE] leading-[1.8] text-sm">
              <strong className="text-[#F5F0E8]">Transparence totale :</strong>{" "}
              LPM vous transmet un accès à l'espace client en ligne où vous
              retrouvez tous les comptes-rendus, photos de chantier, planning
              actualisé et factures à valider. Vous suivez votre projet en temps
              réel, même à distance.
            </p>
          </div>

          {/* Étape 5 */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Étape 5 — Réception des travaux et remise des clés
          </h2>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            La visite pré-réception et le procès-verbal
          </h3>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            La réception des travaux est un acte juridique fondamental. Elle
            marque le transfert de responsabilité des entreprises vers le maître
            d'ouvrage (vous). LPM réalise d'abord une{" "}
            <strong className="text-[#F5F0E8] font-semibold">
              visite pré-réception
            </strong>{" "}
            seul, avant de vous inviter à la visite de réception officielle. Lors
            de cette visite, chaque pièce et chaque prestation est contrôlée avec
            méthode : robinetterie, volets roulants, électricité, joints de
            carrelage, finitions de peinture, alignement des huisseries, etc.
          </p>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Toutes les imperfections constatées sont consignées dans le{" "}
            <strong className="text-[#F5F0E8] font-semibold">
              procès-verbal de réception avec réserves
            </strong>
            . Les entreprises disposent alors d'un délai pour lever ces réserves,
            après quoi une visite de levée des réserves est organisée. Tant que
            des réserves subsistent, le dernier acompte est retenu jusqu'à
            leur levée complète.
          </p>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            Le DOE et les garanties post-réception
          </h3>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            À la remise des clés, LPM vous remet le{" "}
            <strong className="text-[#F5F0E8] font-semibold">
              Dossier des Ouvrages Exécutés (DOE)
            </strong>
            , qui rassemble l'ensemble des documents techniques de votre maison :
            plans de récolement (plans "tels que construits"), fiches techniques
            des équipements, notices de fonctionnement, attestations de garanties
            décennales de chaque entreprise, attestation de conformité
            électrique (Consuel), et attestation RE2020.
          </p>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Après réception, vous bénéficiez de plusieurs garanties :
          </p>
          <div className="space-y-4 mb-10">
            {[
              {
                label: "Garantie de parfait achèvement — 1 an",
                text: "Couvre tous les désordres signalés dans l'année suivant la réception, quelle que soit leur nature.",
              },
              {
                label: "Garantie de bon fonctionnement — 2 ans",
                text: "Couvre les équipements dissociables (volets, robinetterie, VMC, radiateurs).",
              },
              {
                label: "Garantie décennale — 10 ans",
                text: "Couvre les désordres affectant la solidité de l'ouvrage ou le rendant impropre à sa destination.",
              },
            ].map(({ label, text }) => (
              <div
                key={label}
                className="border border-[#1c1c1c] p-5 bg-[#0d0d0d] rounded"
              >
                <p className="text-[#C9A84C] font-semibold text-sm mb-2">
                  {label}
                </p>
                <p className="text-[#C0B9AE] text-sm leading-[1.8]">{text}</p>
              </div>
            ))}
          </div>

          {/* H2 — Rôle MOE */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Le rôle central du maître d'œuvre dans ce processus
          </h2>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            À chacune de ces 5 étapes, le maître d'œuvre est le chef
            d'orchestre de votre projet. Contrairement à un constructeur de
            maisons individuelles qui travaille avec ses propres sous-traitants
            (conflit d'intérêts potentiel), le maître d'œuvre est{" "}
            <strong className="text-[#F5F0E8] font-semibold">
              indépendant
            </strong>{" "}
            et ne perçoit aucune rétrocommission des entreprises. Il est
            rémunéré uniquement par vous, sur la base d'honoraires transparents,
            et son seul intérêt est que votre projet soit réussi, dans les
            délais et dans le budget.
          </p>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Cette indépendance est fondamentale : elle garantit que les
            entreprises sont choisies pour leur compétence et leur tarif, et non
            pour des relations commerciales préexistantes. LPM travaille avec un
            réseau d'artisans locaux sélectionnés sur leur sérieux, leurs
            références et leurs garanties.
          </p>

          {/* H2 — Délais */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Délais réalistes : 18 à 24 mois du premier rendez-vous à la
            livraison
          </h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#111111]">
                  <th className="px-4 py-3 border border-[#1c1c1c] text-left text-[#C9A84C] font-semibold">
                    Phase
                  </th>
                  <th className="px-4 py-3 border border-[#1c1c1c] text-left text-[#C9A84C] font-semibold">
                    Durée estimative
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Faisabilité + recherche terrain", "1 à 3 mois"],
                  ["Conception architecturale (esquisse → plans techniques)", "2 à 3 mois"],
                  ["Instruction du permis de construire", "2 à 3 mois"],
                  ["Délai d'affichage + appels d'offres entreprises", "2 à 3 mois"],
                  ["Chantier (fondations → second œuvre → finitions)", "8 à 10 mois"],
                  ["Réception + levée des réserves", "1 à 2 mois"],
                ].map(([phase, duree], i) => (
                  <tr key={phase} className={i % 2 === 1 ? "bg-[#0d0d0d]" : ""}>
                    <td className="px-4 py-3 border border-[#1c1c1c] text-[#C0B9AE]">
                      {phase}
                    </td>
                    <td className="px-4 py-3 border border-[#1c1c1c] text-[#F5F0E8] font-medium">
                      {duree}
                    </td>
                  </tr>
                ))}
                <tr className="bg-[#1a1500]">
                  <td className="px-4 py-3 border border-[#C9A84C] text-[#F5F0E8] font-bold">
                    TOTAL
                  </td>
                  <td className="px-4 py-3 border border-[#C9A84C] text-[#C9A84C] font-bold">
                    16 à 24 mois
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Ces délais sont donnés à titre indicatif pour un projet standard en
            Haute-Garonne. Certains paramètres peuvent les allonger : terrain
            soumis à l'ABF (délai permis étendu à 3 mois), hiver rigoureux
            (interruption de chantier), ou modifications en cours de projet.
            Une bonne préparation en amont (programme clair, budget validé,
            terrain analysé) est le meilleur moyen de tenir ce planning.
          </p>

          {/* Conclusion */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Conclusion : la méthode, clé d'une construction réussie
          </h2>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Ces 5 étapes forment un cadre structurant pour tout projet de
            construction individuelle. Chacune est interdépendante : une erreur
            ou une précipitation dans la phase de programme (étape 1) se
            répercute sur tous les stades suivants. À l'inverse, un projet bien
            préparé en amont avance avec fluidité, préserve votre budget et vous
            permet de profiter de votre maison sans mauvaise surprise.
          </p>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Pour mieux comprendre qui peut piloter votre projet, consultez notre
            guide{" "}
            <Link
              href="/guides/maitre-oeuvre-architecte-constructeur"
              className="text-[#C9A84C] underline hover:text-[#E8C97A] transition-colors"
            >
              maître d'œuvre, architecte ou constructeur : lequel choisir ?
            </Link>
            . Et pour comprendre les nouvelles obligations réglementaires,
            lisez notre article sur la{" "}
            <Link
              href="/guides/norme-re2020-construction-maison"
              className="text-[#C9A84C] underline hover:text-[#E8C97A] transition-colors"
            >
              norme RE2020 et ses impacts concrets
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
              Prêt à lancer votre construction ?
            </h2>
            <p className="text-[#8A8A8A] mb-10 max-w-lg mx-auto leading-relaxed">
              LPM vous accompagne à chaque étape, de la faisabilité à la remise
              des clés. Premier rendez-vous sans engagement pour analyser votre
              projet et vous donner une vision claire du budget et du planning.
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
                href="/guides/norme-re2020-construction-maison"
                className="group border border-[#1c1c1c] p-6 bg-[#0d0d0d] hover:border-[#C9A84C] transition-colors rounded"
              >
                <p className="text-[#C9A84C] text-[9px] tracking-[0.4em] uppercase mb-3">
                  Réglementation
                </p>
                <h3 className="text-[#F5F0E8] font-semibold leading-snug group-hover:text-[#C9A84C] transition-colors">
                  Norme RE2020 : Ce Qu'Elle Change Pour Votre Construction de
                  Maison
                </h3>
                <p className="text-[#8A8A8A] text-xs mt-3">5 min de lecture →</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
