import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Maître d'Œuvre, Architecte ou Constructeur : Lequel Choisir ? | LPM",
  description:
    "CMI, architecte DPLG ou maître d'œuvre : quelles différences, quelles missions, quel professionnel pour votre projet de construction en Haute-Garonne ? Guide LPM.",
  alternates: { canonical: "/guides/maitre-oeuvre-architecte-constructeur" },
  keywords: [
    "maître d'œuvre ou architecte",
    "différence maître d'œuvre constructeur",
    "choisir professionnel construction maison",
    "CMI architecte maître d'œuvre Haute-Garonne",
    "mission maître d'œuvre construction neuve",
  ],
  openGraph: {
    title: "Maître d'Œuvre, Architecte ou Constructeur : Lequel Choisir ? | LPM",
    description:
      "CMI, architecte DPLG ou maître d'œuvre : quelles différences, quelles missions, quel professionnel pour votre projet de construction en Haute-Garonne ?",
    url: "https://lpmoe.com/guides/maitre-oeuvre-architecte-constructeur",
    siteName: "LPM — Maître d'Œuvre Haute-Garonne",
    locale: "fr_FR",
    type: "article",
    images: [{ url: "/hero-bg-poster.jpg", width: 1280, height: 720, alt: "LPM — Maître d'œuvre Haute-Garonne" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maître d'Œuvre, Architecte ou Constructeur : Lequel Choisir ? | LPM",
    images: ["/hero-bg-poster.jpg"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Maître d'Œuvre, Architecte ou Constructeur : Lequel Choisir Pour Votre Projet ?",
  description:
    "CMI, architecte DPLG ou maître d'œuvre : quelles différences, quelles missions, quel professionnel pour votre projet de construction en Haute-Garonne ?",
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
      "https://lpmoe.com/guides/maitre-oeuvre-architecte-constructeur",
  },
};

export default function ArticleChoixProfessionnel() {
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
          { name: "Maître d'Œuvre, Architecte ou Constructeur", path: "/guides/maitre-oeuvre-architecte-constructeur" },
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
            <Link href="/" className="hover:text-[#C9A84C] transition-colors">
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
              Maître d'Œuvre, Architecte ou Constructeur
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
            Maître d'Œuvre, Architecte ou Constructeur : Lequel Choisir Pour
            Votre Projet ?
          </h1>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-[#8A8A8A] text-xs font-light mb-12">
            <span>Par Loïc Petit — LPM</span>
            <span className="hidden md:inline">·</span>
            <span>7 min de lecture</span>
            <span className="hidden md:inline">·</span>
            <span>Mis à jour 2026</span>
          </div>

          <div className="w-16 h-px bg-[#C9A84C] mb-16" />
        </section>

        {/* Article body */}
        <article className="px-6 md:px-12 lg:px-20 max-w-4xl mx-auto pb-24">
          {/* Introduction */}
          <p className="text-[#C0B9AE] leading-[1.9] mb-6 text-lg">
            Faire construire sa maison implique de choisir le bon interlocuteur
            professionnel. En France, trois grandes catégories de professionnels
            peuvent piloter un projet de construction de maison individuelle :
            le{" "}
            <strong className="text-[#F5F0E8] font-semibold">
              constructeur de maisons individuelles (CMI)
            </strong>
            , l'
            <strong className="text-[#F5F0E8] font-semibold">
              architecte DPLG
            </strong>{" "}
            et le{" "}
            <strong className="text-[#F5F0E8] font-semibold">
              maître d'œuvre
            </strong>
            . Ces trois profils n'ont ni les mêmes missions, ni les mêmes
            obligations, ni le même positionnement vis-à-vis de vos intérêts.
            Comprendre leurs différences est essentiel avant de vous engager.
          </p>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            En Haute-Garonne, la dynamique de construction neuve autour du
            bassin toulousain génère une offre abondante de ces trois types de
            professionnels. Ce guide vous donne les clés pour choisir en
            connaissance de cause, en fonction de la nature de votre projet, de
            vos priorités et du niveau d'accompagnement que vous souhaitez.
          </p>

          {/* H2 — CMI */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Le constructeur de maisons individuelles (CMI)
          </h2>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            Ce qu'il propose
          </h3>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Le CMI est une entreprise qui propose un package clé en main : plans
            issus d'un catalogue, permis de construire, chantier réalisé
            intégralement par ses propres sous-traitants, et remise des clés. Il
            est encadré par la loi du 19 décembre 1990 (dite loi CCMI — Contrat
            de Construction de Maison Individuelle), qui impose un contrat très
            précis avec des garanties obligatoires.
          </p>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Le CCMI offre une sécurité contractuelle réelle : prix global et
            forfaitaire, délai de livraison garanti, pénalités de retard, et
            garantie de livraison à prix et délais convenus souscrite auprès
            d'un organisme financier. Pour des primo-accédants souhaitant
            minimiser la complexité administrative, c'est souvent la solution de
            premier recours.
          </p>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            Ses limites
          </h3>
          <ul className="list-none pl-0 space-y-3 mb-8">
            {[
              "Plans catalogue peu ou pas personnalisables : le projet architectural est contraint par les gammes du constructeur",
              "Pas d'indépendance : le CMI choisit lui-même ses sous-traitants, souvent avec des contrats commerciaux préétablis — aucune mise en concurrence dans votre intérêt",
              "Qualité des matériaux et des finitions souvent standardisée au minimum contractuel",
              "Le délai de construction global (études + chantier) est généralement plus long qu'annoncé commercialement",
              "Très peu d'adaptabilité aux terrains complexes (en pente, argile, secteur ABF, périmètre patrimonial)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#C0B9AE]">
                <span className="text-[#C9A84C] mt-1 flex-shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="border-l-2 border-[#C9A84C] pl-6 py-4 bg-[#111111] my-8 rounded-r">
            <p className="text-[#C0B9AE] leading-[1.8] text-sm">
              <strong className="text-[#F5F0E8]">À savoir :</strong> le CMI
              n'est pas tenu à une obligation d'indépendance vis-à-vis des
              entreprises. Ses sous-traitants sont ses partenaires commerciaux
              permanents. Vous ne savez pas si les meilleures entreprises de
              votre secteur travaillent pour lui.
            </p>
          </div>

          {/* H2 — Architecte */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            L'architecte DPLG (ou HMONP)
          </h2>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            Son positionnement et ses compétences
          </h3>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            L'architecte est un professionnel libéral inscrit à l'Ordre des
            Architectes. Il est titulaire d'un diplôme d'État (DPLG ou HMONP) et
            engage sa responsabilité personnelle sur ses projets. Son domaine
            d'excellence est la{" "}
            <strong className="text-[#F5F0E8] font-semibold">
              création architecturale
            </strong>{" "}
            : conception originale, travail sur la lumière, les volumes, les
            matériaux, l'intégration dans le site. C'est le professionnel
            indiqué pour les projets complexes, ambitieux sur le plan
            architectural, ou soumis à des contraintes patrimoniales (Architecte
            des Bâtiments de France, secteur sauvegardé).
          </p>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            Quand l'architecte est-il obligatoire ?
          </h3>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            En France, le recours à un architecte est{" "}
            <strong className="text-[#F5F0E8] font-semibold">obligatoire</strong>{" "}
            pour toute construction dont la surface de plancher dépasse{" "}
            <strong className="text-[#F5F0E8] font-semibold">150 m²</strong>{" "}
            (seuil applicable aux particuliers). En dessous de ce seuil, vous
            êtes libre de faire appel à un architecte, un maître d'œuvre, ou de
            déposer vous-même votre permis de construire (bien que cela soit
            déconseillé sans expérience technique).
          </p>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Pour les maisons de plain-pied ou à deux niveaux dont la surface est
            inférieure à 150 m² — soit la grande majorité des constructions
            individuelles en Haute-Garonne — l'architecte est donc facultatif.
          </p>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            La mission architecte : conception forte, suivi variable
          </h3>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Les missions de l'architecte sont modulaires. Il peut intervenir
            uniquement sur la{" "}
            <strong className="text-[#F5F0E8] font-semibold">conception</strong>{" "}
            (plans, permis) et vous laisser gérer le chantier, ou prendre en
            charge une mission complète incluant le suivi de chantier. La mission
            complète (dite « mission complète de maîtrise d'œuvre ») comprend la
            conception, le permis, les appels d'offres, la direction de
            l'exécution des travaux (DET) et l'ordonnancement-pilotage-coordination
            (OPC).
          </p>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Attention : tous les architectes ne proposent pas systématiquement
            la mission complète. Beaucoup se concentrent sur la phase de
            conception et délèguent le suivi de chantier. Si le suivi de chantier
            est important pour vous, vérifiez explicitement l'étendue de la
            mission proposée avant de signer.
          </p>

          {/* H2 — MOE */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Le maître d'œuvre
          </h2>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            Définition et cadre réglementaire
          </h3>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Le maître d'œuvre est un technicien ou une société qui assure la
            conception et/ou le pilotage d'un chantier pour le compte du maître
            d'ouvrage (vous). Il n'est pas soumis à l'obligation d'inscription à
            l'Ordre des Architectes, mais il engage sa responsabilité
            professionnelle et doit être couvert par une assurance
            responsabilité civile professionnelle et, pour les missions de
            conception, par une assurance décennale.
          </p>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            En France, la profession de maître d'œuvre en construction de maison
            individuelle est réglementée par la loi du 19 décembre 1990 lorsqu'il
            intervient à la fois en conception et en suivi de chantier pour une
            maison dont la surface ne dépasse pas 150 m² : dans ce cas, un{" "}
            <strong className="text-[#F5F0E8] font-semibold">
              contrat de maîtrise d'œuvre
            </strong>{" "}
            écrit est obligatoire, avec des mentions légales précises.
          </p>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            La mission complète du maître d'œuvre
          </h3>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Le maître d'œuvre propose typiquement une mission qui couvre
            l'intégralité du projet, de la faisabilité à la remise des clés :
          </p>
          <div className="space-y-4 mb-10">
            {[
              {
                num: "01",
                label: "Faisabilité et programme",
                detail:
                  "Analyse du terrain, étude du PLU, vérification de la constructibilité, définition du programme avec le maître d'ouvrage.",
              },
              {
                num: "02",
                label: "Conception architecturale",
                detail:
                  "Esquisse, avant-projet sommaire (APS), projet définitif (plans d'exécution, coupes, façades, détails constructifs).",
              },
              {
                num: "03",
                label: "Dépôt et suivi du permis de construire",
                detail:
                  "Constitution et dépôt du dossier en mairie, suivi de l'instruction, réponse aux demandes de pièces complémentaires.",
              },
              {
                num: "04",
                label: "Appels d'offres entreprises",
                detail:
                  "Rédaction des CCTP (Cahiers des Clauses Techniques Particulières), consultation de plusieurs entreprises par lot, analyse et comparaison des devis.",
              },
              {
                num: "05",
                label: "Pilotage de chantier (OPC + DET)",
                detail:
                  "Réunions de chantier hebdomadaires, comptes-rendus écrits, coordination des corps d'état, contrôle qualité à chaque phase clé.",
              },
              {
                num: "06",
                label: "Réception et DOE",
                detail:
                  "Visite pré-réception, procès-verbal de réception avec réserves, suivi de levée des réserves, remise du Dossier des Ouvrages Exécutés.",
              },
            ].map(({ num, label, detail }) => (
              <div
                key={num}
                className="border border-[#1c1c1c] p-6 bg-[#0d0d0d] rounded"
              >
                <div className="flex items-start gap-5">
                  <span
                    className="text-3xl font-bold text-[#C9A84C] opacity-30 leading-none flex-shrink-0 tabular-nums"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {num}
                  </span>
                  <div>
                    <p className="text-[#F5F0E8] font-semibold mb-1">{label}</p>
                    <p className="text-[#C0B9AE] text-sm leading-[1.8]">
                      {detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            L'indépendance : le critère décisif
          </h3>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Le maître d'œuvre indépendant ne perçoit aucune rétrocommission des
            entreprises de construction. Il est rémunéré exclusivement par vous,
            sur la base d'honoraires contractuels. Cette indépendance est la
            condition d'une vraie mise en concurrence des entreprises, et donc
            d'une sélection basée uniquement sur la compétence technique, la
            qualité des références et la conformité à votre programme.
          </p>

          {/* H2 — Tableau comparatif */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Tableau comparatif des trois profils
          </h2>
          <div className="overflow-x-auto my-10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#111111]">
                  <th className="px-4 py-3 border border-[#1c1c1c] text-left text-[#C9A84C] font-semibold tracking-wide">
                    Critère
                  </th>
                  <th className="px-4 py-3 border border-[#1c1c1c] text-left text-[#C9A84C] font-semibold tracking-wide">
                    CMI
                  </th>
                  <th className="px-4 py-3 border border-[#1c1c1c] text-left text-[#C9A84C] font-semibold tracking-wide">
                    Architecte
                  </th>
                  <th className="px-4 py-3 border border-[#1c1c1c] text-left text-[#C9A84C] font-semibold tracking-wide">
                    Maître d'œuvre
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Conception personnalisée",
                    "Limitée (catalogue)",
                    "Très élevée",
                    "Élevée",
                  ],
                  [
                    "Indépendance vis-à-vis des entreprises",
                    "Non",
                    "Oui",
                    "Oui",
                  ],
                  [
                    "Suivi de chantier inclus",
                    "Oui (mission propre)",
                    "Variable (selon contrat)",
                    "Oui (mission complète)",
                  ],
                  [
                    "Mise en concurrence des entreprises",
                    "Non",
                    "Oui (si mission complète)",
                    "Oui (systématique)",
                  ],
                  [
                    "Adaptabilité terrain complexe",
                    "Faible",
                    "Très forte",
                    "Forte",
                  ],
                  [
                    "Obligation légale surface >150 m²",
                    "Non applicable",
                    "Architecte obligatoire",
                    "Non applicable",
                  ],
                  [
                    "Proximité terrain / réactivité",
                    "Variable",
                    "Variable",
                    "Forte (ancrage local)",
                  ],
                ].map(([critere, cmi, archi, moe], i) => (
                  <tr key={critere} className={i % 2 === 1 ? "bg-[#0d0d0d]" : ""}>
                    <td className="px-4 py-3 border border-[#1c1c1c] text-[#F5F0E8] font-medium">
                      {critere}
                    </td>
                    <td className="px-4 py-3 border border-[#1c1c1c] text-[#C0B9AE]">
                      {cmi}
                    </td>
                    <td className="px-4 py-3 border border-[#1c1c1c] text-[#C0B9AE]">
                      {archi}
                    </td>
                    <td className="px-4 py-3 border border-[#1c1c1c] text-[#C0B9AE]">
                      {moe}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* H2 — Comment choisir */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Comment choisir selon votre projet ?
          </h2>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            Optez pour un constructeur CMI si…
          </h3>
          <ul className="list-none pl-0 space-y-3 mb-8">
            {[
              "Votre terrain est plat, viabilisé, sans contrainte particulière de PLU",
              "Vous souhaitez une maison standard sans personnalisation architecturale importante",
              "Vous êtes primo-accédant et préférez la sécurité d'un contrat CCMI encadré par la loi",
              "Vous n'avez pas le temps ou l'envie de gérer les relations avec plusieurs intervenants",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#C0B9AE]">
                <span className="text-[#C9A84C] mt-1 flex-shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            Optez pour un architecte si…
          </h3>
          <ul className="list-none pl-0 space-y-3 mb-8">
            {[
              "Votre maison dépasse 150 m² de surface de plancher (obligation légale)",
              "Votre terrain est en périmètre ABF (Architecte des Bâtiments de France) ou en secteur patrimonial",
              "Vous avez un projet architectural fort avec des contraintes esthétiques ou d'intégration paysagère très spécifiques",
              "Vous souhaitez une démarche de conception très poussée, avec un vrai parti-pris architectural signé",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#C0B9AE]">
                <span className="text-[#C9A84C] mt-1 flex-shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-4 mt-10 text-[#C9A84C]">
            Optez pour un maître d'œuvre si…
          </h3>
          <ul className="list-none pl-0 space-y-3 mb-8">
            {[
              "Vous souhaitez un projet personnalisé (plans sur mesure) sans passer par un cabinet d'architecture",
              "Votre terrain a des particularités (pente, nature de sol, contraintes PLU) qui nécessitent une approche technique adaptée",
              "Vous voulez une vraie mise en concurrence des entreprises locales et une défense indépendante de vos intérêts",
              "Vous souhaitez un interlocuteur unique, présent du premier rendez-vous à la remise des clés, avec une forte réactivité de proximité",
              "Votre projet est en Haute-Garonne : les communes périurbaines (Grenade, Léguevin, Pibrac, Lévignac, Saint-Jory) ont des règles PLU précises qu'un maître d'œuvre local connaît parfaitement",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#C0B9AE]">
                <span className="text-[#C9A84C] mt-1 flex-shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* H2 — Garanties */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Les garanties et assurances : ce que vous devez vérifier
          </h2>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Quel que soit le professionnel choisi, vérifiez systématiquement
            les couvertures d'assurance avant de signer :
          </p>
          <div className="space-y-4 mb-10">
            {[
              {
                label: "Responsabilité civile professionnelle",
                text: "Obligatoire pour tout professionnel intervenant dans la conception ou le suivi d'une construction. Couvre les erreurs de conception, les fautes professionnelles.",
              },
              {
                label: "Assurance décennale du concepteur",
                text: "Couvre les désordres affectant la solidité de l'ouvrage ou le rendant impropre à sa destination, pendant 10 ans après réception. À vérifier pour l'architecte et le maître d'œuvre.",
              },
              {
                label: "Garantie décennale de chaque entreprise",
                text: "Chaque entreprise intervenant sur votre chantier doit produire son attestation de garantie décennale couvrant l'année du chantier. Le maître d'œuvre ou l'architecte vérifie ce point pour vous.",
              },
              {
                label: "Votre assurance dommages-ouvrage (DO)",
                text: "Obligatoire pour vous en tant que maître d'ouvrage, à souscrire avant l'ouverture de chantier. La DO vous permet d'être indemnisé rapidement en cas de sinistre décennal, sans attendre les décisions de justice.",
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

          {/* H2 — LPM */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            LPM : maîtrise d'œuvre de proximité en Haute-Garonne
          </h2>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            LPM est un maître d'œuvre indépendant ancré dans le tissu local de
            la Haute-Garonne. Notre périmètre d'intervention couvre les communes
            de l'axe Grenade–Lévignac–Pibrac–Léguevin–Saint-Jory et plus
            largement toute la grande couronne toulousaine.
          </p>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Notre approche repose sur trois engagements :
          </p>
          <ul className="list-none pl-0 space-y-3 mb-8">
            {[
              "Une mission complète de A à Z : faisabilité, conception, permis, appels d'offres, chantier, réception",
              "Une indépendance totale vis-à-vis des entreprises : nous sélectionnons les meilleurs artisans locaux dans votre seul intérêt",
              "Une présence terrain régulière : réunions de chantier hebdomadaires, comptes-rendus systématiques, accès client en ligne",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#C0B9AE]">
                <span className="text-[#C9A84C] mt-1 flex-shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Nous travaillons exclusivement sur des projets de construction
            individuelle et de rénovation haut de gamme. Cette spécialisation
            nous permet de maîtriser parfaitement les réglementations locales,
            les entreprises du secteur et les spécificités techniques des
            constructions en Haute-Garonne (sols argileux, contraintes RE2020,
            communes soumises à l'ABF).
          </p>

          <div className="border-l-2 border-[#C9A84C] pl-6 py-4 bg-[#111111] my-8 rounded-r">
            <p className="text-[#C0B9AE] leading-[1.8] text-sm">
              <strong className="text-[#F5F0E8]">Premier rendez-vous :</strong>{" "}
              LPM propose un premier échange sans engagement pour analyser votre
              projet (terrain, programme, contraintes) et vous donner une
              première vision claire de la faisabilité. Contactez-nous depuis
              la page d'accueil.
            </p>
          </div>

          {/* H2 — Conclusion */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-6 mt-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Conclusion : le bon choix dépend de votre projet
          </h2>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Il n'existe pas de réponse universelle entre CMI, architecte et
            maître d'œuvre. Tout dépend de la nature de votre projet, de vos
            contraintes réglementaires, et du niveau de personnalisation et
            d'accompagnement que vous recherchez. Ce qui est certain : se faire
            accompagner par un professionnel indépendant — qu'il soit architecte
            ou maître d'œuvre — est systématiquement plus favorable à vos
            intérêts qu'un package tout-en-un chez un CMI sans mise en
            concurrence.
          </p>
          <p className="text-[#C0B9AE] leading-[1.9] mb-6">
            Pour mieux comprendre les étapes d'un projet et le rôle du maître
            d'œuvre à chacune d'elles, consultez notre guide sur les{" "}
            <Link
              href="/guides/etapes-construction-maison-individuelle"
              className="text-[#C9A84C] underline hover:text-[#E8C97A] transition-colors"
            >
              5 étapes d'une construction individuelle réussie
            </Link>
            . Et pour maîtriser les nouvelles exigences réglementaires,
            découvrez notre article sur la{" "}
            <Link
              href="/guides/norme-re2020-construction-maison"
              className="text-[#C9A84C] underline hover:text-[#E8C97A] transition-colors"
            >
              norme RE2020 et ses impacts concrets sur votre chantier
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
              Construire avec un maître d'œuvre indépendant en Haute-Garonne
            </h2>
            <p className="text-[#8A8A8A] mb-10 max-w-lg mx-auto leading-relaxed">
              LPM analyse votre projet, votre terrain et vos priorités lors
              d'un premier échange gratuit et sans engagement. Prenez contact
              pour démarrer.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-4 gold-btn-shine px-10 py-4 text-xs tracking-[0.3em] uppercase font-bold"
            >
              Prendre contact
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
