# Política de Segurança

## Reportando uma vulnerabilidade

Se você encontrar uma vulnerabilidade neste projeto, abra uma [issue privada
de segurança](../../security/advisories/new) no GitHub (aba "Security" →
"Report a vulnerability"), em vez de uma issue pública. Vou responder em até
7 dias.

## O que este projeto verifica automaticamente

| Verificação                | Ferramenta       | Quando roda         |
| -------------------------- | ---------------- | ------------------- |
| Dependências vulneráveis   | Dependabot       | Semanal + a cada PR |
| Análise estática (SAST)    | CodeQL           | Push, PR e semanal  |
| Segredos no histórico      | Gitleaks         | A cada push/PR      |
| Qualidade/performance      | Lighthouse CI    | A cada build        |
| Software Bill of Materials | Syft (CycloneDX) | A cada release      |

## Limitações conhecidas (GitHub Pages)

Este site é hospedado no GitHub Pages, que serve arquivos estáticos sem
permitir configuração de headers HTTP customizados pelo servidor. Isso impõe
algumas limitações deliberadas e conhecidas:

- **CSP via `<meta>` em vez de header HTTP**: a política de segurança de
  conteúdo está declarada via `<meta http-equiv="Content-Security-Policy">`
  no `<head>` de cada página. Isso funciona para a maior parte das diretivas,
  mas **não** suporta `frame-ancestors` (proteção contra clickjacking) — essa
  diretiva só tem efeito quando enviada como header HTTP real.
- **Sem HSTS customizado**: o GitHub Pages já força HTTPS para o domínio
  `*.github.io` e para domínios customizados com certificado emitido por ele,
  mas o header `Strict-Transport-Security` não é configurável manualmente.
- **Sem X-Frame-Options via header**: mitigado parcialmente pela CSP via meta
  tag (na parte que ela cobre), mas não há proteção completa contra
  clickjacking neste ambiente de hospedagem.

Essas limitações foram uma escolha consciente: manter custo zero de
hospedagem, documentando explicitamente onde a superfície de proteção é mais
fraca em vez de aparentar uma segurança que o ambiente não sustenta.
