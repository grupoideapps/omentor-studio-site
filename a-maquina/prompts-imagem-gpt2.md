# Asset Prompts — MCE: Método Conteúdo Infinito

Prompts finais e briefings de captura para todos os assets da landing page.
Design system: Meta (canvas branco, azul #0064E0, tipografia Optimistic VF, fotografia forte).
Produto: MCE — Método Conteúdo Infinito | Preço: R$67
Persona: Profissional formado (terapeuta, coach, advogado, nutricionista, mentor, empreendedor) que quer atrair clientes pelo Instagram mas está perdido no digital.

---

## BLOCO 1 — Hero Antes

asset: Hero estado de dor da persona
arquivo: assets/bloc-1-antes-de-usar-produto-headline.png
uso no HTML: src da tag img dentro de .hero-ba-card.before
formato: PNG
origem do asset: IA permitida
proporção: 4:5
tamanho sugerido: 1080x1350px
função estratégica: mostrar visualmente a frustração da persona tentando criar conteúdo sem direção, antes de conhecer o MCE
contexto do produto: Produto MCE resolve a dor de não saber o que postar no Instagram. Persona é profissional formado, competente na sua área, mas perdido no digital. Dor: posta de forma aleatória, fica em branco na hora de criar conteúdo, não tem estratégia.

prompt final ou briefing de preparação:
"""
Editorial product photography style. A professional woman in her 30s or 40s sits at a clean desk looking frustrated and overwhelmed at her phone or laptop screen. She has a notebook open with few or no notes. Her expression shows confusion and stress. The background is minimal and neutral — white or light gray wall, soft natural light. No text on screen. No brand logos. No clutter. The mood is: "I don't know what to post and I'm stuck." Realistic, clean, editorial. Not stock-photo generic. Shot from a slight angle, slightly above. Warm but muted color palette consistent with Meta design system — whites, light grays, natural skin tones.
"""

negative prompt:
"""
Text overlays, brand logos, busy backgrounds, stock photo look, generic office setting, fake smiles, exaggerated frustration, horror expression, dark lighting, clutter, multiple people, man as main subject.
"""

observações de implementação:
Exportar sem texto embutido. O HTML adiciona a pill "antes" em vermelho sobre a imagem. Manter composição com espaço no topo para o label. Mesma enquadramento e paleta da imagem "depois" para reforçar comparação visual.

---

## BLOCO 1 — Hero Depois

asset: Hero estado de transformação da persona
arquivo: assets/bloc-1-depois-de-usar-produto-headline.png
uso no HTML: src da tag img dentro de .hero-ba-card.after
formato: PNG
origem do asset: IA permitida
proporção: 4:5
tamanho sugerido: 1080x1350px
função estratégica: mostrar a persona no estado desejado — confiante, com conteúdo fluindo, presença digital organizada
contexto do produto: Após usar o MCE, a persona cria conteúdo profissional em escala, personalizado para o seu nicho, no piloto automático, sem precisar de agência ou designer.

prompt final ou briefing de preparação:
"""
Editorial product photography style. The same professional woman in her 30s or 40s now sits at a clean desk with a confident, calm smile. She's looking at her phone or laptop screen with satisfaction. The screen shows a well-organized Instagram profile or a content creation interface — blurred or not fully readable. Her posture is relaxed and confident. Light is warm and bright. Background is minimal — white or light gray. The mood is: "I finally know exactly what to post and my content is flowing." Realistic, clean, editorial. Not stock-photo generic. Warm, inviting color palette consistent with Meta design system — whites, soft blues, natural skin tones.
"""

negative prompt:
"""
Text overlays, readable brand logos, busy backgrounds, stock photo look, exaggerated happiness, thumbs up pose, multiple people, dark or moody lighting, clutter, man as main subject.
"""

observações de implementação:
Exportar sem texto embutido. O HTML adiciona a pill "depois" em verde sobre a imagem. Manter enquadramento idêntico ao "antes" para maximizar o contraste da comparação.

---

## BLOCO 2 — Depoimento 1

asset: Print de conversa real com Lígia Flauzino — satisfação com a página
arquivo: assets/bloc-2-depoimento-01.png
uso no HTML: src da tag img dentro do primeiro .dep-item .dep-media
formato: PNG
origem do asset: real obrigatório
proporção: 4:5
tamanho sugerido: 1080x1350px
função estratégica: provar que o método gerou resultado real para uma cliente — página profissional que gerou elogios e pedidos de clientes

prompt final ou briefing de preparação:
"""
ASSET REAL — NÃO GERAR COM IA.

Arquivo disponível no Google Drive em: Provas Sociais / IMG_2636.PNG

Briefing de preparação:
1. Baixe o print IMG_2636.PNG da pasta Provas Sociais no Google Drive.
2. Recorte apenas a parte da conversa que contém: "Eu estou muito feliz com a minha página."
3. Remova ou borre qualquer dado sensível além do nome Lígia Flauzino (já público).
4. Mantenha a naturalidade do print — não redesenhe nem altere o conteúdo.
5. Adicione fundo branco se necessário para completar proporção 4:5.
6. Exporte em 1080x1350px, boa legibilidade no mobile.
7. Salve como: assets/bloc-2-depoimento-01.png
"""

negative prompt:
"""
Não gerar print falso, não inventar nome, não criar conversa simulada, não alterar o conteúdo do depoimento.
"""

observações de implementação:
O HTML renderiza este print dentro de um card com pill azul exibindo a frase-chave do depoimento. Garantir que o texto do print seja legível em tela mobile (mínimo 16px equivalente).

---

## BLOCO 2 — Depoimento 2

asset: Print de conversa real com Lígia Flauzino — 120 pessoas só elogios
arquivo: assets/bloc-2-depoimento-02.png
uso no HTML: src da tag img dentro do segundo .dep-item .dep-media
formato: PNG
origem do asset: real obrigatório
proporção: 4:5
tamanho sugerido: 1080x1350px
função estratégica: provar alcance e validação social — 120 pessoas viram a página e só vieram elogios

prompt final ou briefing de preparação:
"""
ASSET REAL — NÃO GERAR COM IA.

Arquivo disponível no Google Drive em: Provas Sociais / IMG_2660.PNG

Briefing de preparação:
1. Baixe o print IMG_2660.PNG da pasta Provas Sociais no Google Drive.
2. Recorte a parte da conversa que contém: "Saiba que enviei na sexta e no sábado para um total de 120 pessoas, foram só elogios a página."
3. Remova ou borre qualquer dado sensível além do nome Lígia Flauzino.
4. Mantenha a naturalidade do print.
5. Adicione fundo branco se necessário para completar proporção 4:5.
6. Exporte em 1080x1350px.
7. Salve como: assets/bloc-2-depoimento-02.png
"""

negative prompt:
"""
Não gerar print falso, não inventar métricas, não alterar os números reais do depoimento.
"""

observações de implementação:
Garantir que o número "120 pessoas" seja claramente legível. É o dado mais forte deste depoimento.

---

## BLOCO 2 — Depoimento 3

asset: Print de conversa real com Lígia Flauzino — primeiro pedido de cliente pelo site
arquivo: assets/bloc-2-depoimento-03.png
uso no HTML: src da tag img dentro do terceiro .dep-item .dep-media
formato: PNG
origem do asset: real obrigatório
proporção: 4:5
tamanho sugerido: 1080x1350px
função estratégica: provar conversão real — a página gerou pedido de cliente concreto, não só elogios

prompt final ou briefing de preparação:
"""
ASSET REAL — NÃO GERAR COM IA.

Arquivo disponível no Google Drive em: Provas Sociais / IMG_2677.PNG

Briefing de preparação:
1. Baixe o print IMG_2677.PNG da pasta Provas Sociais no Google Drive.
2. Recorte a parte da conversa que contém: "Eu já recebi pedido para o mapeamento de perfil comportamental pelo link no site daquelas 120 pessoas que eu enviei o site e fiquei impressionada com a riqueza das informações enviada pela cliente."
3. Remova ou borre qualquer dado sensível além do nome Lígia Flauzino.
4. Mantenha a naturalidade do print.
5. Adicione fundo branco se necessário para completar proporção 4:5.
6. Exporte em 1080x1350px.
7. Salve como: assets/bloc-2-depoimento-03.png
"""

negative prompt:
"""
Não gerar print falso, não inventar resultados, não alterar o conteúdo do depoimento.
"""

observações de implementação:
Este é o depoimento mais forte — mostra conversão real. Garantir que a frase sobre o pedido de cliente seja legível e destacada.

---

## BLOCO 3 — Ruminação

asset: Persona no pico da dor — Instagram parado, sem estratégia
arquivo: assets/bloc-3-ruminacao.png
uso no HTML: src da tag img dentro de .rum-board-phone
formato: PNG
origem do asset: IA permitida
proporção: 9:16 (formato de tela de celular)
tamanho sugerido: 720x1280px
função estratégica: imagem central do bloco de identificação emocional. Representa a persona sob pressão, cercada pelos pensamentos que ela realmente repete. Os balões de texto são renderizados pelo HTML ao redor da imagem.
contexto do produto: Persona é profissional formado que tenta criar conteúdo para o Instagram sem saber o que postar. Fica em branco, posta aleatório, não vê resultado, já comprou curso e não terminou, não tem bio, não tem site.

prompt final ou briefing de preparação:
"""
Editorial photography style, vertical 9:16 format simulating a smartphone screen. A professional woman in her 30s or 40s sits or stands looking at her phone with a lost, overwhelmed, or blank expression. She might be staring at an empty caption field or a blank Instagram post screen. The setting is simple and clean — home office, desk, or neutral background. Soft natural light. No text on screen. No readable interface. The mood is: "I have no idea what to post." Realistic, clean, not dramatic. Color palette: neutral whites, light grays, warm skin tones. No other people. No clutter. The image will be placed inside a phone frame in the HTML layout — so keep the subject centered and avoid critical elements near the very edges.
"""

negative prompt:
"""
Text overlays, readable interface, brand logos, multiple people, dark lighting, exaggerated expression, horror or sadness, stock photo look, busy background, man as main subject.
"""

observações de implementação:
A imagem entra dentro do componente .rum-board-phone que simula uma tela de celular no HTML. Os pensamentos da persona são renderizados como balões ao redor pelo HTML — não embutir texto na imagem. Manter sujeito centralizado e com espaço nas bordas.

---

## BLOCO 4 — Passo 1: Instale o arquivo da skill no Claude

asset: Persona instalando a skill no Claude
arquivo: assets/bloc-4-passo-01.png
uso no HTML: src da tag img dentro do primeiro .step-card .step-image
formato: PNG
origem do asset: IA permitida
proporção: 4:5
tamanho sugerido: 1080x1350px
função estratégica: mostrar que o primeiro passo é simples e rápido — reduzir a barreira de entrada percebida
contexto do produto: Persona instala o arquivo da skill do MCE no Claude e cria um projeto com o orquestrador. Não requer conhecimento técnico.

prompt final ou briefing de preparação:
"""
Editorial photography style. A professional woman in her 30s or 40s sits at a clean desk with a laptop open showing a simple, clean chat interface (Claude or similar AI tool — no readable brand name). She looks calm and focused, following simple steps. The screen shows a clean, minimal interface. Her expression is confident and relaxed — the task feels easy. Soft natural light, neutral background. No text overlays. No complex code or technical elements visible. The mood is: "This is simple, I can do this in minutes." Warm, clean color palette consistent with Meta design system.
"""

negative prompt:
"""
Complex code, terminal windows, error messages, confused expression, multiple people, dark lighting, stock photo look, busy background, brand logos, text overlays.
"""

observações de implementação:
Sem texto embutido. O HTML renderiza o número e título do passo sobre o card. Manter composição limpa e focada na ação simples.

---

## BLOCO 4 — Passo 2: Use as skills para criar sua presença digital

asset: Persona interagindo com o orquestrador no Claude
arquivo: assets/bloc-4-passo-02.png
uso no HTML: src da tag img dentro do segundo .step-card .step-image
formato: PNG
origem do asset: IA permitida
proporção: 4:5
tamanho sugerido: 1080x1350px
função estratégica: mostrar o processo guiado em ação — persona respondendo perguntas e recebendo conteúdo pronto
contexto do produto: O orquestrador guia a persona por um processo validado que gera bio, legendas, posts e carrosséis prontos para publicar, adaptados ao nicho dela.

prompt final ou briefing de preparação:
"""
Editorial photography style. A professional woman in her 30s or 40s sits at a desk with a laptop or phone, smiling slightly as she reads content on the screen. The screen shows a clean chat interface with text responses — blurred or not fully readable. She looks engaged and pleasantly surprised by the result. The mood is: "It's actually creating content for my niche right now." Soft natural light, neutral background. No complex interface. No text overlays. Warm, clean color palette consistent with Meta design system.
"""

negative prompt:
"""
Readable text on screen, brand logos, complex interface, confused expression, multiple people, dark lighting, stock photo look, busy background, text overlays.
"""

observações de implementação:
Sem texto embutido. A sensação de "conteúdo sendo gerado" deve ser transmitida pela expressão da persona, não por elementos de interface legíveis.

---

## BLOCO 4 — Passo 3: Publique ou agende pelo aplicativo do Instagram

asset: Persona agendando posts pelo Instagram
arquivo: assets/bloc-4-passo-03.png
uso no HTML: src da tag img dentro do terceiro .step-card .step-image
formato: PNG
origem do asset: IA permitida
proporção: 4:5
tamanho sugerido: 1080x1350px
função estratégica: mostrar o resultado final do processo — conteúdo publicado ou agendado, perfil ativo no piloto automático
contexto do produto: Com o conteúdo pronto gerado pelo MCE, a persona agenda pelo aplicativo do Instagram e mantém o perfil ativo em menos de 1 hora por semana.

prompt final ou briefing de preparação:
"""
Editorial photography style. A professional woman in her 30s or 40s holds a smartphone showing an Instagram-like interface with a calendar or scheduling screen — blurred or not fully readable. Her expression is calm, satisfied and confident. The setting is relaxed — couch, home office or clean desk. The mood is: "My content is ready and scheduled. My profile is active without me having to think about it every day." Soft warm light. Neutral background. No readable text or brand names. Color palette consistent with Meta design system.
"""

negative prompt:
"""
Readable text or brand names, complex interface, stressed expression, multiple people, dark lighting, stock photo look, busy background, text overlays.
"""

observações de implementação:
Sem texto embutido. Esta imagem deve transmitir leveza e controle — o oposto da imagem do "antes" no hero.

---

## BLOCO 11 — Foto de Autoridade

asset: Foto profissional de Luan L. Bonadie
arquivo: assets/bloc-11-expert-do-produto.png
uso no HTML: src da tag img dentro de .auth-photo
formato: PNG
origem do asset: real preferencial
proporção: 1:1
tamanho sugerido: 1200x1200px
função estratégica: humanizar a autoridade e construir confiança. Foto real do criador é obrigatória para este bloco converter. Sem foto, o bloco perde credibilidade.
contexto do produto: Luan L. Bonadie, CEO do Grupo Ide Comunicação, 10 anos de experiência, 140 clientes em 12 países. Tom: confiante, acessível, profissional mas sem exagero corporativo.

prompt final ou briefing de preparação:
"""
ASSET REAL PREFERENCIAL — usar foto real de Luan L. Bonadie.

Briefing de preparação:
1. Selecione uma foto profissional de Luan com boa iluminação, fundo neutro (escuro ou branco) e expressão natural e confiante.
2. O bloco 11 tem fundo escuro (#303030) — preferir foto com fundo escuro ou neutro que contraste bem.
3. Recorte em formato quadrado 1:1, rosto centralizado com espaço acima da cabeça.
4. Se necessário, use IA apenas para: remover fundo, ajustar luz, ampliar canvas. Não altere traços, expressão ou identidade.
5. Exporte em 1200x1200px, PNG.
6. Salve como: assets/bloc-11-expert-do-produto.png

Se não houver foto disponível agora:
Gere um placeholder neutro com fundo escuro e silhueta genérica, marcado claramente como provisório. Substituir por foto real antes de publicar.
"""

negative prompt:
"""
Foto de banco de imagem, rosto de outra pessoa, fundo colorido chamativo, expressão forçada, edição excessiva que altere a identidade visual real.
"""

observações de implementação:
Este bloco tem fundo escuro obrigatório no template. A foto deve ter boa legibilidade sobre esse fundo. Garantir que o rosto esteja bem iluminado e com contraste suficiente.

---

## OBSERVAÇÃO GERAL

Todos os prompts de IA devem ser usados no ChatGPT Imagens 2.0 (gpt-image-1) ou equivalente.
Para assets reais (depoimentos), use apenas o material original da pasta Provas Sociais no Google Drive.
Nunca gerar depoimentos, prints de conversa, nomes de clientes ou métricas com IA.

Os prompts dos blocos 4 em diante (Passo a Passo, Entregáveis, Stack, Autoridade) serão entregues após aprovação das copys desses blocos.