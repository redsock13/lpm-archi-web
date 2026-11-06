import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConstructionExperience from "@/components/ConstructionExperience";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
 title: "Construction de maison individuelle à Grenade | LPM",
 description: "Votre maison individuelle sur mesure à Grenade et en Haute-Garonne avec Loïc Petit : plans, permis de construire, artisans partenaires et suivi de chantier.",
 alternates:{canonical:"/construction-maison-individuelle"},
 openGraph:{title:"Construction de maison individuelle à Grenade | LPM",description:"De la conception à la réception, Loïc Petit accompagne votre projet de maison sur mesure en Haute-Garonne.",url:"https://www.lpmoe.com/construction-maison-individuelle",type:"website",images:[{url:"/projets/grenade/couverture.jpg",width:2048,height:1536,alt:"Projet de maison individuelle présenté par LPM à Grenade"}]},
 twitter:{card:"summary_large_image",title:"Construction de maison individuelle à Grenade | LPM",images:["/projets/grenade/couverture.jpg"]},
};

export default function ConstructionPage(){
 const schema={"@context":"https://schema.org","@type":"Service",name:"Maîtrise d’œuvre pour la construction de maison individuelle",serviceType:"Maîtrise d’œuvre de maison individuelle",url:"https://www.lpmoe.com/construction-maison-individuelle",provider:{"@id":"https://www.lpmoe.com/#entreprise"},areaServed:[{"@type":"City",name:"Grenade"},{"@type":"AdministrativeArea",name:"Haute-Garonne"}],description:"Conception de plans, accompagnement au permis de construire, coordination des artisans partenaires, suivi de chantier et assistance à la réception."};
 return <><Header/><BreadcrumbJsonLd items={[{name:"Accueil",path:"/"},{name:"Construction de maison individuelle",path:"/construction-maison-individuelle"}]}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><main><ConstructionExperience standalone/></main><Footer/></>;
}
