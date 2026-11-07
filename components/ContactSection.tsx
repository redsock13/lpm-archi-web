"use client";

import useSectionEffects from "./useSectionEffects";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

// ─── Informations officielles LPM ────────────────────────────────────────────
const CONTACT = {
  name:    "Loïc Petit",
  title:   "Maître d'œuvre",
  phone:   "07 82 92 21 12",
  phoneTel: "tel:+33782922112",
  email:   "contact@lpmoe.com",
  address: "7 rue des Églantiers, 31330 Grenade",
};

const BUDGETS = [
  "< 100 000 €",
  "100 000 – 150 000 €",
  "150 000 – 200 000 €",
  "200 000 – 250 000 €",
  "> 250 000 €",
  "Non défini",
];

// ─── Styles réutilisables ─────────────────────────────────────────────────────
const inputBase =
  "w-full bg-transparent border-b text-[#F5F0E8] placeholder:text-[#8A8A8A]/45 " +
  "py-4 text-sm outline-none transition-all duration-300 font-light tracking-wide " +
  "focus:placeholder:text-[#8A8A8A]/20";

const borderActive   = "border-[#D4AF37]/70";
const borderInactive = "border-[#1c1c1c] hover:border-[#2a2a2a]";

// ─── Component ───────────────────────────────────────────────────────────────

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const effectsReady = useSectionEffects(sectionRef);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName:  "",
    phone:     "",
    email:     "",
    city:      "",
    budget:    "",
    message:   "",
  });
  const [focused,   setFocused]   = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending,   setSending]   = useState(false);
  const [error,     setError]     = useState<string | null>(null);

  // ── Scroll reveal ───────────────────────────────────────────────────────
  useEffect(() => {
    if (!effectsReady) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".contact-reveal") ?? [],
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [effectsReady]);

  // ── Handlers ────────────────────────────────────────────────────────────
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Erreur réseau.");
      }

      setSubmitted(true);
      sendGAEvent("event", "generate_lead", {
        method: "contact_form",
        city: formData.city || undefined,
        budget: formData.budget || undefined,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setSending(false);
    }
  };

  const b = (name: string) => (focused === name ? borderActive : borderInactive);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-36 px-6 md:px-12 lg:px-20 bg-[#080808]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 xl:gap-28">

          {/* ── Colonne gauche — infos ──────────────────────────────── */}
          <div>
            <div className="contact-reveal">
              <p className="text-[#C9A84C] tracking-[0.45em] text-[10px] uppercase mb-5 font-light">
                Contact
              </p>
              <h2
                id="contact-heading"
                className="text-4xl md:text-5xl font-bold text-[#F5F0E8] leading-[1.1] tracking-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Parlons de<br />
                <span className="italic font-light text-[#C9A84C]">votre projet</span>
              </h2>
            </div>

            <div className="contact-reveal mt-8 w-12 h-px bg-[#C9A84C]" />

            <p className="contact-reveal mt-8 text-[#8A8A8A] text-sm leading-[1.9] font-light max-w-sm">
              Chaque maison naît d&apos;une conversation. Décrivez-nous votre
              projet — je reviendrai vers vous pour en discuter.
            </p>

            {/* Coordonnées officielles */}
            <div className="contact-reveal mt-12 flex flex-col gap-5">
              {/* Adresse */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-[#C9A84C]/25 group-hover:border-[#C9A84C]/60 flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                     aria-hidden="true">
                  <MapPin size={15} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <span className="text-[#8A8A8A] text-sm font-light group-hover:text-[#F5F0E8]/70 transition-colors duration-300">
                  {CONTACT.address}
                </span>
              </div>

              {/* Téléphone — lien cliquable sur mobile */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-[#C9A84C]/25 group-hover:border-[#C9A84C]/60 flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                     aria-hidden="true">
                  <Phone size={15} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <a
                  href={CONTACT.phoneTel}
                  onClick={() => sendGAEvent("event", "phone_click", { source: "contact_section" })}
                  className="text-[#8A8A8A] text-sm font-light group-hover:text-[#D4AF37] transition-colors duration-300"
                  aria-label={`Appeler Loïc Petit au ${CONTACT.phone}`}
                >
                  <span className="text-[#D4AF37]/60 text-[9px] tracking-[0.3em] uppercase block mb-0.5 font-light">
                    Appeler maintenant
                  </span>
                  {CONTACT.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-[#C9A84C]/25 group-hover:border-[#C9A84C]/60 flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                     aria-hidden="true">
                  <Mail size={15} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <a
                  href={`mailto:${CONTACT.email}`}
                  onClick={() => sendGAEvent("event", "email_click", { source: "contact_section" })}
                  className="text-[#8A8A8A] text-sm font-light group-hover:text-[#D4AF37] transition-colors duration-300"
                  aria-label={`Envoyer un email à ${CONTACT.email}`}
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>

            {/* Signature */}
            <div className="contact-reveal mt-16 pl-6 border-l border-[#C9A84C]/30">
              <p className="text-[#F5F0E8]/40 text-sm italic font-light leading-relaxed">
                  &ldquo;Un chantier se suit avec attention. J’organise les échanges
                  et les visites avec les intervenants, dans le respect des règles de sécurité.&rdquo;
              </p>
              <p
                className="text-[#D4AF37]/70 mt-3 text-base"
                style={{ fontFamily: "var(--font-dancing)" }}
              >
                {CONTACT.name} · {CONTACT.title}
              </p>
            </div>
          </div>

          {/* ── Colonne droite — formulaire ─────────────────────────── */}
          <div className="contact-reveal">
            <AnimatePresence mode="wait">
              {submitted ? (
                /* ── Succès ─────────────────────────────────────────── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center h-full py-24 text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 180, damping: 14 }}
                    className="w-20 h-20 border border-[#D4AF37]/50 flex items-center justify-center mb-10"
                    aria-hidden="true"
                  >
                    <Send className="text-[#D4AF37]" size={24} strokeWidth={1.5} />
                  </motion.div>

                  <h3
                    className="text-3xl font-bold text-[#F5F0E8] mb-4 tracking-tight"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Projet transmis
                  </h3>

                  <p className="text-[#8A8A8A] text-sm font-light leading-[1.9] max-w-xs">
                    Votre projet a été transmis avec succès.{" "}
                    <strong className="text-[#F5F0E8]/70 font-medium">Loïc Petit</strong>{" "}
                    reviendra vers vous pour échanger sur votre maison.
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-[#D4AF37]/50 text-[9px] tracking-[0.3em] uppercase font-light">
                    <div className="w-6 h-px bg-[#D4AF37]/30" />
                    <span>LPM · Haute-Garonne</span>
                    <div className="w-6 h-px bg-[#D4AF37]/30" />
                  </div>
                </motion.div>

              ) : (
                /* ── Formulaire ─────────────────────────────────────── */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-8"
                  aria-label="Formulaire de contact LPM"
                >
                  {/* Row 1 — Prénom | Nom */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="firstName" className="sr-only">Prénom</label>
                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="Prénom *"
                        autoComplete="given-name"
                        value={formData.firstName}
                        onChange={handleChange}
                        onFocus={() => setFocused("firstName")}
                        onBlur={() => setFocused(null)}
                        required
                        className={`${inputBase} ${b("firstName")}`}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="sr-only">Nom</label>
                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Nom *"
                        autoComplete="family-name"
                        value={formData.lastName}
                        onChange={handleChange}
                        onFocus={() => setFocused("lastName")}
                        onBlur={() => setFocused(null)}
                        required
                        className={`${inputBase} ${b("lastName")}`}
                      />
                    </div>
                  </div>

                  {/* Row 2 — Téléphone | Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="phone" className="sr-only">Téléphone</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="Téléphone"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                        className={`${inputBase} ${b("phone")}`}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email *"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        required
                        className={`${inputBase} ${b("email")}`}
                      />
                    </div>
                  </div>

                  {/* Row 3 — Ville | Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="city" className="sr-only">Ville du projet</label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        placeholder="Ville du projet"
                        value={formData.city}
                        onChange={handleChange}
                        onFocus={() => setFocused("city")}
                        onBlur={() => setFocused(null)}
                        className={`${inputBase} ${b("city")}`}
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="budget" className="sr-only">Budget estimé</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        onFocus={() => setFocused("budget")}
                        onBlur={() => setFocused(null)}
                        className={`${inputBase} appearance-none ${b("budget")} ${
                          !formData.budget ? "text-[#8A8A8A]/45" : "text-[#F5F0E8]"
                        }`}
                      >
                        <option value="" style={{ background: "#111" }}>
                          Budget estimé
                        </option>
                        {BUDGETS.map((b) => (
                          <option key={b} value={b} style={{ background: "#111" }}>
                            {b}
                          </option>
                        ))}
                      </select>
                      <span className="absolute right-0 bottom-4 text-[#8A8A8A]/50 pointer-events-none text-xs"
                            aria-hidden="true">
                        ↓
                      </span>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Décrivez votre projet : style souhaité, superficie, terrain disponible… *"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      rows={5}
                      required
                      className={`${inputBase} resize-none ${b("message")}`}
                    />
                  </div>

                  {/* RGPD */}
                  <p className="text-[#8A8A8A]/45 text-[10px] font-light leading-[1.7] tracking-wide">
                    En envoyant ce formulaire, vous acceptez que vos données soient
                    utilisées uniquement pour vous recontacter dans le cadre de votre
                    projet de construction, conformément au{" "}
                    <abbr title="Règlement Général sur la Protection des Données">RGPD</abbr>.
                  </p>

                  {/* Erreur serveur */}
                  {error && (
                    <p className="text-red-400/70 text-xs font-light tracking-wide" role="alert">
                      {error}
                    </p>
                  )}

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                    <p className="text-[#8A8A8A]/40 text-[10px] font-light tracking-[0.2em] uppercase">
                      Échange direct avec Loïc Petit
                    </p>

                    <button
                      type="submit"
                      disabled={sending}
                      className="gold-btn-shine group flex items-center gap-3 px-9 py-4
                                 text-[10px] tracking-[0.35em] uppercase cursor-pointer
                                 disabled:opacity-60 disabled:cursor-not-allowed
                                 transition-opacity duration-300"
                      aria-label="Envoyer votre message de contact"
                    >
                      <span>{sending ? "Envoi…" : "Envoyer"}</span>
                      <Send
                        size={13}
                        strokeWidth={2.5}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
