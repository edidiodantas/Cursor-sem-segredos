window.LIVRO_CAPITULOS = window.LIVRO_CAPITULOS || [];

window.LIVRO_CAPITULOS.push({
  id: "i01",
  nivel: "intermediario",
  titulo: "Os modos do Agent",
  resumo: "Agent faz. Ask só lê. Plan combina antes de escrever. Debug mede o bug. Design aponta na tela.",
  html: [
    "<p>O seletor de modo fica no campo do agente. <kbd>Shift+Tab</kbd> gira os modos. <kbd data-mac=\"Cmd+.\" data-win=\"Ctrl+.\">Cmd+.</kbd> abre o menu. Use o modo certo antes de escrever um pedido longo no modo errado.</p>",
    "<h2>Agent</h2>",
    "<p>É o padrão. Busca, edita, roda comando e devolve diff. Serve para tarefa que você já sabe descrever e que não precisa de um desenho prévio.</p>",
    "<h2>Ask</h2>",
    "<p>Ask lê e responde. Não edita. Use para entender um fluxo, comparar duas abordagens ou revisar uma ideia antes de autorizar código. No CLI, o comando é <code>/ask</code> e a flag é <code>--mode=ask</code>.</p>",
    "<h2>Plan</h2>",
    "<p>Aperte <kbd>Shift+Tab</kbd> até o Plan, ou deixe o Cursor sugerir o modo quando o pedido parece grande. O agente pesquisa o repositório, faz perguntas, escreve um plano e espera você aprovar. O plano abre como Markdown. Você pode cortar passo, trocar arquivo e acrescentar o que ele não viu.</p>",
    "<p>Por padrão o plano fica na sua pasta de usuário. <em>Save to workspace</em> grava em <code>.cursor/plans/</code>, para o time e para um agente futuro. Use Plan quando houver mais de um desenho possível, muitos arquivos, requisito frouxo ou decisão de arquitetura. Tarefa que você já fez dez vezes pode ir direto ao Agent.</p>",
    "<p>Se a implementação sair torta, volte ao plano em vez de empilhar correções. Desfaça a mudança, aperte o plano e rode de novo. Em geral fica mais limpo.</p>",
    "<h2>Debug</h2>",
    "<p>Debug serve para bug que você consegue reproduzir e não consegue explicar: condição de corrida, vazamento, regressão. A ordem é fixa. O agente levanta hipóteses, adiciona logs que vão para um servidor local da extensão, pede para você reproduzir, lê os logs, corrige pouco código e, no fim, tira a instrumentação. Siga os passos de reprodução à letra. Diga o que deveria acontecer e o que acontece.</p>",
    "<h2>Design</h2>",
    "<p>Design Mode fica no navegador da janela de agentes, não no editor comum. Abra o navegador e alterne com <kbd data-mac=\"Cmd+Shift+D\" data-win=\"Ctrl+Shift+D\">Cmd+Shift+D</kbd>. Você clica num elemento, seleciona vários, desenha uma região com <kbd>Shift</kbd> e arraste, ou fala. <kbd data-mac=\"Cmd+L\" data-win=\"Ctrl+L\">Cmd+L</kbd> manda o elemento ao chat. <kbd data-mac=\"Option+clique\" data-win=\"Alt+clique\">Option+clique</kbd> manda o elemento ao campo. O agente recebe o componente e um print da tela. Dá para enviar o próximo ajuste antes de o anterior terminar. A própria documentação recomenda o Composer 2.5 para esse fluxo de interface.</p>",
    "<aside class=\"nota dica\"><strong>Escolha em uma linha</strong><p>Dúvida sem edição: Ask. Tarefa clara: Agent. Tarefa grande ou ambígua: Plan. Bug que precisa de execução: Debug. Ajuste visual na aplicação rodando: Design.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "i02",
  nivel: "intermediario",
  titulo: "Como pedir",
  resumo: "O agente acha arquivo sozinho. O que ele não inventa bem é o critério de pronto.",
  html: [
    "<p>Um pedido bom tem quatro partes, nem sempre em quatro parágrafos: o resultado, o limite, o critério de pronto e o contexto que só você tem.</p>",
    "<pre><code>No checkout, o frete grátis deve aparecer quando o subtotal passar de R$ 199.\nNão altere o cálculo de imposto.\nCubra os casos 198,99 e 199,00 no teste que já existe para o carrinho.\nO valor do limite está em config/frete.ts.</code></pre>",
    "<h2>O que deixar de fora</h2>",
    "<ul>",
    "<li>A pasta inteira marcada com <kbd>@</kbd>, “para garantir”.</li>",
    "<li>O histórico de outra tarefa colado no campo. Use <code>@Chats</code> se precisar de um pedaço.</li>",
    "<li>Estilo literário: “seja profissional e robusto”. Diga a restrição real.</li>",
    "<li>Pedido duplo sem ordem. “Refatore e também explique” vira diff misturado com aula. Peça um, depois o outro.</li>",
    "</ul>",
    "<h2>Contexto que enche</h2>",
    "<p>Cada conversa divide uma janela limitada com o modelo. Arquivo, ferramenta, regra, skill e MCP ocupam lugar. Quando a janela aperta, o Cursor resume o começo da conversa. O anel ao lado do campo mostra a divisão. Conversa que já foi resumida várias vezes perde foco: abra outra e aponte o que importa.</p>",
    "<p>Troque de modelo no meio da conversa se a exploração pediu um modelo rápido e a implementação pede um mais capaz. A troca vale daquele ponto em diante. O padrão fica em Cursor Settings, em Models.</p>",
    "<aside class=\"nota pratica\"><strong>Reescreva este pedido</strong><p>“Melhore o login.” Vira: “Depois de três senhas erradas, a tela mostra a mensagem que já existe em <code>erros.login.bloqueado</code> e não chama a API de novo por 30 segundos. Não mude o layout. O teste está em <code>login.test.ts</code>.”</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "i03",
  nivel: "intermediario",
  titulo: "Regras e AGENTS.md",
  resumo: "Regra é instrução persistente para o Agent. Ela não muda o Tab nem a edição inline.",
  html: [
    "<p>O modelo não lembra o projeto entre conversas. Regra é o que entra no começo do contexto toda vez que se aplica. Existem quatro origens: regras do projeto em <code>.cursor/rules</code>, regras suas em Customize → Rules, regras do time no painel, e <code>AGENTS.md</code>.</p>",
    "<h2>O arquivo .mdc</h2>",
    "<p>Regra de projeto é um arquivo <code>.mdc</code>. Um <code>.md</code> solto dentro de <code>.cursor/rules</code> é ignorado, porque não tem o frontmatter. Se você quer Markdown simples, use <code>AGENTS.md</code> na raiz ou numa subpasta.</p>",
    "<p>Crie pela conversa com <code>/create-rule</code>, ou em Customize → Rules → Add Rule. O tipo da regra sai da combinação de três campos:</p>",
    "<table><thead><tr><th>alwaysApply</th><th>description</th><th>globs</th><th>Quando entra</th></tr></thead><tbody>",
    "<tr><td>true</td><td>tanto faz</td><td>tanto faz</td><td>Em toda conversa. Os outros campos são ignorados.</td></tr>",
    "<tr><td>false</td><td>vazio</td><td>preenchido</td><td>Quando um arquivo que casa com o padrão está no contexto.</td></tr>",
    "<tr><td>false</td><td>preenchida</td><td>vazio</td><td>Quando o agente julga a descrição relevante.</td></tr>",
    "<tr><td>false</td><td>vazio</td><td>vazio</td><td>Só se você mencionar a regra com <kbd>@</kbd>.</td></tr>",
    "</tbody></table>",
    "<pre><code>---\nglobs: src/components/**/*.tsx\nalwaysApply: false\n---\n\n- Exporte o componente pelo nome, não como default.\n- Estilo fica no CSS module ao lado do componente.\n- Leia @src/components/Button.tsx antes de criar um componente novo.</code></pre>",
    "<p>Vários padrões no mesmo campo se separam por vírgula: <code>docs/**/*.md, docs/**/*.mdx</code>. Uma menção <code>@arquivo</code> dentro da regra aponta o caminho. O conteúdo desse arquivo não é colado no prompt; o agente lê se precisar. O que tem de estar sempre no contexto precisa estar escrito no corpo da regra.</p>",
    "<h2>AGENTS.md</h2>",
    "<p>Serve para instrução curta, sem metadado. Dá para ter um <code>AGENTS.md</code> na raiz e outros em <code>frontend/</code> ou <code>backend/</code>. O da pasta mais específica prevalece e se soma aos pais.</p>",
    "<h2>O que não colocar</h2>",
    "<ul>",
    "<li>Manual de estilo inteiro. Isso é trabalho de linter.</li>",
    "<li>Todo comando que o agente já conhece, como <code>npm test</code> genérico.</li>",
    "<li>Caso raro. Regra boa nasce do erro que se repetiu.</li>",
    "<li>Cópia de um arquivo do repositório. Aponte o exemplo canônico.</li>",
    "</ul>",
    "<p>Mantenha cada regra abaixo de umas 500 linhas e divida por assunto. Versione no Git. A precedência, quando há conflito, é regra do time, depois regra do projeto, depois regra de usuário. Regra não altera o Tab. Regra de usuário não entra na edição inline (<kbd data-mac=\"Cmd+K\" data-win=\"Ctrl+K\">Cmd+K</kbd>).</p>",
    "<aside class=\"nota pratica\"><strong>Primeira regra que vale a pena</strong><p>Escreva só os comandos reais do repositório e um ponteiro para o arquivo modelo. Acrescente uma linha no dia em que o agente repetir o mesmo erro.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "i04",
  nivel: "intermediario",
  titulo: "Modelos, contexto e o que não enviar",
  resumo: "Modelo rápido para o rotineiro, modelo forte para o emaranhado. Segredo não entra no chat.",
  html: [
    "<p>O seletor de modelo fica no campo do agente. <kbd data-mac=\"Cmd+/\" data-win=\"Ctrl+/\">Cmd+/</kbd> percorre os modelos. <kbd data-mac=\"Cmd+Option+/\" data-win=\"Ctrl+Alt+/\">Cmd+Option+/</kbd> é o outro atalho de troca documentado. A mudança vale para o restante da conversa. Há modelos da Anthropic, OpenAI, Google, Cursor, xAI, Moonshot, Meta e outros. A lista e o preço moram em <a href=\"https://cursor.com/docs/models-and-pricing\">Models &amp; Pricing</a> e mudam seguido. Não decore tabela de preço.</p>",
    "<h2>Como escolher sem planilha</h2>",
    "<ul>",
    "<li>Edição local, renomear, teste espelhado, texto de interface: modelo mais rápido.</li>",
    "<li>Vários arquivos, desenho de API, bug que atravessa camadas: modelo mais capaz.</li>",
    "<li>Interface na janela de agentes, no fluxo do Design Mode: a documentação recomenda o Composer 2.5.</li>",
    "<li>Alguns modelos só aparecem em Max Mode nos planos antigos cobrados por request, e janela longa custa mais. Se o seletor avisar, leia o aviso antes de deixar a conversa crescer.</li>",
    "</ul>",
    "<h2>Indexação e o que o agente não deve ver</h2>",
    "<p><code>.cursorignore</code> esconde arquivos do agente, no mesmo espírito de um ignore. Use para segredo local, dump, pasta gerada enorme e dado que não deveria ir para o modelo. O sandbox também trata <code>.cursorignore</code> como caminho protegido. Isso não substitui não colar token no chat.</p>",
    "<p>Em Settings → Agents → Approvals &amp; Execution dá para restringir leitura fora do workspace (modo Workspace, a partir do Cursor 3.23). O padrão System deixa o agente ler fora da pasta. Em projeto com arquivo sensível ao lado, Workspace é o ajuste mais sóbrio.</p>",
    "<aside class=\"nota atencao\"><strong>Não cole isto</strong><p>Chave de API, senha, cookie de sessão, dump de produção, documento de cliente, conteúdo de <code>.env</code>. Descreva o nome da variável. Deixe o valor no ambiente.</p></aside>",
    "<p>Privacidade e retenção dependem do plano e do modelo. Alguns modelos de fronteira exigem aceite explícito de retenção para prevenção de abuso, mesmo sem uso para treino. Leia o aviso da conta antes de ligar um modelo novo num repositório privado.</p>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "i05",
  nivel: "intermediario",
  titulo: "Terminal, navegador, imagem e voz",
  resumo: "O agente roda comando e abre a aplicação. Você decide o quanto isso acontece sem perguntar.",
  html: [
    "<p>O Agent usa o terminal de verdade: instala dependência, roda teste, sobe o servidor. Também usa um navegador para olhar a página que ele mesmo alterou. Imagem e voz entram pelo campo: arraste o print, cole com <kbd data-mac=\"Cmd+V\" data-win=\"Ctrl+V\">Cmd+V</kbd>, ou dite no microfone e revise o texto antes de enviar.</p>",
    "<h2>Quem autoriza o comando</h2>",
    "<p>Em Settings → Agents → Approvals &amp; Execution há três modos de execução:</p>",
    "<table><thead><tr><th>Modo</th><th>Comportamento</th></tr></thead><tbody>",
    "<tr><td>Auto-review</td><td>O recomendado. O que está na lista permitida roda. Outros comandos de shell entram no sandbox quando dá. O resto passa por um classificador. O classificador erra: pode liberar o que você bloquearia.</td></tr>",
    "<tr><td>Allowlist</td><td>Só o que você listou roda sem perguntar. Comportamento estável, lista curta.</td></tr>",
    "<tr><td>Run Everything</td><td>Toda ferramenta roda sem pergunta e sem sandbox. Só se você aceitar esse risco.</td></tr>",
    "</tbody></table>",
    "<p>O sandbox deixa o comando trabalhar na pasta do projeto e corta rede e caminho sensível, inclusive <code>.git/config</code> e <code>.git/hooks</code>. No Linux ele usa Landlock e seccomp; kernel antigo faz o Cursor voltar a pedir aprovação. Há ainda proteção extra para navegador, para apagar arquivo e para escrever fora do workspace.</p>",
    "<p>Instrução em português cabe em <code>.cursor/permissions.json</code> ou em <code>~/.cursor/permissions.json</code>, no campo <code>block_instructions</code>. Exemplo de frase: “Todo comando da AWS CLI precisa da minha aprovação.” Dá para pedir ao próprio agente que grave isso. O arquivo do time, quando existe, ganha da sua máquina.</p>",
    "<aside class=\"nota dica\"><strong>No terminal, sem abrir o chat</strong><p><kbd data-mac=\"Cmd+K\" data-win=\"Ctrl+K\">Cmd+K</kbd> gera um comando a partir de uma frase. <kbd data-mac=\"Cmd+Enter\" data-win=\"Ctrl+Enter\">Cmd+Enter</kbd> executa. <kbd>Esc</kbd> só coloca o comando na linha.</p></aside>",
    "<h2>Voltar atrás</h2>",
    "<p>Se a conversa mostrar restauração de um ponto anterior, use para desfazer um trecho ruim. O Git continua sendo a rede que não depende da interface. Commit pequeno, antes de um pedido arriscado, custa pouco.</p>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "i06",
  nivel: "intermediario",
  titulo: "Git sem perder o controle",
  resumo: "O painel de Git é o do editor. O agente entra quando você entrega o diff de propósito.",
  html: [
    "<p>Git é o caderno das mudanças. GitHub é um lugar na internet para esse caderno. Dá para usar o Cursor na pasta do pendrive sem essa conta. Esse caminho está em <a href=\"#usb\">Pendrive e GitHub</a>. O que segue aqui é para quando o caderno já existe.</p>",
    "<p>Fonte, branch, stage e commit ficam no painel de controle de código-fonte. O agente não precisa commitar para você. Muitas vezes é melhor ele não commitar: o commit é o momento em que você afirma que leu o diff.</p>",
    "<h2>Contexto de Git que vale mencionar</h2>",
    "<ul>",
    "<li><code>@Commit</code>, diff do que ainda não entrou no commit: “revise só isto”.</li>",
    "<li><code>@Branch</code>, diff contra a branch principal: “resuma o que esta branch faz” ou “procure regressão neste conjunto”.</li>",
    "</ul>",
    "<h2>Um ciclo que não vira bagunça</h2>",
    "<ol>",
    "<li>Branch nova para a tarefa. Nome que um colega entende.</li>",
    "<li>Pedido no Agent ou no Plan.</li>",
    "<li>Você lê o diff no painel, não só o resumo do chat.</li>",
    "<li>Teste. Se falhar, cole a saída com <code>@Terminals</code> ou <kbd data-mac=\"Cmd+V\" data-win=\"Ctrl+V\">Cmd+V</kbd> e peça a correção da falha, não uma reescrita.</li>",
    "<li>Commit seu, com mensagem que diz o porquê.</li>",
    "</ol>",
    "<aside class=\"nota atencao\"><strong>O que não deixar o agente fazer sozinho</strong><p>Push forçado, commit de <code>.env</code>, alteração de hook do Git, rebase de branch compartilhada. O sandbox já protege parte disso. A sua regra e a sua leitura protegem o resto.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "i07",
  nivel: "intermediario",
  titulo: "Skills, comandos / e MCP",
  resumo: "Barra chama um procedimento. MCP liga o agente a um sistema de fora do repositório.",
  html: [
    "<p>Digite <kbd>/</kbd> no campo. Aparecem comandos e skills. <kbd>Enter</kbd> gruda a skill naquela mensagem. <kbd data-mac=\"Option+Enter\" data-win=\"Alt+Enter\">Option+Enter</kbd>, ou <em>Use as Mode</em>, liga a skill como modo personalizado: ela permanece em toda a conversa até você sair. Isso serve para um checklist de revisão ou um playbook de teste, não para um comando de uma tacada só.</p>",
    "<h2>Skills que já vêm prontas</h2>",
    "<table><thead><tr><th>Comando</th><th>Uso</th></tr></thead><tbody>",
    "<tr><td><code>/create-rule</code></td><td>Cria uma regra <code>.mdc</code> com o frontmatter certo.</td></tr>",
    "<tr><td><code>/create-skill</code></td><td>Cria uma skill, com <code>SKILL.md</code>.</td></tr>",
    "<tr><td><code>/create-hook</code></td><td>Cria um hook e atualiza o <code>hooks.json</code>.</td></tr>",
    "<tr><td><code>/create-subagent</code></td><td>Cria um subagente com papel próprio.</td></tr>",
    "<tr><td><code>/review</code>, <code>/review-bugbot</code>, <code>/review-security</code></td><td>Revisão geral, caça a bug, ou revisão de segurança.</td></tr>",
    "<tr><td><code>/update-cursor-settings</code></td><td>Acha e altera a configuração certa do Cursor ou do editor.</td></tr>",
    "</tbody></table>",
    "<p>Regra entra sempre que o tipo dela manda. Skill entra quando o agente julga que cabe, ou quando você chama com <kbd>/</kbd>. Por isso skill não entope a janela do mesmo jeito que uma regra gigante. Dá para impedir a invocação automática com <code>disable-model-invocation: true</code> no frontmatter: aí ela só entra se você chamar.</p>",
    "<h2>MCP</h2>",
    "<p>MCP (Model Context Protocol) liga o agente a ferramenta e dado de fora: issue, banco, log, documentação interna. Instale em Customize ou descreva o servidor em <code>mcp.json</code>. O protocolo cobre ferramentas, prompts, recursos e, no Cursor, interfaces interativas devolvidas pela ferramenta.</p>",
    "<p>O agente chama a ferramenta quando o pedido pede. Você também pode citar o nome. Ligue e desligue servidores em Customize. No modo Auto-review, ferramenta MCP que não está na lista passa pelo classificador. Não coloque segredo no corpo do <code>mcp.json</code> que vai para o Git. Time e empresa podem permitir ou bloquear servidores no painel.</p>",
    "<aside class=\"nota dica\"><strong>Quando criar cada coisa</strong><p>Erro repetido de estilo ou de comando: regra curta. Procedimento com passos e talvez um script: skill. Sistema fora do repositório: MCP. Ainda não crie hook nem subagente; isso é o nível avançado.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "i08",
  nivel: "intermediario",
  titulo: "Pratique o intermediário",
  resumo: "Seis exercícios que mudam o jeito de pedir, não só o cardápio de botões.",
  html: [
    "<ol>",
    "<li>Pegue uma tarefa de verdade com mais de um arquivo. Mude para Plan com <kbd>Shift+Tab</kbd>. Responda as perguntas. Corte um passo inútil do plano antes de construir. Salve o plano no workspace.</li>",
    "<li>Num bug que você consegue repetir, use Debug. Siga a reprodução pedida. Confira se a instrumentação saiu no fim.</li>",
    "<li>Escreva uma regra <code>.mdc</code> com <code>alwaysApply: false</code> e um <code>globs</code> estreito. Peça uma edição num arquivo que casa e noutra que não casa. Veja a diferença.</li>",
    "<li>Abra <code>AGENTS.md</code> na raiz com três linhas: comando de teste, comando de tipos, e o arquivo que serve de modelo.</li>",
    "<li>Em Approvals &amp; Execution, identifique o modo atual. Se estiver em Run Everything num projeto que não é uma caixa de areia, volte para Auto-review.</li>",
    "<li>Chame <code>/review</code> num diff que você mesmo acabou de fazer. Trate o comentário como revisão de colega: aceite o que for bug, dispense o que for gosto.</li>",
    "</ol>",
    "<p>O avançado começa quando o trabalho não cabe mais na sua máquina aberta: agente na nuvem, revisão no pull request, vários agentes, e um freio automático quando o loop erra.</p>"
  ].join("")
});
