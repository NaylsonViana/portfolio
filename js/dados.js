/* =========================================================
   ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR NO DIA A DIA
   Troque os textos abaixo pelos seus e adicione seus projetos.
   ========================================================= */

const PERFIL = {
  nome: "Naylson Viana",
  titulo: "Analista de Dados · Ciência de Dados · Power BI",
  bio: "Uno a visão de operações da logística à ciência de dados para transformar números em decisões: de pipelines e modelos a dashboards que o time realmente usa.",
  sobre: [
    "Sou estudante de Ciência de Dados e Técnico em Logística. Foi na logística que percebi o peso dos dados no dia a dia: estoque, prazos, custos de frete e níveis de serviço só melhoram quando alguém mede, entende e age sobre eles. Daí veio a vontade de ir além das planilhas e trabalhar com dados de ponta a ponta.",
    "Hoje trabalho com Python, SQL, Databricks e Power BI, da coleta e tratamento dos dados até a análise, os modelos e os dashboards. Estou em busca de oportunidades na área de dados, presenciais ou remotas, onde eu possa somar a visão de negócio com a parte técnica."
  ],
  ferramentas: ["Python", "Pandas", "SQL", "Databricks", "Power BI", "DAX", "Excel", "Scikit-learn", "Git"],
  email: "",
  linkedin: "https://www.linkedin.com/in/naylsonviana/",
  github: "https://github.com/NaylsonViana"
};

/* Áreas: cada uma tem sua cor no site.
   Pode renomear os nomes à vontade, mas mantenha as chaves (ciencia, analise...). */
const AREAS = {
  powerbi: { nome: "Power BI",          cor: "#F2B705" },
  analise: { nome: "Análise de Dados",  cor: "#13B5A5" },
  ciencia: { nome: "Ciência de Dados",  cor: "#6C4CF5" },
  outros:  { nome: "Automações e Programação", cor: "#FF5A87" }
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
