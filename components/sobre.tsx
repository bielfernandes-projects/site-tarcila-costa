"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

const textVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOutQuart } },
};

const photoVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: easeOutQuart } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const paraVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOutQuart } },
};

export default function Sobre() {
  const [sobreError, setSobreError] = useState(false);

  return (
    <section id="sobre" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-3 md:order-2"
          >
            <span className="text-brand-light text-sm font-semibold uppercase tracking-wider">
              A Profissional
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand mt-3 mb-6 leading-tight">
              Oi, sou a Tarcila :)
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5 text-brand-light leading-relaxed text-base md:text-lg"
            >
              <motion.p variants={paraVariants}>
                Sou psicóloga, especialista em Terapia Cognitivo-Comportamental
                (TCC) e em Avaliação Psicológica e Neuropsicodiagnóstico. Atuo
                na clínica com crianças, adolescentes, adultos e idosos.
              </motion.p>
              <motion.p variants={paraVariants}>
                Para mim, a psicoterapia é um trabalho em equipe. É como se você
                estivesse em uma trajetória e eu fosse a profissional que trilha
                esse caminho <strong>COM</strong> você, e não{" "}
                <strong>POR</strong> você.
              </motion.p>
              <motion.p variants={paraVariants}>
                Escolhi o labirinto como meu símbolo pois ele traz a ideia da
                não linearidade da vida e da importância de tentar novos
                percursos para atingir nossos objetivos.
              </motion.p>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "TCC",
                "Neuropsicologia",
                "Infantojuvenil",
                "Adulto",
                "Idoso",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-brand/5 text-brand text-sm font-medium px-4 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={photoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-2 md:order-1"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-sand-dark relative shadow-lg">
              {sobreError ? (
                <div className="absolute inset-0 flex items-center justify-center bg-sand-dark">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-2">
                      <span className="font-serif text-xl text-brand font-semibold">TC</span>
                    </div>
                    <span className="text-xs text-brand-light">Tarcila Costa</span>
                  </div>
                </div>
              ) : (
                <Image
                  src="/images/sobre.webp"
                  alt="Tarcila Costa - Psicóloga"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  onError={() => setSobreError(true)}
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
