# Como cadastrar um produto

O catálogo inteiro é controlado pelo arquivo `data/products.ts`. A home e a página individual usam os mesmos dados.

1. Duplique um produto existente em `data/products.ts`.
2. Escolha um `slug` único, sem acentos ou espaços. Exemplo: `dia-do-folclore`.
3. Preencha nome, descrições, preço, categoria, tipo, anos, disciplinas, páginas e itens incluídos.
4. Marque `featured: true` para exibir o produto na home.
5. Adicione a capa pública em WebP quando ela estiver pronta. Capas e prévias podem ficar em `public/products/<slug>/`.
6. Nunca coloque o PDF pago em `public`. Na etapa de vendas, ele ficará em armazenamento privado e será liberado somente após a confirmação do pagamento.

## Campos principais

- `slug`: endereço permanente do produto.
- `name`: nome exibido na loja.
- `shortDescription`: resumo usado nos cards e listagens.
- `description`: apresentação completa da página individual.
- `price`: número sem símbolo de moeda, por exemplo `7.9`.
- `compareAtPrice`: preço anterior opcional.
- `category` e `type`: organização do catálogo.
- `schoolYears` e `subjects`: filtros futuros.
- `pages` e `fileFormat`: informações objetivas.
- `contents`: lista do que o comprador receberá.
- `badge`: selo opcional, como `Novo`.

Ao salvar um novo item, sua página será criada automaticamente em `/produto/<slug>`.
