# Synthesizing a New Design System From Reference

Use este arquivo quando o usuário colar uma referência visual que deve virar um novo `design system`.

## Goal

Extrair a lógica visual da referência e reexpressá-la como um sistema reutilizável:

- tema e atmosfera
- paleta e papéis das cores
- tipografia
- componentes
- espaçamento e layout
- sombras, bordas e superfícies
- responsividade
- do / don't

## Workflow

1. Identifique o tipo de referência.
   - screenshot / imagem
   - website / landing page
   - interface de aplicativo
   - moodboard / brand board

2. Leia os padrões visíveis.
   - o que se repete
   - o que domina
   - o que cria contraste
   - o que é único versus genérico

3. Converta a referência em tokens.
   - background
   - surface
   - text primary
   - text secondary
   - accent
   - border
   - focus
   - shadow

4. Extraia tipografia.
   - family
   - hierarchy
   - size relationship
   - weight usage
   - tracking / leading

5. Extraia componentes.
   - buttons
   - cards
   - inputs
   - nav
   - image treatment

6. Extraia layout.
   - container
   - grid
   - spacing rhythm
   - alternation

7. Escreva o novo arquivo usando o mesmo scaffold dos sistemas existentes.
   - nome
   - tema
   - cores
   - tipografia
   - componentes
   - layout
   - depth
   - responsive
   - do / don't

## Output rules

- Se a referência for uma imagem, inferir apenas o que for visível.
- Se a referência estiver incompleta, assumir o mínimo e registrar a suposição.
- Se houver conflito de padrões, preservar o padrão mais repetido e dominante.
- Se o sistema for totalmente novo, nomear pelo mood, não pela fonte.

## Suggested extraction prompt

```text
Analise esta referência como um design system reutilizável.
Extraia as regras visuais em um sistema estruturado com:
- atmosfera
- paleta com papéis
- hierarquia tipográfica
- botões, cards, inputs, nav
- espaçamento e layout
- depth e elevation
- comportamento responsivo
- do / don't

Crie um arquivo de referência canônico que siga a mesma organização dos sistemas existentes.
Não copie a referência literalmente. Traduza-a para um sistema que a page builder possa reutilizar.
```
