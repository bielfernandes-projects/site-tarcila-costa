"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Camera, ArrowRight } from "lucide-react";
import { contatoInfo, whatsappLink } from "@/data/mock";

export default function Contato() {
  return (
    <section id="contato" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Contato
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand mt-3 mb-4 leading-tight">
            Vamos conversar?
          </h2>
          <p className="text-brand-light leading-relaxed">
            Estou aqui para ouvir você. Agende sua sessão ou tire suas dúvidas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center flex-shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-brand mb-1">Endereço</h3>
                <p className="text-brand-light text-sm leading-relaxed">
                  {contatoInfo.endereco}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center flex-shrink-0">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-brand mb-1">E-mail</h3>
                <a
                  href={`mailto:${contatoInfo.email}`}
                  className="text-brand-light text-sm hover:text-brand transition-colors"
                >
                  {contatoInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center flex-shrink-0">
                <Camera size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-brand mb-1">Instagram</h3>
                <a
                  href={contatoInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-light text-sm hover:text-brand transition-colors"
                >
                  {contatoInfo.instagram}
                </a>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand text-white font-medium px-8 py-4 rounded-xl hover:bg-brand-light transition-all shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30 text-base w-full sm:w-auto"
              >
                Quero agendar minha sessão
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-sand rounded-xl p-6 md:p-8 border border-sand-dark flex flex-col items-center justify-center text-center h-full"
          >
            <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-4">
              <MapPin size={22} />
            </div>
            <h3 className="font-serif text-lg text-brand font-semibold mb-2">
              {contatoInfo.endereco}
            </h3>
            <p className="text-brand-light leading-relaxed text-sm max-w-sm">
              Atendimento presencial em ambiente acolhedor e sigiloso, além de
              sessões on-line para todo o Brasil.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              <span className="bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full">
                Presencial
              </span>
              <span className="bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full">
                On-line
              </span>
              <span className="bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full">
                Sigilo Garantido
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
