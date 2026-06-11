"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { contatoInfo, whatsappLink } from "@/data/mock";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Avaliação", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sand/90 backdrop-blur-md border-b border-sand-dark">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center">
        <a href="#" className="flex items-center gap-3 flex-shrink-0">
          <div className="relative w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center overflow-hidden">
            <Image
              src="/images/logo-tarcila.png?v=2"
              alt="Tarcila Costa"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="hidden md:block">
            <span className="font-serif text-lg text-brand font-semibold leading-tight block">
              Tarcila Costa
            </span>
            <span className="text-xs text-brand-light">{contatoInfo.crp}</span>
          </div>
        </a>

        <div className="flex-1 flex justify-center md:hidden">
          <div className="flex flex-col items-center leading-tight">
            <span className="font-serif text-lg text-brand font-semibold">
              Tarcila Costa
            </span>
            <span className="text-xs text-brand-light">{contatoInfo.crp}</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1 ml-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-brand-light hover:text-brand rounded-lg hover:bg-brand/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 bg-brand text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-brand-light transition-colors"
          >
            Agendar
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg text-brand-light hover:text-brand hover:bg-brand/5 transition-colors"
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-sand-dark bg-sand">
          <nav className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-brand-light hover:text-brand hover:bg-brand/5 rounded-lg transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-brand text-white text-sm font-medium px-4 py-3 rounded-lg hover:bg-brand-light transition-colors"
            >
              Agendar Primeira Sessão
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
