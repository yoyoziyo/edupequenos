export type Product = {
  slug: string; name: string; shortDescription: string; description: string;
  price: number; compareAtPrice?: number; category: string; type: string;
  schoolYears: string[]; subjects: string[]; pages: number; fileFormat: "PDF";
  featured?: boolean; badge?: string; color: string; contents: string[];
};

// Para cadastrar um produto novo, duplique um item e altere os campos.
// O slug será o endereço /produto/meu-produto. Nunca coloque PDFs pagos em public.
export const products: Product[] = [
  { slug:"dia-mundial-da-agua", name:"Dia Mundial da Água", shortDescription:"Atividades para aprender sobre o uso consciente da água.", description:"Uma sequência pronta para trabalhar preservação, ciclo da água e atitudes responsáveis de forma leve e significativa.", price:7.9, compareAtPrice:10.9, category:"Datas comemorativas", type:"Kit completo", schoolYears:["1º ano","2º ano","3º ano"], subjects:["Ciências","Português"], pages:18, fileFormat:"PDF", featured:true, badge:"Mais procurado", color:"#bdebf7", contents:["Texto informativo ilustrado","Atividades de interpretação","Experiência simples","Cartaz para a sala"] },
  { slug:"respeito-as-diferencas", name:"Respeito às Diferenças", shortDescription:"Leitura e atividades sobre empatia, inclusão e convivência.", description:"Material acolhedor para abrir conversas sobre respeito, diversidade e amizade com crianças dos anos iniciais.", price:4.9, category:"Atividades", type:"Sequência de atividades", schoolYears:["1º ano","2º ano","3º ano"], subjects:["Português","Socioemocional"], pages:12, fileFormat:"PDF", featured:true, color:"#ffd9e3", contents:["História curta","Roda de conversa","Atividade de escrita","Página para colorir"] },
  { slug:"povos-indigenas-do-brasil", name:"Povos Indígenas do Brasil", shortDescription:"Cultura, diversidade e saberes dos povos originários.", description:"Uma abordagem respeitosa e adequada à faixa etária para conhecer a diversidade dos povos indígenas brasileiros.", price:7.9, category:"Datas comemorativas", type:"Kit completo", schoolYears:["2º ano","3º ano"], subjects:["História","Geografia"], pages:20, fileFormat:"PDF", featured:true, badge:"Novo", color:"#ffe1a8", contents:["Texto de apoio","Mapa e vocabulário","Atividades de pesquisa","Proposta artística"] },
  { slug:"dia-da-arvore", name:"Dia da Árvore", shortDescription:"Leitura, Ciências e atividades sobre a importância das árvores.", description:"Um material prático para explorar as partes da árvore, sua função no ambiente e pequenas ações de cuidado com a natureza.", price:4.9, category:"Datas comemorativas", type:"Atividades", schoolYears:["1º ano","2º ano","3º ano"], subjects:["Ciências"], pages:10, fileFormat:"PDF", featured:true, color:"#ccefdc", contents:["Leitura guiada","Partes da árvore","Registro de observação","Atividade para colorir"] },
  { slug:"semana-da-patria", name:"Semana da Pátria", shortDescription:"Símbolos nacionais, cidadania e atividades interdisciplinares.", description:"Conteúdo direto e apropriado aos anos iniciais para trabalhar símbolos nacionais, cidadania e pertencimento.", price:7.9, category:"Datas comemorativas", type:"Kit completo", schoolYears:["1º ano","2º ano","3º ano"], subjects:["História","Artes"], pages:16, fileFormat:"PDF", featured:true, color:"#d7e9ff", contents:["Texto introdutório","Símbolos do Brasil","Atividades de escrita","Mural coletivo"] },
];

export const formatPrice = (price:number) => new Intl.NumberFormat("pt-BR", {style:"currency",currency:"BRL"}).format(price);
export const getProduct = (slug:string) => products.find((product) => product.slug === slug);
