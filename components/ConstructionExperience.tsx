"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Plus, Minus } from "lucide-react";
import styles from "./ConstructionExperience.module.css";

const ConstructionModel = dynamic(()=>import("./ConstructionModel"), { loading:()=> <div className={styles.modelPlaceholder} aria-hidden="true"><span>LPM</span><i/></div> });

const phases = [
  {number:"01",title:"Imaginer",label:"Un projet qui vous ressemble",text:"Je conçois votre maison individuelle selon votre mode de vie, les possibilités de votre terrain et votre budget. Les plans donnent forme à vos envies, de plain-pied ou à étage.",detail:"Votre terrain. Vos envies. Votre maison."},
  {number:"02",title:"Construire",label:"Des artisans, un même cap",text:"Je m’appuie sur mon réseau d’artisans partenaires pour coordonner les différents corps de métier. Je suis l’avancement du chantier, le planning et le budget, avec une vision d’ensemble de votre projet.",detail:"Coordination des artisans · Suivi de chantier"},
  {number:"03",title:"Habiter",label:"Jusqu’au début d’une nouvelle vie",text:"Je vous accompagne jusqu’à la réception de votre maison. Nous examinons les travaux réalisés et les éventuelles réserves, dont je suis la levée avec les entreprises concernées dans le cadre de ma mission.",detail:"Réception des travaux · Accompagnement"},
];

const missions=[
 {number:"01",title:"Une maison individuelle conçue selon vos envies",text:"Avant de dessiner votre maison, je prends le temps de comprendre vos besoins, vos habitudes et vos envies. J’étudie les possibilités de votre terrain pour concevoir un projet de plain-pied ou à étage, traditionnel ou contemporain, en tenant compte de votre enveloppe financière.",tag:"Conception & plans sur mesure"},
 {number:"02",title:"Des plans au permis de construire",text:"Je vous accompagne dans la conception des plans de votre future maison et la préparation du dossier de permis de construire, dans le cadre de la mission convenue. Selon les caractéristiques du projet, je coordonne les échanges avec les intervenants spécialisés nécessaires.",tag:"Études & démarches"},
 {number:"03",title:"Des artisans partenaires et un chantier suivi",text:"Je mobilise les artisans adaptés à votre projet et coordonne leurs interventions. Pendant les travaux, je suis l’avancement du chantier et vous accompagne dans les décisions nécessaires à sa réalisation. Votre budget guide les choix dès la conception ; les estimations se précisent à mesure que le projet et les devis sont établis.",tag:"Artisans · Planning · Budget"},
 {number:"04",title:"Un accompagnement jusqu’à la réception",text:"La réception permet d’examiner les travaux réalisés et d’identifier les éventuelles réserves. Je vous accompagne à cette étape et dans le suivi de leur levée, dans le cadre de ma mission. Mes honoraires, les prestations incluses et les limites de mon accompagnement sont précisés dans la proposition et le contrat.",tag:"Réception & suivi"},
];

const projects=[
 {city:"Grenade",slug:"grenade",image:"/projets/grenade/couverture.jpg",detail:"Haute-Garonne · Maison individuelle"},
 {city:"Fronton",slug:"fronton",image:"/projets/fronton/couverture.jpg",detail:"Haute-Garonne · Maison individuelle"},
 {city:"Launac",slug:"launac",image:"/projets/launac/couverture.png",detail:"Haute-Garonne · Maison individuelle"},
];

function Reveal({children,className,immediate=false}:{children:React.ReactNode;className?:string;immediate?:boolean}){
 const reduced=useReducedMotion();
 return <motion.div className={className} initial={reduced||immediate?false:{opacity:0,y:26}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.8,ease:[.22,1,.36,1]}}>{children}</motion.div>;
}

export default function ConstructionExperience({standalone=false}:{standalone?:boolean}){
 const [phase,setPhase]=useState(0);
 const [openMission,setOpenMission]=useState<number|null>(0);
 const reduced=useReducedMotion();
 const Heading=standalone?"h1":"h2";

 return <div className={styles.experience}>
   <section id="construction" className={`${styles.intro} ${standalone?styles.standalone:""}`} aria-labelledby="construction-heading">
     <div className={styles.topline}><span>LA CONSTRUCTION, AUTREMENT</span><span>GRENADE / HAUTE-GARONNE</span></div>
     <div className={styles.introGrid}>
       <Reveal className={styles.introCopy} immediate={standalone}>
         <p className={styles.eyebrow}>LPM · LOÏC PETIT · MAÎTRE D’ŒUVRE</p>
         <Heading id="construction-heading" className={styles.heading}>Construction de<br/>maison individuelle.<br/><em>Votre signature.</em></Heading>
         <p className={styles.location}>À Grenade et en Haute-Garonne</p>
         <p className={styles.lead}>Une maison qui vous ressemble commence par quelqu’un qui vous écoute.</p>
         <p className={styles.bodyCopy}>Je suis Loïc Petit, fondateur de LPM. Je vous accompagne dans votre projet de construction de maison individuelle sur mesure, de la conception des plans à la réception des travaux.</p>
         <a className={styles.textLink} href={standalone?"#projet-construction":"/construction-maison-individuelle"}>{standalone?"Parlons de votre maison":"Découvrir mon accompagnement"}<ArrowUpRight size={17} strokeWidth={1}/></a>
         <div className={styles.signature}><span>Loïc Petit</span><small>VOTRE INTERLOCUTEUR, DU PLAN AUX CLÉS.</small></div>
       </Reveal>
       <Reveal className={styles.workshop}>
         <ConstructionModel phase={phase}/>
         <div className={styles.phaseTabs} role="tablist" aria-label="Les étapes de votre maison">
           {phases.map((item,index)=><button key={item.number} id={`construction-tab-${index}`} type="button" role="tab" aria-selected={phase===index} aria-controls={`construction-panel-${index}`} tabIndex={phase===index?0:-1} className={phase===index?styles.activeTab:""} onClick={()=>setPhase(index)} onKeyDown={event=>{if(["ArrowLeft","ArrowRight","Home","End"].includes(event.key)){event.preventDefault();const next=event.key==="Home"?0:event.key==="End"?2:(phase+(event.key==="ArrowRight"?1:2))%3;setPhase(next);document.getElementById(`construction-tab-${next}`)?.focus();}}}><span>{item.number}</span>{item.title}<i/></button>)}
         </div>
         <div className={styles.phasePanels}>
           {phases.map((item,index)=><div key={item.number} id={`construction-panel-${index}`} role="tabpanel" aria-labelledby={`construction-tab-${index}`} hidden={phase!==index}>
             <motion.div key={phase} initial={reduced?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.4}}>
               <h3>{item.label}</h3><p>{item.text}</p><span className={styles.phaseDetail}>{item.detail}</span>
             </motion.div>
           </div>)}
         </div>
       </Reveal>
     </div>
     <div className={styles.bottomline}><span>CONCEVOIR AVEC VOUS. COORDONNER POUR VOUS.</span><span>01 — 03</span></div>
   </section>

   {standalone && <>
    <section className={styles.missions} aria-labelledby="missions-heading">
      <Reveal className={styles.sectionIntro}><p className={styles.eyebrow}>UNE VISION D’ENSEMBLE</p><h2 id="missions-heading">Les bonnes décisions.<br/><em>À chaque étape.</em></h2><p>Permis de construire, coordination des artisans, suivi de chantier : je relie les étapes de votre projet pour vous accompagner avec un cap clair.</p></Reveal>
      <div className={styles.missionList}>{missions.map((item,index)=><Reveal key={item.number}>
       <article className={`${styles.mission} ${openMission===index?styles.missionOpen:""}`}>
        <h3><button type="button" aria-expanded={openMission===index} aria-controls={`mission-detail-${index}`} onClick={()=>setOpenMission(openMission===index?null:index)}><span className={styles.missionNumber}>{item.number}</span><span>{item.title}</span><span className={styles.missionIcon}>{openMission===index?<Minus size={18} strokeWidth={1}/>:<Plus size={18} strokeWidth={1}/>}</span></button></h3>
        <div id={`mission-detail-${index}`} className={styles.missionContent} hidden={openMission!==index}><p>{item.text}</p><span>{item.tag}</span></div>
       </article>
      </Reveal>)}</div>
    </section>

    <section className={styles.projects} aria-labelledby="construction-projects-heading">
      <Reveal className={styles.projectHeading}><div><p className={styles.eyebrow}>DES PROJETS, PRÈS DE CHEZ VOUS</p><h2 id="construction-projects-heading">D’une idée.<br/><em>À une adresse.</em></h2></div><p>Basé à Grenade, j’accompagne les particuliers en Haute-Garonne. Découvrez les projets présentés à Grenade, Fronton et Launac pour vous projeter dans votre future maison.</p></Reveal>
      <div className={styles.projectGrid}>{projects.map((item,index)=><Reveal key={item.slug} className={index===1?styles.projectOffset:undefined}>
       <Link href={`/projets/${item.slug}`} className={styles.projectCard}><div className={styles.projectImage}><Image src={item.image} alt={`Projet de maison individuelle présenté par LPM à ${item.city}`} fill sizes="(max-width: 700px) 90vw, 30vw"/><span className={styles.projectIndex}>0{index+1} / 03</span><span className={styles.projectArrow}><ArrowUpRight size={23} strokeWidth={1}/></span></div><div className={styles.projectCaption}><h3>{item.city}</h3><span>{item.detail}</span></div></Link>
      </Reveal>)}</div>
      <p className={styles.projectNote}>Plans, vues de conception et autres visuels à découvrir dans les fiches projets.</p>
    </section>

    <section className={styles.resources} aria-labelledby="preparer-construction">
      <div><p className={styles.eyebrow}>LES BONNES QUESTIONS, DÈS LE DÉPART</p><h2 id="preparer-construction">Préparons<br/><em>votre premier échange.</em></h2></div>
      <div className={styles.resourceContent}>
        <details><summary>Que préparer pour notre premier rendez-vous ?</summary><p>La commune du projet, les documents de votre terrain si vous en disposez, vos besoins et votre enveloppe financière. Une première idée suffit pour commencer à identifier les étapes à préparer.</p></details>
        <details><summary>Comment sont définis les honoraires et le budget ?</summary><p>Ma proposition précise les honoraires, les prestations incluses et les limites de la mission. Le coût des travaux se précise avec les études et les devis ; les modifications sont examinées pour leur effet sur le budget et le calendrier.</p></details>
        <details><summary>Comment se déroule le suivi du chantier ?</summary><p>Je coordonne les intervenants et suis l’avancement selon la mission convenue. Les échanges, les décisions et les visites sont organisés en tenant compte des étapes des travaux et des règles de sécurité.</p></details>
        <nav className={styles.resourceLinks} aria-label="Guides pour préparer votre construction"><Link href="/guides/etapes-construction-maison-individuelle">Les étapes de votre construction <ArrowUpRight size={15}/></Link><Link href="/guides/maitre-oeuvre-architecte-constructeur">Comprendre les missions et les contrats <ArrowUpRight size={15}/></Link><Link href="/guides/norme-re2020-construction-maison">Préparer une maison RE2020 <ArrowUpRight size={15}/></Link></nav>
      </div>
    </section>

    <section id="projet-construction" className={styles.contact} aria-labelledby="construction-contact-heading"><Reveal>
      <p className={styles.eyebrow}>VOTRE MAISON COMMENCE ICI</p><h2 id="construction-contact-heading">Et si l’on parlait<br/><em>de votre projet ?</em></h2><p>Un terrain, une première idée, une envie de construire.<br/>Parlons de vos besoins, de votre localisation et de votre budget.</p>
      <div className={styles.contactActions}><Link href="/#contact" className={styles.goldButton}>DÉCRIRE MON PROJET<ArrowUpRight size={17} strokeWidth={1.3}/></Link><a href="tel:+33782922112" className={styles.phoneLink}>07 82 92 21 12<ArrowRight size={17} strokeWidth={1}/></a></div>
      <address>Loïc Petit — LPM<br/>7 rue des Églantiers, 31330 Grenade<br/>Du lundi au vendredi, de 8 h à 18 h</address>
    </Reveal></section>
   </>}
 </div>;
}
