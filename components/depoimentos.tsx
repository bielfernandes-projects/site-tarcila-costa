"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { depoimentos } from "@/data/mock";

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand mt-3 mb-4 leading-tight">
            O que dizem por aqui
          </h2>
          <p className="text-brand-light leading-relaxed">
            Histórias reais de quem já trilhou esse caminho comigo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {depoimentos.map((depoimento, index) => (
            <motion.div
              key={depoimento.iniciais}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-sand rounded-xl p-8 border border-sand-dark relative"
            >
              <Quote
                size={32}
                className="text-brand/10 absolute top-6 right-6"
              />

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="text-brand-light leading-relaxed text-sm mb-6 relative z-10">
                &ldquo;{depoimento.texto}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-brand/10">
                <span className="text-sm font-semibold text-brand">
                  {depoimento.iniciais}
                </span>
                <span className="text-xs text-accent font-medium">
                  {depoimento.foco}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
