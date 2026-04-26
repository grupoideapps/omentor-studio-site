# Clarity Engine — Diagnóstico de Clareza do Vendedor

Este framework determina **o quanto o usuário sabe do próprio produto** antes de qualquer coleta.
O resultado define o Modo de Operação da skill — e portanto o que será construído junto vs apenas coletado.

---

## O Teste de Clareza

Aplique as 5 perguntas abaixo **na primeira interação**, antes de qualquer outro passo.
Use o `ask_questions` para apresentá-las de forma estruturada — não como texto corrido.

```
Antes de começar, preciso entender onde você está.
Responda rapidamente — não existe resposta certa ou errada.
```

**As 5 perguntas (aplicar via formulário):**

1. Você já tem o nome do seu produto definido?
   → [ ] Sim, está definido | [ ] Tenho ideia mas não defini | [ ] Não tenho ainda

2. Você sabe exatamente o que vai entregar (os arquivos, aulas, templates, etc.)?
   → [ ] Sei tudo com detalhes | [ ] Tenho ideia geral | [ ] Ainda não sei

3. Você consegue descrever quem é seu cliente ideal em 2 frases?
   → [ ] Sim, consigo | [ ] Mais ou menos | [ ] Não consigo ainda

4. Você já vendeu esse produto (ou algo parecido) antes?
   → [ ] Sim, já vendi | [ ] Não vendi mas pesquisei o mercado | [ ] Nunca vendi nada parecido

5. Você tem depoimentos ou resultados de clientes para mostrar?
   → [ ] Tenho vários | [ ] Tenho alguns | [ ] Não tenho nenhum

---

## Mapa de Pontuação

Atribua pontos por resposta:

| Resposta | Pontos |
|----------|--------|
| Primeira opção (mais claro) | 2 |
| Segunda opção (parcial) | 1 |
| Terceira opção (menos claro) | 0 |

**Soma total → Modo de Operação:**

| Score | Modo | Perfil |
|-------|------|--------|
| 8–10 | **DIRETO** | Sabe o que tem, sabe para quem, tem prova. Skill coleta e produz. |
| 4–7 | **HÍBRIDO** | Tem partes claras, partes vagas. Skill coleta o que existe, constrói o que falta. |
| 0–3 | **GUIADO** | Produto e persona ainda em formação. Skill conduz a construção antes de qualquer copy. |

---

## MODO DIRETO (score 8–10)

**O que significa:** o usuário chegou com o produto pronto. Sabe o que vende, para quem, tem prova social.

**Como a skill age:**
- Pula a fase de construção de produto
- Vai direto para o onboarding de persona (3 rodadas)
- Coleta entregáveis como dados — apenas refina a copy de cada um
- Pode ser mais rápida e objetiva nas perguntas

**Perguntas adicionais opcionais (só se útil):**
- Os entregáveis têm nomes definitivos? Liste todos.
- Qual deles é o mais valioso na percepção do cliente?
- Algum entregável resolve uma dor diferente dos outros?

---

## MODO HÍBRIDO (score 4–7)

**O que significa:** o usuário tem clareza parcial — sabe a dor central e tem ideia do produto, mas os entregáveis são vagos ou incompletos.

**Como a skill age:**
- Faz o onboarding de persona primeiro (dor → persona → desejo)
- Usa o resultado do onboarding para **sugerir entregáveis** baseados na dor mapeada
- Apresenta uma lista sugerida para o usuário validar/ajustar
- Só então parte para a copy

**Processo de construção de entregáveis no Modo Híbrido:**

```
1. Com base na dor principal identificada, sugira 3–5 entregáveis
   usando o framework abaixo (ver seção "Como Derivar Entregáveis da Dor")

2. Apresente ao usuário:
   "Com base no que você me contou, esses seriam os entregáveis que fazem sentido:
   [lista]. Você quer ajustar algum? Adicionar? Remover?"

3. Valide a lista e defina os nomes finais

4. Sugira 2–3 bônus que cubram objeções não resolvidas pelos entregáveis principais
```

---

## MODO GUIADO (score 0–3)

**O que significa:** o usuário tem uma ideia — um nicho, uma dor que observa, uma habilidade — mas o produto ainda não existe. É o perfil mais comum de quem está criando seu primeiro low ticket.

**Como a skill age:**
- Conduz uma sessão de **descoberta do produto** antes de qualquer copy
- Faz perguntas sobre o que o usuário sabe fazer, que dor ele observa no mercado, o que ele mesmo já sofreu
- Constrói o produto junto — nome, entregáveis, bônus, promessa, preço sugerido
- Só então parte para persona e copy

**Sessão de descoberta (Modo Guiado):**

Aplique em sequência, aguardando resposta a cada bloco:

**Bloco D1 — A habilidade ou conhecimento**
```
Qual é o assunto em que você tem mais conhecimento ou experiência?
O que pessoas próximas te pedem ajuda ou conselho?
Você já resolveu algum problema específico que outros ainda têm?
```

**Bloco D2 — A dor de mercado**
```
Qual é a dificuldade mais comum que você vê no seu nicho?
O que as pessoas do seu nicho mais reclamam?
O que elas tentam fazer e sempre travam?
```

**Bloco D3 — O formato possível**
```
O que você poderia criar para resolver essa dor?
  → [ ] Um checklist / guia rápido
  → [ ] Um template editável (Canva, Word, Planilha)
  → [ ] Um mini-curso em vídeo (3–5 aulas curtas)
  → [ ] Uma cartilha / e-book
  → [ ] Estruturas prontas para copiar
  → [ ] Uma combinação dos anteriores

Quanto tempo você tem para produzir isso?
  → [ ] 1–3 dias | [ ] 1 semana | [ ] 2+ semanas
```

**Após D1–D3:**
1. Proponha um nome para o produto (3 opções — ver framework abaixo)
2. Derive os entregáveis principais + bônus
3. Sugira um preço coerente com o mercado low ticket
4. Identifique se algum bônus pode ser melhor vendido como order bump
5. Valide tudo com o usuário antes de avançar para persona e copy

---

## Como Derivar Entregáveis da Dor (Todos os Modos)

Use este framework sempre que precisar construir ou sugerir entregáveis:

### Framework D.A.R. (Dor → Ação → Resultado)

Para cada dor identificada na persona, derive um entregável usando a lógica:

```
Dor: [o que ela não consegue fazer / o que trava]
Ação: [o que o entregável permite fazer]
Resultado: [o que ela conquista]

Nome do entregável = [Formato] + [Promessa específica]
Descrição = "Você vai [AÇÃO] para [RESULTADO], mesmo que [OBSTÁCULO]."
```

**Exemplos:**

| Dor da Persona | Entregável Derivado | Nome | Copy |
|----------------|--------------------|----- |------|
| Não sabe estruturar uma página | Template HTML pronto | "Modelo de Página Low Ticket" | "Você vai ter a estrutura completa pronta para personalizar, sem precisar saber código." |
| Não sabe criar copy persuasiva | Roteiro de copy preenchível | "Template de Copy de Alta Conversão" | "Você vai preencher os campos e ter uma copy profissional em menos de 30 minutos." |
| Tem medo de errar no tráfego | Estrutura de campanha validada | "Cartilha de Campanhas com ROI 2+" | "Você vai copiar a estrutura exata que bate ROI positivo, sem depender de tentativa e erro." |
| Não sabe criar design profissional | Guia de ferramentas gratuitas | "Tutorial de Mockups com IA" | "Você vai gerar imagens profissionais para sua página em minutos, sem pagar designer." |

### Tipos de entregáveis mais comuns no low ticket BR

| Formato | Quando usar | Valor percebido |
|---------|------------|----------------|
| Template editável (Canva/Word) | Quando a dor é de execução | Alto — "é só preencher" |
| Checklist / Guia rápido (PDF) | Quando a dor é de organização/decisão | Médio — simples mas útil |
| Estrutura pronta para copiar | Quando a dor é de estratégia | Alto — atalha o processo |
| Mini-curso em vídeo (3–5 aulas) | Quando a dor é de conhecimento | Médio-alto — percepção de transformação |
| Planilha/calculadora | Quando a dor é de análise/gestão | Alto — resolve um cálculo recorrente |
| Swipe file (biblioteca de exemplos) | Quando a dor é de referência/inspiração | Médio-alto — economiza tempo |
| Passo a passo filmado em tela | Quando a dor é de execução técnica | Alto — ninguém erra seguindo |
| Script/roteiro editável | Quando a dor é de comunicação/vendas | Alto — "só adaptar para o meu produto" |

### Regras de composição de entregáveis

**Entregável principal (1 item):** resolve a dor central. É a promessa do Hero.
**Entregáveis secundários (2–4 itens):** resolvem dores adjacentes. Ampliam o valor.
**Bônus (2–4 itens):** resolvem objeções ou entregam quick wins. Devem surpreender.

**Regra de nomeação:** nomes que vendem são específicos + orientados ao resultado.
- ❌ "Guia de Marketing" → ✅ "Guia de 7 Passos para Sua Primeira Venda no Instagram"
- ❌ "Template de Bio" → ✅ "30 Modelos de Bio Profissional para Vender Mais"
- ❌ "Checklist de Criativo" → ✅ "Checklist dos 12 Elementos que Fazem um Criativo Escalar"

---

## Como Nomear o Produto (3 Fórmulas Validadas)

Use quando o usuário não tem nome definido (Modo Guiado ou Modo Híbrido):

**Fórmula 1 — Resultado + Formato**
```
[Resultado desejado] + [Formato do produto]
Ex: "Kit de Páginas Low Ticket", "Cartilha do Tráfego Pago", "Biblioteca de Criativos"
```

**Fórmula 2 — Número + Promessa Específica**
```
[Número] + [O que a persona vai conseguir]
Ex: "32 Formatos de Criativos com ROI 2+", "7 Templates de Bio que Vendem", "Guia de 5 Passos para..."
```

**Fórmula 3 — Ação + Benefício + Objeto**
```
[Verbo de ação] + [Benefício] + [O quê]
Ex: "Copie e Venda: Modelo de Página Validada", "Escale Agora: Estruturas de Campanha Low Ticket"
```

**Sempre apresente 3 opções ao usuário.** Nomes são subjetivos — ele escolhe, você refina.

---

## Como Definir Preço (Orientação por Modo)

| Modo | Orientação de preço |
|------|---------------------|
| GUIADO | Sugerir entre R$47 e R$67. Produto novo sem prova social → preço de entrada com valor claro. |
| HÍBRIDO | Sugerir entre R$67 e R$97. Depende da profundidade dos entregáveis e da prova disponível. |
| DIRETO | O usuário já sabe. Apenas valide se a âncora (Bloco 8) está coerente com o preço e ajuste se necessário. |

**Regra da âncora:** independente do preço final, o total do Bloco 8 (Recapitulando) deve ser 5–8x o preço real. Se o produto custa R$37, a âncora deve ser entre R$185 e R$296. Se custa R$97, entre R$485 e R$776.

**Como calcular os valores individuais dos entregáveis:**
- Divida a âncora total pelo número de entregáveis + bônus
- Ajuste para que o item mais valioso valha ~30% do total
- Use valores com credibilidade: R$47, R$67, R$97, R$147, R$197 — nunca R$100 ou R$50

**Regra de monetização complementar:**
- Se um bônus for muito útil, mas também puder ser comprado sozinho, transforme-o em order bump.
- Order bump deve ser simples, de consumo rápido e extremamente específico. Exemplos: e-book curto, checklist, swipe file, pack de prompts, banco de ideias.
- Preço padrão do order bump: R$19. Use R$27 quando o item tiver mais profundidade, mas ainda for de baixo atrito.

---

## Como Definir o Tratamento de Autoridade por Modo

| Item | MODO GUIADO | MODO HÍBRIDO | MODO DIRETO |
|------|-------------|--------------|-------------|
| Teste de autoridade | Obrigatório | Obrigatório | Opcional (só se bio vaga) |
| Tipo de criador | Determinar via teste | Determinar via teste | Assumir por contexto |
| Bio estruturada | Construir do zero (3 parágrafos) | Construir/refinar | Coletar e ajustar |
| Foto do autor | Solicitar ao usuário | Solicitar ao usuário | Solicitar ao usuário |

**Referência:** para executar a Sessão de Descoberta de Autoridade, leia `authority-builder.md`.

---

## Registro do Modo (para uso interno durante a sessão)

Após o teste, registre internamente:

```
MODO: [DIRETO / HÍBRIDO / GUIADO]
SCORE: [0-10]
PRODUTO: [definido / parcial / a construir]
ENTREGÁVEIS: [definidos / a derivar / a construir]
PERSONA: [conhecida / parcial / a descobrir]
PROVA SOCIAL: [tem / parcial / não tem]
AUTORIDADE: [especialista / curador / especialista-em-formação / híbrido / a descobrir]
```

Esse registro guia o ritmo de toda a sessão — o que perguntar, o que propor, o que construir.
