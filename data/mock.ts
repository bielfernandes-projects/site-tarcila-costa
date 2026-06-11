export interface Servico {
  titulo: string;
  descricao: string;
  icone: string;
}

export interface FAQItem {
  pergunta: string;
  resposta: string;
}

export interface PassoAvaliacao {
  passo: number;
  titulo: string;
  descricao: string;
}

export const servicos: Servico[] = [
  {
    titulo: "Psicoterapia (TCC)",
    descricao:
      "Terapia Cognitivo-Comportamental com foco em identificar e modificar padrões de pensamentos disfuncionais que impactam suas emoções e comportamentos.",
    icone: "Brain",
  },
  {
    titulo: "Avaliação Neuropsicológica",
    descricao:
      "Investigação aprofundada de funções como atenção, memória, raciocínio e funções executivas para compreender potencialidades e direcionar intervenções precisas.",
    icone: "Search",
  },
  {
    titulo: "Atendimento Infantojuvenil e Adulto",
    descricao:
      "Abordagem baseada em evidências adaptada para cada fase da vida — da infância à terceira idade — respeitando as particularidades de cada ciclo.",
    icone: "Heart",
  },
  {
    titulo: "Atendimento On-line",
    descricao:
      "Sessões seguras e sigilosas realizadas de onde você estiver, com a mesma qualidade e compromisso do atendimento presencial.",
    icone: "Video",
  },
];

export const faqItems: FAQItem[] = [
  {
    pergunta: "Como funciona a Terapia Cognitivo-Comportamental (TCC)?",
    resposta:
      "A TCC é uma abordagem estruturada e focada no presente. Trabalhamos juntos para identificar pensamentos automáticos e crenças que geram sofrimento, substituindo-os por formas mais realistas e funcionais de enxergar a vida. Geralmente é uma terapia de médio prazo, com resultados concretos sessão a sessão.",
  },
  {
    pergunta: "O que é a Avaliação Neuropsicológica?",
    resposta:
      "É uma investigação detalhada do funcionamento cognitivo (atenção, memória, raciocínio, linguagem, funções executivas) através de testes padronizados. Serve para identificar potencialidades e dificuldades, auxiliando em diagnósticos diferenciais (como TDAH, Transtorno do Espectro Autista, depressão, entre outros) e direcionando intervenções precisas.",
  },
  {
    pergunta: "Você atende convênio?",
    resposta:
      "Não atendo por convênios mas emito recibos para Receita Saúde. Consulte seu plano para verificar as condições de reembolso.",
  },
  {
    pergunta: "Quanto tempo dura cada sessão?",
    resposta:
      "As sessões de psicoterapia duram aproximadamente 50 minutos. Já a Avaliação Neuropsicológica envolve múltiplos encontros (em média 10 a 15 sessões de 50 a 90 minutos cada), dependendo da demanda da avaliação.",
  },
  {
    pergunta: "O atendimento on-line tem a mesma eficácia do presencial?",
    resposta:
      "Sim! Estudos científicos comprovam que a psicoterapia on-line tem a mesma eficácia do atendimento presencial para a maioria dos casos. As sessões são realizadas por videochamada em plataforma segura, garantindo sigilo e qualidade.",
  },
  {
    pergunta: "Preciso de encaminhamento médico para fazer avaliação neuropsicológica?",
    resposta:
      "Não é obrigatório, mas é comum. Muitos pacientes chegam por encaminhamento de neurologistas, psiquiatras ou pedagogos. Se tiver dúvidas, entre em contato que esclareço seu caso específico.",
  },
];

export const passosAvaliacao: PassoAvaliacao[] = [
  {
    passo: 1,
    titulo: "Entrevista Inicial",
    descricao:
      "Conversa aprofundada para entender sua história, queixas e objetivos. É o momento de conhecermos um ao outro.",
  },
  {
    passo: 2,
    titulo: "Aplicação dos Testes",
    descricao:
      "Sessões com testes padronizados e lúdicos que avaliam atenção, memória, raciocínio, linguagem e funções executivas.",
  },
  {
    passo: 3,
    titulo: "Análise dos Resultados",
    descricao:
      "Correção e interpretação minuciosa dos testes à luz da sua história clínica, identificando potencialidades e dificuldades.",
  },
  {
    passo: 4,
    titulo: "Devolutiva e Laudo",
    descricao:
      "Entrega do laudo completo com recomendações personalizadas. Você sai de lá com um mapa claro dos próximos passos.",
  },
];

export const whatsappLinkAvaliacao =
  "https://wa.me/5585997025154?text=Ol%C3%A1%21+Vi+o+site+da+Psic%C3%B3loga+Tarcila+Costa+e+gostaria+de+entender+mais+sobre+a+avalia%C3%A7%C3%A3o+neuropsicol%C3%B3gica.";

export const whatsappLink =
  "https://wa.me/5585997025154?text=Ol%C3%A1%21+Vi+o+site+da+Psic%C3%B3loga+Tarcila+Costa+e+gostaria+de+saber+mais+sobre+os+atendimentos.";

export const contatoInfo = {
  telefone: "(85) 99702-5154",
  email: "tarcilacosta.psi@gmail.com",
  instagram: "@tarcilacosta_psi",
  instagramUrl: "https://instagram.com/tarcilacosta_psi",
  endereco: "Dionísio Torres, Fortaleza-CE",
  crp: "CRP 11/22251",
};
