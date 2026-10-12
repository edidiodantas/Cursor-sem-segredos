window.LIVRO_CAPITULOS = window.LIVRO_CAPITULOS || [];

window.LIVRO_CAPITULOS.push({
  id: "a01",
  nivel: "avancado",
  titulo: "Cloud Agents",
  resumo: "Um agente numa máquina remota clona o repositório, abre branch e devolve pull request. Você pode fechar o notebook.",
  html: [
    "<p>Cloud Agent roda fora do seu editor, numa máquina isolada. Ele clona o repositório, trabalha numa branch e abre pull request. Use isto quando você escolher a nuvem. Para não cair nela sem querer, o procedimento está no básico, em <a href=\"#pc\">No seu computador, não na nuvem</a>.</p>",
    "<p>Dá para começar de vários lugares:</p>",
    "<ul>",
    "<li>No Cursor, escolha Cloud no menu abaixo do campo do agente.</li>",
    "<li>Na web, em <a href=\"https://cursor.com/agents\">cursor.com/agents</a>.</li>",
    "<li>No Slack ou no Linear, mencionando <code>@Cursor</code>.</li>",
    "<li>No GitHub ou no Bitbucket Cloud, comentando <code>@cursor</code> num pull request ou numa issue.</li>",
    "<li>Pela API de Cloud Agents.</li>",
    "</ul>",
    "<p>A máquina tem ambiente de desktop. O agente usa mouse e teclado para abrir o que construiu, inclusive o navegador. Por isso um cloud agent consegue verificar tela, não só teste de unidade. Os modos de aprovação da sua máquina local não se aplicam: na nuvem ele não para para pedir ok a cada comando, porque a máquina é dele.</p>",
    "<h2>Ambiente, segredo e MCP</h2>",
    "<p>Conecte a conta do Git (GitHub, GitLab, Azure DevOps ou Bitbucket), escolha os repositórios e grave segredo no ambiente, não no prompt. Ambiente mal preparado é a causa mais comum de agente que “não acha o projeto”. Build de ambiente e snapshot ficam na configuração do cloud agent; vale a pena deixar instalação e teste reproduzíveis antes de delegar tarefa grande.</p>",
    "<p>MCP na nuvem aceita HTTP e stdio. HTTP é o caminho recomendado: a credencial não fica dentro da máquina do agente, e a chamada passa pelo backend. Stdio roda dentro da VM, então o agente enxerga a configuração. SSE não é suportado nesse modo. O dropdown de MCP em cursor.com/agents liga servidores pessoais. O time configura os compartilhados no painel, em Plugins &amp; MCPs.</p>",
    "<p>Regras de usuário, do time e do repositório (<code>.cursor/rules</code> e <code>AGENTS.md</code>) valem para o cloud agent. Hook de usuário em <code>~/.cursor/hooks.json</code> não sobe junto: a VM não tem a sua pasta pessoal. Hook do repositório, em <code>.cursor/hooks.json</code>, sobe.</p>",
    "<aside class=\"nota dica\"><strong>O que delegar</strong><p>Tarefa com critério de pronto verificável: teste que falha, issue bem escrita, migração com plano já aceito. Tarefa em que você ainda não sabe o que quer continua no Plan, na sua máquina, até o plano ficar curto o bastante para outra pessoa executar. O agente remoto é essa outra pessoa.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "a02",
  nivel: "avancado",
  titulo: "A linha de comando",
  resumo: "O mesmo agente, no terminal. Serve para script, máquina sem interface e quem já vive no shell.",
  html: [
    "<p>No macOS, Linux e Windows com WSL:</p>",
    "<pre><code>curl https://cursor.com/install -fsS | bash\nagent --version</code></pre>",
    "<p>No Windows nativo, o instalador é PowerShell: <code>irm 'https://cursor.com/install?win32=true' | iex</code>. Inclua <code>~/.local/bin</code> no <code>PATH</code> se o comando <code>agent</code> não aparecer. Atualização manual: <code>agent update</code>. O CLI tenta se atualizar sozinho.</p>",
    "<h2>Modos e revisão</h2>",
    "<ul>",
    "<li><kbd>Shift+Tab</kbd> gira Agent, Plan e Ask. <code>/plan</code> e <code>--mode=plan</code> abrem o Plan. <code>/ask</code> e <code>--mode=ask</code> só leem. <code>/debug</code> entra no Debug.</li>",
    "<li><code>agent -p</code> ou <code>--print</code> responde sem interface. É o caminho para script e CI. Trate isso como automação com permissão de verdade: o modo de execução e o sandbox continuam valendo.</li>",
    "<li><kbd>Ctrl+R</kbd> revisa as mudanças. <kbd>i</kbd> acrescenta uma instrução. As setas trocam de arquivo.</li>",
    "<li><kbd>Shift+Enter</kbd> quebra linha em vários terminais modernos. No tmux, use <kbd>Ctrl+J</kbd>. <kbd>Ctrl+D</kbd> sai, e pede a segunda vez.</li>",
    "</ul>",
    "<p>Comandos úteis no dia a dia: <code>/model</code>, <code>/mcp list</code>, <code>/sandbox</code>, <code>/run-everything</code> (o alias é <code>/auto-run</code>), <code>/max-mode</code> nos planos antigos, <code>/goal</code> para um objetivo que permanece até terminar. <code>/loop</code> repete um pedido ou uma skill; se você não fixar o intervalo, o agente escolhe quando acordar. Pare o loop quando o objetivo acabar.</p>",
    "<p>Skill vira modo persistente também no CLI: no menu <kbd>/</kbd>, <kbd data-mac=\"Option+Enter\" data-win=\"Alt+Enter\">Option+Enter</kbd> mantém a skill ativa.</p>",
    "<aside class=\"nota atencao\"><strong>Headless não é menos perigoso</strong><p>Um <code>agent -p</code> dentro de CI enxerga o que o job enxerga. Segredo de CI, rede e escrita no repositório precisam da mesma política que você usaria para um script qualquer. Comece em Ask ou com sandbox, não com Run Everything.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "a03",
  nivel: "avancado",
  titulo: "Subagentes",
  resumo: "Um subagente tem contexto próprio. O pai recebe o resultado, não o barulho do caminho.",
  html: [
    "<p>Subagente é um agente delegado. Ele não vê o histórico do pai. O pai escreve um pedido completo, o subagente trabalha numa janela limpa e devolve uma mensagem final. Isso serve para pesquisa longa, trabalho em paralelo e checagem independente. Serve pouco para “formata este arquivo”: isso é skill.</p>",
    "<p>Dois já existem e o Agent os chama sozinho. <strong>Explore</strong> vasculha o repositório com um modelo mais rápido, em buscas paralelas, e não despeja essa leitura na sua conversa. <strong>Browser</strong> fica com o DOM e os prints e devolve só o que importa.</p>",
    "<table><thead><tr><th>Modo</th><th>Efeito</th></tr></thead><tbody>",
    "<tr><td>Foreground</td><td>O pai espera. Use quando o próximo passo depende da resposta.</td></tr>",
    "<tr><td>Background</td><td>O pai segue. Use para trabalho longo ou paralelo.</td></tr>",
    "</tbody></table>",
    "<h2>Criar o seu</h2>",
    "<p>Arquivo de projeto em <code>.cursor/agents/nome.md</code>. Arquivo seu, para todos os projetos, em <code>~/.cursor/agents/</code>. Também há pastas compatíveis <code>.claude/agents</code> e <code>.codex/agents</code>; em conflito de nome, <code>.cursor/</code> ganha, e o do projeto ganha do seu usuário. <code>/create-subagent</code> escreve o arquivo.</p>",
    "<pre><code>---\nname: verificador\ndescription: Confere se a tarefa terminou. Use depois de uma implementação.\nmodel: inherit\nreadonly: true\n---\n\nRode os testes do escopo pedido.\nDiga o que passou, o que falhou e o que não foi verificado.\nNão altere arquivo.</code></pre>",
    "<p><code>model: inherit</code> usa o modelo do pai. Um id específico força outro modelo. <code>readonly: true</code> tira edição e comando que muda estado. <code>is_background: true</code> não bloqueia o pai. A descrição é o que o agente lê para decidir se delega: escreva quando usar, não um slogan.</p>",
    "<aside class=\"nota dica\"><strong>Skill ou subagente</strong><p>Um passo repetível, numa janela só: skill. Pesquisa que suja o contexto, trabalho paralelo ou uma segunda opinião com contexto limpo: subagente.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "a04",
  nivel: "avancado",
  titulo: "Hooks",
  resumo: "Um script seu roda antes ou depois de um passo do agente. Ele pode observar, barrar ou pedir continuação.",
  html: [
    "<p>Hook é processo definido em <code>.cursor/hooks.json</code> no projeto, em <code>~/.cursor/hooks.json</code> na sua máquina, ou instalado por um plugin. O script fala JSON pelo stdio. <code>/create-hook</code> cria o esqueleto. Há uma aba Hooks em Customize e um canal de saída para ver erro.</p>",
    "<h2>Onde eles disparam</h2>",
    "<ul>",
    "<li>Sessão: <code>sessionStart</code>, <code>sessionEnd</code>.</li>",
    "<li>Ferramenta: <code>preToolUse</code>, <code>postToolUse</code>, <code>postToolUseFailure</code>.</li>",
    "<li>Shell e MCP: <code>beforeShellExecution</code>, <code>afterShellExecution</code>, <code>beforeMCPExecution</code>, <code>afterMCPExecution</code>.</li>",
    "<li>Arquivo: <code>beforeReadFile</code>, <code>afterFileEdit</code>.</li>",
    "<li>Conversa: <code>beforeSubmitPrompt</code>, <code>preCompact</code>, <code>stop</code>, <code>afterAgentResponse</code>, <code>afterAgentThought</code>.</li>",
    "<li>Subagente: <code>subagentStart</code>, <code>subagentStop</code>.</li>",
    "<li>Tab, à parte: <code>beforeTabFileRead</code>, <code>afterTabFileEdit</code>.</li>",
    "<li>Aplicação: <code>workspaceOpen</code>, ao abrir a pasta. Não depende de uma conversa.</li>",
    "</ul>",
    "<p>Os hooks de Agent valem para o chat e para a edição com <kbd data-mac=\"Cmd+K\" data-win=\"Ctrl+K\">Cmd+K</kbd>. Os de Tab valem só para a sugestão inline. Cloud Agent roda os hooks de comando do repositório, inclusive shell, arquivo, ferramenta e o ciclo <code>stop</code>. Não roda hook de Tab, <code>workspaceOpen</code>, hook baseado em prompt, nem o <code>hooks.json</code> da sua pasta de usuário.</p>",
    "<h2>Um uso que presta</h2>",
    "<p>O hook <code>stop</code> pode devolver <code>followup_message</code> e fazer o agente continuar, com um teto de voltas. O caso sério é “rode o teste e siga até passar”, com um arquivo de rascunho que marca <code>DONE</code> e um máximo de iterações. Sem teto, o loop gasta cota e pode alargar o diff. O mesmo efeito de repetição, com menos encanamento, também existe na skill <code>/loop</code>.</p>",
    "<aside class=\"nota atencao\"><strong>Hook é código de produção</strong><p>Ele vê caminho de arquivo e pode bloquear ferramenta. Revise como revisaria um script de CI. Não coloque segredo no script versionado. Não use hook para esconder do revisor uma ação que deveria aparecer no diff.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "a05",
  nivel: "avancado",
  titulo: "Bugbot, revisão e automações",
  resumo: "A revisão automática olha o pull request. A automação dispara trabalho sem você abrir o editor.",
  html: [
    "<p>Bugbot lê o diff do pull request e comenta bug, segurança e qualidade, com sugestão de correção. Liga-se em Automations, depois de conectar o repositório no painel: GitHub, GitLab, Bitbucket, Azure DevOps ou Origin. Ele roda a cada atualização do PR, ou só quando alguém comenta <code>cursor review</code> ou <code>bugbot run</code>. Lê os comentários que já existem para não repetir. <em>Fix in Cursor</em> abre o ponto no editor. <em>Fix in Web</em> abre em cursor.com/agents.</p>",
    "<p>No GitHub o check se chama <code>Cursor Bugbot</code>. Achado, por padrão, publica conclusão neutra, não falha. Exigir o check na proteção da branch garante que ele rodou; para bloquear merge por causa de achado, é preciso a opção de falhar quando ainda há comentário sem resolver, se o seu plano tiver essa opção. Há também <code>/review-bugbot</code> e <code>/review-security</code> dentro do editor, para a mudança que ainda não virou PR.</p>",
    "<h2>Arquivo opcional no repositório</h2>",
    "<p><code>.cursor/config/bugbot.yaml</code> ajusta rascunho, frequência (<code>everyPush</code> ou <code>oncePerPr</code>), esforço da revisão e autofix (<code>disabled</code>, <code>newBranch</code> ou <code>existingBranch</code>). Campo ausente cai no padrão. Arquivo acima de 64 KB é ignorado. Não é obrigatório para começar.</p>",
    "<h2>Automações</h2>",
    "<p>A skill <code>/automate</code> cria automação disparada por horário, mensagem de Slack, evento de GitHub e outras fontes. <code>/autopilot</code> acompanha um pull request e trata comentário, conflito e check vermelho. Isso é o avançado de verdade: o gatilho deixa de ser você sentado no editor. Escreva o critério de pronto no texto da automação com o mesmo cuidado de um pedido Plan. Automação vaga produz diff vago em horário comercial dos outros.</p>",
    "<aside class=\"nota dica\"><strong>Ordem de adoção</strong><p>Primeiro Bugbot comentando, sem autofix. Você lê uma semana de comentários. Só então ligue correção automática, e ainda em branch nova, para o diff continuar visível.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "a06",
  nivel: "avancado",
  titulo: "Time, integrações e governança",
  resumo: "Regra de empresa, MCP permitido e integração com o tracker. O agente passa a fazer parte do processo, não de uma preferência pessoal.",
  html: [
    "<p>Plano Team e Enterprise administram regras no painel. Regra de time é texto, com glob opcional. Sem glob, vale em toda conversa, em todo repositório. Com glob, só quando um arquivo daquele padrão está no contexto. Precedência quando o texto briga: time, projeto, usuário. As aplicáveis se somam.</p>",
    "<p>O admin pode exigir a regra. Aí o membro não desliga em Customize. Rascunho não se aplica até alguém ativar. Regra de IA não é controle de segurança. Segredo, permissão de produção e revisão humana continuam fora do prompt.</p>",
    "<h2>Onde o Cursor encontra o resto da empresa</h2>",
    "<ul>",
    "<li>GitHub, GitLab, Azure DevOps e Bitbucket: repositório, Bugbot e cloud agent.</li>",
    "<li>Slack, Microsoft Teams, Linear, Jira e Notion: disparar ou acompanhar trabalho sem abrir o editor.</li>",
    "<li>JetBrains e Xcode: há integração documentada para quem não vive o dia inteiro no Cursor.</li>",
    "<li>Plugins e marketplace: regras e skills empacotadas. Importar um repositório de regras “no olho” não funciona; elas entram por plugin, com <code>.cursor-plugin/marketplace.json</code>.</li>",
    "</ul>",
    "<p>Empresa ainda tem SSO, SCIM, controle de modelo, controle de MCP, política de rede, exportação OpenTelemetry e revisão de segurança. O capítulo útil para quem não é admin: se um modelo sumiu, se um MCP não conecta, ou se o Auto-review está cinza, a causa pode ser política do time, não a sua instalação. Auto-review, por exemplo, precisa que Claude 4.5 Haiku permaneça permitido, porque o classificador usa esse modelo como reserva.</p>",
    "<aside class=\"nota\"><strong>O mínimo de um time pequeno</strong><p>Uma regra curta obrigatória (comando de teste e o que nunca commitar), Bugbot no repositório principal, e MCP só dos sistemas que o time realmente usa. O resto é enfeite até doer a falta.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "a07",
  nivel: "avancado",
  titulo: "Quando o agente erra",
  resumo: "A correção mais rápida quase nunca é a quinta mensagem na mesma conversa.",
  html: [
    "<p>Sintoma e o que fazer, nesta ordem:</p>",
    "<ol>",
    "<li><strong>Diff grande demais ou no lugar errado.</strong> Rejeite. Reescreva o pedido com arquivo, limite e teste. Não diga só “não era isso”.</li>",
    "<li><strong>A implementação não bate com o que você queria, e a tarefa era grande.</strong> Volte ao plano. Desfaça. Ajuste o plano. Rode de novo.</li>",
    "<li><strong>O mesmo erro pela terceira vez.</strong> Conversa nova. A anterior já ensinou o modelo a insistir. Se o erro for de convenção do repositório, vire uma linha de regra.</li>",
    "<li><strong>Bug que depende de rodar.</strong> Saia do achismo e vá para Debug, com reprodução. Cole o erro real, via <code>@Terminals</code> ou o print.</li>",
    "<li><strong>A resposta ignora um arquivo óbvio.</strong> Marque com <kbd>@</kbd>. Se o arquivo nem deveria ser lido, ele provavelmente está fora do ignore e competindo, ou a conversa está cheia.</li>",
    "<li><strong>O anel de contexto está no limite.</strong> Abra outra conversa. Aponte o plano salvo, o diff da branch com <code>@Branch</code> e a regra. Não cole o chat velho.</li>",
    "<li><strong>Comando perigoso ou surpresa.</strong> Recuse o cartão de aprovação. Se isso se repetir, escreva uma <code>block_instructions</code> em <code>permissions.json</code>.</li>",
    "<li><strong>Cloud agent entregou PR ruim.</strong> Comente no PR com o critério que faltou, ou feche e rode de novo com um pedido mais curto. Não mergeie para “ir ajustando”.</li>",
    "</ol>",
    "<aside class=\"nota dica\"><strong>A frase que recupera a conversa</strong><p>“Pare. Não edite mais. Diga qual arquivo você acredita que contém a causa e qual teste prova isso.” Só então autorize a próxima edição.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "a08",
  nivel: "avancado",
  titulo: "Um jeito de trabalhar",
  resumo: "Plano para o que é grande, agente para o que é claro, você para o diff e para o teste.",
  html: [
    "<p>Quem usa o Cursor o dia inteiro não escreve prompt mais bonito. Separa o trabalho em tipos e não mistura os tipos na mesma conversa.</p>",
    "<table><thead><tr><th>Tipo de trabalho</th><th>Onde fazer</th></tr></thead><tbody>",
    "<tr><td>Entender código alheio</td><td>Ask, ou um Agent só de leitura no primeiro pedido.</td></tr>",
    "<tr><td>Mudança local que você já vê</td><td>Tab ou <kbd data-mac=\"Cmd+K\" data-win=\"Ctrl+K\">Cmd+K</kbd>.</td></tr>",
    "<tr><td>Função nova, vários arquivos</td><td>Plan, plano salvo no repositório, depois Agent.</td></tr>",
    "<tr><td>Bug reproduzível</td><td>Debug, com o erro colado.</td></tr>",
    "<tr><td>Ajuste de tela com o app aberto</td><td>Design Mode no navegador da janela de agentes.</td></tr>",
    "<tr><td>Tarefa que pode terminar sem você</td><td>Cloud Agent, com teste que decide sozinho se passou.</td></tr>",
    "<tr><td>PR dos outros, ou o seu antes do merge</td><td>Bugbot, mais a sua leitura do que o bot marcou como neutro.</td></tr>",
    "</tbody></table>",
    "<h2>O que deixar escrito no repositório</h2>",
    "<ul>",
    "<li><code>AGENTS.md</code> curto: como testar, como subir, o que não gerar.</li>",
    "<li>Uma regra por pasta que tem jeito próprio, com <code>globs</code>, apontando o arquivo modelo.</li>",
    "<li>Skill para o procedimento que você repetiria em voz alta para um colega novo.</li>",
    "<li>Subagente somente leitura para “confira se terminou”, quando a tarefa for longa o bastante para o agente se elogiar cedo.</li>",
    "</ul>",
    "<p>O teste é o contrato. Pedido sem jeito de falhar vira opinião. Pedido com comando de teste vira trabalho que o agente, o cloud agent e o Bugbot conseguem repetir.</p>",
    "<aside class=\"nota\"><strong>O ofício que sobra</strong><p>Decidir o que construir, cortar o plano, ler o diff, recusar o comando estranho e escrever a regra no dia em que o erro repetir. O restante é ferramenta, e ferramenta você acabou de ver por nível.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "a09",
  nivel: "avancado",
  titulo: "Pratique o avançado",
  resumo: "Cinco exercícios. Faça os três primeiros no seu repositório. Os dois últimos só se a conta tiver o recurso.",
  html: [
    "<ol>",
    "<li>Crie <code>.cursor/agents/verificador.md</code> com <code>readonly: true</code> e a descrição de quando usar. Peça ao Agent para delegar a verificação de uma mudança pequena. Leia se ele realmente separou a checagem.</li>",
    "<li>Peça <code>/create-hook</code> para um hook <code>beforeShellExecution</code> que apenas registra o comando, sem bloquear. Confira a saída na aba Hooks. Apague o hook se não for ficar.</li>",
    "<li>Escreva três frases em <code>.cursor/permissions.json</code> no <code>block_instructions</code>: um comando que sempre pede aprovação no seu projeto. Teste com um pedido que tentaria esse comando.</li>",
    "<li>Se a conta tiver Cloud Agent, mande uma tarefa com teste automático, feche o editor e leia o PR depois. Anote o que faltou no pedido. Essa nota vira a próxima linha do <code>AGENTS.md</code>.</li>",
    "<li>Se o repositório estiver ligado ao Bugbot, abra um PR pequeno e leia os comentários. Marque o que era bug e o que era ruído. Ajuste o yaml só se o ruído for sistemático.</li>",
    "</ol>",
    "<p>Quem fez o básico, o intermediário e estes exercícios já não depende de vídeo. O próximo capítulo é consulta, não aula.</p>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "a10",
  nivel: "avancado",
  titulo: "Glossário e mapa rápido",
  resumo: "Os nomes que o Cursor usa e os atalhos oficiais, num lugar só.",
  html: [
    "<h2>Glossário</h2>",
    "<p>As palavras que aparecem em inglês na tela, com o que fazer em cada uma, estão no básico: <a href=\"#tela\">A tela está em inglês</a>.</p>",
    "<table><thead><tr><th>Nome</th><th>Significado neste livro</th></tr></thead><tbody>",
    "<tr><td>Tab</td><td>Sugestão enquanto você digita. Não obedece regra de projeto.</td></tr>",
    "<tr><td>Edição inline</td><td><kbd data-mac=\"Cmd+K\" data-win=\"Ctrl+K\">Cmd+K</kbd> no editor. Mudança local. Sem regra de usuário.</td></tr>",
    "<tr><td>Agent</td><td>Conversa que busca, edita e roda comando.</td></tr>",
    "<tr><td>Ask</td><td>Modo só de leitura.</td></tr>",
    "<tr><td>Plan</td><td>Pesquisa, pergunta, plano, e só então código.</td></tr>",
    "<tr><td>Debug</td><td>Hipótese, log, você reproduz, correção curta, limpeza.</td></tr>",
    "<tr><td>Design Mode</td><td>Apontar na tela, no navegador da janela de agentes.</td></tr>",
    "<tr><td>Regra</td><td>Instrução persistente. Projeto, usuário, time ou <code>AGENTS.md</code>.</td></tr>",
    "<tr><td>Skill</td><td>Procedimento sob demanda, chamado com <kbd>/</kbd> ou puxado pelo agente.</td></tr>",
    "<tr><td>MCP</td><td>Ferramenta e dado de fora do repositório.</td></tr>",
    "<tr><td>Subagente</td><td>Agente delegado, com contexto limpo.</td></tr>",
    "<tr><td>Hook</td><td>Script no ciclo do agente.</td></tr>",
    "<tr><td>Cloud Agent</td><td>Agente em máquina remota, com branch e pull request.</td></tr>",
    "<tr><td>Bugbot</td><td>Revisão automática de pull request.</td></tr>",
    "<tr><td>Auto-review</td><td>Modo de aprovação recomendado para comando, MCP e fetch.</td></tr>",
    "<tr><td>Max Mode</td><td>Janela maior em planos antigos cobrados por request. Alguns modelos exigem.</td></tr>",
    "</tbody></table>",
    "<h2>Atalhos oficiais</h2>",
    "<p>Valores de outubro de 2026. Remapeie em Keyboard Shortcuts se precisar. No Windows e no Linux, use o botão do topo deste livro.</p>",
    "<h3>Geral</h3>",
    "<table><thead><tr><th>Atalho</th><th>Ação</th></tr></thead><tbody>",
    "<tr><td><kbd data-mac=\"Cmd+I\" data-win=\"Ctrl+I\">Cmd+I</kbd> e <kbd data-mac=\"Cmd+L\" data-win=\"Ctrl+L\">Cmd+L</kbd></td><td>Painel lateral</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+E\" data-win=\"Ctrl+E\">Cmd+E</kbd></td><td>Layout do agente</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+.\" data-win=\"Ctrl+.\">Cmd+.</kbd></td><td>Menu de modos</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+/\" data-win=\"Ctrl+/\">Cmd+/</kbd></td><td>Percorrer modelos</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+Shift+J\" data-win=\"Ctrl+Shift+J\">Cmd+Shift+J</kbd></td><td>Configurações do Cursor</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+Shift+Space\" data-win=\"Ctrl+Shift+Space\">Cmd+Shift+Space</kbd></td><td>Voz</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+,\" data-win=\"Ctrl+,\">Cmd+,</kbd></td><td>Configurações gerais</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+Shift+P\" data-win=\"Ctrl+Shift+P\">Cmd+Shift+P</kbd></td><td>Paleta de comandos</td></tr>",
    "</tbody></table>",
    "<h3>Chat</h3>",
    "<table><thead><tr><th>Atalho</th><th>Ação</th></tr></thead><tbody>",
    "<tr><td><kbd>Enter</kbd></td><td>Enfileirar</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+Enter\" data-win=\"Ctrl+Enter\">Cmd+Enter</kbd></td><td>Enviar na hora, ou aceitar mudanças</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+Shift+Backspace\" data-win=\"Ctrl+Shift+Backspace\">Cmd+Shift+Backspace</kbd></td><td>Cancelar geração, ou rejeitar mudanças</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+Shift+L\" data-win=\"Ctrl+Shift+L\">Cmd+Shift+L</kbd></td><td>Seleção para o chat</td></tr>",
    "<tr><td><kbd>Shift+Tab</kbd></td><td>Girar modos</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+N\" data-win=\"Ctrl+N\">Cmd+N</kbd> ou <kbd data-mac=\"Cmd+R\" data-win=\"Ctrl+R\">Cmd+R</kbd></td><td>Conversa nova</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+T\" data-win=\"Ctrl+T\">Cmd+T</kbd></td><td>Nova aba</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+[\" data-win=\"Ctrl+[\">Cmd+[</kbd> e <kbd data-mac=\"Cmd+]\" data-win=\"Ctrl+]\">Cmd+]</kbd></td><td>Conversa anterior e próxima</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+W\" data-win=\"Ctrl+W\">Cmd+W</kbd></td><td>Fechar conversa</td></tr>",
    "</tbody></table>",
    "<h3>Edição inline, Tab, terminal e Design</h3>",
    "<table><thead><tr><th>Atalho</th><th>Ação</th></tr></thead><tbody>",
    "<tr><td><kbd data-mac=\"Cmd+K\" data-win=\"Ctrl+K\">Cmd+K</kbd></td><td>Abrir edição inline, ou a barra do terminal</td></tr>",
    "<tr><td><kbd data-mac=\"Option+Enter\" data-win=\"Alt+Enter\">Option+Enter</kbd></td><td>Pergunta rápida na edição inline. No chat, também fixa uma skill como modo.</td></tr>",
    "<tr><td><kbd>Tab</kbd> e <kbd data-mac=\"Cmd+→\" data-win=\"Ctrl+→\">Cmd+→</kbd></td><td>Aceitar sugestão, ou só a próxima palavra</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+Shift+D\" data-win=\"Ctrl+Shift+D\">Cmd+Shift+D</kbd></td><td>Ligar ou desligar o Design Mode</td></tr>",
    "</tbody></table>",
    "<p>Fonte dos atalhos: <a href=\"https://cursor.com/docs/reference/keyboard-shortcuts\">cursor.com/docs/reference/keyboard-shortcuts</a>. Fonte do restante: a documentação pública ligada em cada capítulo.</p>"
  ].join("")
});
