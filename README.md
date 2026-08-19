# Portfólio — Otávio

[![CI/CD](https://github.com/otaviohc19/otaviorodrigues/actions/workflows/ci.yml/badge.svg)](https://github.com/otaviohc19/otaviorodrigues/actions/workflows/ci.yml)
[![CodeQL](https://github.com/otaviohc19/otaviorodrigues/actions/workflows/codeql.yml/badge.svg)](https://github.com/otaviohc19/otaviorodrigues/actions/workflows/codeql.yml)
[![Dependabot](https://img.shields.io/badge/dependabot-enabled-brightgreen)](https://github.com/otaviohc19/otaviorodrigues/network/updates)

Portfólio técnico construído com [Astro](https://astro.build) e Tailwind CSS,
hospedado no GitHub Pages. O repositório em si — pipeline, checagens de
segurança e decisões de arquitetura — é parte do portfólio.

## Stack

- **Astro** — geração estática, zero JS por padrão
- **Tailwind CSS** — estilização
- **GitHub Actions** — CI/CD
- **GitHub Pages** — hospedagem (custo zero)

## Pipeline

Cada push/PR para `main` dispara:

1. **Lint & Format** — ESLint + Prettier
2. **Secrets scan** — Gitleaks, verifica se algo sensível foi commitado
3. **Build** — `astro check` + `astro build`
4. **Lighthouse CI** — falha se performance/acessibilidade/SEO caírem abaixo de 90
5. **Deploy** — publica no GitHub Pages (só a partir de `main`)
6. **Smoke test** — confirma que o site publicado responde HTTP 200

Em paralelo, **CodeQL** roda análise estática semanal e a cada push/PR, e
**Dependabot** monitora dependências vulneráveis semanalmente.

Detalhes de segurança e limitações conhecidas do ambiente de hospedagem estão
documentados em [`SECURITY.md`](./SECURITY.md).

## Desenvolvimento local

```bash
npm install
npm run dev       # servidor local em http://localhost:4321
npm run build     # build de produção em ./dist
npm run preview   # serve o build de produção localmente
npm run lint      # ESLint
npm run format:check  # Prettier
```

## Configuração antes do primeiro deploy

1. Em `astro.config.mjs`, ajuste `site` e `base` para o seu usuário/repositório.
2. Em `src/components/Header.astro` e `src/pages/index.astro`, troque
   `otaviohc19`/`otaviorodrigues` pelos valores reais.
3. Nas configurações do repositório no GitHub: **Settings → Pages → Source:
   GitHub Actions**.
4. Preencha o conteúdo `TODO` nas páginas em `src/pages/projects/`.

## Estrutura

```
src/
  layouts/       # BaseLayout (CSP, SEO) e ProjectLayout (case studies)
  components/    # Header, StatusPanel (elemento de assinatura), ProjectCard
  pages/
    index.astro
    projects/    # um arquivo .astro por caso de estudo
  styles/
.github/
  workflows/     # ci.yml, codeql.yml, sbom.yml
  dependabot.yml
```
