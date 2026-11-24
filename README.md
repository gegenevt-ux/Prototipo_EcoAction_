# EcoAction — Plataforma Colaborativa para Ações Socioambientais

Plataforma web que conecta organizações sociais a voluntários, centralizando a gestão de ações socioambientais em Porto Velho (RO).

**Projeto de Extensão I · Sistemas de Informação · UNISAPIENS · 2026**

## Funcionalidades

- **Feed de ações** com filtro por categoria (Meio Ambiente, Animais, Social, Saúde, Educação)
- **Inscrição com um clique** e controle automático de vagas
- **Chat exclusivo por ação** (apenas inscritos), com nomes reais dos participantes
- **Painel do organizador** com lista de inscritos em tempo real e envio de avisos
- **Currículo de Impacto** com horas, selos e histórico de participações
- **Criar ação** direto pela plataforma
- Responsivo: funciona em celular e computador

## Tecnologias

- **Front-end:** HTML, CSS e JavaScript (tudo embutido em `index.html`)
- **Banco de dados:** Supabase (PostgreSQL)
- **Backend:** função serverless em `api/auth.js`
- **Hospedagem:** Vercel

## Segurança

- Senhas protegidas com **hash SHA-256 + salt** (nunca em texto puro)
- Travas anti-duplicação em inscrição, cadastro e publicação de ações
- Contas antigas migram para hash automaticamente no primeiro login

## Estrutura

```
.
├── index.html       # app completo (CSS + JS embutidos)
├── api/
│   └── auth.js      # função serverless de autenticação
├── package.json     # dependências
└── README.md
```

## Deploy no Vercel

O deploy é automático a cada push. Configure as variáveis de ambiente no painel do Vercel:

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
