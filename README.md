# WayfinderCodex

[![Built with enter.pro](https://img.shields.io/badge/Build%20with-Enter.pro-FC5776?style=for-the-badge&labelColor=1F1F1F)](https://enter.pro)

Códice de leveling para **WoW Classic / Vanilla ("WoW Forever")**: dungeons e cadeias de quest, recomendações por facção/raça/classe, pets de Hunter e guia completo de profissões (2 primárias + 3 secundárias, de 1 a 300).

> Projeto de fã, sem afiliação com a Blizzard Entertainment. World of Warcraft, WoW Classic e todos os nomes/itens relacionados são marcas da Blizzard.

---

## Funcionalidades

### Sessão principal - `/` (Leveling & Dungeons)
- **Seletor de perfil**: facção (Alliance/Horde), raça (com as classes realmente disponíveis para cada raça no Classic) e classe, tudo com badges coloridas por cor de classe e de facção.
- **Nível do personagem** (1-60) com input numérico validado e slider.
- **Dungeons recomendadas**: filtradas dinamicamente pela faixa de nível e pela facção (incluindo as exclusivas Alliance/Horde e as alas de Scarlet Monastery e Dire Maul).
- **Guia de quests por dungeon**: lista completa das quests curadas, onde pegar (NPC, zona e coordenadas), pré-requisitos, cadeias em ordem numerada, objetivos e recompensas.
- **Coordenadas `/way`**: cada localização tem um botão que copia o comando TomTom `/way X Y` para colar no jogo.
- **Pets de Hunter**: seção dedicada (visível apenas para Hunter) com os melhores pets até o seu nível, zona, coordenadas e o motivo mecânico de cada um.
- **Quests de classe**: marcos de leveling por classe (stances, formas, demônios, totens, venenos, mounts).

### Sessão secundária - `/professions`
- **Seletor de até 5 profissões**: bloqueia a 3ª primária e a 4ª secundária, espelhando a regra do Classic.
- **Tabela comparativa**: perícia ideal (5 pontos por nível de personagem) contra o seu nível atual, com a sua linha destacada e o status *adiantado / no ritmo / atrasado*.
- **Receitas por faixa**: ordem de craft/coleta de 1 a 300, materiais, origem (treinador, vendedor, drop, quest) e notas práticas. Para profissões de coleta, a faixa mostra o material coletado.
- **Spots de coleta/farm** adequados ao seu nível de personagem.
- **Guia de economia**: o que vender na Auction House, o que desencantar e o que guardar para receitas avançadas.
- **Sugestão de pares**: profissões que compartilham materiais (ex.: Mineração + Ferraria, Esfolar + Courovia).

### Transversal
- **Wowhead Tooltips** em itens, quests e NPCs, com `refreshLinks()` re-executado a cada mudança de dados na tela.
- **i18n**: Português (Brasil) como idioma padrão e Inglês, alternável no cabeçalho e persistido no navegador.
- **Estado persistente**: personagem e profissões salvos em `localStorage`.
- **Segurança**: nenhum token ou segredo no frontend ou no repositório.

---

## Stack

React 19 + Vite + TypeScript + Tailwind CSS + shadcn/ui, i18next para i18n, `lucide-react` para ícones e `react-router-dom` para as rotas.

Todos os pacotes são open-source (MIT/ISC/Apache-2.0); não há dependência paga.

---

## Estrutura

```
.github/workflows/deploy.yml     # CI: lint + typecheck + build + deploy GitHub Pages
docker-compose.yml               # ambiente de desenvolvimento local
index.html                       # fontes, meta e script do Wowhead Tooltips
i18n.config.json                 # manifesto de idiomas (pt-BR padrão, en)
public/locales/{pt-BR,en}.json   # strings da interface
src/
  components/
    Header.tsx, PageShell.tsx    # navegação, seletor de idioma e chrome da página
    leveling/                    # CharacterForm, pickers, DungeonList, DungeonQuests, QuestChain, HunterPets, ClassTips
    professions/                 # ProfessionSelect, ProfessionGuide, RecipeTable, GatheringSpots, EconomyGuide
    wowhead/                     # WowheadLink (tooltips) e CoordCopy (/way)
    ui/                          # componentes shadcn/ui customizados
  config/blizzard.config.ts      # namespace/região/locale/proxy (defaults seguros)
  context/                       # estado global do personagem + provider
  data/                          # base curada: dungeons, quests, pets, class tips, profissões, facções, raças, classes
  hooks/                         # use-character, use-lang, use-wowhead-tooltips, use-blizzard-source
  lib/                           # domínio: leveling, professions, wowhead, localize, labels
  pages/leveling, pages/professions
  services/blizzardService.ts    # camada REST isolada (modo híbrido)
  types/game.ts                  # tipos de domínio
```

---

## Execução local

### Com pnpm
```bash
pnpm install
pnpm dev        # http://localhost:8080
pnpm check      # eslint + tsc --noEmit
pnpm run build:prod
pnpm preview
```

### Com Docker
```bash
docker compose up
# dev server em http://localhost:8080 com HMR
```

---

## Variáveis de ambiente

Apenas valores **públicos** podem ficar no repositório. Copie `.env.example` para `.env` se quiser sobrescrever os defaults (o app funciona sem nenhum `.env`, porque os defaults de `src/config/blizzard.config.ts` já apontam para o Classic).

| Variável | Default | Uso |
| --- | --- | --- |
| `VITE_BLIZZARD_NAMESPACE` | `static-classic-us` | namespace Blizzard; troque para o namespace do WoW Forever quando existir |
| `VITE_BLIZZARD_REGION` | `us` | região (`us`, `eu`, ...) |
| `VITE_BLIZZARD_LOCALE` | `en_US` | locale dos dados |
| `VITE_BLIZZARD_API_BASE` | *(vazio)* | URL de um proxy no servidor que guarda as credenciais Blizzard. Vazio = modo curado, sem nenhuma requisição |
| `VITE_WOWHEAD_DOMAIN` | `classic` | domínio dos tooltips (`classic`, `tbc`, `wotlk`) |
| `GH_PAGES_BASE` | `/` | sub-caminho do build no GitHub Pages (definido pelo workflow) |

> **Nunca** coloque `client_secret` da Blizzard (ou qualquer chave privada) no código: um secret no frontend é público. Use um proxy no servidor e configure apenas a URL dele aqui.

### Camada Blizzard (modo híbrido)
`src/services/blizzardService.ts` é a única porta de saída para a API:

- **Sem `VITE_BLIZZARD_API_BASE`** (padrão): todas as chamadas retornam `null` imediatamente, sem requisição de rede. O site é 100% estático e usa os dados curados de `src/data/`.
- **Com o proxy configurado**: o serviço busca dados ao vivo (realm status, metadados de item/quest/spell) com timeout e cache em memória, e o cabeçalho passa a indicar "Dados ao vivo".
- Trocar para os namespaces do **WoW Forever** é só mudar as variáveis de ambiente - nenhum código precisa mudar.

---

## i18n

- `i18n.config.json` é a única fonte de verdade dos idiomas: **pt-BR** (fallback) e **en**.
- Strings da interface ficam em `public/locales/{pt-BR,en}.json` com chaves *flat dotted camelCase*; os dois arquivos têm exatamente o mesmo conjunto de chaves.
- Nomes de jogo (dungeons, quests, NPCs, itens, zonas) permanecem em inglês para manter a consistência com os links/tooltips do Wowhead; os textos descritivos usam `Localized` em `src/data/*` e são resolvidos por `src/lib/localize.ts`.
- Validação: `node .agents/skills/enter_i18n@1/assets/scripts/check-i18n.mjs` (quando disponível) ou os testes locais do `CodeGuideline.md`.

---

## Deploy no GitHub Pages

1. Publique o repositório no GitHub (`main`).
2. Em **Settings → Pages**, escolha **GitHub Actions** como fonte.
3. O workflow `.github/workflows/deploy.yml` roda `pnpm check`, `pnpm run build:prod` com `GH_PAGES_BASE=/<nome-do-repo>/` e publica `dist/`.
4. `dist/404.html` é uma cópia de `index.html`, o que faz deep links (`/professions`) funcionarem no Pages.

---

## Acurácia dos dados

A base em `src/data/` é **curada** (não extraída de API) e cobre todas as dungeons Classic, as principais quests de dungeon, pets de Hunter, marcos de classe e as 12 profissões de 1 a 300.

- Cada entidade aceita `wowheadId`. Quando o id **não** está confirmado, o campo é omitido de propósito e o link abre uma **busca no Wowhead** em vez de mostrar uma tooltip errada.
- Preencher um `wowheadId` confirmado ativa a tooltip automaticamente - sem mexer em componentes.
- Coordenadas usam a escala 0-100 do Wowhead e devem ser sempre validadas no mapa antes de divulgar um guia em produção.
- Receitas e faixas de perícia seguem os caminhos clássicos de leveling; variações de servidor privado podem exigir ajuste no arquivo de dados.

Contribuições são bem-vindas por PR nos arquivos de `src/data/`.

---

## Verificação

```bash
pnpm check                  # eslint + tsc --noEmit
pnpm run build:prod         # build de produção (mesmo comando do workflow)
pnpm dev                    # checagem manual: / e /professions, troca de idioma, filtros
```