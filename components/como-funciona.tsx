"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { passosAvaliacao, whatsappLinkAvaliacao } from "@/data/mock";

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOutQuart }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="w-8 h-px bg-brand/10 mx-auto mb-5" />
          <h2 className="font-serif text-3xl md:text-4xl text-brand mb-4 leading-tight">
            Como funciona a Avaliação Neuropsicológica
          </h2>
          <p className="text-brand-light leading-relaxed">
            Mais do que identificar dificuldades: um mergulho para compreender
            suas potencialidades e direcionar intervenções precisas.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-brand/10 hidden md:block" />

          <div className="space-y-12">
            {passosAvaliacao.map((passo, index) => (
              <motion.div
                key={passo.passo}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: easeOutQuart }}
                className="relative flex gap-6 md:gap-8"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: easeOutQuart }}
                  className="relative z-10 flex-shrink-0 w-16 h-16 rounded-xl bg-brand text-white flex items-center justify-center font-serif text-lg font-bold shadow-lg shadow-brand/20"
                >
                  {passo.passo}
                </motion.div>

                <div className="flex-1 pt-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Check size={16} className="text-brand flex-shrink-0" />
                    <h3 className="font-serif text-xl text-brand font-semibold">
                      {passo.titulo}
                    </h3>
                  </div>
                  <p className="text-brand-light leading-relaxed">
                    {passo.descricao}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href={whatsappLinkAvaliacao}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand text-white font-medium px-8 py-4 rounded-xl hover:bg-brand-light transition-all shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30 text-base"
          >
            Quero saber mais sobre a Avaliação
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
