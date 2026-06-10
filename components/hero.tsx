"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { whatsappLink } from "@/data/mock";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sand via-sand to-brand/5 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 w-full py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Sparkles size={16} />
              <span>Psicoterapia e Avaliação Neuropsicológica</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand leading-tight font-semibold mb-6">
              Cuidar da sua trajetória emocional é o primeiro passo para o
              bem-estar.
            </h1>

            <p className="text-lg md:text-xl text-brand-light leading-relaxed mb-8 max-w-lg">
              Psicoterapia e Avaliação Neuropsicológica em Fortaleza e On-line.
              Um espaço seguro para trilharmos novos caminhos juntos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand text-white font-medium px-7 py-4 rounded-xl hover:bg-brand-light transition-all shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30 text-base"
              >
                Agendar Primeira Sessão
                <ArrowRight size={20} />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand/20 text-brand font-medium px-7 py-4 rounded-xl hover:bg-brand/5 transition-colors text-base"
              >
                Conhecer mais
              </a>
            </div>

            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-brand/10">
              <div className="flex flex-col">
                <span className="text-xs text-brand-light">CRP</span>
                <span className="text-sm font-semibold text-brand">
                  11/22251
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-brand-light">Atendimento</span>
                <span className="text-sm font-semibold text-brand">
                  Presencial e On-line
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-sand-dark shadow-2xl">
              <Image
                src="/images/hero.webp"
                alt="Tarcila Costa - Psicóloga"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-brand/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
