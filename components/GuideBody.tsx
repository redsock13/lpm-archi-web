import Link from "next/link";

type Section = { title: string; paragraphs: string[]; points?: string[] };
type Guide = { intro: string; sections: Section[]; sources: { title: string; url: string }[] };

const guides: Record<string, Guide> = {
  comparatif: {
    intro: "Pour construire votre maison individuelle, commencez par comparer les missions, les contrats et les prestations incluses. Le titre du professionnel ne suffit pas à décrire son intervention. À Grenade et en Haute-Garonne, je vous aide à préciser votre projet avant de définir mon accompagnement.",
    sections: [
      { title: "Constructeur : comprendre le contrat proposé", paragraphs: ["Le contrat de construction de maison individuelle (CCMI) s’applique dans les situations prévues par la loi. Il encadre notamment le prix convenu, les délais et les garanties propres à ce contrat. Son contenu et ses annexes doivent être examinés avant de signer.", "Un constructeur peut proposer un modèle de sa gamme ou un plan personnalisé. Le niveau de personnalisation dépend de l’offre : il faut comparer les plans, les matériaux, les adaptations au terrain et les travaux restant à votre charge, plutôt que supposer que tous les constructeurs travaillent de la même façon."] },
      { title: "Architecte : conception et mission à définir", paragraphs: ["L’architecte peut intervenir sur la conception et, selon la mission confiée, sur les étapes suivantes. Pour une nouvelle maison construite par un particulier pour son propre usage, le recours à un architecte est obligatoire au-delà de 150 m² de surface de plancher. D’autres règles s’appliquent notamment aux personnes morales et à certaines extensions.", "Comparez l’étendue de la mission, les livrables et les honoraires. Une mission de conception seule ne comprend pas automatiquement le suivi des travaux."] },
      { title: "Maître d’œuvre : un accompagnement défini par la mission", paragraphs: ["Le maître d’œuvre peut concevoir les plans, préparer le permis, coordonner les entreprises et assister à la réception. Hors contrat avec un architecte, le contrat de maîtrise d’œuvre n’est pas spécifiquement réglementé : la mission, les honoraires et les limites de l’intervention doivent être écrits.", "La loi du 19 décembre 1990 concerne le cadre du CCMI ; elle ne crée pas un régime général de maîtrise d’œuvre réservé aux maisons de moins de 150 m². Le contrat applicable dépend des prestations réellement assurées."] },
      { title: "Les points à comparer avant de vous engager", paragraphs: ["Demandez une proposition détaillée pour votre terrain et votre programme. Une comparaison utile porte sur le même périmètre de prestations."], points: ["Les plans, études et démarches compris dans la proposition.", "Le rôle de chaque intervenant et les contrats de travaux.", "Le chiffrage, les postes exclus et le traitement des modifications.", "Les attestations d’assurance adaptées aux missions et aux travaux.", "Le calendrier, les échanges pendant le chantier et l’assistance à la réception."] },
      { title: "Mon accompagnement avec LPM à Grenade", paragraphs: ["Je pars de votre terrain, de votre mode de vie et de votre budget. Je m’appuie sur mon réseau d’artisans partenaires pour coordonner les corps de métier et suivre le chantier dans le cadre de la mission convenue.", "Les honoraires, les prestations et les modalités de suivi sont précisés dans la proposition. Le premier échange sert à poser les bonnes questions : localisation, documents disponibles, besoins et enveloppe financière. Vous pouvez ensuite comparer cette mission avec les autres offres sur des bases concrètes."] },
    ],
    sources: [
      { title: "ANIL — Le contrat de maîtrise d’œuvre", url: "https://www.anil.org/votre-besoin/construire/les-etapes-de-la-construction/differents-contrats-de-construction/maitrise-doeuvre/" },
      { title: "ANIL — Les différents contrats de construction", url: "https://www.anil.org/votre-besoin/construire/les-etapes-de-la-construction/differents-contrats-de-construction/" },
      { title: "Service Public — Quand faire appel à un architecte ?", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F20568" },
      { title: "Service Public — Quel contrat pour construire sa maison ?", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34554" },
    ],
  },
  re2020: {
    intro: "Pour votre maison neuve en Haute-Garonne, la RE2020 se prépare dès les premiers plans. Elle porte sur les besoins énergétiques, les consommations, l’impact carbone et le confort d’été. Je coordonne les choix de conception avec les intervenants spécialisés pour que le projet soit étudié dans son ensemble.",
    sections: [
      { title: "Une performance évaluée à l’échelle de la maison", paragraphs: ["La conformité ne repose pas sur une épaisseur d’isolant ou un équipement unique. Les calculs réglementaires prennent en compte le bâtiment, les systèmes et les conditions applicables au projet. Les exigences et leurs modulations sont à vérifier avec le bureau d’études pour la date et la nature de votre opération."], points: ["Bbio : besoins bioclimatiques liés à la conception du bâtiment.", "Cep et Cep,nr : consommations conventionnelles d’énergie primaire, dont la part non renouvelable.", "Ic énergie et Ic construction : impacts carbone des consommations et de la construction.", "DH : indicateur d’inconfort estival, exprimé en degrés-heures."] },
      { title: "Isolation et matériaux : raisonner en ensemble", paragraphs: ["Orientation, compacité, isolation, menuiseries et traitement des ponts thermiques se complètent. Il n’existe pas une épaisseur d’isolant universelle à appliquer à toutes les maisons RE2020. La composition des parois doit être adaptée au projet et justifiée par les études.", "Le choix d’un matériau tient compte de sa performance, de sa mise en œuvre et des données environnementales utilisées dans l’analyse du cycle de vie. Un matériau biosourcé peut avoir un intérêt sans être imposé pour toutes les parois. Les variantes doivent être comparées à périmètre identique."] },
      { title: "Ventilation : le double flux n’est pas une obligation générale", paragraphs: ["La RE2020 n’impose pas une VMC double flux à toutes les maisons. Le protocole de vérification prévoit des systèmes simple flux et double flux. Le choix dépend de l’étude, de la conception du logement et des objectifs du projet.", "Une double flux peut récupérer une partie de la chaleur de l’air extrait, mais elle demande une installation et un entretien adaptés. Une simple flux peut aussi être retenue si l’ensemble du projet satisfait aux exigences. La vérification du fonctionnement de la ventilation reste une étape à préparer."] },
      { title: "Chauffage et confort d’été : choisir après l’étude", paragraphs: ["Pompe à chaleur, chauffage au bois et autres solutions doivent être étudiés avec les besoins du bâtiment, l’eau chaude sanitaire et les contraintes d’installation. Un équipement pris isolément ne garantit pas la conformité. Un plancher chauffant est un mode de diffusion de chaleur, pas une source d’énergie.", "En Haute-Garonne, j’accorde aussi une place aux protections solaires, aux ouvertures et aux possibilités de ventilation. L’objectif est de limiter les surchauffes tout en conservant la lumière et les usages attendus. Ces choix se vérifient avec les calculs de confort d’été."] },
      { title: "Des études et des attestations aux bons moments", paragraphs: ["Les études doivent accompagner la conception. L’attestation de prise en compte de la réglementation au dépôt du permis et l’attestation à l’achèvement des travaux correspondent à deux étapes différentes ; elles ne sont pas toutes deux déposées avec le permis initial.", "Je coordonne les échanges nécessaires dans le cadre de ma mission. Les plans, les systèmes prévus et les changements décidés pendant les travaux doivent rester cohérents avec les études et les documents de fin de chantier."] },
      { title: "Budget : comparer les variantes plutôt que promettre un gain", paragraphs: ["Les coûts dépendent de la maison, du terrain, des matériaux et des équipements retenus. Les économies d’usage dépendent aussi du climat, des habitudes et du prix des énergies. Un pourcentage d’économie ou un délai de rentabilité ne peut pas être promis à chaque projet.", "Pour préparer votre rendez-vous, rassemblez les plans disponibles, les informations sur le terrain et vos priorités de confort. Nous pourrons identifier les décisions à étudier et les devis à comparer."] },
    ],
    sources: [
      { title: "Ministère — Guide RE2020 et mises à jour", url: "https://rt-re-batiment.developpement-durable.gouv.fr/re2020-guide-cerema-mise-a-jour-du-17-septembre-a1245.html" },
      { title: "Ministère — Vérification des systèmes de ventilation", url: "https://rt-re-batiment.developpement-durable.gouv.fr/verification-des-systemes-de-ventilation-a561.html" },
      { title: "Ministère — Attestations et étude de faisabilité énergétique", url: "https://rt-re-batiment.developpement-durable.gouv.fr/textes-attestations-et-etude-de-faisabilite-a704.html" },
    ],
  },
  etapes: {
    intro: "Une construction de maison individuelle se prépare bien avant le début des travaux. À Grenade et en Haute-Garonne, je vous accompagne selon une mission définie avec vous : comprendre le terrain, concevoir, préparer le chantier, coordonner les entreprises et assister à la réception.",
    sections: [
      { title: "1. Définir votre programme et votre enveloppe", paragraphs: ["Nous commençons par votre mode de vie : pièces nécessaires, plain-pied ou étage, accès, stationnement et espaces extérieurs. Votre budget doit intégrer les postes de votre opération, y compris ceux qui ne relèvent pas directement des travaux de la maison.", "Si vous avez déjà un terrain, apportez les plans et documents disponibles. L’accès, les réseaux, les règles d’urbanisme et les études nécessaires sont à examiner avant de figer un projet. Cette première étape sert à identifier les contraintes et les décisions encore ouvertes."] },
      { title: "2. Concevoir les plans et préparer les autorisations", paragraphs: ["Je donne forme au programme en tenant compte de l’implantation et des usages. Les échanges permettent d’ajuster les volumes, la distribution et les matériaux avant de détailler le projet. Les études techniques et environnementales sont coordonnées avec les spécialistes concernés.", "Le dossier de permis est préparé selon la mission convenue. Le recours à un architecte et les autorisations nécessaires dépendent du projet. Le délai annoncé par l’administration et les éventuelles demandes de pièces doivent être intégrés au calendrier ; l’ouverture du chantier ne se déduit pas d’une durée standard affichée sur un site."] },
      { title: "3. Préparer les devis et l’intervention des artisans", paragraphs: ["Je m’appuie sur mon réseau d’artisans partenaires pour organiser les interventions. Le descriptif des travaux et les devis permettent de préciser le coût, les prestations et les limites de chaque lot.", "Avant le démarrage, les contrats, les attestations d’assurance correspondant aux activités, les études et les conditions d’accès au chantier sont à vérifier. Les choix encore à effectuer doivent être identifiés pour éviter de les découvrir pendant les travaux."] },
      { title: "4. Coordonner et suivre le chantier", paragraphs: ["Je suis les étapes du chantier dans le cadre de ma mission et coordonne les corps de métier. Le planning, l’avancement et les points à décider constituent le fil des échanges. Une modification doit être examinée pour ses conséquences sur le coût, la technique et le calendrier.", "Les visites se préparent avec les intervenants et les règles de sécurité du chantier. Le suivi ne consiste pas à promettre l’absence d’aléas, mais à les identifier, à organiser les réponses et à vous tenir informé des décisions nécessaires."] },
      { title: "5. Réceptionner les travaux et suivre les réserves", paragraphs: ["La réception est une étape formalisée : les travaux sont examinés et les éventuelles réserves sont consignées. Je vous assiste à cette étape et dans le suivi de leur levée dans les limites de mon contrat.", "Les documents remis en fin de chantier et les garanties applicables doivent être expliqués par les professionnels concernés. La réception ne doit pas être confondue avec une simple remise matérielle des clés."] },
      { title: "Préparer votre premier rendez-vous", paragraphs: ["Le calendrier est construit selon votre opération et les disponibilités des intervenants. Les délais de conception, d’administration, d’approvisionnement et de travaux sont à distinguer : il n’existe pas une durée de livraison identique pour tous les projets."], points: ["La commune et les documents du terrain, si vous en disposez.", "Vos besoins, vos priorités et quelques références de maisons.", "Votre enveloppe financière et les postes déjà prévus.", "Votre calendrier souhaité et les décisions déjà prises."] },
    ],
    sources: [
      { title: "Service Public — Quel contrat pour construire sa maison ?", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34554" },
      { title: "Service Public — Garanties après la réception", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2958" },
      { title: "Service Public — Recours à un architecte", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F20568" },
    ],
  },
};

export default function GuideBody({ kind }: { kind: "comparatif" | "re2020" | "etapes" }) {
  const guide = guides[kind];
  return (
    <>
      <p className="text-[#C0B9AE] leading-[1.9] mb-6 text-lg">{guide.intro}</p>
      {guide.sections.map((section) => (
        <section key={section.title}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-16" style={{ fontFamily: "var(--font-playfair)" }}>{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-[#C0B9AE] leading-[1.9] mb-6">{paragraph}</p>)}
          {section.points && <ul className="space-y-3 mb-8">{section.points.map((point) => <li key={point} className="flex gap-3 text-[#C0B9AE] leading-[1.8]"><span className="text-[#C9A84C]" aria-hidden="true">—</span><span>{point}</span></li>)}</ul>}
        </section>
      ))}
      <aside className="border-l-2 border-[#C9A84C] pl-6 py-4 bg-[#111111] my-12">
        <p className="text-[#C0B9AE] leading-[1.8]">Découvrez <Link href="/construction-maison-individuelle" className="text-[#C9A84C] underline underline-offset-4">mon accompagnement pour votre maison individuelle</Link> et les projets de <Link href="/projets/grenade" className="text-[#C9A84C] underline underline-offset-4">Grenade</Link>, <Link href="/projets/fronton" className="text-[#C9A84C] underline underline-offset-4">Fronton</Link> et <Link href="/projets/launac" className="text-[#C9A84C] underline underline-offset-4">Launac</Link>.</p>
      </aside>
      <section className="mt-16 pt-8 border-t border-[#1c1c1c]" aria-labelledby="guide-sources">
        <h2 id="guide-sources" className="text-xl mb-5" style={{ fontFamily: "var(--font-playfair)" }}>Sources et références</h2>
        <ul className="space-y-3">{guide.sources.map((source) => <li key={source.url}><a href={source.url} className="text-[#C9A84C] text-sm underline underline-offset-4 hover:text-[#E8C97A]">{source.title}</a></li>)}</ul>
        <p className="text-[#A6A098] text-xs leading-relaxed mt-6">Contenu révisé le 7 novembre 2026. Les règles applicables et le périmètre des missions sont à vérifier pour votre projet.</p>
      </section>
    </>
  );
}
