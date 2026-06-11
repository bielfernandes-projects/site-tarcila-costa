import { contatoInfo } from "@/data/mock";
import { Camera, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-xl text-white font-semibold mb-3">
              Tarcila Costa
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Psicóloga especialista em TCC e Avaliação Neuropsicológica.
              Atendimento presencial em Fortaleza-CE e on-line para todo o
              Brasil.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contato
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${contatoInfo.telefone}`}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Phone size={14} />
                {contatoInfo.telefone}
              </a>
              <a
                href={`mailto:${contatoInfo.email}`}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Mail size={14} />
                {contatoInfo.email}
              </a>
              <a
                href={contatoInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Camera size={14} />
                {contatoInfo.instagram}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Profissional
            </h4>
            <p className="text-white/70 text-sm">{contatoInfo.crp}</p>
            <p className="text-white/70 text-sm mt-1">
              Especialista em TCC e Avaliação Psicológica e Neuropsicodiagnóstico
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Tarcila Costa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
