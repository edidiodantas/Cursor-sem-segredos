(function () {
  var capitulos = window.LIVRO_CAPITULOS || [];
  var CHAVE_LIDOS = "cursor-sem-segredos-lidos";
  var CHAVE_TEMA = "cursor-sem-segredos-tema";
  var CHAVE_SO = "cursor-sem-segredos-so";
  var nomes = {
    inicio: "Começo",
    basico: "Básico",
    intermediario: "Intermediário",
    avancado: "Avançado"
  };
  var ordem = ["inicio", "basico", "intermediario", "avancado"];
  var filtro = "todos";
  var consulta = "";

  var artigo = document.getElementById("artigo");
  var sumario = document.getElementById("sumario");
  var filtros = document.getElementById("filtros");
  var busca = document.getElementById("busca");
  var barra = document.getElementById("barra");
  var cortina = document.getElementById("cortina");
  var abrir = document.getElementById("abrir-sumario");

  function lerJson(chave, vazio) {
    try {
      var valor = localStorage.getItem(chave);
      return valor ? JSON.parse(valor) : vazio;
    } catch (erro) {
      return vazio;
    }
  }

  function lidos() {
    return lerJson(CHAVE_LIDOS, {});
  }

  function soAtual() {
    var salvo = localStorage.getItem(CHAVE_SO);
    if (salvo === "mac" || salvo === "win") return salvo;
    var pista = (navigator.platform || "") + (navigator.userAgent || "");
    return /Mac/i.test(pista) ? "mac" : "win";
  }

  function porId(id) {
    for (var i = 0; i < capitulos.length; i += 1) {
      if (capitulos[i].id === id) return capitulos[i];
    }
    return capitulos[0];
  }

  function indice(id) {
    for (var i = 0; i < capitulos.length; i += 1) {
      if (capitulos[i].id === id) return i;
    }
    return 0;
  }

  function texto(html) {
    var caixa = document.createElement("div");
    caixa.innerHTML = html;
    return caixa.textContent || "";
  }

  function minutos(cap) {
    var palavras = (cap.titulo + " " + cap.resumo + " " + texto(cap.html)).split(/\s+/).length;
    return Math.max(3, Math.round(palavras / 180));
  }

  function casa(termo, cap) {
    if (!termo) return true;
    var bloco = (cap.titulo + " " + cap.resumo + " " + texto(cap.html)).toLowerCase();
    return bloco.indexOf(termo) !== -1;
  }

  function aplicarTeclas(raiz) {
    var modo = soAtual();
    var teclas = raiz.querySelectorAll("kbd[data-mac][data-win]");
    for (var i = 0; i < teclas.length; i += 1) {
      teclas[i].textContent = modo === "win" ? teclas[i].getAttribute("data-win") : teclas[i].getAttribute("data-mac");
    }
    document.getElementById("so-mac").setAttribute("aria-pressed", modo === "mac" ? "true" : "false");
    document.getElementById("so-win").setAttribute("aria-pressed", modo === "win" ? "true" : "false");
  }

  function fecharMenu() {
    barra.classList.remove("aberta");
    cortina.hidden = true;
    abrir.setAttribute("aria-expanded", "false");
  }

  function desenharFiltros() {
    var opcoes = [{ id: "todos", nome: "Tudo" }];
    for (var i = 0; i < ordem.length; i += 1) opcoes.push({ id: ordem[i], nome: nomes[ordem[i]] });
    filtros.innerHTML = "";
    for (var j = 0; j < opcoes.length; j += 1) {
      var botao = document.createElement("button");
      botao.type = "button";
      botao.textContent = opcoes[j].nome;
      botao.setAttribute("aria-pressed", filtro === opcoes[j].id ? "true" : "false");
      botao.dataset.filtro = opcoes[j].id;
      filtros.appendChild(botao);
    }
  }

  function desenharSumario(atual) {
    var mapa = lidos();
    var termo = consulta.trim().toLowerCase();
    sumario.innerHTML = "";
    var algum = false;
    for (var n = 0; n < ordem.length; n += 1) {
      if (filtro !== "todos" && filtro !== ordem[n]) continue;
      var itens = capitulos.filter(function (cap) {
        return cap.nivel === ordem[n] && casa(termo, cap);
      });
      if (!itens.length) continue;
      algum = true;
      var grupo = document.createElement("div");
      var titulo = document.createElement("p");
      titulo.className = "grupo-nome";
      titulo.textContent = nomes[ordem[n]];
      grupo.appendChild(titulo);
      for (var i = 0; i < itens.length; i += 1) {
        var link = document.createElement("a");
        link.href = "#" + itens[i].id;
        link.textContent = itens[i].titulo;
        if (itens[i].id === atual) link.className = "ativo";
        if (mapa[itens[i].id]) link.classList.add("lido");
        if (itens[i].id === atual) link.setAttribute("aria-current", "page");
        grupo.appendChild(link);
      }
      sumario.appendChild(grupo);
    }
    if (!algum) {
      var vazio = document.createElement("p");
      vazio.className = "vazio-busca";
      vazio.textContent = "Nenhum capítulo com esse texto.";
      sumario.appendChild(vazio);
    }
  }

  function desenharProgresso() {
    var mapa = lidos();
    var total = capitulos.length;
    var feitos = 0;
    for (var i = 0; i < capitulos.length; i += 1) if (mapa[capitulos[i].id]) feitos += 1;
    document.getElementById("progresso-texto").textContent = feitos + " de " + total;
    document.getElementById("progresso-barra").style.width = total ? (feitos / total) * 100 + "%" : "0";
  }

  function indiceDoNivel(nivel) {
    var lista = document.createElement("div");
    lista.className = "indice-gerado";
    var doNivel = capitulos.filter(function (cap) { return cap.nivel === nivel; });
    if (!doNivel.length) return lista;
    var titulo = document.createElement("h2");
    titulo.textContent = nomes[nivel];
    var ol = document.createElement("ol");
    for (var i = 0; i < doNivel.length; i += 1) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + doNivel[i].id;
      a.textContent = doNivel[i].titulo;
      li.appendChild(a);
      ol.appendChild(li);
    }
    lista.appendChild(titulo);
    lista.appendChild(ol);
    return lista;
  }

  function mostrar(id) {
    var cap = porId(id);
    var pos = indice(cap.id);
    var mapa = lidos();
    var noNivel = capitulos.filter(function (item) { return item.nivel === cap.nivel; });
    var ordemNoNivel = 0;
    for (var i = 0; i < noNivel.length; i += 1) if (noNivel[i].id === cap.id) ordemNoNivel = i + 1;

    artigo.innerHTML = "";
    var trilha = document.createElement("p");
    trilha.className = "trilha " + cap.nivel;
    trilha.textContent = nomes[cap.nivel] + " · " + ordemNoNivel + " de " + noNivel.length;
    var h1 = document.createElement("h1");
    h1.textContent = cap.titulo;
    var resumo = document.createElement("p");
    resumo.className = "resumo";
    resumo.textContent = cap.resumo;
    var meta = document.createElement("p");
    meta.className = "meta-linha";
    meta.textContent = minutos(cap) + " min de leitura";
    var corpo = document.createElement("div");
    corpo.className = "corpo";
    corpo.innerHTML = cap.html;
    var indiceVivo = corpo.querySelector("#indice-gerado");
    if (indiceVivo) {
      indiceVivo.appendChild(indiceDoNivel("basico"));
      indiceVivo.appendChild(indiceDoNivel("intermediario"));
      indiceVivo.appendChild(indiceDoNivel("avancado"));
    }

    var rodape = document.createElement("div");
    rodape.className = "rodape-cap";
    var marcar = document.createElement("button");
    marcar.type = "button";
    marcar.className = "marcar" + (mapa[cap.id] ? " feito" : "");
    marcar.textContent = mapa[cap.id] ? "Lido" : "Marcar como lido";
    marcar.addEventListener("click", function () {
      var estado = lidos();
      if (estado[cap.id]) delete estado[cap.id];
      else estado[cap.id] = true;
      localStorage.setItem(CHAVE_LIDOS, JSON.stringify(estado));
      mostrar(cap.id);
    });
    var setas = document.createElement("div");
    setas.className = "setas";
    if (pos > 0) {
      var anterior = document.createElement("a");
      anterior.href = "#" + capitulos[pos - 1].id;
      anterior.textContent = "Anterior";
      setas.appendChild(anterior);
    }
    if (pos < capitulos.length - 1) {
      var proximo = document.createElement("a");
      proximo.href = "#" + capitulos[pos + 1].id;
      proximo.textContent = "Próximo";
      setas.appendChild(proximo);
    }
    var aviso = document.createElement("p");
    aviso.className = "aviso";
    aviso.innerHTML = "Guia de estudo independente, com base na documentação pública do Cursor em outubro de 2026. Não é um manual oficial. Confira atalhos e preços em <a href=\"https://cursor.com/docs\">cursor.com/docs</a>.";

    rodape.appendChild(marcar);
    rodape.appendChild(setas);
    artigo.appendChild(trilha);
    artigo.appendChild(h1);
    artigo.appendChild(resumo);
    artigo.appendChild(meta);
    artigo.appendChild(corpo);
    artigo.appendChild(rodape);
    artigo.appendChild(aviso);
    aplicarTeclas(artigo);
    document.title = cap.titulo + " · Cursor sem segredos";
    document.getElementById("topo-titulo").textContent = cap.titulo;
    desenharSumario(cap.id);
    desenharProgresso();
    if (location.hash !== "#" + cap.id) history.replaceState(null, "", "#" + cap.id);
  }

  function idDaUrl() {
    var id = location.hash.replace(/^#/, "");
    return porId(id).id;
  }

  filtros.addEventListener("click", function (evento) {
    var alvo = evento.target.closest("button");
    if (!alvo) return;
    filtro = alvo.dataset.filtro;
    desenharFiltros();
    desenharSumario(idDaUrl());
  });

  busca.addEventListener("input", function () {
    consulta = busca.value;
    desenharSumario(idDaUrl());
  });

  abrir.addEventListener("click", function () {
    var aberto = barra.classList.toggle("aberta");
    cortina.hidden = !aberto;
    abrir.setAttribute("aria-expanded", aberto ? "true" : "false");
  });

  cortina.addEventListener("click", fecharMenu);
  sumario.addEventListener("click", function (evento) {
    if (evento.target.closest("a")) fecharMenu();
  });

  document.getElementById("so-mac").addEventListener("click", function () {
    localStorage.setItem(CHAVE_SO, "mac");
    aplicarTeclas(document);
  });
  document.getElementById("so-win").addEventListener("click", function () {
    localStorage.setItem(CHAVE_SO, "win");
    aplicarTeclas(document);
  });

  var tema = document.getElementById("tema");
  function pintarTema() {
    var noite = localStorage.getItem(CHAVE_TEMA) === "noite";
    document.documentElement.setAttribute("data-tema", noite ? "noite" : "dia");
    tema.setAttribute("aria-pressed", noite ? "true" : "false");
    tema.textContent = noite ? "Claro" : "Noturno";
  }
  tema.addEventListener("click", function () {
    localStorage.setItem(CHAVE_TEMA, localStorage.getItem(CHAVE_TEMA) === "noite" ? "dia" : "noite");
    pintarTema();
  });

  document.addEventListener("keydown", function (evento) {
    var tag = (evento.target.tagName || "").toLowerCase();
    if (evento.key === "/" && tag !== "input" && tag !== "textarea") {
      evento.preventDefault();
      busca.focus();
    }
    if (evento.key === "Escape") fecharMenu();
  });

  window.addEventListener("hashchange", function () {
    mostrar(idDaUrl());
    window.scrollTo(0, 0);
    artigo.focus();
  });

  desenharFiltros();
  pintarTema();
  aplicarTeclas(document);
  mostrar(idDaUrl());
})();
