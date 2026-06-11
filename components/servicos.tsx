"use client";

import { motion } from "framer-motion";
import { Brain, Search, Heart, Video, ArrowRight } from "lucide-react";
import { servicos, whatsappLink } from "@/data/mock";

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

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
          transition={{ duration: 0.5, ease: easeOutQuart }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-brand-light text-sm font-semibold uppercase tracking-wider">
            Especialidades
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand mt-3 mb-4 leading-tight">
            Como posso te ajudar
          </h2>
          <p className="text-brand-light leading-relaxed text-balance">
            Cada jornada é única. Conheça as formas de cuidado que ofereço para
            diferentes necessidades.
          </p>
        </motion.div>

        <div className="space-y-6">
          {servicos.slice(0, 1).map((servico) => (
            <motion.div
              key={servico.titulo}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: easeOutQuart }}
              whileHover={{ y: -4 }}
              className="relative bg-brand/5 rounded-xl p-8 md:p-10 border border-brand/20 flex flex-col md:flex-row gap-6 md:gap-10 items-start"
            >
              <div className="w-16 h-16 rounded-xl bg-brand text-white flex items-center justify-center flex-shrink-0">
                {iconeMap[servico.icone]}
              </div>
              <div className="flex-1">
                <span className="inline-block bg-brand/10 text-brand text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Abordagem
                </span>
                <h3 className="font-serif text-2xl text-brand font-semibold mb-3">
                  {servico.titulo}
                </h3>
                <p className="text-brand-light leading-relaxed max-w-xl">
                  {servico.descricao}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-light font-medium text-sm mt-4 hover:text-brand transition-colors"
                >
                  Agendar sessão <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}

          <div className="grid sm:grid-cols-3 gap-6">
            {servicos.slice(1).map((servico, index) => (
              <motion.div
                key={servico.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: easeOutQuart }}
                whileHover={{ y: -4 }}
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
      </div>
    </section>
  );
}
