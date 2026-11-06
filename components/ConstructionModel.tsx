"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { RotateCcw, MoveHorizontal } from "lucide-react";
import styles from "./ConstructionExperience.module.css";

type Point = [number, number, number];
type Face = { id: string; points: Point[]; fill: string; stroke?: string; opacity?: number };

const GOLD = "#c9a84c";

function box(id: string, x: number, z: number, w: number, d: number, y: number, h: number, colors: string[]): Face[] {
  return [
    { id: `${id}-front`, points: [[x,y,z+d],[x+w,y,z+d],[x+w,y+h,z+d],[x,y+h,z+d]], fill: colors[0] },
    { id: `${id}-side`, points: [[x+w,y,z],[x+w,y,z+d],[x+w,y+h,z+d],[x+w,y+h,z]], fill: colors[1] },
    { id: `${id}-top`, points: [[x,y+h,z],[x+w,y+h,z],[x+w,y+h,z+d],[x,y+h,z+d]], fill: colors[2] },
  ];
}

export default function ConstructionModel({ phase }: { phase: number }) {
  const [yaw, setYaw] = useState(35);
  const drag = useRef<{ x: number; yaw: number } | null>(null);
  const reduceMotion = useReducedMotion();
  const project = ([x,y,z]: Point): [number,number] => {
    const angle = yaw * Math.PI / 180;
    const rx = x * Math.cos(angle) - z * Math.sin(angle);
    const rz = x * Math.sin(angle) + z * Math.cos(angle);
    return [350 + rx * 42, 310 + rz * 18 - y * 49];
  };
  const path = (points: Point[], close = true) => points.map((point,i) => `${i ? "L" : "M"}${project(point).map(n=>n.toFixed(2)).join(",")}`).join(" ") + (close ? " Z" : "");
  const roofY = phase === 0 ? 4.2 : phase === 1 ? 3.3 : 2.45;
  const wallColors = phase === 0 ? ["#262722", "#191c18", "#33352c"] : ["#c9c3ae", "#96957e", "#e5deca"];
  const faces: Face[] = [
    ...box("terrain",-4.9,-3.4,9.8,6.8,-.38,.16,["#29271f","#1d211c","#333a2b"]),
    ...box("terrasse",-4.2,-2.9,8.5,5.9,-.22,.16,["#3e3c32","#313027","#6d6a56"]),
    ...box("dalle",-3.5,-2.1,7,4.2,-.06,.18,["#777365","#55574a","#b6b19b"]),
    ...box("garage",1.65,-1.95,1.8,3.85,.12,1.7,wallColors),
    ...box("maison",-3.4,-2,5.05,4,.12,2.23,wallColors),
    { id:"baie", points:[[-3.13,.35,2.015],[.95,.35,2.015],[.95,2.06,2.015],[-3.13,2.06,2.015]], fill: phase===0 ? "#141814" : "#263b37", stroke:"#b9b298" },
    { id:"reflet", points:[[-3.1,2.02,2.025],[-1.3,2.02,2.025],[-2.6,.38,2.025],[-3.1,.38,2.025]], fill:"#7a9380", opacity:.25 },
    { id:"garage-porte", points:[[1.85,.13,1.915],[3.22,.13,1.915],[3.22,1.48,1.915],[1.85,1.48,1.915]], fill:"#33392e", stroke:"#a6a28c" },
    ...box("toit-garage",1.5,-2.1,2.1,4.15,roofY-.48,.16,["#807b64","#5c5e4b","#c7c2aa"]),
    ...box("toit",-3.58,-2.2,5.4,4.4,roofY,.19,["#a19a7f","#70735e","#e1d9bd"]),
    ...box("acces",2.05,2.15,1.1,1.25,-.04,.04,["#5d5d4e","#4b4b40","#b5b09b"]),
  ];
  const dimension: Point[] = [[-3.5,0,3.1],[3.5,0,3.1]];
  const roofAnchor=project([1.5,roofY+.2,-1.9]);
  const slabAnchor=project([-3.5,.1,2.1]);

  return (
    <div className={styles.modelShell}>
      <div className={styles.modelTopline}><span>ATELIER LPM</span><span>VUE AXONOMÉTRIQUE / 0{phase+1}</span></div>
      <div
        className={styles.modelViewport}
        onPointerDown={event=>{
          if(event.pointerType!=="mouse") return;
          drag.current={x:event.clientX,yaw};
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={event=>{
          if(!drag.current) return;
          setYaw(Math.max(12,Math.min(65,drag.current.yaw+(event.clientX-drag.current.x)*.15)));
        }}
        onPointerUp={()=>{drag.current=null;}}
        onPointerCancel={()=>{drag.current=null;}}
      >
        <svg viewBox="0 0 700 490" role="img" aria-label={`Illustration 3D de principe d’une maison, étape ${phase+1} : ${["conception et volumes","coordination du chantier","maison assemblée"][phase]}`}>
          <defs>
            <radialGradient id="lpm-model-halo"><stop stopColor="#b89b50" stopOpacity=".11"/><stop offset="1" stopColor="#b89b50" stopOpacity="0"/></radialGradient>
            <linearGradient id="lpm-model-sky" x2="0" y2="1"><stop stopColor="#e0d8bc"/><stop offset="1" stopColor="#8f9a83"/></linearGradient>
          </defs>
          <ellipse cx="350" cy="300" rx="310" ry="200" fill="url(#lpm-model-halo)"/>
          <g stroke="#c9a84c" strokeOpacity=".10" strokeWidth=".6" fill="none">
            {Array.from({length:19},(_,i)=>i-9).map(n=><path key={`x${n}`} d={path([[n,0,-7],[n,0,7]],false)}/>)}
            {Array.from({length:15},(_,i)=>i-7).map(n=><path key={`z${n}`} d={path([[-9,0,n],[9,0,n]],false)}/>)}
          </g>
          <g stroke="#d8ca9f" strokeWidth=".75" strokeLinejoin="round">
            {faces.map(face=><motion.path key={face.id} initial={false} animate={{d:path(face.points),fill:face.fill,opacity:face.opacity??(phase===0?.66:1)}} transition={{duration:reduceMotion?0:.85,ease:[.22,1,.36,1]}} stroke={face.stroke??"#2a2b22"}/>) }
          </g>
          <g stroke={GOLD} strokeWidth=".8" fill="none" opacity=".7">
            {[-1.8,-.44].map(x=><path key={x} d={path([[x,.35,2.04],[x,2.06,2.04]],false)}/>)}
            {phase!==2 && [-3.4,1.65].map(x=><path key={x} d={path([[x,2.4,-2],[x,roofY,-2]],false)} strokeDasharray="3 5"/>)}
            <path d={path(dimension,false)} strokeDasharray="2 5"/>
            <path d={path([[-3.5,0,2.9],[-3.5,0,3.3]],false)}/><path d={path([[3.5,0,2.9],[3.5,0,3.3]],false)}/>
          </g>
          <g fontFamily="var(--font-sora), sans-serif" fontSize="8" letterSpacing="1.5" fill="#b6ab87">
            <motion.path animate={{d:`M${roofAnchor.join(",")} L565,125 L630,125`}} transition={{duration:reduceMotion?0:.85}} fill="none" stroke="#c9a84c" strokeWidth=".6"/>
            <text x="565" y="114">{phase===0?"VOLUMES & LUMIÈRE":phase===1?"CHAQUE ÉTAPE COMPTE":"UNE MAISON À VIVRE"}</text>
            <path d={`M${slabAnchor.join(",")} L95,365 L45,365`} fill="none" stroke="#c9a84c" strokeWidth=".6"/>
            <text x="45" y="383">VOTRE TERRAIN</text>
            <text x="350" y="437" textAnchor="middle" opacity=".6">ILLUSTRATION DE PRINCIPE · MODÈLE NON CONTRACTUEL</text>
          </g>
          <g transform="translate(605 390)" stroke="#c9a84c" fill="none" strokeWidth=".7"><circle r="19"/><path d="M0 -28V28M-28 0H28M0 -16L4 0L0 16L-4 0Z"/><text x="0" y="-34" textAnchor="middle" fill="#c9a84c" stroke="none" fontSize="8">N</text></g>
        </svg>
      </div>
      <div className={styles.modelControls}>
        <span><MoveHorizontal size={13} strokeWidth={1}/><span>Explorez les volumes</span></span>
        <label className={styles.angleControl}><span className="sr-only">Orientation de la maquette</span><input aria-label="Orientation de la maquette" type="range" min="12" max="65" value={yaw} onChange={e=>setYaw(Number(e.target.value))}/></label>
        <button type="button" onClick={()=>setYaw(35)} aria-label="Réinitialiser la vue 3D"><RotateCcw size={14} strokeWidth={1.2}/></button>
      </div>
    </div>
  );
}
