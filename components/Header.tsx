"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Construction", href: "/construction-maison-individuelle" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? "py-2 md:py-3 backdrop-blur-xl bg-[#080808]/80 border-b border-[#C9A84C]/10"
          : "py-3 md:py-4 backdrop-blur-md bg-gradient-to-b from-[#000000]/70 to-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="relative z-10 flex items-center">
        <Image
          src="/lpm-logo.png"
          alt="LPM"
          width={637}
          height={391}
          className="w-[90px] md:w-[102px] h-auto object-contain"
          style={{ filter: "brightness(0) invert(1)" }}
          priority
        />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative text-xs tracking-[0.2em] text-[#F5F0E8]/60 hover:text-[#C9A84C] transition-colors duration-300 uppercase group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
        <Link
          href="/#contact"
          className="text-xs tracking-[0.2em] uppercase px-7 py-3 border border-[#C9A84C]/40 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#080808] transition-all duration-300 font-medium"
        >
          Nous Contacter
        </Link>
      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-[#F5F0E8] relative z-10 p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <AnimatePresence mode="wait">
          {menuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-[#080808]/95 backdrop-blur-2xl border-b border-[#C9A84C]/10 px-6 py-10 flex flex-col gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-light tracking-[0.1em] text-[#F5F0E8]/80 hover:text-[#C9A84C] transition-colors uppercase"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="pt-4 border-t border-[#1c1c1c] text-xs text-[#8A8A8A] tracking-widest"
            >
              contact@lpmoe.com
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
