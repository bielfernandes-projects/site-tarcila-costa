---
name: Tarcila Costa — Psicóloga
description: Landing page profissional para psicóloga especialista em TCC e Avaliação Neuropsicológica
colors:
  brand: "#6D3D2B"
  brand-light: "#8B5E4C"
  brand-dark: "#4A281B"
  sand: "#F4EFEA"
  sand-dark: "#E8DFD6"
  accent: "#C8785A"
  accent-light: "#D99B7A"
typography:
  display:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
  title:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.05em"
    textTransform: "uppercase"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.brand-light}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "16px 28px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.brand}"
    rounded: "{rounded.md}"
    padding: "16px 28px"
  button-ghost-nav:
    backgroundColor: "transparent"
    textColor: "{colors.brand-light}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
  card-service:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.brand-light}"
    rounded: "{rounded.md}"
    padding: "32px"
  tag-pill:
    backgroundColor: "rgba(109, 61, 43, 0.05)"
    textColor: "{colors.brand}"
    rounded: "{rounded.full}"
    padding: "6px 16px"
  step-number:
    backgroundColor: "{colors.brand}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    size: "64px"
  icon-container:
    backgroundColor: "rgba(109, 61, 43, 0.1)"
    textColor: "{colors.brand}"
    rounded: "{rounded.md}"
    size: "48px"
  faq-item:
    backgroundColor: "#ffffff"
    textColor: "{colors.brand-light}"
    rounded: "{rounded.md}"
    padding: "20px 24px"
  footer-bg:
    backgroundColor: "{colors.brand-dark}"
    textColor: "rgba(255, 255, 255, 0.8)"
    padding: "64px 20px"
---

# Design System: Tarcila Costa — Psicóloga

## 1. Overview

**Creative North Star: "O Labirinto Acolhedor: A Jornada como Mapa"**

Este sistema visual traduz o cuidado psicológico em forma: acolhedor sem ser sentimental, profissional sem ser frio, pessoal sem ser invasivo. As cores terrosas e a tipografia contrastante (serifada para títulos, humanista para corpo) criam uma sala de estar visual — espaçosa, tranquila, segura. Cada decisão existe para reduzir a ansiedade de quem chega: o contraste é generoso, o ritmo é calmo, as bordas são suaves.

O labirinto — símbolo pessoal da marca — informa a estrutura visual: caminhos não lineares, descobertas em vez de instruções, e a confiança de que tentar novos percursos faz parte do processo. O design guia sem apressar.

O sistema rejeita explicitamente o visual corporativo-genérico de plataformas de saúde, a frieza clínica de consultórios médicos e o visual juvenil de marcas trendy de bem-estar. O resultado é um espaço que serve adultos de todas as idades com dignidade e calor.

**Key Characteristics:**
- Paleta terrosa e contida (marrom, areia, terracota) com um único acento coral
- Tipografia contrastante: serifa display Lora + humanista sans Inter
- Cantos suavemente arredondados (12px como padrão)
- Elevação por camadas tonais, não por sombras excessivas
- Ícones como suporte visual, não como decoração principal
- Ritmo vertical generoso (seções de 80px–96px, padding de 32px em cards)
- Foco constante no CTA principal (WhatsApp) como destino natural de cada seção

## 2. Colors

A paleta é enraizada na identidade pessoal da profissional — marrons terrosos que transmitem estabilidade, uma areia quente que acolhe, e um acento terracota que aquece sem dominar.

### Primary
- **Marrom-Terra** (`#6D3D2B`): A cor âncora. Usada em títulos, botões primários, número do CRP, badges de passo. Carrega o peso visual da marca.
- **Marrom-Médio** (`#8B5E4C`): Texto secundário, subtítulos, navegação em repouso, hover states. Um degrau abaixo do Marrom-Terra em hierarquia.
- **Marrom-Profundo** (`#4A281B`): Fundo do footer, texto em hover de links no footer. O extremo escuro da rampa — usado em superfícies que precisam recuar.

### Neutral
- **Areia** (`#F4EFEA`): Fundo de página principal. Um off-white quente que forma a base de todo o layout. Também usado como fundo de cards, seções alternadas.
- **Areia-Escura** (`#E8DFD6`): Bordas, divisores, fundo de placeholder de imagens. O tom de borda padrão do sistema.

### Accent
- **Terracota** (`#C8785A`): Acentos pequenos e deliberados — tags de especialidades, badges de FAQ, subtítulos de seção (`span.accent`), ícone de check no timeline. Usado em ≤5% de qualquer tela; sua raridade é proposital.
- **Terracota-Clara** (`#D99B7A`): Hover de acentos, variação mais suave para contextos secundários.

### Named Rules

**A Regra do Fundo Único.** O fundo de página é sempre Areia. Seções alternam para branco puro (`#ffffff`) quando precisam de contraste visual (Serviços, FAQ, Contato). Nunca mais de duas cores de fundo em uma mesma viewport.

**A Regra do Acento Raro.** Terracota ocupa no máximo 5% de qualquer tela. Sua função é pontuar, não preencher. Se um elemento Terracota parece estar "sobrando", troque por Marrom-Terra ou Marrom-Médio.

## 3. Typography

**Display Font:** Lora (com fallback Georgia, serif)
**Body Font:** Inter (com fallback system-ui, sans-serif)

**Character:** O contraste entre a serifa elegante de Lora e a clareza humanista de Inter cria uma voz que é ao mesmo tempo calorosa e confiável. Lora traz a personalidade e o aconchego de algo escrito à mão; Inter traz a legibilidade e a confiança de um texto bem composto. O par evita tanto a frieza de duas sans-serif quanto o excesso de formalidade de duas serifadas.

### Hierarchy
- **Display** (600, `clamp(2.25rem, 5vw, 3.75rem)`, 1.2): Exclusivo para o h1 do hero. Letter-spacing: -0.02em. `text-wrap: balance`. Máximo de 12 palavras.
- **Headline** (600, `clamp(1.875rem, 4vw, 2.25rem)`, 1.2): Títulos de seção (h2). `text-wrap: balance`.
- **Title** (600, 1.25rem, 1.3): Títulos de card, nome de serviço, nome de passo. Cor: Marrom-Terra.
- **Body** (400, 1rem, 1.625): Parágrafos e descrições. Cor: Marrom-Médio. Largura máxima de linha: 65–75ch. `text-wrap: pretty`.
- **Label** (500, 0.875rem, 1.4, letter-spacing 0.05em, uppercase): Subtítulos de seção, tags de navegação, labels de footer. Cor: Terracota quando acima de título de seção; Marrom-Médio em navegação.

### Named Rules
**A Regra do Peso Semântico.** Títulos usam weight 600 (semibold) exclusivamente. Sem weight 700 (bold) ou variações. O contraste de tamanho já estabelece a hierarquia; peso extra é redundância.

**A Regra do Corpo Generoso.** Texto body nunca é menor que 1rem (16px) e nunca tem line-height menor que 1.625. Em mobile, textos longos (FAQ, Sobre) mantêm 1rem — sem redução.

## 4. Elevation

O sistema usa camadas tonais como mecanismo primário de profundidade. Superfícies são separadas por cor de fundo (Areia → branco → Marrom-Profundo), não por sombras. Sombras existem exclusivamente para enfatizar ações — não para decorar containers.

A hierarquia visual é construída por: (1) posição no eixo Z (header fixo na frente), (2) tom de fundo (mais claro = mais próximo), (3) bordas (Areia-Escura separa cards), e só então (4) sombras.

### Shadow Vocabulary
- **CTA Shadow** (`0 4px 14px rgba(109, 61, 43, 0.2)` → `0 6px 20px rgba(109, 61, 43, 0.3)` em hover): Usada exclusivamente em botões primários. A sombra cresce no hover para sinalizar ação.
- **Image Shadow** (`0 25px 50px rgba(0,0,0,0.15)`): Sombra de container de imagem no hero e seção Sobre. Apenas em imagens de pessoa, nunca em ilustrações ou ícones.
- **Backdrop Blur** (`backdrop-filter: blur(12px)`): Header fixo, para suavizar a transição entre o conteúdo e a barra de navegação.

### Named Rules
**A Regra Plana por Default.** Superfícies são planas em repouso. Sombras aparecem apenas como resposta a estado (hover de CTA, scroll de header). Um card sem interação não tem sombra.

## 5. Components

### Buttons
- **Shape:** Cantos suavemente arredondados (12px). Altura: ~56px (padding vertical 16px + line-height).
- **Primary (`button-primary`):** Fundo Marrom-Terra, texto branco, padding 16px 28px. Transição: 0.2s background, 0.2s box-shadow.
  - *Hover:* Fundo Marrom-Médio, sombra ampliada (CTA Shadow hover).
  - *Touch (mobile):* Mesmo estado do hover.
- **Outline (`button-outline`):** Borda 2px solid Marrom-Terra com 20% opacidade, texto Marrom-Terra. Sem sombra.
  - *Hover:* Fundo Marrom-Terra com 5% opacidade.
- **Ghost (nav, `button-ghost-nav`):** Sem fundo, texto Marrom-Médio, padding 8px 12px, radius 8px.
  - *Hover:* Fundo Marrom-Terra com 5% opacidade, texto Marrom-Terra.
- **Ícone + texto:** ícone de 20px à esquerda (CTA) ou à direita (seta em "Agendar"). Espaçamento gap 8px.

### Cards / Service Cards
- **Corner Style:** 12px.
- **Background:** Areia; hover → Marrom-Terra com 5% opacidade.
- **Border:** 1px solid Areia-Escura; hover → Marrom-Terra com 20% opacidade.
- **Internal Padding:** 32px em todos os lados.
- **Icon Container:** 56px × 56px, radius 12px, fundo Marrom-Terra com 10% opacidade, ícone Marrom-Terra. No hover do card: fundo Marrom-Terra sólido, ícone branco.
- **Typography:** Título Lora 1.25rem 600 Marrom-Terra; descrição Inter 0.875rem Marrom-Médio com leading 1.625.

### Navigation (Header)
- **Style:** Fixo no topo, altura 64px, fundo Areia com 90% opacidade + backdrop-blur(12px), borda inferior 1px Areia-Escura.
- **Logo:** Container 40px × 40px com logo circular; ao lado (desktop) o nome "Tarcila Costa" (Lora 1.125rem 600 Marrom-Terra) + CRP (Inter 0.75rem Marrom-Médio).
- **Nav Links (desktop):** Inter 0.875rem, Marrom-Médio, padding 8px 12px, radius 8px. Hover: fundo Marrom-Terra 5% opacidade, texto Marrom-Terra.
- **Mobile:** Menu hamburger (lucide `Menu`). Overlay dropdown com fundo Areia sólido, borda superior Areia-Escura. Links com padding 12px 16px. CTA "Agendar Primeira Sessão" ocupa largura total no final.

### Tags / Chips
- **Style:** Fundo Marrom-Terra 5% opacidade, texto Marrom-Terra, 0.875rem 500, rounded-full (padding 6px 16px).
- **Uso:** Tags de especialidades na seção Sobre, badges de modalidade no Contato ("Presencial", "On-line", "Sigilo Garantido"). Sempre passivas (não clicáveis).

### Step / Timeline Items
- **Number Badge:** 64px × 64px, radius 12px, fundo Marrom-Terra, texto branco (Lora 1.125rem 700). Sombra: CTA Shadow.
- **Layout:** Flex com gap 24–32px. Número à esquerda, conteúdo à direita. Linha vertical (1px, Marrom-Terra 10%) conecta os passos em desktop.
- **Check Icon:** Terracota, 16px.

### FAQ Accordion
- **Container:** Branco, border 1px Areia-Escura, radius 12px.
- **Button (pergunta):** Largura total, padding 20px 24px, texto Marrom-Terra. Hover: fundo Marrom-Terra 5% opacidade.
- **Icon:** `ChevronDown` de 20px, Marrom-Médio, rotate 180° quando aberto. Transição: 0.3s.
- **Content (resposta):** Padding 0 24px 20px 24px, texto Inter 0.875rem Marrom-Médio. Animação de altura (framer-motion AnimatePresence).
- **Apenas um item aberto por vez** (accordion de seleção única).

### Contact Info Items
- **Icon Container:** 48px × 48px, radius 12px, fundo Marrom-Terra 10% opacidade, ícone Marrom-Terra (22px).
- **Layout:** Flex com gap 16px. Ícone à esquerda, label (Inter 0.875rem 600 Marrom-Terra) + valor (Inter 0.875rem Marrom-Médio).
- **Links:** E-mail e Instagram usam cor Marrom-Médio padrão; hover → Marrom-Terra.

### WhatsApp Float
- **Posição:** Fixo, bottom 24px, right 24px, z-index 50.
- **Container:** 56px × 56px, fundo verde (`#22C55E`), rounded-full, sombra `0 10px 25px rgba(0,0,0,0.15)`.
- **Icon:** `Phone` lucide 24px, branco.
- **Animação:** `pulse` lento em repouso; hover → escala 1.1 sem pulse.
- **Aria-label:** "Fale pelo WhatsApp"

### Footer
- **Background:** Marrom-Profundo. Altura: ~320px.
- **Typography:** Título de coluna: Inter 0.875rem, branco, uppercase 0.05em tracking. Links e texto: branco com 60% opacidade, hover → branco 100%.
- **Layout:** Grid 3 colunas (desktop), gap 40px. Divisor: 1px branco 10% opacidade. Copyright: branco 40% opacidade, 0.75rem.

## 6. Do's and Don'ts

### Do:
- **Do** usar Marrom-Terra como cor dominante de ação (botões, links principais).
- **Do** usar Terracota exclusivamente para acentos pequenos ≤5% da tela.
- **Do** aplicar text-wrap: balance em h1–h3 e text-wrap: pretty em parágrafos longos.
- **Do** manter o contraste de texto body ≥4.5:1 contra qualquer fundo (verificado: Marrom-Médio sobre Areia = ~7:1).
- **Do** usar Lora para todos os títulos e Inter para todo o corpo — a alternância é o sistema.
- **Do** animar com ease-out (cubic-bezier suave, duração 0.3–0.7s) e respeitar `prefers-reduced-motion` com crossfades.

### Don't:
- **Don't** alterar as cores da marca já definidas (`#6D3D2B`, `#F4EFEA`, `#C8785A`, etc.) — elas são as cores pessoais da psicóloga e fazem parte da identidade.
- **Don't** adicionar cores novas (roxo, azul, verde além do WhatsApp float) sem necessidade explícita. A paleta é enxuta por definição.
- **Don't** usar sombras em cards ou containers em repouso. Sombras são exclusivas para CTAs e imagens.
- **Don't** usar o visual genérico-corporativo de plataformas de saúde ou templates de wellness. O site não é um SaaS de terapia.
- **Don't** usar borda lateral colorida como acento decorativo (border-left > 1px).
- **Don't** usar gradient text (`background-clip: text`) ou glassmorphism decorativo.
- **Don't** animar imagens (`<img>`) em hover — a interação está no container, não na foto.
- **Don't** reduzir texto body abaixo de 1rem (16px) em mobile.
- **Don't** usar o eyebrow tracking uppercased ("SOBRE", "ESPECIALIDADES") em mais de 50% das seções; sua força está na raridade.
