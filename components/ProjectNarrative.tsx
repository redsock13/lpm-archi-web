import Link from "next/link";

const projects = {
  grenade: {
    title: "À Grenade, une maison de plain-pied et ses espaces extérieurs",
    programme: "Le programme présenté réunit 91,41 m² habitables, trois chambres et une pièce de vie de 42,18 m². Le garage accolé de 24,12 m² et la terrasse de 35,50 m² complètent la maison sur une parcelle de 442 m².",
    detail: "Le plan distingue la pièce de vie des chambres, avec un dressing et les circulations qui les relient. Les vues de conception montrent une toiture à quatre pans et des menuiseries anthracite. Les tableaux ci-dessous permettent de lire le détail des pièces et des surfaces.",
    focus: "Distribution de plain-pied · Garage accolé · Terrasse",
  },
  fronton: {
    title: "À Fronton, un programme réparti sur deux niveaux",
    programme: "La fiche présente 130,58 m² habitables et 133,87 m² de surface de plancher. Le rez-de-chaussée associe un séjour-cuisine de 43,64 m², une chambre et un bureau. L’étage accueille deux autres chambres et une salle de bain.",
    detail: "Le garage de 44,89 m² et la terrasse de 42 m² figurent parmi les annexes du programme. L’accès, le stationnement et les équipements extérieurs sont décrits séparément : ils font partie des sujets à examiner avec l’implantation de la maison.",
    focus: "Maison à étage · Chambre et bureau au rez-de-chaussée · Annexes",
  },
  launac: {
    title: "À Launac, la pièce de vie au cœur du programme",
    programme: "Le programme présenté comprend 107,34 m² habitables, dont un séjour-cuisine de 55,19 m² et trois chambres. Deux salles de bain et un dressing complètent la distribution. La terrasse de plain-pied représente 16,80 m².",
    detail: "La fiche distingue les surfaces de la maison, les espaces verts et l’accès avec stationnement. Les caractéristiques extérieures précisent notamment les tuiles en terre cuite et les menuiseries anthracite. Ces éléments permettent de comparer le programme aux plans et aux vues du projet.",
    focus: "Pièce de vie de 55,19 m² · Trois chambres · Terrasse de plain-pied",
  },
};

export default function ProjectNarrative({ project }: { project: keyof typeof projects }) {
  const item = projects[project];
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-16 py-16 md:py-20 border-b border-[#1c1c1c]" aria-labelledby="lecture-projet">
      <p className="text-[#D4AF37] text-[9px] tracking-[0.4em] uppercase mb-5">Le projet en détail</p>
      <h2 id="lecture-projet" className="text-2xl md:text-4xl leading-tight max-w-3xl mb-8" style={{ fontFamily: "var(--font-playfair)" }}>{item.title}</h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-14 text-[#C0B9AE] text-sm font-light leading-[1.9]">
        <p>{item.programme}</p><p>{item.detail}</p>
      </div>
      <p className="text-[#D4AF37] text-[10px] tracking-[0.12em] uppercase mt-8 leading-relaxed">{item.focus}</p>
      <div className="mt-10 pt-8 border-t border-[#1c1c1c] max-w-3xl">
        <h3 className="text-xl mb-4" style={{ fontFamily: "var(--font-playfair)" }}>Et pour votre maison ?</h3>
        <p className="text-[#C0B9AE] text-sm leading-[1.9] mb-5">Je pars de votre terrain, de vos besoins et de votre budget pour définir votre projet. Découvrez <Link className="text-[#D4AF37] underline underline-offset-4" href="/construction-maison-individuelle">mon accompagnement en construction de maison individuelle</Link>, des plans au suivi de chantier.</p>
        <Link href="/#contact" className="inline-flex text-[#D4AF37] text-[10px] tracking-[0.2em] uppercase border-b border-[#D4AF37]/40 pb-2">Parlons de votre projet ↗</Link>
      </div>
    </section>
  );
}
