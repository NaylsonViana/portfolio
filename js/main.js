/* Monta o site a partir de js/dados.js — normalmente não precisa mexer aqui. */

const $ = (sel) => document.querySelector(sel);

function criar(tag, attrs = {}, filhos = []) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "texto") el.textContent = v;
    else if (k === "estilo") for (const [p, val] of Object.entries(v)) el.style.setProperty(p, val);
    else el.setAttribute(k, v);
  }
  [].concat(filhos).forEach((f) => f && el.append(f));
  return el;
}

/* ---------- Perfil ---------- */
function preencherPerfil() {
  const iniciais = PERFIL.nome.split(" ").map((p) => p[0]).slice(0, 2).join("");
  $("#marca").textContent = iniciais;
  $("#marca").setAttribute("aria-label", PERFIL.nome + ", início");
  $("#nome").textContent = PERFIL.nome;
  $("#titulo").textContent = PERFIL.titulo;
  $("#bio").textContent = PERFIL.bio;
  $("#nome-rodape").textContent = PERFIL.nome;
  $("#ano").textContent = new Date().getFullYear();
  document.title = PERFIL.nome + " | Portfólio de Dados";

  PERFIL.sobre.forEach((p) => $("#sobre-paragrafos").append(criar("p", { texto: p })));
  PERFIL.ferramentas.forEach((f) => $("#ferramentas").append(criar("li", { texto: f })));

  const links = [
    PERFIL.email && { rotulo: "E-mail", href: "mailto:" + PERFIL.email },
    PERFIL.linkedin && { rotulo: "LinkedIn", href: PERFIL.linkedin },
    PERFIL.github && { rotulo: "GitHub", href: PERFIL.github }
  ].filter(Boolean);
  links.forEach((l) =>
    $("#contato-links").append(
      criar("a", { href: l.href, class: "botao botao-principal", target: "_blank", rel: "noopener", texto: l.rotulo })
    )
  );
}

/* ---------- Gráfico do hero (projetos por área) ---------- */
function montarGrafico() {
  const contagem = Object.keys(AREAS).map((chave) => ({
    chave,
    ...AREAS[chave],
    total: PROJETOS.filter((p) => p.area === chave).length
  }));
  const maximo = Math.max(1, ...contagem.map((c) => c.total));

  contagem.forEach((c, i) => {
    const barra = criar("button", {
      class: "barra",
      type: "button",
      "aria-label": `${c.nome}: ${c.total} projeto${c.total === 1 ? "" : "s"}. Filtrar.`,
      estilo: { "--cor": c.cor, "--altura": (c.total / maximo) * 100 + "%", "--atraso": i * 120 + "ms" }
    }, [
      criar("span", { class: "barra-valor", texto: c.total }),
      criar("span", { class: "barra-coluna" }),
      criar("span", { class: "barra-rotulo", texto: c.nome })
    ]);
    barra.addEventListener("click", () => {
      filtrar(c.chave);
      $("#projetos").scrollIntoView({ behavior: "smooth" });
    });
    $("#barras").append(barra);
  });
}

/* ---------- Filtros ---------- */
let filtroAtual = "todos";

function montarFiltros() {
  const opcoes = [{ chave: "todos", nome: "Todos", cor: "var(--tinta)" }]
    .concat(Object.entries(AREAS).map(([chave, a]) => ({ chave, ...a })))
    .filter((o) => o.chave === "todos" || PROJETOS.some((p) => p.area === o.chave));

  opcoes.forEach((o) => {
    const b = criar("button", {
      type: "button",
      class: "filtro",
      "data-area": o.chave,
      "aria-pressed": o.chave === "todos",
      estilo: { "--cor": o.cor },
      texto: o.nome
    });
    b.addEventListener("click", () => filtrar(o.chave));
    $("#filtros").append(b);
  });
}

function filtrar(area) {
  filtroAtual = area;
  document.querySelectorAll(".filtro").forEach((b) =>
    b.setAttribute("aria-pressed", b.dataset.area === area)
  );
  montarProjetos();
}

/* ---------- Cards de projeto ---------- */
function capa(projeto, area) {
  if (projeto.imagem) {
    return criar("img", { src: projeto.imagem, alt: "Prévia de " + projeto.titulo, loading: "lazy" });
  }
  // Capa automática: mini gráfico de barras na cor da área
  const alturas = [40, 65, 50, 85, 60, 95, 70];
  const div = criar("div", { class: "capa-auto", "aria-hidden": "true", estilo: { "--cor": area.cor } });
  alturas.forEach((h) => div.append(criar("span", { estilo: { height: h + "%" } })));
  return div;
}

function montarProjetos() {
  const grade = $("#grade-projetos");
  grade.innerHTML = "";
  const lista = PROJETOS.filter((p) => filtroAtual === "todos" || p.area === filtroAtual);

  if (!lista.length) {
    grade.append(criar("p", { class: "vazio", texto: "Nenhum projeto nessa área ainda. Adicione um em js/dados.js." }));
    return;
  }

  lista.forEach((p) => {
    const area = AREAS[p.area] || AREAS.outros;
    const acoes = criar("div", { class: "card-acoes" });

    if (p.powerbi) {
      const b = criar("button", { type: "button", class: "botao botao-principal botao-pequeno", texto: "Abrir dashboard" });
      b.addEventListener("click", () => abrirDashboard(p));
      acoes.append(b);
    }
    if (p.link) acoes.append(criar("a", { href: p.link, target: "_blank", rel: "noopener", class: "botao botao-secundario botao-pequeno", texto: "Ver projeto" }));
    if (p.github) acoes.append(criar("a", { href: p.github, target: "_blank", rel: "noopener", class: "botao botao-secundario botao-pequeno", texto: "Código" }));

    const card = criar("article", {
      class: "card" + (p.destaque ? " card-destaque" : ""),
      estilo: { "--cor": area.cor }
    }, [
      criar("div", { class: "card-capa" }, capa(p, area)),
      criar("div", { class: "card-corpo" }, [
        criar("span", { class: "card-area", texto: area.nome }),
        criar("h3", { texto: p.titulo }),
        criar("p", { texto: p.descricao }),
        criar("ul", { class: "card-ferramentas", "aria-label": "Ferramentas" },
          (p.ferramentas || []).map((f) => criar("li", { texto: f }))),
        acoes.children.length ? acoes : null
      ])
    ]);
    grade.append(card);
  });
}

/* ---------- Modal do Power BI ---------- */
const modal = $("#modal");

function abrirDashboard(p) {
  $("#modal-titulo").textContent = p.titulo;
  $("#modal-quadro").innerHTML = "";
  $("#modal-quadro").append(
    criar("iframe", { src: p.powerbi, title: "Dashboard " + p.titulo, allowfullscreen: "true", loading: "lazy" })
  );
  modal.showModal();
}

function fecharDashboard() {
  modal.close();
}

modal.addEventListener("close", () => ($("#modal-quadro").innerHTML = ""));
$("#modal-fechar").addEventListener("click", fecharDashboard);
modal.addEventListener("click", (e) => { if (e.target === modal) fecharDashboard(); });

/* ---------- Início ---------- */
preencherPerfil();
montarGrafico();
montarFiltros();
montarProjetos();
requestAnimationFrame(() => document.body.classList.add("pronto"));
