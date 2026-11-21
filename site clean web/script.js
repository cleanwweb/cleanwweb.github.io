// script.js - Preenche versao, tamanho e SHA-256 a partir de download/info.js (gerado pelo empacotar.py).

(function () {
  "use strict";
  var info = window.CLEANWEB_DOWNLOAD;
  var porTodos = function (seletor) { return Array.prototype.slice.call(document.querySelectorAll(seletor)); };

  porTodos(".js-ano").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  if (!info) {
    // Executavel ainda nao publicado: evita um link quebrado.
    porTodos(".js-baixar").forEach(function (el) {
      el.removeAttribute("href");
      el.setAttribute("aria-disabled", "true");
      el.classList.add("desativado");
      el.lastChild.textContent = " Download indisponível no momento";
    });
    porTodos(".js-copiar").forEach(function (el) { el.hidden = true; });
    return;
  }

  var mb = (info.tamanho / 1024 / 1024).toLocaleString("pt-BR", { maximumFractionDigits: 1 }) + " MB";
  var valores = { versao: info.versao, data: info.data, tamanho: mb, sha256: info.sha256 };

  porTodos(".js-campo").forEach(function (el) { el.textContent = valores[el.dataset.campo]; });
  porTodos(".js-baixar").forEach(function (el) { el.href = info.arquivo; });
  porTodos(".js-meta").forEach(function (el) {
    el.textContent = "Versão " + info.versao + " · " + mb + " · Windows 10 e 11 (64 bits) · Não precisa instalar";
  });
  porTodos(".js-versao").forEach(function (el) { el.textContent = "Versão " + info.versao + ", publicada em " + info.data; });
  porTodos(".js-versao-rodape").forEach(function (el) { el.textContent = " · versão " + info.versao; });

  porTodos(".js-copiar").forEach(function (botao) {
    botao.addEventListener("click", function () {
      var avisar = function (texto) {
        botao.textContent = texto;
        setTimeout(function () { botao.textContent = "Copiar"; }, 1800);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(info.sha256).then(function () { avisar("Copiado"); }, function () { avisar("Selecione e copie"); });
      } else {
        // Aberto direto do disco (file://) ou em http: seleciona o texto para Ctrl+C.
        var codigo = botao.closest(".hash").querySelector("code");
        var faixa = document.createRange();
        faixa.selectNodeContents(codigo);
        var selecao = window.getSelection();
        selecao.removeAllRanges();
        selecao.addRange(faixa);
        avisar("Pressione Ctrl+C");
      }
    });
  });
})();
