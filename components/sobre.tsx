"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Sobre() {
  return (
    <section id="sobre" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:col-span-2"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-sand-dark relative shadow-lg">
              <Image
                src="/images/sobre.webp"
                alt="Tarcila Costa - Psicóloga"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="md:col-span-3"
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              A Profissional
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand mt-3 mb-6 leading-tight">
              Oi, sou a Tarcila :)
            </h2>

            <div className="space-y-5 text-brand-light leading-relaxed text-base md:text-lg">
              <p>
                Sou psicóloga, especialista em Terapia Cognitivo-Comportamental
                (TCC) e em Avaliação Psicológica e Neuropsicodiagnóstico. Atuo
                na clínica com crianças, adolescentes, adultos e idosos.
              </p>
              <p>
                Para mim, a psicoterapia é um trabalho em equipe. É como se você
                estivesse em uma trajetória e eu fosse a profissional que trilha
                esse caminho <strong>COM</strong> você, e não{" "}
                <strong>POR</strong> você.
              </p>
              <p>
                Escolhi o labirinto como meu símbolo pois ele traz a ideia da
                não linearidade da vida e da importância de tentar novos
                percursos para atingir nossos objetivos.
              </p>
            </div>

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
        </div>
      </div>
    </section>
  );
}
