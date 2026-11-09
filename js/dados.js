/* =========================================================
   ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR NO DIA A DIA
   Troque os textos abaixo pelos seus e adicione seus projetos.
   ========================================================= */

const PERFIL = {
  nome: "Seu Nome",
  titulo: "Analista de Dados · Ciência de Dados · Power BI",
  bio: "Transformo dados em decisões: da limpeza e modelagem até dashboards que as pessoas realmente usam.",
  sobre: [
    "Escreva aqui um parágrafo sobre você: sua formação, como chegou à área de dados e o que mais gosta de fazer.",
    "Um segundo parágrafo pode falar dos tipos de problema que você resolve e do que procura agora (vaga, freela, estágio)."
  ],
  ferramentas: ["Python", "Pandas", "SQL", "Power BI", "DAX", "Excel", "Scikit-learn", "Git"],
  email: "seuemail@exemplo.com",
  linkedin: "https://www.linkedin.com/in/seu-usuario",
  github: "https://github.com/seu-usuario"
};

/* Áreas: cada uma tem sua cor no site.
   Pode renomear os nomes à vontade, mas mantenha as chaves (ciencia, analise...). */
const AREAS = {
  powerbi: { nome: "Power BI",          cor: "#F2B705" },
  analise: { nome: "Análise de Dados",  cor: "#13B5A5" },
  ciencia: { nome: "Ciência de Dados",  cor: "#6C4CF5" },
  outros:  { nome: "Outros",            cor: "#FF5A87" }
};

/* PROJETOS
   - area: uma das chaves de AREAS acima
   - imagem: caminho de um print (ex.: "img/vendas.png"). Se deixar vazio, aparece uma capa colorida.
   - powerbi: link do "Publicar na Web" do Power BI (o que começa com https://app.powerbi.com/view?r=...)
   - github / link: deixe "" se não tiver
   - destaque: true deixa o card maior (use em 1 ou 2 projetos)
*/
const PROJETOS = [
  {
    titulo: "Dashboard de Vendas",
    area: "powerbi",
    descricao: "Painel com faturamento, ticket médio e metas por região, com análise de sazonalidade.",
    ferramentas: ["Power BI", "DAX", "Power Query"],
    imagem: "",
    powerbi: "",
    github: "",
    link: "",
    destaque: true
  },
  {
    titulo: "Previsão de Churn",
    area: "ciencia",
    descricao: "Modelo de classificação que identifica clientes com risco de cancelamento.",
    ferramentas: ["Python", "Scikit-learn", "Pandas"],
    imagem: "",
    powerbi: "",
    github: "https://github.com/seu-usuario/projeto-churn",
    link: "",
    destaque: false
  },
  {
    titulo: "Análise Exploratória de RH",
    area: "analise",
    descricao: "Investigação dos fatores ligados à rotatividade de funcionários.",
    ferramentas: ["Python", "Seaborn", "SQL"],
    imagem: "",
    powerbi: "",
    github: "https://github.com/seu-usuario/eda-rh",
    link: "",
    destaque: false
  },
  {
    titulo: "Painel Financeiro",
    area: "powerbi",
    descricao: "DRE gerencial e fluxo de caixa com comparação entre períodos.",
    ferramentas: ["Power BI", "DAX"],
    imagem: "",
    powerbi: "",
    github: "",
    link: "",
    destaque: false
  },
  {
    titulo: "Web Scraping de Preços",
    area: "outros",
    descricao: "Coleta automática de preços de e-commerces para monitorar concorrência.",
    ferramentas: ["Python", "BeautifulSoup"],
    imagem: "",
    powerbi: "",
    github: "https://github.com/seu-usuario/scraping-precos",
    link: "",
    destaque: false
  }
];
