# 🪴 GreenShop – E-commerce de Plantas de Jardim

Este projeto é um **e-commerce de plantas de jardim** desenvolvido com **React** e organizado com a metodologia **Atomic Design**, visando componentes reutilizáveis, escaláveis e de fácil manutenção.

---

## 🎯 Objetivo

Construir uma aplicação web de e-commerce para venda de plantas e produtos de jardinagem, utilizando a arquitetura de componentes com Atomic Design para manter o código limpo, modular e bem organizado.

---

## ⚛️ O que é Atomic Design?

**Atomic Design** é uma metodologia criada por [Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/) que divide a interface em 5 camadas de complexidade:

| Nível        | Descrição                                      | Exemplo no projeto                   |
|--------------|------------------------------------------------|--------------------------------------|
| 🧱 Átomos     | Elementos básicos que não podem ser divididos | Botão, Título, Input, Ícone          |
| ⚗️ Moléculas  | Combinações simples de átomos                 | Card de produto, Campo de busca      |
| 🧬 Organismos | Blocos funcionais maiores                     | Lista de produtos, Header com carrinho |
| 🧾 Templates  | Layout da página com estrutura definida       | Página com áreas de banner, produtos e rodapé |
| 🧍‍♂️ Páginas    | Páginas reais com dados e conteúdo final     | Página inicial, carrinho, checkout   |

---

## 🗂 Estrutura de Pastas

```bash
src/
├── components/
│   ├── atoms/        # Elementos simples (botões, ícones, etc.)
│   ├── molecules/    # Combos de átomos (card, input com label, etc.)
│   ├── organisms/    # Seções inteiras (header, listagem de produtos)
│   ├── templates/    # Estrutura visual da página
├── pages/            # Páginas completas (Home, Carrinho, Produto)
├── assets/           # Imagens, ícones e recursos visuais

