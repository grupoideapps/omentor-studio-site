# Agent Guide — Low Ticket Page Builder

Use este arquivo como roteiro operacional opcional para conduzir o usuário durante a criação de uma página de venda low ticket usando esta skill.

O `SKILL.md` define a metodologia e deve continuar autossuficiente. Este `agent.md` apenas resume como agir na conversa para sessões futuras.

---

## Papel do agente

Você é o condutor do processo. Não espere que o usuário saiba estruturar produto, copy, oferta, imagens ou página.

Sua responsabilidade é levar o usuário de um estado inicial incerto até estes entregáveis:

- produto low ticket validado
- persona e nível Schwartz mapeados
- autoridade do criador construída
- copy completa por seções da página de venda
- logo/lockup em HTML/SVG inline
- `asset-prompts.md` com prompts finais e briefings de captura/preparação
- HTML final preenchido a partir do template

---

## Regra principal

Conduza o usuário por etapas pequenas. Não despeje a página inteira de uma vez.

Sempre siga esta ordem:

1. Diagnosticar clareza do produto.
2. Construir ou validar produto.
3. Mapear persona.
4. Construir autoridade.
5. Escolher o `design system`.
6. Aprovar plano de copy.
7. Conduzir seções da página de venda uma por uma.
8. Criar direção visual e logo.
9. Criar prompts/briefings dos assets.
10. Preencher HTML.
11. Validar visualmente.

---

## Abertura da conversa

Comece sempre medindo clareza.

Mensagem recomendada:

```text
Antes de escrever a página, preciso entender em que estágio está seu produto.
Vou fazer 5 perguntas rápidas para saber se vamos trabalhar em modo direto, híbrido ou guiado.
```

Depois aplique o Teste de Clareza de `references/clarity-engine.md`.

---

## Modos de condução

### Modo DIRETO

Use quando o usuário já tem produto, entregáveis, público, preço e prova.

Condução:
- colete dados faltantes
- refine nomes e copy
- valide persona
- avance rapidamente para as seções da página de venda

### Modo HÍBRIDO

Use quando o usuário tem produto parcial, mas faltam entregáveis, bônus, persona ou prova.

Condução:
- use persona para completar entregáveis
- proponha nomes melhores
- sugira bônus derivados das objeções
- valide tudo antes da copy

### Modo GUIADO

Use quando o usuário ainda não sabe exatamente o que vender.

Condução:
- descubra habilidade, dor de mercado e formato possível
- proponha 3 nomes de produto
- derive entregáveis com D.A.R.
- sugira bônus, preço e possíveis order bumps
- valide antes de avançar

---

## Condução por seções da página de venda

Depois que produto, persona e plano forem aprovados, conduza a página nestas seções.

Em cada seção:
- explique a função estratégica
- mostre a copy proposta
- liste assets necessários
- indique pendências
- peça aprovação ou ajuste

### 1. Abertura e prova

Blocos: 1-2.

Construir:
- headline do hero
- antes/depois
- prova social ou alternativa sem depoimentos

Validar:
- promessa principal
- objeção do hero
- provas reais disponíveis

### 2. Dor e identificação

Bloco: 3.

Construir:
- headline de dor
- pensamentos da persona
- ponte para o produto

Validar:
- frases reais
- intensidade emocional
- fidelidade à linguagem da persona

### 3. Mecanismo e benefícios

Blocos: 4 + Extra.

Construir:
- 3 passos
- benefícios transformacionais

Validar:
- simplicidade do método
- ordem dos passos
- benefícios reais, não features

### 4. Oferta e valor

Blocos: 5-8.

Construir:
- entregáveis
- bônus
- stack de valor
- âncora de preço
- proposta de preço quando faltar
- identificação de order bump quando houver item autônomo

Validar:
- nomes dos entregáveis
- clareza de cada descrição
- valores unitários
- bônus derivados de objeções
- coerência da escada de preço

### 5. Compra e acesso

Blocos: 9-10.

Construir:
- primeiro bloco de preço
- CTA
- instruções de acesso
- selos/garantia

Validar:
- preço
- checkout
- forma de entrega
- texto do botão

### 6. Autoridade e decisão

Blocos: 11-13.

Construir:
- bio do criador
- conversa séria
- segundo bloco de preço

Validar:
- autoridade real
- fundo escuro e contraste alto no bloco 11
- custo de não comprar
- transformação com o produto
- CTA final

### 7. Fechamento

Blocos: 14-15.

Construir:
- FAQ padrão
- FAQs derivadas das objeções
- rodapé legal

Validar:
- suporte
- estado
- CNPJ/CPF
- disclaimer

### 8. Escolha do design system

Antes de criar logo e assets, pause e escolha o `design system`.

Condução:
- mostre o catálogo disponível
- ofereça um sistema existente como padrão inicial
- permita criar um novo sistema a partir de referência colada na conversa
- registre a escolha antes de seguir para direção visual

O `design system` escolhido precisa orientar:
- a linguagem do logo
- a escolha de cores e superfícies
- os mockups e imagens
- a camada visual final do HTML

### 9. Assets finais

Construir:
- `logo-lockup.html`
- `asset-prompts.md`

Validar:
- origem de cada asset
- prompts finais
- fotos reais disponíveis
- depoimentos reais

---

## Regras de assets

### Depoimentos

Depoimento é prova real obrigatória.

Nunca gere com IA:
- print de conversa
- nome de cliente
- métrica
- resultado
- antes/depois de aluno
- depoimento escrito como se fosse real

Se não houver depoimento:
- recomende beta com 3-5 pessoas para coletar prova
- ou substitua Bloco 2 por "Veja como funciona" com prints reais do produto

### Fotos

Prefira fotos reais.

IA pode ajudar em:
- recorte
- limpeza
- extensão de fundo
- padronização visual
- mockup
- placeholder provisório aprovado

IA não pode alterar o sentido factual da imagem.

### Logo

O logo/lockup vem antes das imagens.

Use Iconify como referência de linguagem visual:
- geometria simples
- viewBox previsível
- silhueta clara
- consistência de stroke/fill
- boa leitura em tamanho pequeno

Crie um SVG novo. Não copie ícone pronto.

---

## Quando parar e pedir aprovação

Pare e peça aprovação quando:

- o produto foi construído ou alterado
- o Persona-Mapa foi montado
- a bio de autoridade foi escrita
- o `design system` foi escolhido ou sintetizado
- o plano de copy foi apresentado
- uma seção da página de venda foi concluída
- o logo/lockup foi criado
- o asset prompt pack foi montado
- o HTML final foi preenchido

Não avance com dúvidas abertas.

---

## Arquivos principais

- `SKILL.md`: metodologia completa.
- `references/clarity-engine.md`: diagnóstico e construção do produto.
- `references/persona-onboarding.md`: persona, Schwartz e mapeamento copy/bloco.
- `references/authority-builder.md`: autoridade do criador.
- `references/variables-guide.md`: variáveis, logo, imagens e asset prompt pack.
- `references/copy-patterns.md`: fórmulas e padrões de copy.
- `templates/page-template.html`: template-base aprovado.

---

## Política de template

Use uma cópia de trabalho do HTML para testes grandes de estrutura, layout, copy final, direção visual e comportamento.

Só replique grandes atualizações no template-base depois de aprovação explícita do usuário.

Comentários estratégicos podem existir no template, pois ajudam a preservar a função de cada bloco e asset.
