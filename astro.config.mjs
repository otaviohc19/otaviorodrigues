import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// ATENÇÃO: ajuste 'site' e 'base' com seu usuário/nome de repositório
// antes do primeiro deploy. Exemplo, se o repo for github.com/otavio/portfolio:
//   site: 'https://otavio.github.io',
//   base: '/portfolio',
// Se você usar um domínio customizado (via CNAME), 'base' deve ser '/'.
export default defineConfig({
  site: 'https://otaviohc19.github.io',
  base: '/otaviorodrigues/',
  integrations: [tailwind()],
  build: {
    format: 'directory',
  },
});
