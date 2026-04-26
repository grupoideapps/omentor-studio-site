# Persona Onboarding — Low Ticket Page Builder

Framework de diagnóstico de persona para uso **antes** de escrever qualquer copy.
O objetivo é único: extrair as informações certas para preencher cada bloco do template com precisão cirúrgica.

---

## Por que fazer isso antes de escrever

Copy genérica é copy morta. A diferença entre uma página que vende e uma que não vende quase nunca é o produto — é se o leitor se reconhece na página ou não.

O Bloco 3 (Ruminação) é o coração da página. Se os balões de pensamento não soam como a voz interna real da persona, ela sai. Cada palavra do template depende de saber **quem é essa pessoa**, **o que ela sente** e **em que ponto do funil ela chega**.

---

## FASE 0 — Onboarding de Persona (executar antes de tudo)

### Etapa 1 — Coleta via conversa

Faça estas perguntas ao usuário. Não faça todas de uma vez — conduza como uma conversa. Agrupe em 3 rodadas:

**Rodada 1 — O produto e quem compra**
```
1. Qual é o nome do produto e o que ele entrega?
2. Quem é a pessoa que vai comprar? Descreva com suas palavras — idade, situação, o que ela faz.
3. Por que ela precisaria do seu produto agora? O que está acontecendo na vida dela?
```

**Rodada 2 — A dor e o desejo**
```
4. Qual é a maior dor que seu produto resolve? O que ela sente quando está no pico dessa dor?
5. Qual é o desejo que ela tem — o que ela quer conquistar com isso?
6. Qual é a objeção mais comum que você já ouviu de quem não comprou?
7. Quais são as frases exatas que você já ouviu do seu público — reclamações, dúvidas, desabafos?
8. Me dá 5 frases que essa pessoa fala para si mesma no pico dessa dor.
   Pode ser dramatizado, pode ter palavrão, pode ser negativo — quanto mais real melhor.
   Ex: "Eu nunca vou conseguir...", "Todo mundo consegue menos eu", "Já tentei tudo..."
   (Essas frases são os balões de pensamento do Bloco 3 — não podem ser inventadas)
```

**ATENÇÃO:** a pergunta 8 é obrigatória. Se o usuário travar, pesquise com `web_search`:
```
web_search ["[nicho] desabafo não consigo", "[nicho] reclamação frustração comentários"]
```
Use os resultados para sugerir frases e pedir ao usuário para confirmar as que soam verdadeiras.

**Rodada 3 — Histórico e contexto**
```
8. O que ela já tentou antes de chegar até você? O que não funcionou?
9. Como ela vai chegar na sua página? (anúncio no Instagram, YouTube, indicação, orgânico)
10. Ela já conhece você ou é a primeira vez que te encontra?
```

**Após coletar:** pesquise com `web_search` para validar e enriquecer. Use termos que a persona usaria, não termos técnicos do produto.

```
web_search ["[nicho] problemas dificuldades reclamações", "[nicho] grupo facebook comentários", "[nicho] Reddit dúvidas"]
```

---

### Etapa 2 — Mapeamento de Consciência Schwartz

Com base nas respostas, identifique o nível de entrada da persona usando a tabela abaixo. **Esse nível determina como cada bloco do template deve ser escrito.**

| Nível | Estado mental da persona | Chegou como | Copy necessária |
|-------|--------------------------|-------------|-----------------|
| **P0** | Não sabe que tem o problema | Tráfego frio sem contexto | Apresentar o problema antes da solução. Raramente o perfil do low ticket. |
| **P1** | Sabe que tem o problema, não sabe que existe solução | Orgânico, referência, curiosidade | Nomear a dor com precisão. Mostrar que existe saída. |
| **P2** | Sabe que existe solução, não conhece seu produto | Anúncio frio, YouTube, conteúdo | Mostrar seu mecanismo único. Provar que funciona. **Este é o perfil padrão do low ticket.** |
| **P3** | Já viu seu produto antes, não comprou ainda | Remarketing, segundo contato | Remover objeções. Urgência real. Garantia em destaque. |
| **P4** | Conhece bem você e seu produto | Base de lista, seguidores fiéis | Oferta direta. Sem re-explicação. CTA imediato. |

**Perfil padrão do tráfego low ticket:**
A pessoa que chega em uma página de venda low ticket via anúncio está normalmente em **P2**: já sente a dor, já buscou algo parecido, mas não sabe quem você é. O template de 15 blocos foi construído para essa entrada — começa pela prova (depoimentos) antes de explicar o produto.

**Diagnóstico de múltiplos perfis:**
Se o produto atrai perfis P1 e P2 ao mesmo tempo, o template já resolve:
- P1 é capturado pelo Bloco 3 (Ruminação) — a dor é nomeada e ele se identifica
- P2 é capturado pelo Bloco 1 (Hero) + Bloco 2 (Depoimentos) — prova antes da explicação
- P3/P4 são capturados pelos Blocos 8–13 (ancoragem + conversa séria)

---

### Etapa 3 — Construção da Persona-Mapa

Após a coleta e diagnóstico, monte este documento interno antes de escrever qualquer copy:

```markdown
## Persona-Mapa: [Nome do Produto]

### Quem é
[2-3 linhas: perfil demográfico + situação atual]

### Nível de entrada (Schwartz)
[P0 / P1 / P2 / P3 / P4] — [justificativa em 1 linha]

### A dor principal
[Em uma frase: o que ela sente + qual é o resultado frustrante que ela vive]

### O desejo máximo
[Em uma frase: o que ela quer conquistar — não o produto, o resultado de vida]

### A objeção principal
[A razão número 1 pela qual ela ainda não resolveu isso]

### O que ela já tentou
[Soluções anteriores que falharam — isso é ouro para o Bloco 3]

### Frases reais da persona
[5-8 frases exatas — coletadas do usuário + pesquisa. Essas frases vão para os balões do Bloco 3]

### Canal de entrada
[Como chega na página — define tom e contexto da copy]
```

---

## Mapeamento Copy → Bloco do Template

Cada dado coletado no onboarding alimenta um bloco específico. A tabela abaixo fecha o ciclo:

| Dado coletado | Bloco que alimenta | Como usar |
|--------------|-------------------|-----------|
| Promessa principal + tempo | **B1 Hero** | `{{PROMESSA_PRINCIPAL}}` + `{{TEMPO_ESPECIFICO}}` |
| Objeção principal | **B1 Hero** | `{{OBJECAO}}` — "mesmo que [objeção]" |
| Situação inicial negativa | **B2 Depoimentos** | `{{SITUACAO_INICIAL}}` no headline |
| Resultado desejado | **B2 Depoimentos** | `{{RESULTADO_POSITIVO}}` |
| Dor cotidiana | **B3 Ruminação** | `{{DOR_COTIDIANA}}` — o que não aguenta mais fazer |
| Resultado frustrante | **B3 Ruminação** | `{{RESULTADO_FRUSTRANTE}}` — o que vê acontecer |
| Frases reais da persona | **B3 Ruminação** | Conteúdo dos balões de pensamento renderizados em HTML |
| O que já tentou | **B3 Ruminação** | Enriquece os pensamentos: "já tentei X e não funcionou" |
| Desejo máximo | **B4 Passo a Passo** | `{{RESULTADO_PRINCIPAL}}` no headline |
| Transformações desejadas | **BE Benefícios** | `{{BENEFICIO_1..4}}` — no idioma da persona, não do produto |
| Situações que a persona vive | **B7 Para Quem** | `{{PQ_ITEM_1..6}}` — espelho da identidade |
| Desejo máximo | **B7 Para Quem** | `{{DESEJO_PERSONA}}` — fechamento do bloco |
| Dores continuadas (sem comprar) | **B12 Conversa Séria** | `{{OPT1_ITEM_1..3}}` — opção negativa |
| Transformações (com produto) | **B12 Conversa Séria** | `{{OPT2_ITEM_1..3}}` — opção positiva |
| Objeções de compra | **B14 FAQ** | Perguntas específicas além das padrão |

---

## Framework PAS Aplicado ao Template

O template de 15 blocos segue estrutura PAS distribuída entre os blocos. Entender isso ajuda a calibrar o tom de cada seção:

### P — Problema (Blocos 1, 2, 3)
O leitor precisa sentir que você entende a situação dele antes de apresentar qualquer solução.

- **B1 Hero:** nomeia o problema implicitamente via promessa (o oposto do problema atual)
- **B2 Depoimentos:** prova que outros como ele tinham o mesmo problema e saíram
- **B3 Ruminação:** mergulha fundo na dor — nomeia, agita, espelha os pensamentos

**Erro comum:** pular direto para a solução sem estabelecer o problema. O leitor que não se sente compreendido não compra.

**Copy PAS para B3:**
```
[P] Você não aguenta mais [DOR COTIDIANA] e ver sempre [RESULTADO FRUSTRANTE].
[P→A] Por isso, você pensa: [frases exatas da persona]
[A] Eu sei... [empatia] Estou certo?
[A→S] Se a sua resposta for "SIM", o [PRODUTO] é para você.
```

### A — Agitação (Blocos 3, 7, 12)
A dor não está resolvida ainda. O custo de não agir deve ser maior que o custo de comprar.

- **B3 Ruminação:** os pensamentos negativos são a agitação — mostrar as consequências internas
- **B7 Para Quem:** a lista de situações reforça que a persona está "presa" nesse ciclo
- **B12 Conversa Séria (Opção 1):** o custo real de não comprar — dor continuada

**Copy PAS para B12 (Opção 1):**
```
[A] Continuar [dor específica que persiste sem o produto]
[A] Seguir [consequência negativa que ela conhece]
[A] Ver [o que acontece enquanto ela adia a decisão]
```

### S — Solução (Blocos 4, 5, 6, 8, 9, 12)
A solução só é crível depois que o problema foi completamente estabelecido.

- **B4 Passo a Passo:** desmistifica — a solução é simples, ela consegue
- **B5 Entregáveis:** detalha o que está incluído — proof of concept
- **B6 Bônus:** amplifica — mais do que ela esperava
- **B8 Recapitulando:** consolida o valor antes de revelar o preço
- **B9/B13 Valor:** a oferta como conclusão natural de tudo que veio antes
- **B12 (Opção 2):** pinta o futuro com o produto — a vida resolvida

**Copy PAS para B12 (Opção 2):**
```
[S] [Transformação 1 — o oposto da dor principal]
[S] [Transformação 2 — resultado específico que ela deseja]
[S] [Transformação 3 — implicação positiva de longo prazo]
```

---

## Diagnóstico de Qualidade do Onboarding

Antes de começar a escrever, valide com estas perguntas:

**O Bloco 3 está pronto se:**
- [ ] Tenho pelo menos 5 frases que a persona diria para si mesma (não para mim)
- [ ] Consigo visualizar quem é essa pessoa enquanto escrevo
- [ ] As frases usam as palavras dela, não do produto

**O Hero está pronto se:**
- [ ] A promessa resolve exatamente a dor principal identificada
- [ ] A objeção é a real — não a que eu acho que é
- [ ] O tempo é específico e crível

**A Conversa Séria está pronta se:**
- [ ] A Opção 1 dói — usa palavras fortes da dor real
- [ ] A Opção 2 liberta — usa o desejo máximo real
- [ ] O leitor sente que não comprar tem um custo real

**O Para Quem está pronto se:**
- [ ] Qualquer item da lista faria a persona dizer "isso sou eu"
- [ ] Nenhum item é tão genérico que sirva para qualquer pessoa

---

## Regra de Ouro

**Nunca invente a linguagem da persona. Colete.**

Se o usuário não consegue fornecer frases reais da persona, pesquise:
- Comentários do YouTube no nicho
- Posts em grupos do Facebook sobre o tema
- Perguntas no Reddit (r/empreendedorismo, r/brasil, etc.)
- Reviews de produtos concorrentes na Hotmart/Kiwify
- DMs ou depoimentos que o próprio usuário já recebeu

A voz da persona existe em algum lugar público. Encontre antes de escrever.
