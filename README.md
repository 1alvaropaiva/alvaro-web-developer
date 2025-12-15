### Portfólio

Repositório do meu portfólio pessoal, desenvolvido com Vite + TypeScript e estilização própria mobile‑first. O site traz breve apresentação, links profissionais, alguns projetos e atalho para o currículo.

### Stack
- Vite 7
- TypeScript 5
- HTML
- CSS (mobile‑first)

### Estrutura
```
.
├─ public/
│  ├─ favicon.png
│  ├─ CV_AlvaroPaiva.pdf
├─ src/
│  ├─ icons.ts          # SVGs como funções utilitárias
│  ├─ home.ts           # Função que rende o HTML da Home
│  ├─ main.ts           # Bootstrap da aplicação (Vite)
│  ├─ splitLetters.ts   # Utilitário: envolve cada letra em spans p/ animação
│  └─ style.css         # CSS mobile‑first e animações
├─ index.html           # Metatags, SEO/OG, root #app e script Vite
├─ package.json
├─ tsconfig.json
└─ README.md
```

### Como Rodar Localmente
Pré‑requisitos: Node.js LTS (18+ recomendado) e pnpm/npm/yarn.

1. Instalar dependências:
```
npm install
```
2. Ambiente de desenvolvimento (hot reload):
```
npm run dev
```
3. Build de produção:
```
npm run build
```
4. Preview do build (servidor local):
```
npm run preview
```

Uso:
```
<h1 class="title shake-text">Alvaro | Web Developer</h1>
```

### Acessibilidade e SEO
- Metatags completas em `index.html` (description, keywords, OG/Twitter, canonical, author).
- Ícones SVG recebem `role="img"` e `aria-label` na origem (ver `src/icons.ts`).
- Links externos abrem em nova aba com `rel="noopener noreferrer"`.

### Notas de Arquitetura
- O HTML é renderizado por `renderHome()` e injetado em `#app` pelo `main.ts`, mantendo responsabilidades separadas (HTML/CSS/TS).
- O import de `style.css` é feito diretamente no `main.ts` para que o bundler do Vite inclua o CSS no build final.

