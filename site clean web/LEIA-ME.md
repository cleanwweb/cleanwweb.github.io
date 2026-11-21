# Site de download do Clean Web

Página estática (HTML, CSS e JS, sem dependências externas) para divulgar e distribuir o
`CleanWeb.exe`.

## Conteúdo

| Arquivo | O que é |
|---|---|
| `index.html` | A página: apresentação, recursos, como usar, segurança, download e perguntas frequentes |
| `estilo.css` | Visual (mesmas cores do programa, tema claro e escuro automático, adaptado a celular) |
| `script.js` | Preenche versão, data, tamanho e SHA-256 a partir de `download/info.js` |
| `favicon.svg` | Ícone do Clean Web |
| `download/CleanWeb.exe` | O executável distribuído |
| `download/info.js` | Dados da versão publicada. **Gerado automaticamente, não edite** |

## Publicar uma nova versão

1. Altere `VERSAO` em `Code/cleanweb/__init__.py` e registre as mudanças no `Code/CHANGELOG.md`
2. Dê dois cliques em **`gerar_exe.bat`** (na pasta `Code`, ao lado desta). Ele gera o executável e atualiza
   `download/CleanWeb.exe` e `download/info.js` nesta pasta
3. Envie **todo o conteúdo desta pasta** para a hospedagem, substituindo os arquivos antigos

## Hospedagem

Qualquer hospedagem de site estático serve: hospedagem própria da empresa, Netlify, Cloudflare Pages,
GitHub Pages, Amazon S3 etc. Cuidados:

- **Use HTTPS.** Navegadores bloqueiam ou alertam downloads de executáveis por HTTP
- Confira o limite de tamanho por arquivo do serviço escolhido (o `.exe` tem cerca de 13 MB)
- O endereço do download é sempre `download/CleanWeb.exe`, então links já divulgados continuam valendo

Para ver a página no computador, basta abrir o `index.html` no navegador.

## Antes de divulgar

- **Assine o executável** com um certificado de *code signing*. Sem a assinatura, o Windows SmartScreen
  e alguns antivírus alertam ao baixar e abrir. Depois de assinar, a pergunta "O Windows mostrou um
  aviso ao abrir" das perguntas frequentes pode ser removida
- Inclua um canal de contato ou suporte (e-mail, WhatsApp) no rodapé do `index.html`
