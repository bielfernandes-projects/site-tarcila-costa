# Sessão — Tarcila Costa

> Histórico completo de alterações, decisões de design e contexto arquitetural.
> Aberto em 11/06/2026. Última modificação: 11/06/2026.

---

## Projeto

| Campo | Valor |
|-------|-------|
| URL | `https://tarcilacostapsi.com.br` |
| Propósito | Landing page profissional — Psicóloga Tarcila Costa (TCC e Avaliação Neuropsicológica, Fortaleza/CE e On-line) |
| Tech Stack | Next.js 16.2.9 (App Router), React 19.2.4, Tailwind CSS v4, framer-motion v12, lucide-react, TypeScript 5 |
| Repositório | `https://github.com/bielfernandes-projects/site-tarcila-costa` |
| Registro | **Brand** — landing page profissional, design É o produto |

---

## Design System

### Tokens (extraídos de `globals.css` e `DESIGN.md`)

```css
--color-brand:      #6D3D2B;  /* marrom escuro — cor principal */
--color-brand-light: #8B5E4C; /* marrom médio — corpo de texto */
--color-brand-dark:  #4A281B; /* marrom quase preto — footer */
--color-sand:        #F4EFEA; /* areia clara — fundo de página */
--color-sand-dark:   #E8DFD6; /* areia média — bordas, cards */
--color-accent:      #C8785A; /* terracota — acentos raros (≤5%) */
--color-accent-light: #D99B7A; /* terracota claro — hover accent */
--font-sans:  Inter (variável --font-inter);
--font-serif: Lora (variável --font-lora);
```

### Princípios

1. **Regra do Acento Raro** — Accent usado em ≤5% da superfície. Viola apenas 2 elementos: WhatsApp float e ícone MapPin do card Contato.
2. **Regra do Peso Semântico** — Headings e ações primárias usam serif (Lora); corpo e navegação usam sans (Inter).
3. **Elevação por camadas tonais, não sombras** — Padrão é fundo sand / card sand-dark / featured brand/5. Sombras só em CTAs e imagens.
4. **Autenticidade sobre polimento** — Voz em primeira pessoa, foto real, sem depoimentos genéricos.

---

## Decisões de Design Críticas

| Decisão | O que foi feito | Por quê |
|---------|----------------|---------|
| WhatsApp float accent vs verde | `bg-accent` (#C8785A) em vez de verde `#22C55E` | Consistência visual da paleta vence reconhecimento de marca externa |
| Eyebrows mantidas em 2 seções | "A Profissional" (Sobre) e "Especialidades" (Serviços) | Removidas de ComoFunciona, FAQ, Contato. Decisão consciente de manter onde são informativas |
| Hero gradient mantido | `from-sand via-sand to-brand/5` | Critique apontou contradição com "flat by default" do DESIGN.md. Mantido porque adiciona profundidade sutil sem quebrar a regra |
| Zero provas sociais | Sem depoimentos, cases ou selos | Decisão do cliente: prefere site sem depoimentos |
| FAQ animação CSS-only | `grid-template-rows` em vez de framer-motion `height` | Critique apontou como layout property animation. Mantido porque é CSS-only, controlado e performático |
| TCC como card featured | Card horizontal com badge "Abordagem" + grid 3 cards | Diferencia a principal oferta (TCC) dos demais serviços |

---

## Histórico de Alterações

### 1. Init
- Criados `PRODUCT.md` (estratégia, persona, princípios) e `DESIGN.md` (tokens visuais extraídos do código)
- Configurado `.impeccable/live/config.json` para Next.js App Router

### 2. Quiet
- Eyebrows removidos de ComoFunciona, FAQ e Contato (substituídos por traço sutil `w-8 h-px bg-brand/10`)
- Eyebrows mantidos em Sobre ("A Profissional") e Serviços ("Especialidades")

### 3. Layout
- TCC virou card featured (horizontal, badge "Abordagem", CTA inline)
- Demais 3 serviços em grid `sm:grid-cols-3`

### 4. Polish #1
- FAQ animation: `height` (framer-motion AnimatePresence) → `grid-template-rows` (CSS-only)
- WhatsApp Float: `bg-green-500` → `bg-accent`
- Badges de contraste: `bg-accent/10 text-accent` → `bg-brand/10 text-brand` (2.91:1 → 7.81:1)
- Hero badge: `bg-accent/10 text-accent` → `bg-brand/10 text-brand`
- Copy mobile: "Agendar Primeira Sessão" → "Agendar" (igual desktop)
- Footer: `text-white/60` → `text-white/70` (4.58:1 → ~5.5:1)
- Smooth scroll fallback: `scrollTo()` com verificação de existência do elemento
- Badge "Carro-chefe" renomeada para "Abordagem"

### 5. Animate
- **Hero**: Stagger sequenciado com `containerVariants` (badge → heading com blur → parágrafo → CTAs → credenciais). Imagem entra com `scale` + delay 0.35s. CTAs com `hover:scale-[1.02] active:scale-[0.98]`
- **Sobre**: 3 parágrafos em cascade com `staggerChildren: 0.15`. Foto e texto com direções opostas (x: -30 / x: +30)
- **Serviços**: Card featured com `whileHover={{ y: -4 }}`. Cards do grid com `whileHover`, delay 0.05, ícone com transição bg+cor
- **ComoFunciona**: Badges numéricos com `scale: 0.7 → 1` sincronizado com o card
- **Header**: Nav links com `underline decoration-transparent hover:decoration-brand`. Botão Agendar com `hover:scale-[1.02]`
- **FAQ**: Botões com `hover:scale-[1.01] active:scale-[0.99]`
- **Contato**: CTA "Quero agendar" com `hover:scale-[1.02]`
- **Global**: `@media (prefers-reduced-motion: reduce)` zerando animações/transições
- **Easing**: `easeOutQuart` (`[0.25, 1, 0.5, 1]`) em todos os componentes

### 6. Audit + Polish #2

#### Contraste (P1)
- Section labels "A Profissional" e "Especialidades": `text-accent` → `text-brand-light`
- Badge "Abordagem": `bg-accent/10 text-accent` → `bg-brand/10 text-brand`
- Link "Agendar sessão": `text-accent` → `text-brand-light`
- Checkmark do ComoFunciona: `text-accent` → `text-brand`
- Ícone MapPin do card Contato: `bg-accent/10 text-accent` → `bg-brand/10 text-brand`

#### Foco de Teclado (P1)
- Hamburger ganhou `ref={menuToggleRef}`
- `scrollTo` chama `.focus()` após fechar menu

#### Skip-to-content (P1)
- Link "Pular para conteúdo" como primeiro elemento do `<header>` (sr-only, visível no foco)
- `<main>` recebeu `id="main-content"`

#### Touch Target (P2)
- Botão "Agendar" no menu mobile: `py-3` → `py-3.5` (~44px ✓)

#### WhatsApp Pulse → Glow (P2)
- `animate-pulse` removido
- Substituído por `motion.a` com entrada (scale 0.6→1, delay 1.2s, easeOutQuart) + `whileHover` + `whileTap`

#### Heading Hierarchy (P3)
- FAQ: `<span>` → `<h3>` dentro do `<button>` pergunta

#### Lint
- `header.tsx:27`: `window.location.hash = href` → `window.location.assign(href)` (React Compiler)
- `servicos.tsx:40`: `index` removido do `.map()` não utilizado

#### Favicon + OG + Meta
- `layout.tsx`: adicionados `icons` (favicon.ico, 16×16, 32×32), `apple-touch-icon`, `openGraph.images` (OG card 1200×630)
- `site.webmanifest`: atualizado com `name: "Tarcila Costa | Psicóloga"`, `short_name: "Tarcila Costa"`, `theme_color: #6D3D2B`, `background_color: #F4EFEA`
- `metadataBase`: `https://tarcilacostapsi.com.br`
- OG image gerada programaticamente (sharp): 1200×630, fundo sand + logo + "Tarcila Costa · Psicoterapia (TCC) · CRP 11/22251"

### 7. Critique

Score: **28/40** — Good

P1 resolvidos:
- Fallback de imagem: `onError` + placeholder "TC" em hero, sobre e header
- Scroll-spy: scroll-based com `offsetTop` — link ativo ganha `text-brand decoration-brand`

P2 recusados (decisão do cliente):
- Eyebrows inconsistentes — mantido como está
- Hero gradient — mantido
- Provas sociais — zero, mantido

---

## Arquitetura

### Componentes (9)

| Componente | Tipo | Função |
|-----------|------|--------|
| `header.tsx` | Client | Nav fixa com backdrop-blur, menu mobile, scroll-spy, skip-link |
| `hero.tsx` | Client | Full-screen hero, stagger animations, fallback de imagem |
| `sobre.tsx` | Client | Biografia, foto, tags de especialidade, stagger de parágrafos |
| `servicos.tsx` | Client | Card featured TCC + grid 3 cards, hover effects |
| `como-funciona.tsx` | Client | Timeline 4 passos, badge scale animation |
| `faq.tsx` | Client | Accordion CSS-only (grid-template-rows), heading hierarchy |
| `contato.tsx` | Client | Info de contato + card endereço |
| `footer.tsx` | Server | 3 colunas, CRP, copyright dinâmico |
| `whatsapp-float.tsx` | Client | Float animado, motion.a, glow sutil |

### Data Flow
- `data/mock.ts` exporta: `servicos[]`, `faqItems[]`, `passosAvaliacao[]`, `whatsappLink`, `whatsappLinkAvaliacao`, `contatoInfo`
- Nenhuma API externa. Tudo estático.

### Imagens (`public/images/`)
- `hero.webp` — foto principal (LCP, priority)
- `sobre.webp` — foto da seção Sobre
- `logo-tarcila.png` — logo (onError fallback: "TC")
- `og-tarcila.png` — OG card 1200×630
- `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`

### CSS
- `globals.css`: Tailwind v4 `@import`, `@theme inline` com tokens, `@layer base`, `@media (prefers-reduced-motion: reduce)`

---

## Comandos Úteis

```bash
npm run dev       # Desenvolvimento
npm run build     # Produção
npm run lint      # ESLint
npm start         # Servir produção
```

---

## Contraste Verificado

| Par | Ratio | Padrão |
|-----|-------|--------|
| brandLight (#8B5E4C) / sand (#F4EFEA) | 4.83:1 | AA ✓ |
| brandLight (#8B5E4C) / white (#FFFFFF) | 5.25:1 | AA ✓ |
| brand (#6D3D2B) / sand (#F4EFEA) | 7.81:1 | AAA ✓ |
| brand (#6D3D2B) / white (#FFFFFF) | ~8.5:1 | AAA ✓ |
| white / brand-dark (#4A281B) | ~12:1 | AAA ✓ |
| text-white/70 / brand-dark | ~5.5:1 | AA ✓ |
| accent (#C8785A) / sand | 2.91:1 | ❌ (não usado mais para texto) |
