# Portfólio de Dados

Site estático (HTML, CSS e JavaScript puros) pronto para publicar no Vercel.

## Como editar
Tudo o que você precisa trocar fica em **`js/dados.js`**: seu nome, bio, ferramentas, links e a lista de projetos.
Prints dos projetos vão na pasta **`img/`** (ex.: `imagem: "img/vendas.png"`).

## Como pegar o link do Power BI
1. Abra o relatório no Power BI Service (app.powerbi.com).
2. Arquivo → Inserir relatório → **Publicar na Web (público)**.
3. Copie o link (começa com `https://app.powerbi.com/view?r=`) e cole no campo `powerbi` do projeto.

⚠️ "Publicar na Web" deixa o relatório público para qualquer pessoa. Use só dados fictícios ou públicos.

## Como publicar no Vercel
1. Crie um repositório no GitHub e envie esta pasta.
2. Entre em vercel.com com sua conta do GitHub → **Add New → Project**.
3. Escolha o repositório, deixe **Framework Preset: Other** e clique em **Deploy**.
4. A cada `git push`, o Vercel atualiza o site sozinho.
