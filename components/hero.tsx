"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { whatsappLink } from "@/data/mock";

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutQuart } },
};

const slideUpBlur = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: easeOutQuart } },
};

export default function Hero() {
  const [heroError, setHeroError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sand via-sand to-brand/5 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 w-full py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={slideUp} className="inline-flex items-center gap-2 bg-brand/10 text-brand text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Sparkles size={16} />
              <span>Psicoterapia e Avaliação Neuropsicológica</span>
            </motion.div>

            <motion.h1 variants={slideUpBlur} className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand leading-tight font-semibold mb-6">
              Cuidar da sua trajetória emocional é o primeiro passo para o
              bem-estar.
            </motion.h1>

            <motion.p variants={slideUp} className="text-lg md:text-xl text-brand-light leading-relaxed mb-8 max-w-lg">
              Psicoterapia e Avaliação Neuropsicológica em Fortaleza e On-line.
              Um espaço seguro para trilharmos novos caminhos juntos.
            </motion.p>

            <motion.div variants={slideUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand text-white font-medium px-7 py-4 rounded-xl hover:bg-brand-light transition-all shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30 text-base hover:scale-[1.02] active:scale-[0.98]"
              >
                Agendar Primeira Sessão
                <ArrowRight size={20} />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand/20 text-brand font-medium px-7 py-4 rounded-xl hover:bg-brand/5 transition-colors text-base hover:scale-[1.02] active:scale-[0.98]"
              >
                Conhecer mais
              </a>
            </motion.div>

            <motion.div
              variants={slideUp}
              className="flex items-center gap-6 mt-8 pt-8 border-t border-brand/10"
            >
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
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: easeOutQuart }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-sand-dark shadow-2xl">
              {heroError ? (
                <div className="absolute inset-0 flex items-center justify-center bg-sand-dark">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-3">
                      <span className="font-serif text-2xl text-brand font-semibold">TC</span>
                    </div>
                    <span className="text-xs text-brand-light">Tarcila Costa</span>
                  </div>
                </div>
              ) : (
                <Image
                  src="/images/hero.webp"
                  alt="Tarcila Costa - Psicóloga"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={() => setHeroError(true)}
                />
              )}
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-brand/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
