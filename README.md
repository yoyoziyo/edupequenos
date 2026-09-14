# EduPequenos

Loja estática de materiais pedagógicos digitais, preparada para funcionar diretamente no GitHub Pages.

## Estrutura

- `index.html`: página inicial e catálogo.
- `produto.html`: página individual preenchida pelo produto selecionado.
- `pagina.html`: páginas institucionais.
- `products.js`: cadastro central de produtos.
- `app.js`: busca, filtros e montagem dos cards.
- `styles.css`: todo o visual responsivo.
- `assets/`: imagens otimizadas em WebP.

## Adicionar um produto

Duplique um item dentro de `products.js`, escolha um `slug` único e preencha seus dados. A home e a página individual passarão a usar o novo produto automaticamente.

Capas e prévias públicas podem ser colocadas em `assets/products/<slug>/`. PDFs pagos não devem ser enviados para este repositório público; futuramente ficarão em armazenamento privado e serão liberados após o pagamento.

© 2026 EduPequenos.
