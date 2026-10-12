window.LIVRO_CAPITULOS = window.LIVRO_CAPITULOS || [];

window.LIVRO_CAPITULOS.push({
  id: "inicio",
  nivel: "inicio",
  titulo: "Como ler este livro",
  resumo: "Três níveis, do primeiro clique até o agente que trabalha sozinho. Sem vídeo e sem enrolação.",
  html: [
    "<p>Este livro ensina a usar o Cursor de verdade: a tela, os atalhos, o que pedir, o que revisar e quando deixar o agente trabalhar longe da sua máquina. Cada capítulo termina com um gesto concreto, não com uma lista de nomes de botão.</p>",
    "<aside class=\"nota atencao\"><strong>Comece por aqui</strong><p>Se você programa em arquivo de texto e o inglês da tela atrapalha, leia <a href=\"#porques\">Por que o Cursor funciona assim</a>. Os cliques estão em <a href=\"#pc\">No seu computador, não na nuvem</a>. O dicionário das palavras inglesas está em <a href=\"#tela\">A tela está em inglês</a>.</p></aside>",
    "<div class=\"portas\">",
    "<a class=\"porta basico\" href=\"#porques\"><span>Nível 1</span><strong>Básico</strong><p>Por que a ferramenta funciona assim, como fazer a conversa nascer no seu computador e como revisar a mudança.</p></a>",
    "<a class=\"porta intermediario\" href=\"#i01\"><span>Nível 2</span><strong>Intermediário</strong><p>Modos, pedidos melhores, regras do projeto, modelos, Git, skills e ferramentas externas.</p></a>",
    "<a class=\"porta avancado\" href=\"#a01\"><span>Nível 3</span><strong>Avançado</strong><p>Agente na nuvem, terminal, subagentes, hooks, revisão de pull request e um jeito de trabalhar que não desanda.</p></a>",
    "</div>",
    "<h2>Como os atalhos aparecem</h2>",
    "<p>A documentação do Cursor escreve os atalhos no estilo do Mac. No Windows e no Linux, <kbd data-mac=\"Cmd\" data-win=\"Ctrl\">Cmd</kbd> vira Ctrl e <kbd data-mac=\"Option\" data-win=\"Alt\">Option</kbd> vira Alt. O botão no topo do livro troca todos os atalhos de uma vez. <kbd>Shift</kbd>, <kbd>Tab</kbd>, <kbd>Enter</kbd> e <kbd>Esc</kbd> continuam iguais.</p>",
    "<p>Se um atalho não fizer o que o livro diz, alguém já o remapeou. Abra a paleta com <kbd data-mac=\"Cmd+Shift+P\" data-win=\"Ctrl+Shift+P\">Cmd+Shift+P</kbd>, procure <em>Keyboard Shortcuts</em>, ou use a sequência <kbd data-mac=\"Cmd+R\" data-win=\"Ctrl+R\">Cmd+R</kbd> e depois <kbd data-mac=\"Cmd+S\" data-win=\"Ctrl+S\">Cmd+S</kbd>.</p>",
    "<h2>O que este livro não é</h2>",
    "<p>Não é o manual oficial da Cursor e não lista preço de modelo. Preço, nome de modelo e detalhe de tela mudam. O mapa estável está em <a href=\"https://cursor.com/docs\">cursor.com/docs</a>. O que não muda é o ofício: você descreve o resultado, o agente mexe no código, e você confere antes de ficar com a mudança.</p>",
    "<aside class=\"nota dica\"><strong>Como estudar</strong><p>Leia um capítulo e faça o exercício na hora, num projeto pequeno seu. Marque o capítulo como lido. O navegador guarda isso só nesta máquina.</p></aside>",
    "<h2>Índice</h2>",
    "<div id=\"indice-gerado\"></div>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "porques",
  nivel: "basico",
  titulo: "Por que o Cursor funciona assim",
  resumo: "Para quem programa em arquivo de texto, com inglês básico, e quer entender a ferramenta antes de assinar.",
  html: [
    "<p>Dá para programar a vida inteira num editor de texto e no papel. O Cursor não pede outra profissão. Ele pede que você saiba onde o trabalho está acontecendo e que você leia a alteração antes de ficar com ela. O resto é o ofício que você já tem: dizer o que o programa deve fazer.</p>",
    "<h2>Por que a janela parece outra coisa</h2>",
    "<p>Um programa continua sendo um arquivo de texto. A janela em volta é uma mesa com gavetas: a lista de arquivos, a busca, o lugar onde o programa roda e o histórico do que mudou. Isso se chama IDE, ambiente de desenvolvimento. O nome assusta. A função não. É o bloco de notas com a pasta do projeto aberta ao lado.</p>",
    "<p>O Cursor é essa mesa mais uma pessoa que escreve no arquivo quando você pede. Você continua dono do texto. A pessoa devolve uma proposta. Você aceita ou joga fora.</p>",
    "<h2>Por que a tela está em inglês</h2>",
    "<p>O produto é feito em inglês e os botões não foram traduzidos. Inglês básico alcança o nome do botão. Não alcança a decisão escondida atrás dele. Por isso o grupo perde hora: cada um finge que entendeu <em>Cloud</em> ou <em>Last Used</em>, e a conversa vai para o computador errado. A tradução do que fazer está neste livro, no capítulo <a href=\"#tela\">A tela está em inglês</a>. O pedido ao agente pode ser em português.</p>",
    "<h2>Por que existem dois computadores</h2>",
    "<p>Há o seu computador, com os seus arquivos e o pendrive na mesa. Há outro computador, na nuvem, que recebe uma cópia do projeto. Esse segundo computador trabalha com a sua máquina desligada e devolve um pedido de junção, o pull request.</p>",
    "<p>O pendrive não aparece lá porque não está ligado naquele computador. Não é falha do cabo. É outro endereço. O desktop que o agente da nuvem abre é a tela desse segundo computador, não a sua área de trabalho.</p>",
    "<p>Os dois servem. O seu computador serve para o arquivo que está na sua frente. A nuvem serve para um trabalho que pode terminar sem você. Começar na nuvem sem querer é o que faz a gente desistir: a ferramenta parece não ver o que está na mesa.</p>",
    "<h2>Por que mudar a configuração não muda esta conversa</h2>",
    "<p>Uma conversa nasce num dos dois computadores e fica nele. <strong>Default Environment</strong> (ambiente padrão) só diz onde nasce a próxima. <strong>Last Used</strong> (o último usado) repete o lugar da anterior. Se a anterior foi na nuvem, a próxima nasce na nuvem de novo. Fechar o programa não carrega a conversa de um computador para o outro. É o mesmo caso de trocar a impressora padrão: a folha que já está saindo continua na impressora antiga.</p>",
    "<p>Para trabalhar nos seus arquivos, abra a pasta, deixe o padrão em <strong>Local</strong> (no seu computador) e comece uma conversa nova. Os cliques estão em <a href=\"#pc\">No seu computador, não na nuvem</a>.</p>",
    "<h2>Por que se abre a pasta, e não um arquivo</h2>",
    "<p>Um arquivo aberto é uma folha. A pasta é o maço. O agente precisa do maço para achar a folha certa. <strong>Open File</strong> entrega uma folha. <strong>Open Folder</strong> entrega o maço. Sem o maço, o programa muitas vezes só oferece a nuvem, porque não há pasta local para trabalhar.</p>",
    "<h2>Por que se lê a diferença antes de aceitar</h2>",
    "<p>O agente escreve com segurança mesmo quando erra. A resposta em texto diz a intenção. O <strong>diff</strong> é a folha riscada: o que saiu e o que entrou. Aceitar é rubricar. Sem a rubrica, entra no projeto uma alteração que ninguém leu. Isso vale no papel, no arquivo de texto e aqui.</p>",
    "<h2>Por que há três jeitos de escrever</h2>",
    "<ul>",
    "<li><strong>Tab</strong> completa a linha que você já está digitando. É um colega olhando por cima do ombro. Não conversa e não segue regra do projeto.</li>",
    "<li><strong>Edição inline</strong>, o <kbd data-mac=\"Cmd+K\" data-win=\"Ctrl+K\">Cmd+K</kbd>, muda o trecho que você marcou. Serve para uma folha, um pedido curto.</li>",
    "<li><strong>Agent</strong> é o pedido de um trabalho: explicar, alterar várias folhas, rodar o programa. Devolve a folha riscada para você decidir.</li>",
    "</ul>",
    "<h2>O que basta para começar</h2>",
    "<p>Assinar vale a pena quando estas três coisas estão claras: a conversa está no seu computador, o pedido está em português e diz o resultado, e você lê a alteração antes de aceitar. Quem desiste em geral não falhou em programar. Falhou em descobrir em qual computador a conversa estava. Esse descobrir não precisa ser uma reunião. Está escrito aqui.</p>",
    "<aside class=\"nota pratica\"><strong>Para o grupo</strong><p>Na primeira hora, uma pessoa compartilha a tela. Antes de qualquer pedido, todos leem o seletor embaixo do campo. Se estiver Cloud, a hora ainda não começou. O roteiro inteiro está em <a href=\"#tela\">A tela está em inglês</a>.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "b01",
  nivel: "basico",
  titulo: "O que o Cursor faz",
  resumo: "Um editor de código com um agente que lê o projeto, edita arquivos e roda comandos. Três ferramentas cobrem quase todo o dia.",
  html: [
    "<p>O Cursor é um editor de código com inteligência artificial por dentro. Em volta do texto ficam a lista de arquivos, a busca, o terminal e o histórico do que mudou. Se você vem do bloco de notas, leia antes <a href=\"#porques\">Por que o Cursor funciona assim</a>. A diferença prática é o agente, que propõe alteração, e a sugestão que completa a linha enquanto você escreve.</p>",
    "<h2>As três ferramentas do dia a dia</h2>",
    "<table><thead><tr><th>Ferramenta</th><th>Quando usar</th><th>O que ela não faz</th></tr></thead><tbody>",
    "<tr><td>Tab</td><td>Você está digitando e quer a próxima linha, ou as próximas.</td><td>Não segue uma regra do projeto. Não conversa.</td></tr>",
    "<tr><td>Edição inline</td><td>Uma mudança local, no trecho que você selecionou.</td><td>Não aplica as regras de usuário do chat. Não é o lugar de uma refatoração grande.</td></tr>",
    "<tr><td>Agent</td><td>Explicar o projeto, alterar vários arquivos, rodar testes, investigar um bug.</td><td>Não substitui a sua revisão. Ele erra com confiança.</td></tr>",
    "</tbody></table>",
    "<p>O Agent junta três peças: as instruções (o que você escreveu, mais as regras do projeto), as ferramentas (buscar, ler, editar, terminal, navegador) e o modelo que você escolheu. O Cursor ajusta esse conjunto para cada modelo. Você não precisa reaprender o editor quando troca o modelo.</p>",
    "<h2>O que continua sendo sua função</h2>",
    "<ul>",
    "<li>Dizer qual resultado você quer, com um jeito de saber se deu certo.</li>",
    "<li>Apontar o arquivo quando você já sabe qual é. Deixar o agente procurar quando não sabe.</li>",
    "<li>Ler o diff. Aceitar, rejeitar ou pedir outro caminho.</li>",
    "<li>Não colar senha, token ou dado de cliente no chat.</li>",
    "</ul>",
    "<aside class=\"nota\"><strong>Uma frase para guardar</strong><p>Tab completa o que você já está fazendo. A edição inline muda um trecho. O Agent faz um trabalho e espera a sua revisão.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "pc",
  nivel: "basico",
  titulo: "No seu computador, não na nuvem",
  resumo: "O aplicativo abre no desktop, mas a conversa pode rodar na nuvem. A nuvem não vê o seu pendrive nem os seus arquivos.",
  html: [
    "<p>Este é o capítulo que evita a perda de tempo. O Cursor no seu computador e o agente na nuvem são coisas diferentes. Dá para abrir o aplicativo aí na mesa e, mesmo assim, a conversa estar numa máquina virtual longe de você.</p>",
    "<h2>Os dois lugares</h2>",
    "<table><thead><tr><th>Onde a conversa roda</th><th>O que ela enxerga</th></tr></thead><tbody>",
    "<tr><td>No seu computador</td><td>A pasta que você abriu, o pendrive montado, os arquivos dessa máquina.</td></tr>",
    "<tr><td>Na nuvem</td><td>Uma cópia do repositório numa máquina virtual. O desktop dessa máquina não é o seu. O endereço <code>127.0.0.1</code> de lá não abre no seu navegador.</td></tr>",
    "</tbody></table>",
    "<p>A nuvem serve quando você quer que o agente trabalhe sozinho e devolva um pull request. Não serve para ler um pendrive plugado no PC.</p>",
    "<h2>Por que a sua mudança volta para a nuvem</h2>",
    "<p>Em <strong>Settings → Agents → Default Environment</strong> o padrão costuma ser <strong>Last Used</strong>. Uma conversa na nuvem faz a próxima nascer na nuvem de novo. Trocar uma conversa no meio do caminho não grava o padrão. Fechar e abrir o Cursor também não move a conversa que já está na nuvem.</p>",
    "<p>Há outro atalho para a nuvem: começar sem pasta aberta. Sem uma pasta local, o seletor só mostra <strong>Cloud</strong>.</p>",
    "<h2>Faça isto uma vez</h2>",
    "<ol>",
    "<li>No menu <strong>File</strong> (Arquivo), clique em <strong>Open Folder</strong> (Abrir pasta) e escolha a pasta do projeto. <strong>Open File</strong> abre um arquivo só e não basta.</li>",
    "<li>Abra <strong>Settings</strong> (Configurações), entre em <strong>Agents</strong> (Agentes) e em <strong>Default Environment</strong> (Ambiente padrão). Escolha <strong>Local</strong> (no seu computador). Não deixe <strong>Last Used</strong> (o último usado): se a última conversa foi na nuvem, a próxima nasce na nuvem.</li>",
    "<li>Feche o Cursor e abra de novo. A conversa antiga não muda de lugar.</li>",
    "<li>Comece uma conversa nova. Na tela isso aparece como <strong>New Chat</strong> ou <strong>New Agent</strong>.</li>",
    "<li>Antes de escrever, olhe o seletor embaixo do campo. Tem de estar no seu computador. Se estiver <strong>Cloud</strong> (nuvem), não envie.</li>",
    "</ol>",
    "<aside class=\"nota atencao\"><strong>Como saber sem perguntar ao agente</strong><p>O seletor embaixo do campo é a resposta, antes do envio. Se a conversa já foi para a nuvem, o menu dela tem <strong>Move to</strong> (Mover para) e depois <strong>Local</strong>. Isso só funciona quando a mesma pasta já está aberta no computador. As outras palavras da tela estão em <a href=\"#tela\">A tela está em inglês</a>.</p></aside>",
    "<h2>Pendrive</h2>",
    "<p>O agente só lê um pendrive que o sistema operacional já montou na mesma máquina em que ele roda. No Linux, o caminho aparece em <code>/media</code> ou <code>/mnt</code>. No Windows, como um disco, por exemplo <code>E:</code>. Um pendrive no seu PC não atravessa até a nuvem. Não há botão no desktop da nuvem que traga esse USB.</p>",
    "<p>O pendrive continua sendo um jeito inteiro de trabalhar. O GitHub é outro lugar, na internet, e pede conta e conexão. O porquê dessa diferença, e como abrir a pasta do pendrive no Cursor sem essa conta, está em <a href=\"#usb\">Pendrive e GitHub</a>.</p>",
    "<aside class=\"nota pratica\"><strong>Pratique agora</strong><p>Abra uma conversa nova com a pasta do projeto aberta. Antes de enviar qualquer pedido, leia o seletor. Se estiver em Cloud, não envie. Corrija o padrão para Local e abra outra conversa.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "tela",
  nivel: "basico",
  titulo: "A tela está em inglês",
  resumo: "O que cada palavra do Cursor significa em português, e um roteiro para o grupo parar de descobrir isso no escuro.",
  html: [
    "<p>O Cursor não tem a tela em português. Quem finge que leu o menu trava o grupo inteiro. Este capítulo é o dicionário: a palavra que aparece na tela, o que ela quer dizer, e o que fazer com ela. Quando alguém travar numa palavra, a resposta está aqui, não numa reunião para adivinhar.</p>",
    "<h2>Onde a conversa roda</h2>",
    "<table><thead><tr><th>Na tela</th><th>Em português</th><th>O que fazer</th></tr></thead><tbody>",
    "<tr><td>File</td><td>Arquivo</td><td>Menu do canto. É por aqui que se abre a pasta.</td></tr>",
    "<tr><td>Open Folder</td><td>Abrir pasta</td><td>Escolha a pasta do projeto no seu computador. Sem isso, a conversa cai na nuvem.</td></tr>",
    "<tr><td>Open File</td><td>Abrir arquivo</td><td>Abre um arquivo só. Não substitui abrir a pasta.</td></tr>",
    "<tr><td>Settings</td><td>Configurações</td><td>A engrenagem, ou <kbd data-mac=\"Cmd+,\" data-win=\"Ctrl+,\">Cmd+,</kbd>.</td></tr>",
    "<tr><td>Cursor Settings</td><td>Configurações do Cursor</td><td><kbd data-mac=\"Cmd+Shift+J\" data-win=\"Ctrl+Shift+J\">Cmd+Shift+J</kbd>. Modelos, agentes e privacidade ficam aqui.</td></tr>",
    "<tr><td>Agents</td><td>Agentes</td><td>A seção em que se escolhe onde a próxima conversa nasce.</td></tr>",
    "<tr><td>Default Environment</td><td>Ambiente padrão</td><td>O lugar da próxima conversa. Escolha Local.</td></tr>",
    "<tr><td>Local</td><td>No seu computador</td><td>Vê a pasta aberta e o pendrive montado nessa máquina.</td></tr>",
    "<tr><td>Cloud</td><td>Na nuvem</td><td>Máquina virtual. Não vê o seu pendrive nem o seu desktop.</td></tr>",
    "<tr><td>Last Used</td><td>O último usado</td><td>Repete o lugar da conversa anterior. Se a última foi Cloud, a próxima também é. Não deixe este padrão.</td></tr>",
    "<tr><td>New Chat ou New Agent</td><td>Conversa nova</td><td>A conversa velha não muda de lugar. O teste do padrão Local é sempre uma conversa nova.</td></tr>",
    "<tr><td>Move to</td><td>Mover para</td><td>No menu da conversa já aberta. Move to → Local tenta trazê-la para o computador. Exige a pasta aberta.</td></tr>",
    "<tr><td>Desktop</td><td>Área de trabalho</td><td>No agente da nuvem, é a tela da máquina virtual, não a do seu PC.</td></tr>",
    "</tbody></table>",
    "<h2>Pedir, aceitar e recusar</h2>",
    "<table><thead><tr><th>Na tela</th><th>Em português</th><th>O que fazer</th></tr></thead><tbody>",
    "<tr><td>Agent</td><td>Agente que faz</td><td>Busca, edita arquivos e roda comandos. É o modo de trabalho.</td></tr>",
    "<tr><td>Ask</td><td>Perguntar</td><td>Só lê e responde. Não altera arquivo. Use para entender antes de autorizar.</td></tr>",
    "<tr><td>Plan</td><td>Planejar</td><td>Pesquisa, pergunta e escreve o plano. Só edita depois que você aprova.</td></tr>",
    "<tr><td>Debug</td><td>Depurar</td><td>Investiga um bug que você consegue repetir, com a aplicação rodando.</td></tr>",
    "<tr><td>Design</td><td>Desenhar na tela</td><td>Você aponta um pedaço da página e o agente mexe no código desse pedaço.</td></tr>",
    "<tr><td>Tab</td><td>Tecla Tab</td><td>Aceita a sugestão cinza enquanto você digita. Não é uma conversa.</td></tr>",
    "<tr><td>Accept</td><td>Aceitar</td><td>Fica com a mudança. Leia o diff antes.</td></tr>",
    "<tr><td>Reject</td><td>Rejeitar</td><td>Descarta a mudança.</td></tr>",
    "<tr><td>diff</td><td>Diferença</td><td>O que saiu e o que entrou. É a revisão. A frase do agente não substitui o diff.</td></tr>",
    "<tr><td>Models</td><td>Modelos</td><td>Qual inteligência responde. Mais rápido para o miúdo. Mais capaz para vários arquivos.</td></tr>",
    "<tr><td>Command Palette</td><td>Paleta de comandos</td><td><kbd data-mac=\"Cmd+Shift+P\" data-win=\"Ctrl+Shift+P\">Cmd+Shift+P</kbd>. Se o botão não aparecer, procure o nome inglês aqui.</td></tr>",
    "<tr><td>Keyboard Shortcuts</td><td>Atalhos de teclado</td><td>A lista oficial. Os atalhos deste livro podem ter sido remapeados.</td></tr>",
    "</tbody></table>",
    "<h2>Arquivo, Git e pendrive</h2>",
    "<table><thead><tr><th>Na tela</th><th>Em português</th><th>O que fazer</th></tr></thead><tbody>",
    "<tr><td>Source Control</td><td>Controle de versão</td><td>O painel do Git. Mostra o que mudou na pasta.</td></tr>",
    "<tr><td>Commit</td><td>Gravar uma versão</td><td>Você confirma que leu o diff. O agente não precisa commitar no seu lugar.</td></tr>",
    "<tr><td>Branch</td><td>Ramo</td><td>Uma linha de trabalho separada, para não misturar com o projeto estável.</td></tr>",
    "<tr><td>Push</td><td>Enviar</td><td>Manda os commits para o repositório remoto.</td></tr>",
    "<tr><td>Pull request</td><td>Pedido de junção</td><td>Pede para o grupo olhar a branch antes de juntar ao projeto.</td></tr>",
    "<tr><td>Merge</td><td>Juntar</td><td>Incorpora a branch. Só depois da revisão.</td></tr>",
    "<tr><td>Terminal</td><td>Terminal</td><td>A tela de comandos. O agente pode rodar teste aqui. Você autoriza o que é perigoso.</td></tr>",
    "<tr><td>Workspace</td><td>A pasta aberta</td><td>O conjunto de arquivos que o agente local enxerga.</td></tr>",
    "<tr><td>Save to workspace</td><td>Salvar na pasta do projeto</td><td>Guarda o plano dentro do projeto, para o grupo achar depois.</td></tr>",
    "<tr><td>Indexing</td><td>Indexação</td><td>O Cursor lendo o projeto para buscar por sentido, não só por palavra.</td></tr>",
    "</tbody></table>",
    "<h2>Regras e permissão para rodar comando</h2>",
    "<table><thead><tr><th>Na tela</th><th>Em português</th><th>O que fazer</th></tr></thead><tbody>",
    "<tr><td>Customize</td><td>Personalizar</td><td>Onde ficam regras, skills e ferramentas externas.</td></tr>",
    "<tr><td>Rules</td><td>Regras</td><td>Instruções fixas do projeto. O agente do chat obedece. O Tab não.</td></tr>",
    "<tr><td>Add Rule</td><td>Adicionar regra</td><td>Cria um arquivo de regra. Também dá para pedir com <code>/create-rule</code>.</td></tr>",
    "<tr><td>Approvals &amp; Execution</td><td>Aprovações e execução</td><td>Em Settings → Agents. Decide se o comando roda sozinho ou pede licença.</td></tr>",
    "<tr><td>Auto-review</td><td>Revisão automática</td><td>O recomendado. Roda o que é seguro e pergunta o resto.</td></tr>",
    "<tr><td>Allowlist</td><td>Lista permitida</td><td>Só o que você listou roda sem perguntar.</td></tr>",
    "<tr><td>Run Everything</td><td>Rodar tudo</td><td>Nada pede licença. Não use no projeto de verdade.</td></tr>",
    "<tr><td>Sign in</td><td>Entrar</td><td>Entrar na conta. Sem conta, parte do agente não funciona.</td></tr>",
    "</tbody></table>",
    "<h2>Roteiro de uma hora para o grupo</h2>",
    "<p>Uma pessoa compartilha a tela. As outras não adivinham o menu: conferem a palavra neste capítulo. A hora acaba com uma mudança pequena aceita, não com uma aula de vocabulário.</p>",
    "<ol>",
    "<li>Abrir a pasta do projeto (Open Folder) e ler o seletor. Se estiver Cloud, parar e corrigir para Local antes de qualquer pedido.</li>",
    "<li>Pedir, em português: “Explique este projeto. Aponte por onde eu começo a ler.”</li>",
    "<li>Escolher uma mudança pequena. Pedir o resultado, o que não pode mudar e como verificar.</li>",
    "<li>Ler o diff juntos. Aceitar (Accept) só o que o grupo entendeu. Rejeitar (Reject) o resto e dizer o que faltou.</li>",
    "<li>Anotar a palavra inglesa que travou alguém. Na próxima reunião ela já está neste capítulo. Se não estiver, acrescentem uma linha na regra do projeto pedindo resposta em português.</li>",
    "</ol>",
    "<aside class=\"nota dica\"><strong>Peça em português</strong><p>O menu é em inglês. O pedido não precisa ser. Escreva do jeito que o grupo fala. Se o agente responder em inglês, diga: “Responda em português.” Para isso valer sempre, grave uma regra de usuário em Customize → Rules.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "usb",
  nivel: "basico",
  titulo: "Pendrive e GitHub",
  resumo: "Por que a pasta no pendrive anda fácil e a conexão do GitHub fica parada, e como usar o Cursor sem essa conta.",
  html: [
    "<p>O pendrive guarda a pasta. Você leva a pasta até o outro computador e ela abre. O GitHub guarda outra cópia, num computador da internet. Para chegar nela, o programa precisa de conta, senha ou chave, internet e permissão. Quando falta uma dessas coisas, a tela fica esperando. Não é o pendrive que falhou. É um caminho diferente, com portaria.</p>",
    "<h2>Por que o pendrive é mais simples</h2>",
    "<p>Copiar uma pasta não pergunta quem você é. O arquivo sai de um lugar e entra no outro. Dois amigos combinam de quem está com o pendrive e trabalham. Não há servidor no meio.</p>",
    "<p>O limite também é simples. Se os dois editam ao mesmo tempo, cada um na sua cópia, nenhuma das duas sabe o que a outra mudou. Na hora de juntar, sobra folha contra folha. A data do arquivo não resolve: os dois podem ter mudado partes diferentes no mesmo dia.</p>",
    "<h2>Por que a conexão do GitHub não completa</h2>",
    "<p>GitHub não é a pasta. É um endereço. O verbo da tela costuma ser um destes:</p>",
    "<table><thead><tr><th>Na tela</th><th>Em português</th><th>Por que trava</th></tr></thead><tbody>",
    "<tr><td>Sign in</td><td>Entrar na conta</td><td>Sem conta, o endereço não abre a portaria.</td></tr>",
    "<tr><td>Clone</td><td>Baixar uma cópia</td><td>Traz o projeto da internet para a sua pasta. Pede o endereço certo e permissão.</td></tr>",
    "<tr><td>Push</td><td>Enviar daqui para lá</td><td>Manda as suas alterações. Sem login, ou sem permissão de escrita, para e espera.</td></tr>",
    "<tr><td>Pull</td><td>Trazer de lá para cá</td><td>Busca o que o outro já enviou. Sem internet, não há o que buscar.</td></tr>",
    "<tr><td>Authentication failed</td><td>A identificação falhou</td><td>A senha, o token ou a chave não foi aceita. A pasta do pendrive nem chega a ser lida.</td></tr>",
    "<tr><td>Permission denied</td><td>Permissão negada</td><td>A conta entrou, mas esse projeto não é seu para escrever.</td></tr>",
    "<tr><td>SSH</td><td>Uma chave, em vez de senha</td><td>Outro jeito de provar quem você é. Sem a chave instalada, a conexão não passa.</td></tr>",
    "</tbody></table>",
    "<p>Ficar olhando essa tela não aproxima o pendrive do GitHub. São duas cópias que só se encontram se a portaria abrir. Enquanto a portaria não abre, o trabalho segue na pasta que já está na mão.</p>",
    "<h2>Por que a nuvem do Cursor pede essa conexão</h2>",
    "<p>O computador da nuvem não tem a sua porta USB. Ele só recebe o projeto se o projeto estiver num endereço da internet, como o GitHub. Por isso o agente da nuvem e o pendrive não se encontram. Para a pasta do pendrive, a conversa tem de ser <strong>Local</strong>, no computador em que o pendrive está montado.</p>",
    "<h2>Como trabalhar na pasta do pendrive</h2>",
    "<ol>",
    "<li>Espere o sistema mostrar o pendrive. No Linux, em <code>/media</code> ou <code>/mnt</code>. No Windows, como um disco, por exemplo <code>E:</code>.</li>",
    "<li>No Cursor, <strong>File → Open Folder</strong> e escolha a pasta dentro do pendrive. Não escolha um arquivo solto.</li>",
    "<li>Conversa nova, seletor no seu computador, não em Cloud.</li>",
    "<li>Peça em português. Leia o diff. Aceite só o que o grupo entendeu.</li>",
    "<li>Antes de tirar o pendrive, ejete pelo sistema. Tirar no meio da gravação corrompe arquivo.</li>",
    "<li>Para o amigo, entregue o pendrive ou copie a pasta inteira. Combinem quem edita. Duas edições ao mesmo tempo não se juntam sozinhas.</li>",
    "</ol>",
    "<h2>Por que o Git existe, e por que ele não é o GitHub</h2>",
    "<p>Git é um caderno dentro da pasta: o que mudou, em que ordem, com uma frase dizendo o porquê. Esse caderno pode morar na própria pasta do pendrive. Não precisa de conta nem de internet. O GitHub é só um lugar na internet para guardar esse caderno quando as pessoas não estão com o mesmo pendrive.</p>",
    "<p>O caderno passa a valer quando o grupo cresce e cada um mexe em casa. Aí a cópia da internet evita a folha contra folha. Até esse dia, Cursor no computador mais a pasta do pendrive é um jeito completo de trabalhar. A conexão do GitHub pode esperar.</p>",
    "<aside class=\"nota pratica\"><strong>Para o grupo</strong><p>Na próxima reunião, abram a pasta do pendrive com Open Folder e leiam o seletor antes do pedido. Se alguém quiser “subir no GitHub” e a tela pedir Sign in, parem. O trabalho do dia está na pasta. A conta fica para quando o grupo decidir que precisa do terceiro lugar.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "b02",
  nivel: "basico",
  titulo: "Instalar, entrar e abrir um projeto",
  resumo: "Baixe o app, entre na conta e abra uma pasta. O primeiro pedido deve ser pequeno.",
  html: [
    "<p>Baixe o instalador em <a href=\"https://cursor.com/download\">cursor.com/download</a>. Mac precisa do macOS 12 ou mais novo. Windows precisa do Windows 10 ou mais novo. No Linux, o pacote apt ou dnf é melhor que o AppImage: ele cria ícone, atualiza sozinho e instala as ferramentas de linha de comando.</p>",
    "<h2>Linux, do jeito recomendado</h2>",
    "<p>Debian e Ubuntu:</p>",
    "<pre><code>curl -fsSL https://downloads.cursor.com/keys/anysphere.asc | gpg --dearmor | sudo tee /etc/apt/keyrings/cursor.gpg &gt; /dev/null\necho \"deb [arch=amd64,arm64 signed-by=/etc/apt/keyrings/cursor.gpg] https://downloads.cursor.com/aptrepo stable main\" | sudo tee /etc/apt/sources.list.d/cursor.list &gt; /dev/null\nsudo apt update\nsudo apt install cursor</code></pre>",
    "<p>Fedora e RHEL usam o repositório yum em <code>https://downloads.cursor.com/yumrepo</code> e, em seguida, <code>sudo dnf install cursor</code>. O AppImage existe para quem precisa de um arquivo portátil: dê permissão de execução e abra o arquivo.</p>",
    "<h2>Entrar e abrir a pasta</h2>",
    "<ol>",
    "<li>Abra o Cursor e entre na conta.</li>",
    "<li>Abra a pasta do projeto, não um arquivo solto. O agente precisa ver o conjunto.</li>",
    "<li>Espere a indexação começar. Ela permite a busca por significado, além da busca por texto.</li>",
    "<li>Se o projeto já usa Git, o painel de controle de código-fonte mostra o que mudou. Use isso desde o primeiro dia.</li>",
    "</ol>",
    "<aside class=\"nota pratica\"><strong>Pratique agora</strong><p>Abra um projeto pequeno, seu ou de exemplo. Não peça uma funcionalidade ainda. No próximo capítulo você vai reconhecer a tela; no seguinte, vai pedir uma explicação.</p></aside>",
    "<aside class=\"nota atencao\"><strong>Conta e plano</strong><p>Há planos individuais, de time e empresariais. O que muda é cota, administração e alguns recursos, como regras obrigatórias do time. O jeito de editar código é o mesmo.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "b03",
  nivel: "basico",
  titulo: "A tela, peça por peça",
  resumo: "Editor no centro, agente na lateral, terminal embaixo. Quatro atalhos organizam o resto.",
  html: [
    "<p>Se você já usou o VS Code, o miolo é familiar: à esquerda ficam explorador, busca, Git e extensões; no centro, os arquivos; embaixo, o terminal. O que o Cursor acrescenta é o painel do agente e um layout só para ele.</p>",
    "<table><thead><tr><th>Atalho</th><th>Para que serve</th></tr></thead><tbody>",
    "<tr><td><kbd data-mac=\"Cmd+I\" data-win=\"Ctrl+I\">Cmd+I</kbd> ou <kbd data-mac=\"Cmd+L\" data-win=\"Ctrl+L\">Cmd+L</kbd></td><td>Abre ou fecha o painel lateral do agente.</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+E\" data-win=\"Ctrl+E\">Cmd+E</kbd></td><td>Alterna o layout do agente, quando você quer a conversa em primeiro plano.</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+.\" data-win=\"Ctrl+.\">Cmd+.</kbd></td><td>Abre o menu de modos.</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+Shift+J\" data-win=\"Ctrl+Shift+J\">Cmd+Shift+J</kbd></td><td>Abre as configurações do Cursor.</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+,\" data-win=\"Ctrl+,\">Cmd+,</kbd></td><td>Abre as configurações gerais do editor.</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+Shift+P\" data-win=\"Ctrl+Shift+P\">Cmd+Shift+P</kbd></td><td>Paleta de comandos. Se você não achar um botão, procure aqui.</td></tr>",
    "</tbody></table>",
    "<h2>O que olhar no painel do agente</h2>",
    "<ul>",
    "<li><strong>Campo de texto.</strong> É aqui que o pedido entra. <kbd>@</kbd> puxa contexto. <kbd>/</kbd> puxa um comando ou uma skill.</li>",
    "<li><strong>Seletor de modo.</strong> Agent, Ask, Plan, Debug e, no navegador da janela de agentes, Design. <kbd>Shift+Tab</kbd> gira entre os modos.</li>",
    "<li><strong>Seletor de modelo.</strong> Troca o modelo desta conversa daqui para a frente. <kbd data-mac=\"Cmd+/\" data-win=\"Ctrl+/\">Cmd+/</kbd> percorre a lista.</li>",
    "<li><strong>Anel de contexto.</strong> Mostra o quanto da janela do modelo já foi ocupada. Clique nele para ver a divisão: sistema, ferramentas, regras, skills, MCP, subagentes e a conversa.</li>",
    "</ul>",
    "<p>Há também voz, no microfone do campo ou com <kbd data-mac=\"Cmd+Shift+Space\" data-win=\"Ctrl+Shift+Space\">Cmd+Shift+Space</kbd>. Fale o pedido, leia a transcrição e só então envie.</p>",
    "<aside class=\"nota dica\"><strong>Não decore a tela inteira</strong><p>No primeiro dia, basta abrir o agente, saber onde está o modo e saber onde está o modelo. O resto aparece quando a tarefa pede.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "b04",
  nivel: "basico",
  titulo: "Tab, a sugestão enquanto você escreve",
  resumo: "O Tab completa o que você está digitando. Aceite a sugestão inteira ou só a próxima palavra.",
  html: [
    "<p>Enquanto você escreve, o Cursor oferece uma continuação em cinza. Essa ferramenta se chama Tab. Ela serve para o trecho que você já entendeu: o corpo de uma função, um teste parecido com o de cima, um campo que faltou.</p>",
    "<table><thead><tr><th>Atalho</th><th>Efeito</th></tr></thead><tbody>",
    "<tr><td><kbd>Tab</kbd></td><td>Aceita a sugestão.</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+→\" data-win=\"Ctrl+→\">Cmd+→</kbd></td><td>Aceita só a próxima palavra.</td></tr>",
    "<tr><td><kbd>Esc</kbd></td><td>Dispensa a sugestão e devolve o controle a você.</td></tr>",
    "</tbody></table>",
    "<h2>Quando confiar e quando não</h2>",
    "<p>Aceite quando a sugestão é o que você ia digitar. Recuse quando ela inventa um nome de função, muda um contrato ou repete um erro que já está no arquivo. O Tab não lê as regras do projeto. Uma regra em <code>.cursor/rules</code> não muda o que o Tab propõe. Quem obedece regra é o Agent do chat.</p>",
    "<aside class=\"nota pratica\"><strong>Pratique agora</strong><p>Abra um arquivo que você conhece. Comece a escrever uma função pequena e pare no meio. Aceite com Tab se estiver certo. Se estiver quase certo, aceite palavra por palavra com <kbd data-mac=\"Cmd+→\" data-win=\"Ctrl+→\">Cmd+→</kbd> e corrija o resto na mão.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "b05",
  nivel: "basico",
  titulo: "Edição inline",
  resumo: "Selecione um trecho, descreva a mudança e receba um diff só naquele lugar.",
  html: [
    "<p>A edição inline é o meio do caminho entre digitar sozinho e abrir uma conversa. Você marca o código, diz o que quer e o Cursor propõe a troca ali.</p>",
    "<ol>",
    "<li>Selecione o trecho. Se não selecionar nada, o comando vale para a região em que está o cursor.</li>",
    "<li>Aperte <kbd data-mac=\"Cmd+K\" data-win=\"Ctrl+K\">Cmd+K</kbd>.</li>",
    "<li>Escreva um pedido curto: “extraia esta validação para uma função” ou “traduza estas mensagens para português”.</li>",
    "<li><kbd>Enter</kbd> envia. <kbd data-mac=\"Option+Enter\" data-win=\"Alt+Enter\">Option+Enter</kbd> faz uma pergunta rápida, sem editar.</li>",
    "<li><kbd data-mac=\"Cmd+Shift+Backspace\" data-win=\"Ctrl+Shift+Backspace\">Cmd+Shift+Backspace</kbd> cancela.</li>",
    "</ol>",
    "<p><kbd data-mac=\"Cmd+Shift+K\" data-win=\"Ctrl+Shift+K\">Cmd+Shift+K</kbd> alterna o foco do campo e também manda a seleção para a edição. Dentro do terminal, <kbd data-mac=\"Cmd+K\" data-win=\"Ctrl+K\">Cmd+K</kbd> abre outra coisa: uma barra que gera um comando. <kbd data-mac=\"Cmd+Enter\" data-win=\"Ctrl+Enter\">Cmd+Enter</kbd> executa esse comando e <kbd>Esc</kbd> apenas o aceita no terminal, sem rodar.</p>",
    "<aside class=\"nota atencao\"><strong>Regra que não entra aqui</strong><p>As regras de usuário, aquelas preferências globais do chat, não valem para a edição inline. Se o tom, o idioma ou um padrão do projeto precisarem ser obedecidos, use o Agent.</p></aside>",
    "<aside class=\"nota dica\"><strong>Pedido que funciona neste modo</strong><p>“Troque este loop por <code>map</code> e mantenha o mesmo resultado quando a lista vier vazia.” Um pedido de arquivo inteiro, ou de outro arquivo, já é trabalho de Agent.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "b06",
  nivel: "basico",
  titulo: "A primeira conversa com o Agent",
  resumo: "Peça um mapa do projeto antes de pedir uma mudança. Enquanto ele trabalha, a fila de mensagens não corta o que está no meio.",
  html: [
    "<p>Abra o painel com <kbd data-mac=\"Cmd+I\" data-win=\"Ctrl+I\">Cmd+I</kbd>. A primeira mensagem útil, num projeto que você não domina, é esta:</p>",
    "<pre><code>Explique este projeto. Aponte os pontos de entrada, os módulos principais e o que eu deveria ler antes de alterar qualquer coisa.</code></pre>",
    "<p>O agente busca, abre arquivos e devolve um mapa. Isso é mais rápido do que passear pasta por pasta. Quando o mapa fizer sentido, peça três melhorias pequenas e seguras, com o custo de cada uma, e espere você escolher. Só então peça para implementar a escolhida.</p>",
    "<h2>Enquanto a resposta está saindo</h2>",
    "<table><thead><tr><th>Atalho</th><th>Efeito</th></tr></thead><tbody>",
    "<tr><td><kbd>Enter</kbd></td><td>Enfileira a mensagem. Ela espera a tarefa atual terminar.</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+Enter\" data-win=\"Ctrl+Enter\">Cmd+Enter</kbd></td><td>Envia na hora e junta o texto à última mensagem sua.</td></tr>",
    "<tr><td><kbd>Enter</kbd> duas vezes</td><td>Encaminha um ajuste no próximo uso de ferramenta, sem jogar fora o trabalho que já está em andamento. Esse comportamento está na web e está chegando à janela de agentes.</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+Shift+Backspace\" data-win=\"Ctrl+Shift+Backspace\">Cmd+Shift+Backspace</kbd></td><td>Cancela a geração.</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+N\" data-win=\"Ctrl+N\">Cmd+N</kbd> ou <kbd data-mac=\"Cmd+R\" data-win=\"Ctrl+R\">Cmd+R</kbd></td><td>Conversa nova.</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+T\" data-win=\"Ctrl+T\">Cmd+T</kbd></td><td>Nova aba de conversa.</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+[\" data-win=\"Ctrl+[\">Cmd+[</kbd> e <kbd data-mac=\"Cmd+]\" data-win=\"Ctrl+]\">Cmd+]</kbd></td><td>Conversa anterior e próxima.</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+W\" data-win=\"Ctrl+W\">Cmd+W</kbd></td><td>Fecha a conversa.</td></tr>",
    "</tbody></table>",
    "<p><kbd>Tab</kbd>, com o campo do chat em foco e sem uma sugestão de código na frente, circula entre mensagens. <kbd>Esc</kbd> tira o foco do campo.</p>",
    "<aside class=\"nota dica\"><strong>Conversa nova ou a mesma?</strong><p>Continue na mesma conversa enquanto estiver na mesma função. Abra outra quando mudar de assunto, quando o agente repetir o mesmo erro, ou quando a resposta começar a misturar tarefas velhas. Conversa longa acumula ruído.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "b07",
  nivel: "basico",
  titulo: "Dar contexto com @",
  resumo: "Marque o arquivo quando você sabe qual é. Não marque a pasta inteira por precaução.",
  html: [
    "<p>Digite <kbd>@</kbd> no campo do agente. O Cursor lista o que dá para anexar. Você não precisa marcar tudo: se o pedido disser “o fluxo de login”, o agente procura. Marque arquivo quando quiser cravar o alvo. Arquivo irrelevante compete com o arquivo certo.</p>",
    "<table><thead><tr><th>Menção</th><th>O que entra na conversa</th></tr></thead><tbody>",
    "<tr><td><code>@arquivo</code> ou <code>@pasta/</code></td><td>O arquivo, ou a pasta. Depois de escolher a pasta, <kbd>/</kbd> desce mais um nível.</td></tr>",
    "<tr><td><code>@Terminals</code></td><td>A saída do terminal.</td></tr>",
    "<tr><td><code>@Chats</code></td><td>Um pedaço de uma conversa anterior, sem copiar o chat inteiro.</td></tr>",
    "<tr><td><code>@Commit</code></td><td>O diff do que ainda não foi commitado.</td></tr>",
    "<tr><td><code>@Branch</code></td><td>O diff da branch em relação à principal. Serve para “o que eu estou fazendo?” e para “revise esta branch”.</td></tr>",
    "<tr><td><code>@Browser</code></td><td>Contexto do navegador embutido.</td></tr>",
    "</tbody></table>",
    "<h2>Seleção, área de transferência e imagem</h2>",
    "<ul>",
    "<li>Com código selecionado, <kbd data-mac=\"Cmd+Shift+L\" data-win=\"Ctrl+Shift+L\">Cmd+Shift+L</kbd> manda a seleção para o chat. <kbd data-mac=\"Cmd+L\" data-win=\"Ctrl+L\">Cmd+L</kbd> abre uma conversa nova já com essa seleção.</li>",
    "<li>Copie um trecho ou um log e cole com <kbd data-mac=\"Cmd+V\" data-win=\"Ctrl+V\">Cmd+V</kbd> para anexá-lo como contexto. <kbd data-mac=\"Cmd+Shift+V\" data-win=\"Ctrl+Shift+V\">Cmd+Shift+V</kbd> cola o texto cru no campo.</li>",
    "<li>Arraste uma imagem, ou cole um print com <kbd data-mac=\"Cmd+V\" data-win=\"Ctrl+V\">Cmd+V</kbd>, para mostrar uma tela, um erro ou um mockup.</li>",
    "</ul>",
    "<aside class=\"nota pratica\"><strong>Pratique agora</strong><p>Peça: “Explique só esta função” com a função selecionada e <kbd data-mac=\"Cmd+Shift+L\" data-win=\"Ctrl+Shift+L\">Cmd+Shift+L</kbd>. Depois peça a mesma coisa sem seleção, citando o nome. Compare o quanto cada resposta acerta.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "b08",
  nivel: "basico",
  titulo: "Ler o diff e decidir",
  resumo: "O agente termina quando você aceita, rejeita ou pede ajuste. O diff é a revisão, não um detalhe.",
  html: [
    "<p>Quando o Agent edita, as mudanças aparecem como diff: o que saiu e o que entrou. Leia o diff com a mesma atenção que daria a um colega. O texto da resposta explica a intenção. O diff mostra o que realmente mudou. Os dois divergem com frequência.</p>",
    "<table><thead><tr><th>Situação</th><th>Atalho</th></tr></thead><tbody>",
    "<tr><td>Aceitar todas as mudanças sugeridas</td><td><kbd data-mac=\"Cmd+Enter\" data-win=\"Ctrl+Enter\">Cmd+Enter</kbd></td></tr>",
    "<tr><td>Rejeitar todas</td><td><kbd data-mac=\"Cmd+Shift+Backspace\" data-win=\"Ctrl+Shift+Backspace\">Cmd+Shift+Backspace</kbd></td></tr>",
    "</tbody></table>",
    "<p>Dá para aceitar arquivo por arquivo, ou hunk por hunk, nos botões do próprio diff. Faça isso quando uma parte estiver boa e outra não. Rejeitar tudo e reescrever o pedido costuma ser mais limpo do que tentar consertar cinco erros com uma frase genérica do tipo “arrume”.</p>",
    "<h2>O que conferir antes de aceitar</h2>",
    "<ol>",
    "<li>A mudança faz o que você pediu, e só isso?</li>",
    "<li>Algum arquivo que você não queria tocar entrou no diff?</li>",
    "<li>Teste, tipo ou lint do projeto foi executado? Se não, peça: “rode a checagem que este projeto já usa”.</li>",
    "<li>Há segredo, comentário de debug ou arquivo gerado no meio da mudança?</li>",
    "</ol>",
    "<aside class=\"nota atencao\"><strong>Você assina o código</strong><p>Aceitar o diff é uma decisão sua. O agente não vira autor no lugar de quem faz o commit.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "b09",
  nivel: "basico",
  titulo: "Os atalhos que valem decorar",
  resumo: "Doze atalhos cobrem o básico. O mapa completo fica no fim do livro.",
  html: [
    "<p>Decore estes. Os outros você busca na paleta até virarem hábito.</p>",
    "<table><thead><tr><th>Atalho</th><th>Ação</th></tr></thead><tbody>",
    "<tr><td><kbd data-mac=\"Cmd+I\" data-win=\"Ctrl+I\">Cmd+I</kbd></td><td>Painel do agente</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+K\" data-win=\"Ctrl+K\">Cmd+K</kbd></td><td>Edição inline no editor, ou gerar comando no terminal</td></tr>",
    "<tr><td><kbd>Tab</kbd></td><td>Aceitar sugestão do Tab</td></tr>",
    "<tr><td><kbd>Shift+Tab</kbd></td><td>Girar o modo do agente</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+/\" data-win=\"Ctrl+/\">Cmd+/</kbd></td><td>Trocar de modelo</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+Shift+L\" data-win=\"Ctrl+Shift+L\">Cmd+Shift+L</kbd></td><td>Mandar a seleção para o chat</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+Enter\" data-win=\"Ctrl+Enter\">Cmd+Enter</kbd></td><td>Enviar na hora, ou aceitar as mudanças quando elas estão na tela</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+Shift+Backspace\" data-win=\"Ctrl+Shift+Backspace\">Cmd+Shift+Backspace</kbd></td><td>Cancelar a geração, ou rejeitar as mudanças</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+Shift+P\" data-win=\"Ctrl+Shift+P\">Cmd+Shift+P</kbd></td><td>Paleta de comandos</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+Shift+J\" data-win=\"Ctrl+Shift+J\">Cmd+Shift+J</kbd></td><td>Configurações do Cursor</td></tr>",
    "<tr><td><kbd>@</kbd> e <kbd>/</kbd></td><td>Contexto e comandos, dentro do campo do agente</td></tr>",
    "<tr><td><kbd data-mac=\"Cmd+N\" data-win=\"Ctrl+N\">Cmd+N</kbd></td><td>Conversa nova</td></tr>",
    "</tbody></table>",
    "<p>A lista oficial, inclusive o que dá para remapear, está em <a href=\"https://cursor.com/docs/reference/keyboard-shortcuts\">Keyboard Shortcuts</a>.</p>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "b10",
  nivel: "basico",
  titulo: "Do pedido ao resultado",
  resumo: "Um caminho curto para a primeira mudança que você confiaria em deixar no projeto.",
  html: [
    "<ol>",
    "<li>Abra a pasta do projeto e entre na conta.</li>",
    "<li>Peça o mapa do código, como no capítulo da primeira conversa. Leia. Se um módulo importante não aparecer, pergunte por ele.</li>",
    "<li>Peça três melhorias pequenas e escolha uma. Bom primeiro alvo: texto de interface, um bug visível, um teste que falta numa função pura.</li>",
    "<li>Descreva o resultado e como verificar. Exemplo: “No formulário de busca, o botão fica desabilitado enquanto a lista está vazia. Não mude o estilo dos outros botões. Rode o teste desta tela.”</li>",
    "<li>Deixe o agente trabalhar. Se lembrar de um detalhe no meio, <kbd>Enter</kbd> enfileira. Se o detalhe muda o pedido atual, <kbd data-mac=\"Cmd+Enter\" data-win=\"Ctrl+Enter\">Cmd+Enter</kbd> manda na hora.</li>",
    "<li>Leia o diff. Aceite o que estiver certo. Rejeite o resto e diga o que faltou, com o arquivo na frase.</li>",
    "<li>Peça a checagem que o projeto já tem: teste, tipos ou lint. Olhe a saída, não só o “passou” da resposta.</li>",
    "</ol>",
    "<p>Mudança que atravessa vários arquivos, ou que você ainda não sabe como desenhar, não entra neste fluxo. Ela espera o modo Plan, no nível intermediário.</p>",
    "<aside class=\"nota pratica\"><strong>O pedido mínimo que já é bom</strong><p>Resultado observável, limite do que não pode mudar, e um comando de verificação. Três linhas bastam.</p></aside>"
  ].join("")
});

window.LIVRO_CAPITULOS.push({
  id: "b11",
  nivel: "basico",
  titulo: "Pratique o básico",
  resumo: "Cinco exercícios curtos. Faça no seu projeto, não só de cabeça.",
  html: [
    "<ol>",
    "<li>Abra o agente e peça o mapa do projeto em uma conversa nova. Anote dois arquivos que você não conhecia.</li>",
    "<li>Selecione uma função e use <kbd data-mac=\"Cmd+Shift+L\" data-win=\"Ctrl+Shift+L\">Cmd+Shift+L</kbd>. Peça uma explicação de dez linhas, sem edição.</li>",
    "<li>Na mesma função, use <kbd data-mac=\"Cmd+K\" data-win=\"Ctrl+K\">Cmd+K</kbd> para um ajuste local: nome, comentário ou um caso de borda. Aceite ou rejeite olhando o diff, não a mensagem.</li>",
    "<li>Escreva um teste ou um trecho repetido e use o Tab. Aceite uma sugestão inteira e, na seguinte, só a próxima palavra.</li>",
    "<li>Peça uma mudança pequena com resultado, limite e verificação. Antes de aceitar, responda: algum arquivo surpresa entrou no diff?</li>",
    "</ol>",
    "<p>Se os cinco saíram sem você procurar botão no escuro, o básico está feito. O intermediário começa quando a tarefa deixa de caber num único pedido.</p>",
    "<aside class=\"nota\"><strong>Erro comum neste ponto</strong><p>Abrir uma conversa infinita para assuntos diferentes. Uma conversa por tarefa. O histórico continua lá; você não precisa carregar tudo para a frente.</p></aside>"
  ].join("")
});
