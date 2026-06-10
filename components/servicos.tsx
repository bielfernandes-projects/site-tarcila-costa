"use client";

import { motion } from "framer-motion";
import { Brain, Search, Heart, Video } from "lucide-react";
import { servicos } from "@/data/mock";

const iconeMap: Record<string, React.ReactNode> = {
  Brain: <Brain size={28} />,
  Search: <Search size={28} />,
  Heart: <Heart size={28} />,
  Video: <Video size={28} />,
};

export default function Servicos() {
  return (
    <section id="servicos" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Especialidades
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand mt-3 mb-4 leading-tight">
            Como posso te ajudar
          </h2>
          <p className="text-brand-light leading-relaxed">
            Cada jornada é única. Conheça as formas de cuidado que ofereço para
            diferentes necessidades.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicos.map((servico, index) => (
            <motion.div
              key={servico.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-sand rounded-xl p-8 hover:bg-brand/5 border border-sand-dark hover:border-brand/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                {iconeMap[servico.icone]}
              </div>
              <h3 className="font-serif text-xl text-brand font-semibold mb-3">
                {servico.titulo}
              </h3>
              <p className="text-brand-light leading-relaxed text-sm">
                {servico.descricao}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
