# Produtos Financeiros - Frontend Case

## Objetivo

Implementar uma funcionalidade de listagem de produtos financeiros (ex: cartões), consumindo uma API mockada, permitindo:

- Visualização de produtos
- Filtro por nome
- Filtro por status (ativo/inativo)
- Visualização de detalhes
- Alteração de status com atualização imediata na interface
- Tratamento de loading e erro

## 🛠 Tecnologias Utilizadas

- React + TypeScript
- Vite
- Material UI (MUI)
- Jest + React Testing Library
- Mock local via JSON

# 📌 Produtos Financeiros - Frontend Case

## 🎯 Objetivo

Implementar uma funcionalidade de listagem de produtos financeiros (ex: cartões, contas, crédito), consumindo uma API mockada, permitindo:

- Visualização de produtos
- Filtro por nome
- Filtro por status (ativo/inativo)
- Visualização de detalhes
- Alteração de status com atualização imediata na interface
- Tratamento de loading e erro

---

## 🛠 Tecnologias Utilizadas

- React + TypeScript
- Vite
- Material UI (MUI)
- Jest + React Testing Library
- Mock local via JSON

---

## Estrutura do Projeto

O projeto foi organizado seguindo uma abordagem orientada a feature:
src/
├─ features/produtos
│ ├─ pages
│ ├─ components
│ └─ hooks
├─ interfaces
├─ shared
│ ├─ components
│ └─ theme
└─ data

---

## 🧩 Componentes Principais

### ProductsPage
Responsável por compor a tela principal, aplicar filtros e conectar os componentes da feature.

### searchProducts
Hook customizado responsável por:
- Buscar os produtos (mock JSON)
- Controlar estados de loading e erro
- Atualizar status do produto
- Manter a fonte única de verdade

### ProductFilter
Componente responsável pelos filtros:
- Campo de busca por nome
- Tabs para visualização por status (Todos, Ativos, Inativos)

### ProductList
Renderiza a lista de produtos filtrados.

### ProductItem
Representa um card individual do produto.

### ProductDrawer
Exibe detalhes do produto selecionado e permite alterar o status via Switch.


## Fluxo da Aplicação

1. Ao montar a página, o hook `searchProducts` é executado.
2. O mock JSON é carregado simulando uma chamada de API.
3. Durante o carregamento, é exibido um Skeleton (shimmer).
4. Após carregamento:
   - Produtos são exibidos em forma de cards.
   - Filtros por texto e status são aplicados na camada da página.
5. Ao clicar em um produto:
   - Um Drawer lateral é aberto.
6. Ao alterar o Switch de status:
   - O estado é atualizado no hook.
   - A lista é automaticamente re-renderizada.
   - O Drawer permanece sincronizado via id selecionado.

---
  
## Decisões Técnicas

### 🔹 Organização por Feature
A estrutura foi organizada por domínio (`produtos`), agrupando página, componentes e hook relacionados, facilitando manutenção futura.

### 🔹 Controle de Estado
Foi utilizado `useState` e `useEffect` no hook customizado `searchProducts`, mantendo a lógica de dados desacoplada da UI.

### 🔹 Fonte Única de Verdade
O estado dos produtos fica centralizado no hook. O Drawer mantém apenas o id do produto selecionado, garantindo sincronização automática da UI.

### 🔹 Filtro por Status via Tabs
Foi adotada visualização por Tabs (Todos / Ativos / Inativos) para reduzir carga cognitiva e melhorar escaneabilidade da lista.

### 🔹 Responsividade
Utilização de breakpoints do MUI para:
- Centralizar layout no desktop
- Ajustar padding no mobile
- Expandir Drawer para 100% da largura em telas menores

---

## Testes Implementados

- Filtro por nome de produto
- Alteração de status via Switch

---

## Como Executar

```bash
npm install
npm run dev

Para rodar os testes:
npm test
