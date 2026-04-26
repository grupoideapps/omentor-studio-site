# Guia de Variáveis — Template Low Ticket

Este arquivo documenta todas as variáveis `{{VARIAVEL}}` do template HTML, sua função estratégica e como preenchê-las corretamente para qualquer produto low ticket.

---

## Escolha do Design System

Antes de preencher as variáveis de copy e layout, a skill deve selecionar um `design system` do catálogo em `references/design-systems/` ou sintetizar um novo a partir de referência.

Essa decisão define:

- paleta base
- tipografia
- radius
- sombras e bordas
- superfícies
- estados de interação
- linguagem do logo
- briefing das imagens e mockups

**Regra de trabalho**
- `Meta` continua como base padrão quando o usuário não escolher outro sistema.
- `Notion` é a alternativa padrão quando o produto pede ferramenta, organização ou template.
- Se o usuário colar uma referência visual, crie um novo `design system` inspirado nela e registre o nome na sessão de trabalho.

**O que a skill deve fazer após a escolha**
1. Ler o arquivo do sistema escolhido em `references/design-systems/`.
2. Traduzir os tokens visuais para o HTML e os prompts de asset.
3. Ajustar logo, mockups e fundo das seções para manter coerência.
4. Evitar misturar dois sistemas sem uma decisão explícita.

## Variáveis Globais (usadas em múltiplos blocos)

| Variável | Onde Aparece | O que é | Exemplo |
|----------|-------------|---------|---------|
| `{{NOME_PRODUTO}}` | Todos os blocos | Nome curto do produto | "Kit Copy e Pagina de Vendas" |
| `{{CHECKOUT_URL}}` | Blocos 9, 12, 13 | Link do checkout (Hotmart, Kiwify, etc.) | "https://pay.hotmart.com/..." |
| `{{TEXTO_CTA}}` | Blocos 9, 12, 13 | Texto do botão de compra | "QUERO COMPRAR AGORA" |
| `{{MOCKUP_URL}}` | Hero, Bloco 9, 13 | Imagem do produto (mockup, ebook, etc.) | URL da imagem |
| `{{FOTO_AUTOR_URL}}` | Bloco 3, 11 | Foto do criador do produto | URL da foto |
| `{{NOME_AUTOR}}` | Bloco 11 | Nome completo do criador | "Ricardo Silva" |
| `{{LOGO_URL}}` | Legado / opcional | Se você externalizar o lockup, use esta URL; o template atual renderiza o logo em HTML/SVG inline | URL da imagem |

---

## Bloco 1 — Hero

| Variável | Instrução de Copy |
|----------|------------------|
| `{{PROMESSA_PRINCIPAL}}` | O resultado desejado em 3-6 palavras. Ex: "criar sua página de vendas" |
| `{{TEMPO_ESPECIFICO}}` | Prazo crível e específico. Ex: "menos de 1 hora", "30 minutos" |
| `{{OBJECAO}}` | A principal objeção da persona. Ex: "não saiba nada de design" |
**Fórmula da headline:** `Descubra como [PROMESSA] em [TEMPO], mesmo que [OBJEÇÃO].`

**Nota:** o hero usa o lockup em HTML/SVG inline. Use `{{LOGO_URL}}` somente se decidir externalizar o logo.

---

## Logo em HTML/SVG — Primeiro Asset da LP

O logo deve ser criado antes das outras imagens, assim que `{{NOME_PRODUTO}}`, promessa, nicho e persona estiverem claros. Ele define a linguagem visual mínima da página e deve ser reaproveitado no hero e nos blocos de preço.

**Função estratégica:** transformar o nome da oferta em marca reconhecível, mesmo em uma LP simples de low ticket. O logo não precisa parecer uma marca corporativa grande; precisa parecer específico, confiável e coerente com a transformação vendida.

**Estrutura fixa do template:**
- Lockup em três linhas.
- Linha 1: menor, contextual.
- Linha 2: principal, mais forte.
- Linha 3: complemento de impacto, pareada com o ícone.
- Fundo sempre transparente.
- Ícone em SVG inline dentro do componente `.product-lockup`.

**Referências oficiais para consulta Iconify:**
- API para renderizar SVG: https://iconify.design/docs/api/svg.html
- Uso sem código / copiar SVG: https://iconify.design/docs/usage/svg/no-code/
- Busca oficial de ícones: https://icon-sets.iconify.design/

Use essas referências para entender linguagem visual, proporção, viewBox, stroke/fill, nomes de categorias e formas de importar/copiar SVG. A saída final deve ser um SVG novo e semântico para a marca, não um ícone copiado diretamente.

**Briefing para a LLM gerar o componente:**
```
Crie um logo em HTML/SVG inline para uma página de venda low ticket.

Produto: [NOME_PRODUTO]
Nicho: [NICHO]
Promessa principal: [PROMESSA_PRINCIPAL]
Persona: [RESUMO_DA_PERSONA]
Transformação vendida: [ANTES] -> [DEPOIS]
Tom da marca: [simples, direto, confiável, energético, premium, popular etc.]

Use a estrutura de lockup existente do template: três linhas de texto em caixa alta e um ícone SVG pequeno pareado com a última linha.
Antes de desenhar o ícone, consulte mentalmente a lógica do Iconify: ícones por categoria, viewBox previsível, geometria simples, silhueta clara, bom reconhecimento em tamanho pequeno e consistência de stroke/fill.
Você pode usar a API do Iconify ou a busca oficial para observar referências de linguagem visual, mas não copie um ícone existente.
Escolha a metáfora visual a partir do produto, do nicho ou da transformação. Evite estrela genérica, foguete genérico ou check genérico se não forem semanticamente fortes para a oferta.
Pense como criador de marca: o ícone deve condensar a promessa em um símbolo próprio, simples e memorável.
Retorne somente o trecho HTML/CSS/SVG necessário para substituir o lockup atual, mantendo classes, escala e fundo transparente.
```

**Como escolher a metáfora do ícone:**
- Produto de template/processo: documento, blocos, cursor, checklist, grade, camadas.
- Produto de organização/gestão: calendário, painel, trilha, pasta, régua, lista.
- Produto de vendas/marketing: conversa, funil, vitrine, etiqueta, gráfico, alvo.
- Produto de saúde/beleza: contorno humano, rotina, folha, gota, brilho, antes/depois.
- Produto de educação: mapa, bússola, livro aberto, play, trilha, lâmpada.
- Produto financeiro: carteira, seta de clareza, calculadora, moeda simplificada, escudo.

**Critérios de aceite:**
- O ícone continua legível quando o lockup aparece pequeno no bloco de preço.
- O SVG não depende de imagem externa.
- O logo não cria um novo layout; ele respeita o componente existente.
- O ícone comunica a categoria ou a transformação sem precisar de explicação.

---

## Briefing de Imagens da LP

Todas as imagens devem ser geradas a partir do produto, persona, dor, desejo, objeção e etapa do funil. Elas não são ilustração decorativa; cada uma tem uma função na sequência de persuasão.

### Política de origem dos assets

Nem todo asset deve ser gerado com IA. A IA pode ajudar na direção criativa, recorte, extensão de fundo, mockup e consistência visual, mas não deve fabricar prova social nem resultados.

Use estas classificações:

| Origem | Quando usar | Regra |
|--------|-------------|-------|
| `real obrigatório` | Depoimentos, prints de resultado, provas, métricas, conversas | Nunca gerar com IA. Coletar, cortar, anonimizar e aplicar no layout. |
| `real preferencial` | Foto do autor, fotos do produto físico, fotos reais da persona/cliente quando existirem | Usar material real sempre que disponível. IA pode apoiar melhoria visual. |
| `IA permitida` | Mockups digitais, imagem conceitual de ruminação, passos, transformação, stack de valor | Gerar se não houver imagem real melhor. |
| `IA como apoio` | Melhorar foto real, remover fundo, ampliar canvas, padronizar luz, criar composição com assets reais | Não alterar o sentido factual da imagem. |

**Regra inviolável:** depoimento é prova, não peça criativa. Se não houver depoimento real, não gere um falso. Use a alternativa estratégica da Etapa 2: beta para coletar prova ou trocar o bloco por "Veja como funciona" com prints reais do produto.

### Formato obrigatório do Asset Prompt Pack

Crie um arquivo `asset-prompts.md` com todos os prompts finais e briefings de captura/preparação. Não entregue instruções genéricas. Para assets de IA, o prompt deve estar pronto para colar em uma IA de geração de imagens. Para assets reais, o briefing deve indicar como capturar, selecionar, cortar, anonimizar, melhorar e salvar o arquivo no projeto.

Use este formato para cada asset:

```markdown
## [BLOCO] — [NOME DO ASSET]

asset: [nome estratégico]
arquivo: assets/[nome-exato-do-arquivo.ext]
uso no HTML: [src, seletor, bloco ou componente onde entra]
formato: [PNG/JPG/SVG]
origem do asset: [real obrigatório / real preferencial / IA permitida / IA como apoio]
proporção: [ex: 4:5, 1:1, 16:9, 3:2]
tamanho sugerido: [largura]x[altura]px
função estratégica: [por que essa imagem existe na LP]
contexto do produto: [produto, persona, dor, desejo, transformação e objeção usados]

prompt final ou briefing de preparação:
"""
[Prompt completo para IA ou instrução de captura/edição para asset real, específico, sem placeholders.]
"""

negative prompt:
"""
[O que evitar: texto ilegível, logos aleatórios, mãos deformadas, aparência stock, poluição visual, etc.]
"""

observações de implementação:
[Como exportar, recortar, manter sem texto embutido, trocar no HTML, consistência com o logo.]
```

### Tamanhos recomendados

| Asset | Arquivo | Proporção | Tamanho sugerido | Observação |
|-------|---------|-----------|------------------|------------|
| Hero antes | `bloc-1-antes-de-usar-produto-headline.png` | 4:5 | 1080x1350 | Mesma composição do depois |
| Hero depois | `bloc-1-depois-de-usar-produto-headline.png` | 4:5 | 1080x1350 | Mesma composição do antes |
| Depoimento | `bloc-2-depoimento-01.png` | 4:5 | 1080x1350 | Real obrigatório |
| Ruminação | `bloc-3-ruminacao.png` | 4:5 | 1080x1350 | Sem pensamentos embutidos se o HTML renderizar balões |
| Passo | `bloc-4-passo-01.png` | 4:5 | 1080x1350 | Gerar uma variação por passo quando possível |
| Entregável/bônus | `bloc-5-6-mockup-produto-entregue.png` | 4:5 | 1080x1350 | Mockup limpo e reutilizável |
| Transformação | `bloc-7-transformacao-produto.png` | 4:5 | 1080x1350 | Estado futuro da persona |
| Stack completo | `bloc-9-13-todos-mockups-juntos.png` | 3:2 | 1500x1000 | Mostrar pacote completo |
| Autoridade | `bloc-11-expert-do-produto.png` | 1:1 | 1200x1200 | Foto real preferencial |

**Regra de consistência:** todos os prompts devem reaproveitar a direção visual definida pelo logo/lockup: cores base, nível de sofisticação, metáfora visual e tom da marca.

### Bloco 1 — Hero Before/After

**Assets:** `bloc-1-antes-de-usar-produto-headline.png`, `bloc-1-depois-de-usar-produto-headline.png`

**Função estratégica:** mostrar contraste imediato entre dor atual e transformação prometida. A imagem deve fazer a promessa parecer visualmente concreta antes da pessoa entender todos os detalhes do produto.

**Antes:** estado da persona sem o produto. Mostre confusão, esforço, frustração, desorganização ou perda concreta ligada à dor principal.

**Depois:** estado da persona com o resultado alcançado. Mostre clareza, controle, progresso, simplicidade ou benefício visível.

**Prompt base:**
```
Crie duas imagens complementares para o hero de uma landing page low ticket.

Produto: [NOME_PRODUTO]
Persona: [PERSONA]
Dor antes do produto: [DOR_PRINCIPAL]
Resultado depois do produto: [RESULTADO_DESEJADO]
Contexto visual do nicho: [AMBIENTE/OBJETOS/SITUAÇÃO]

Imagem 1, ANTES: represente a persona antes da transformação, vivendo a dor de forma clara e específica.
Imagem 2, DEPOIS: represente a mesma persona após aplicar o produto, com a transformação visível.
As duas imagens devem ter composição parecida para reforçar comparação, sem texto embutido, com espaço limpo para receber labels HTML "antes" e "depois".
Estilo: realista/editorial simples, claro, confiável, sem aparência de banco de imagem genérico.
```

### Bloco 2 — Depoimentos

**Asset:** `bloc-2-depoimento-01.png` até `bloc-2-depoimento-06.png`

**Origem do asset:** real obrigatório.

**Função estratégica:** provar que pessoas parecidas já tiveram resultado. Depoimento precisa ser real, contextual e específico. Não é permitido criar print, resultado, conversa, nome, métrica ou prova com IA.

**Briefing de captura/preparação:**
```
Prepare um depoimento real para uma LP low ticket.

Produto: [NOME_PRODUTO]
Resultado que o depoimento deve provar: [RESULTADO_POSITIVO]
Situação inicial da pessoa: [SITUACAO_INICIAL]
Origem real do depoimento: [WhatsApp, Instagram DM, story, email, comunidade, vídeo, áudio transcrito]
Permissão de uso: [confirmada / pendente]

Use somente material real fornecido pelo cliente.
Corte dados sensíveis quando necessário: telefone, email, documento, endereço, informações privadas.
Preserve o conteúdo essencial do resultado e a naturalidade do print.
Se houver áudio/vídeo real, transcreva trecho curto e use como card de depoimento, deixando claro que veio de prova real.
Exporte em 1080x1350, mantendo boa leitura no mobile.
```

**Se não houver depoimento real:** não gere placeholder falso. Substitua estrategicamente o Bloco 2 por "Veja como funciona", usando prints reais do produto, bastidores, módulos, arquivos entregues ou demonstração da aplicação.

### Bloco 3 — Ruminação

**Asset:** `bloc-3-ruminacao.png`

**Função estratégica:** criar identificação emocional. A imagem representa a persona no pico da dor, cercada pelos pensamentos que ela realmente repete.

**Prompt base:**
```
Crie uma imagem central para o bloco de ruminação de uma página low ticket.

Persona: [PERSONA]
Dor cotidiana: [DOR_COTIDIANA]
Resultado frustrante: [RESULTADO_FRUSTRANTE]
Pensamentos reais da persona:
1. [PENSAMENTO_1]
2. [PENSAMENTO_2]
3. [PENSAMENTO_3]
4. [PENSAMENTO_4]
5. [PENSAMENTO_5]

Mostre a persona antes da transformação, visualmente pressionada pela situação.
Não coloque os pensamentos dentro da imagem se o HTML já renderizar balões de texto ao redor.
A imagem deve funcionar como o centro emocional do quadro, com fundo simples e foco na expressão/situação.
```

### Bloco 4 — Passo a Passo

**Asset:** `bloc-4-passo.png`

**Função estratégica:** provar simplicidade. Cada imagem deve mostrar que o método é executável, específico e menos complexo do que a persona imagina.

**Prompt base:**
```
Crie uma imagem para um passo do método em uma LP low ticket.

Produto: [NOME_PRODUTO]
Passo: [PASSO_NOME]
Descrição do passo: [PASSO_DESC]
Resultado que esse passo destrava: [RESULTADO_DO_PASSO]

Mostre uma ação concreta acontecendo, relacionada ao passo.
A imagem deve reduzir a sensação de dificuldade e comunicar "eu consigo fazer isso".
Sem texto embutido, sem interface ilegível, sem excesso de elementos.
```

### Blocos 5 e 6 — Entregáveis e Bônus

**Asset:** `bloc-5-6-mockup-produto-entregue.png`

**Função estratégica:** tangibilizar a oferta. O comprador precisa enxergar que receberá arquivos, templates, aulas, guias ou ferramentas concretas.

**Prompt base:**
```
Crie mockups dos entregáveis de um produto low ticket.

Produto: [NOME_PRODUTO]
Entregável: [NOME_ENTREGAVEL]
Formato: [PDF, checklist, planilha, template, mini-curso, biblioteca, roteiro]
Benefício do entregável: [BENEFICIO]
Identidade visual do produto: [CORES/LOGO/TOM]

Mostre o entregável como algo real: capa de PDF, tela de planilha, cards de templates, thumbnail de aula ou conjunto de arquivos.
O mockup deve parecer valioso, limpo e pronto para uso.
Não use texto longo ilegível. Use títulos curtos e formas visuais que comuniquem o formato.
```

### Bloco 7 — Transformação

**Asset:** `bloc-7-transformacao-produto.png`

**Função estratégica:** reforçar pertencimento e desejo. A imagem deve mostrar o estado futuro que a persona quer viver, não apenas o produto.

**Prompt base:**
```
Crie uma imagem para o bloco "para quem serve" de uma LP low ticket.

Produto: [NOME_PRODUTO]
Persona: [PERSONA]
Desejo máximo: [DESEJO_PERSONA]
Transformação final: [TRANSFORMACAO]
Contexto depois da transformação: [CENARIO]

Mostre a persona no estado desejado, com sinais visuais claros de progresso, controle ou conquista.
A imagem deve ajudar o leitor a pensar "isso é para mim".
Sem texto embutido.
```

### Blocos 9 e 13 — Produto Completo / Stack de Valor

**Asset:** `bloc-9-13-todos-mockups-juntos.png`

**Função estratégica:** justificar preço e aumentar valor percebido. Mostra o pacote completo como algo maior do que o preço cobrado.

**Prompt base:**
```
Crie uma imagem de stack de valor para uma página de venda low ticket.

Produto: [NOME_PRODUTO]
Entregáveis principais: [LISTA_ENTREGAVEIS]
Bônus: [LISTA_BONUS]
Formatos: [PDF, templates, planilhas, vídeos, checklists]
Identidade visual: [CORES/LOGO/TOM]

Mostre todos os mockups juntos em uma composição densa, organizada e premium o suficiente para justificar o preço.
A imagem deve parecer um pacote completo de materiais digitais.
Evite poluição visual e textos longos ilegíveis.
```

### Bloco 11 — Autoridade

**Asset:** `bloc-11-expert-do-produto.png`

**Origem do asset:** real preferencial.

**Função estratégica:** transferir confiança do criador para a oferta. A foto deve tornar o produto mais humano e confiável.

**Briefing de foto/apoio IA:**
```
Prepare a imagem de autoridade para o criador de uma LP low ticket.

Criador: [NOME_AUTOR]
Papel percebido: [ROLE_AUTOR]
Nicho: [NICHO]
Tom de autoridade: [próximo, técnico, especialista, curador, mentor]

Use foto real sempre que disponível: rosto visível, expressão natural, boa luz e fundo simples.
IA pode apoiar em: remover fundo, melhorar luz, ampliar canvas, padronizar recorte e criar variação de fundo neutro.
IA não deve transformar a pessoa em outra aparência nem criar credencial visual falsa.
Se não houver foto real, gere apenas um retrato placeholder provisório e marque como provisório no asset-prompts.md.
A imagem deve passar confiança sem parecer corporativa demais, artificial demais ou stock.
```

---

## Bloco 2 — Depoimentos

| Variável | Instrução |
|----------|-----------|
| `{{SITUACAO_INICIAL}}` | Estado anterior negativo da persona. Ex: "travavam na hora de criar páginas" |
| `{{RESULTADO_POSITIVO}}` | Resultado obtido após o produto. Ex: "vender todos os dias no low ticket" |
| `{{DEP_IMG_1}}` a `{{DEP_IMG_6}}` | Screenshots reais de depoimentos (WhatsApp, DM, stories). Mínimo 4. |

**Regra:** Depoimentos ANTES de explicar o produto. Prova social no topo converte mais.

---

## Bloco 3 — Ruminação

| Variável | Instrução de Copy |
|----------|------------------|
| `{{DOR_COTIDIANA}}` | Ação repetitiva que a persona odeia fazer. Ex: "torrar dinheiro no tráfego" |
| `{{RESULTADO_FRUSTRANTE}}` | O que ela vê acontecer (negativo). Ex: "seu ROI despencar" |
| `{{RUMINACAO_IMG}}` | Imagem central da persona sob pressão, sem texto embutido quando o HTML renderizar os balões ao redor. |
| `{{RUMINACAO_1}}` a `{{RUMINACAO_4}}` | Frases reais da persona no pico da dor, renderizadas nos balões HTML. |

**Os pensamentos devem ser:** frases exatas que a persona diz para si mesma. Não edite — copie da linguagem real do público. Pesquise nos comentários do YouTube, grupos do Facebook, DMs. Se houver mais de 4 frases boas, priorize as 4 mais cruas e específicas para os balões visíveis do template.

**Formato da caixa de confirmação:** Foto do criador + "Estou certo?" em destaque vermelho.

---

## Bloco 4 — Passo a Passo

| Variável | Instrução |
|----------|-----------|
| `{{RESULTADO_PRINCIPAL}}` | O resultado do headline do bloco. Ex: "usar o Kit e vender todos os dias" |
| `{{PASSO1}}` | Primeiro passo simples e concreto |
| `{{PASSO2}}` | Segundo passo |
| `{{PASSO3}}` | Terceiro passo — deve terminar no resultado |

**Regra:** Sempre 3 passos. Nunca mais, nunca menos. A simplicidade é o argumento.

---

## Bloco Extra — Benefícios

| Variável | Instrução |
|----------|-----------|
| `{{BENEFICIO_1}}` a `{{BENEFICIO_4}}` | Transformações, não features. "Parar de queimar dinheiro" > "Acesso a templates" |

---

## Bloco 5 — Entregáveis

| Variável | Instrução |
|----------|-----------|
| `{{ENT1_NOME}}` | Nome do entregável (direto e específico) |
| `{{ENT1_DESC}}` | Descrição em 2-3 linhas: o que é, para que serve, como facilita a vida |
| `{{ENT1_IMG}}` | Mockup do entregável (ebook, planilha, vídeo thumbnail, etc.) |

**Layout:** Alterne `.ent-card` (imagem à esquerda) e `.ent-card.reverse` (imagem à direita).
**Quantidade:** 3 a 6 entregáveis principais.

---

## Bloco 6 — Bônus

| Variável | Instrução |
|----------|-----------|
| `{{BONUS1_NOME}}` | Nome do bônus |
| `{{BONUS1_DESC}}` | O que é e por que é valioso |
| `{{BONUS1_IMG}}` | Imagem do bônus |

**Regra:** Bônus devem resolver objeções secundárias ou ampliar o resultado do produto principal.
**Quantidade recomendada:** 3 a 5 bônus.
**Regra de monetização:** se um bônus for pequeno, autônomo e muito fácil de consumir, considere vendê-lo como order bump separado em vez de deixá-lo só como bônus.

---

## Bloco 7 — Para Quem Serve

| Variável | Instrução |
|----------|-----------|
| `{{PQ_ITEM_1}}` a `{{PQ_ITEM_6}}` | Situações/perfis que se encaixam. Misture: desejos, dores, limitações, segmentos |
| `{{DESEJO_PERSONA}}` | O desejo máximo da persona. Ex: "criar uma fonte de renda com low ticket" |

---

## Bloco 8 — Recapitulando

| Variável | Instrução |
|----------|-----------|
| `{{RECAP_ITEM_1}}` a `{{RECAP_ITEM_N}}` | Nome de cada entregável (principal + bônus) |
| `{{RECAP_VALOR_1}}` a `{{RECAP_VALOR_N}}` | Valor unitário atribuído a cada item (ex: 197,00) |
| `{{TOTAL_VALOR}}` | Soma de todos os valores (âncora de preço) |

**Regra de ancoragem:** O TOTAL_VALOR deve ser pelo menos 5-8x o preço real do produto.

---

## Bloco 9/13 — Valor (Preço)

| Variável | Instrução |
|----------|-----------|
| `{{QTDE_PARCELAS}}` | Número de parcelas. Ex: "12x de" / "5x de" |
| `{{PRECO_PARCELADO}}` | Valor da parcela. Ex: "9,00" |
| `{{PRECO_VISTA}}` | Preço à vista. Ex: "87,00" |
| `{{SELOS_URL}}` | Imagem com selos: Hotmart, Kiwify, Visa, Mastercard, Pix, Boleto |

**Sugestão de preço quando faltar:**
- `R$47` para ofertas compactas, diretas e sem muita profundidade
- `R$67` para ofertas completas com mais entregáveis e clareza
- `R$97` para ofertas com mais valor percebido, prova ou profundidade operacional

---

## Bloco 10 — Como Acessar

| Variável | Instrução |
|----------|-----------|
| `{{ACESSO_PASSO1_TITULO}}` | Ex: "FAÇA SUA COMPRA" |
| `{{ACESSO_PASSO1_DESC}}` | Ex: "Em poucos minutos você recebe seu acesso na sua caixa de entrada." |
| `{{ACESSO_PASSO2_TITULO}}` | Ex: "BAIXE O MATERIAL" |
| `{{ACESSO_PASSO2_DESC}}` | Ex: "Todo o material fica disponível para download instantâneo." |
| `{{ACESSO_PASSO3_TITULO}}` | Ex: "TUDO PRONTO!" |
| `{{ACESSO_PASSO3_DESC}}` | Ex: "Agora é só aplicar e ver os resultados." |

---

## Bloco 11 — Autoridade

| Variável | Instrução |
|----------|-----------|
| `{{NOME_AUTOR}}` | Nome completo ou nome de marca do criador |
| `{{ROLE_AUTOR}}` | Posicionamento em 3-5 palavras. Não é cargo corporativo — é como a persona esperaria chamá-lo. Ex: "Especialista em Low Ticket", "Criador do [PRODUTO]", "Estrategista de Tráfego Pago" |
| `{{FOTO_AUTOR_URL}}` | Foto real obrigatória. Rosto, fundo neutro, expressão natural. Solicitar ao usuário antes de gerar HTML. |
| `{{BIO_AUTOR}}` | Bio estruturada em **3 parágrafos** conforme tipo do criador. Construída via `authority-builder.md`. |

**Estrutura da bio por tipo de criador:**

ESPECIALISTA (resultado próprio comprovado):
```
P1: [NOME] é [ROLE] e [RESULTADO NUMÉRICO ESPECÍFICO].
P2: [O mecanismo — o que descobriu, o sistema que criou, o processo específico]
P3: Criou o [PRODUTO] para [PERSONA] poder [ATALHO]. Agora [CONVITE À AÇÃO].
```

CURADOR (sem resultado próprio direto):
```
P1: [NOME] é [ROLE] e passou [TEMPO/VOLUME] pesquisando e compilando [TEMA] para [PERSONA].
P2: [O processo de curadoria — o que analisou, como filtrou, o que descartou]
P3: O [PRODUTO] é o resultado desse trabalho. Você recebe o que funciona, sem [CUSTO QUE A PERSONA EVITA].
```

ESPECIALISTA EM FORMAÇÃO (resultado real, sem prova pública):
```
P1: [NOME] é [ROLE] e [EXPERIÊNCIA CONCRETA — tempo no nicho, volume, contexto].
P2: Depois de [experiência], [o que descobriu ou criou]. Aplicou em [contexto] e [resultado, mesmo que pequeno].
P3: Criou o [PRODUTO] porque [RAZÃO GENUÍNA] — é o que [ele/ela] gostaria de ter tido quando [situação da persona].
```

**Regras de quality check:**
- Resultado numérico > currículo genérico
- Limitação compartilhada com a persona = argumento de "eu também consegui"
- Formação acadêmica irrelevante para o nicho = omitir
- Foto é obrigatória — sem foto, o bloco perde credibilidade

---

## Bloco 12 — Conversa Séria

| Variável | Instrução de Copy |
|----------|------------------|
| `{{OPT1_ITEM_1}}` a `{{OPT1_ITEM_3}}` | Consequências de NÃO comprar (dores continuadas) |
| `{{OPT2_ITEM_1}}` a `{{OPT2_ITEM_3}}` | Resultados de comprar (transformações desejadas) |

**Regra:** Opção 1 começa com "Continuar..." / "Seguir sem..." / "Ignorar...". Opção 2 começa com o verbo da transformação.

---

## Bloco 14 — FAQ

FAQs obrigatórias para low ticket (em ordem de frequência):

| Variável | Pergunta padrão |
|----------|----------------|
| `{{FAQ_Q1}}` | "Qual é a forma de pagamento?" |
| `{{FAQ_Q2}}` | "O pagamento é seguro?" |
| `{{FAQ_Q3}}` | "Funciona para mim?" |
| `{{FAQ_Q4}}` | "Tem garantia?" |
| `{{FAQ_Q5}}` | "Como vou acessar o produto?" |

**FAQs específicas do produto (obrigatórias além das padrão):**

Derive diretamente das objeções coletadas no onboarding (Rodada 2). Para cada objeção identificada, transforme em FAQ:

```
Objeção coletada: "Não tenho tempo para aplicar"
→ FAQ: "E se eu não tiver tempo? Quanto tempo preciso por dia?"

Objeção coletada: "Já tentei coisas parecidas que não funcionaram"
→ FAQ: "O que diferencia [PRODUTO] do que eu já tentei?"

Objeção coletada: "Não sei se funciona para o meu nicho"
→ FAQ: "[PRODUTO] funciona para qualquer nicho?"

Objeção coletada: "Medo de não conseguir aplicar sozinho"
→ FAQ: "Preciso de conhecimento técnico para usar?"
```

**Regra:** mínimo de 2 FAQs específicas do produto além das 5 padrão. Se o onboarding coletou objeções bem mapeadas, use todas as relevantes.

---

## Bloco 15 — Rodapé

| Variável | Instrução |
|----------|-----------|
| `{{CONTATO_EMAIL}}` | Email de suporte |
| `{{DISCLAIMER}}` | Texto de isenção padrão (ver abaixo) |
| `{{ANO}}` | Ano atual |
| `{{ESTADO}}` | Estado da empresa |
| `{{CNPJ}}` | CNPJ |

**Disclaimer padrão:**
> "Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. A compra desse material não garante nenhum tipo de resultado. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais de alunos."
