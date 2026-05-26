// ==========================
// script.js — PORTFÓLIO PROFISSIONAL
// Gabriel Amaral & Leonardo
// Curso Técnico em Desenvolvimento de Sistemas — PROZ 2025/2026
//
// Requisitos implementados neste arquivo:
// R1  — script.js vinculado ao HTML
// R2  — Seção "Sobre mim" com variáveis JS
// R4  — Condicionais (modo claro/escuro, quiz, filtros, validação)
// R5  — Laço de repetição (lista de habilidades)
// R6  — Array de objetos (galeria de projetos)
// R7  — Funções nomeadas (mínimo 3)
// R8  — Formulário com validação via JavaScript
// R9  — Chamada à API externa com fetch + async/await
// R10 — Comentários explicativos em todo o código
// ==========================

// ==========================
// R2 — DADOS DO PERFIL
// Informações armazenadas em variáveis e constantes
// ==========================
const perfil = {
    nome:         "Gabriel & Leonardo",
    titulo:       "Desenvolvedores em Formação",
    bio:          "Apaixonados por tecnologia, construindo soluções reais com HTML, CSS e JavaScript. Cada linha de código é um passo rumo ao mercado.",
    curso:        "Técnico em ADS",
    anoIngresso:  "Janeiro de 2025",
    anoFormatura: "Dezembro de 2026",
    bioGabriel:   "Estudante dedicado, focado em front-end e experiência do usuário. Gosta de interfaces limpas e código organizado.",
    bioLeonardo:  "Curioso por lógica e back-end. Adora resolver problemas complexos e entender como as coisas funcionam por dentro."
};

// ==========================
// R5 — LISTA DE HABILIDADES
// Array simples com os ícones e nomes de cada skill
// Renderizado em loop pela função renderHabilidades()
// ==========================
const habilidades = [
    { icone: "🌐", nome: "HTML5" },
    { icone: "🎨", nome: "CSS3" },
    { icone: "⚡", nome: "JavaScript" },
    { icone: "🌿", nome: "Git & GitHub" },
    { icone: "🧠", nome: "Lógica de Programação" },
    { icone: "📱", nome: "Design Responsivo" },
    { icone: "🔗", nome: "APIs REST" },
    { icone: "🗄️", nome: "SQL Básico" },
    { icone: "🐍", nome: "Phyton" }
];

// ==========================
// R6 — ARRAY DE OBJETOS: PROJETOS
// Cada projeto é um objeto com título, descrição, tecnologias,
// categoria (usada no filtro) e emoji de capa
// ==========================
const projetos = [
    {
        titulo:      "Portfólio Profissional",
        descricao:   "Página interativa de portfólio com modo claro/escuro, quiz, barra de progresso e formulário de contato.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        categoria:   "js",
        capa:        "💼",
        cor:         "linear-gradient(135deg, #2563eb, #7c3aed)"
    },
    {
        titulo:      "Calculadora de Tempo de Curso",
        descricao:   "Sistema que calcula automaticamente o progresso, tempo cursado e dias restantes com base na data atual.",
        tecnologias: ["JavaScript", "Date API"],
        categoria:   "js",
        capa:        "⏱️",
        cor:         "linear-gradient(135deg, #0891b2, #2563eb)"
    },
    {
        titulo:      "Landing Page Responsiva",
        descricao:   "Página de apresentação com layout moderno, grid responsivo e animações em CSS puro.",
        tecnologias: ["HTML", "CSS"],
        categoria:   "html",
        capa:        "🌐",
        cor:         "linear-gradient(135deg, #7c3aed, #ec4899)"
    },
    {
        titulo:      "Quiz de Perfil Dev",
        descricao:   "Quiz interativo que identifica se o usuário combina mais com Front-End, Back-End ou Full Stack.",
        tecnologias: ["JavaScript", "DOM"],
        categoria:   "js",
        capa:        "🧠",
        cor:         "linear-gradient(135deg, #059669, #0891b2)"
    },
    {
        titulo:      "Formulário com Validação",
        descricao:   "Formulário completo com validação em tempo real de todos os campos via JavaScript.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        categoria:   "fullstack",
        capa:        "📬",
        cor:         "linear-gradient(135deg, #d97706, #ef4444)"
    },
    {
        titulo:      "Frase Motivacional API",
        descricao:   "Integração com API externa de frases para exibir citações dinâmicas usando fetch e async/await.",
        tecnologias: ["JavaScript", "fetch", "async/await"],
        categoria:   "fullstack",
        capa:        "✨",
        cor:         "linear-gradient(135deg, #16a34a, #2563eb)"
    }
];

// Mapeamento de categoria técnica → rótulo legível para exibição nos cards
const rotuloCategoria = {
    html:      "HTML / CSS",
    js:        "JavaScript",
    fullstack: "Full Stack"
};

// ==========================
// R4 — PERGUNTAS DO QUIZ
// Array de objetos com pergunta e 3 opções (front, back, full)
// ==========================
const perguntasQuiz = [
    {
        pergunta: "O que mais te chama atenção em um projeto?",
        respostas: [
            { texto: "A aparência, cores e layout",            perfil: "front" },
            { texto: "A lógica, dados e funcionamento",        perfil: "back"  },
            { texto: "Entender tanto a tela quanto a lógica",  perfil: "full"  }
        ]
    },
    {
        pergunta: "Qual atividade parece mais interessante?",
        respostas: [
            { texto: "Criar páginas bonitas e responsivas",      perfil: "front" },
            { texto: "Criar regras e funcionalidades internas",  perfil: "back"  },
            { texto: "Participar de todas as etapas do sistema", perfil: "full"  }
        ]
    },
    {
        pergunta: "Qual tecnologia você estudaria com mais prazer?",
        respostas: [
            { texto: "CSS, animações e interfaces",              perfil: "front" },
            { texto: "Python, SQL e APIs",                       perfil: "back"  },
            { texto: "JavaScript, banco de dados e integrações", perfil: "full"  }
        ]
    },
    {
        pergunta: "Como você prefere resolver um problema?",
        respostas: [
            { texto: "Pensando em como o usuário vai enxergar", perfil: "front" },
            { texto: "Criando uma lógica eficiente por trás",   perfil: "back"  },
            { texto: "Pensando na tela e no back-end juntos",   perfil: "full"  }
        ]
    },
    {
        pergunta: "O que mais te orgulharia em um projeto seu?",
        respostas: [
            { texto: "Ter uma interface bonita e fácil de usar",      perfil: "front" },
            { texto: "Ter dados seguros e regras bem aplicadas",      perfil: "back"  },
            { texto: "O projeto completo funcionando de ponta a ponta", perfil: "full" }
        ]
    }
];

// ==========================
// INICIALIZAÇÃO: aguarda o DOM estar completamente carregado
// antes de executar qualquer função que acesse elementos HTML
// ==========================
document.addEventListener("DOMContentLoaded", function () {

    inicializarPerfil();      // R2  — preenche dados com variáveis
    inicializarModo();        // R4  — modo claro/escuro (condicional)
    renderHabilidades();      // R5  — lista gerada com loop
    renderProjetos("todos");  // R6  — galeria de objetos
    inicializarFiltros();     // R6  — filtros por categoria
    inicializarQuiz();        // R4  — quiz com condicionais
    carregarFrase();          // R9  — fetch API externa
    inicializarFormulario();  // R8  — validação de formulário

});

// ==========================
// R2 — FUNÇÃO: preencher dados do perfil na tela
// Usa as propriedades do objeto 'perfil' definido acima
// textContent é usado no lugar de innerText (mais eficiente e seguro)
// ==========================
function inicializarPerfil() {
    document.getElementById("meuNome").textContent            = perfil.nome;
    document.getElementById("tituloProfissional").textContent = perfil.titulo;
    document.getElementById("minhaBio").textContent           = perfil.bio;

    document.getElementById("bioGabriel").textContent  = perfil.bioGabriel;
    document.getElementById("bioLeonardo").textContent = perfil.bioLeonardo;

    document.getElementById("infoCurso").textContent    = perfil.curso;
    document.getElementById("anoIngresso").textContent  = perfil.anoIngresso;
    document.getElementById("anoFormatura").textContent = perfil.anoFormatura;
    // statusCurso é preenchido por T3.js
}

// ==========================
// R4 — FUNÇÃO: inicializar modo claro/escuro
// Usa condicional (if/else) para alternar o tema e salvar preferência
// ==========================
function inicializarModo() {
    const botao = document.getElementById("modoClaroEscuro");
    const body  = document.body;

    // Recupera preferência salva no localStorage (se houver)
    const modoSalvo = localStorage.getItem("tema");
    if (modoSalvo === "escuro") {
        body.classList.add("modo-escuro");
        botao.textContent = "☀️";
    }

    // Evento de clique: alterna o tema e persiste a escolha
    botao.addEventListener("click", function () {
        body.classList.toggle("modo-escuro");

        // Condicional: ajusta ícone e salva preferência conforme o modo ativo
        if (body.classList.contains("modo-escuro")) {
            botao.textContent = "☀️";
            localStorage.setItem("tema", "escuro");
        } else {
            botao.textContent = "🌙";
            localStorage.setItem("tema", "claro");
        }
    });
}

// ==========================
// R5 — FUNÇÃO: renderizar lista de habilidades com laço
// Percorre o array 'habilidades' e cria um <li> para cada item
// Usa createElement + textContent (mais seguro que innerHTML para texto)
// ==========================
function renderHabilidades() {
    const lista = document.getElementById("listaHabilidades");

    // Loop for percorre todos os itens do array (R5)
    for (let i = 0; i < habilidades.length; i++) {
        const item   = document.createElement("li");

        // Ícone inserido em um <span> dedicado
        const icone  = document.createElement("span");
        icone.setAttribute("aria-hidden", "true");
        icone.textContent = habilidades[i].icone;

        // Nome da habilidade como texto simples
        const nome = document.createTextNode(" " + habilidades[i].nome);

        item.appendChild(icone);
        item.appendChild(nome);
        lista.appendChild(item);
    }
}

// ==========================
// R6 — FUNÇÃO: renderizar galeria de projetos
// Recebe um filtro de categoria e renderiza os cards correspondentes
// a partir do array de objetos 'projetos'
// ==========================
function renderProjetos(filtro) {
    const galeria = document.getElementById("galeriaProjetos");
    galeria.innerHTML = ""; // Limpa a galeria antes de renderizar

    // Filtra os projetos conforme a categoria selecionada
    const projetosFiltrados = filtro === "todos"
        ? projetos
        : projetos.filter(function (p) { return p.categoria === filtro; });

    // Loop: cria um card HTML para cada objeto do array
    projetosFiltrados.forEach(function (projeto) {
        const card = document.createElement("div");
        card.className = "projeto-card";

        // Rótulo legível da categoria (ex.: "js" → "JavaScript")
        const labelCategoria = rotuloCategoria[projeto.categoria] || projeto.categoria;

        // Template literal monta o HTML interno do card
        // Os dados vêm do objeto 'projeto' — não há entrada do usuário aqui
        card.innerHTML = `
            <div class="projeto-capa" style="background: ${projeto.cor}" aria-hidden="true">
                ${projeto.capa}
            </div>
            <div class="projeto-corpo">
                <span class="projeto-tag">${labelCategoria}</span>
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <div class="projeto-tecnologias" aria-label="Tecnologias utilizadas">
                    ${projeto.tecnologias.map(function (t) { return "<span>" + t + "</span>"; }).join("")}
                </div>
            </div>
        `;

        galeria.appendChild(card);
    });

    // Condicional: exibe mensagem se nenhum projeto corresponder ao filtro
    if (projetosFiltrados.length === 0) {
        const aviso = document.createElement("p");
        aviso.style.color = "var(--cor-texto-suave)";
        aviso.textContent = "Nenhum projeto nessa categoria ainda.";
        galeria.appendChild(aviso);
    }
}

// ==========================
// R4 — FUNÇÃO: inicializar botões de filtro dos projetos
// Usa condicional para ativar/desativar filtros e atualiza aria-pressed
// ==========================
function inicializarFiltros() {
    const botoesFiltro = document.querySelectorAll(".filtro");

    botoesFiltro.forEach(function (btn) {
        btn.addEventListener("click", function () {
            // Remove a classe 'ativo' e o estado aria de todos os botões
            botoesFiltro.forEach(function (b) {
                b.classList.remove("ativo");
                b.setAttribute("aria-pressed", "false");
            });

            // Marca apenas o botão clicado como ativo
            btn.classList.add("ativo");
            btn.setAttribute("aria-pressed", "true");

            // Renderiza projetos com o filtro selecionado
            renderProjetos(btn.getAttribute("data-filtro"));
        });
    });
}

// ==========================
// R4 — FUNÇÃO: inicializar quiz
// Monta o HTML das perguntas e controla a seleção de respostas
// ==========================
function inicializarQuiz() {
    const container = document.getElementById("resultadoQuiz");
    let html = "";

    // Monta cada bloco de pergunta com suas respostas
    perguntasQuiz.forEach(function (item, index) {
        html += `
            <div class="pergunta-bloco" data-pergunta="${index}">
                <span class="pergunta-numero">Pergunta ${index + 1} de ${perguntasQuiz.length}</span>
                <h3>${item.pergunta}</h3>
                <div class="area-respostas" role="group" aria-label="Opções da pergunta ${index + 1}">
                    ${item.respostas.map(function (resp, i) {
                        const letra = ["A", "B", "C"][i];
                        return `
                            <button class="resposta-quiz"
                                data-pergunta="${index}"
                                data-perfil="${resp.perfil}"
                                aria-pressed="false">
                                <span aria-hidden="true">${letra}</span>
                                ${resp.texto}
                            </button>
                        `;
                    }).join("")}
                </div>
            </div>
        `;
    });

    // Monta o card completo do quiz
    container.innerHTML = `
        <div class="quiz-card">
            <span class="quiz-etiqueta">Quiz único</span>
            <h3 class="quiz-titulo">Descubra seu perfil na programação</h3>
            <p class="quiz-descricao">
                Responda todas as perguntas e veja se você é mais Front-End, Back-End ou Full Stack.
            </p>
            ${html}
            <button id="verResultado" class="btn-resultado">Ver meu resultado →</button>
            <button id="limparQuiz" class="btn-limpar">↺ Refazer quiz</button>
            <div id="respostaFinal" class="resultado-final" style="display:none" role="status" aria-live="polite"></div>
        </div>
    `;

    // Adiciona eventos de seleção nas respostas
    const respostas = document.querySelectorAll(".resposta-quiz");

    respostas.forEach(function (resposta) {
        resposta.addEventListener("click", function () {
            const numeroPergunta = resposta.getAttribute("data-pergunta");

            // Remove seleção e estado aria das outras respostas da mesma pergunta
            document.querySelectorAll(`.resposta-quiz[data-pergunta="${numeroPergunta}"]`)
                .forEach(function (btn) {
                    btn.classList.remove("selecionada");
                    btn.setAttribute("aria-pressed", "false");
                });

            // Marca a resposta escolhida
            resposta.classList.add("selecionada");
            resposta.setAttribute("aria-pressed", "true");
        });
    });

    // Botão para calcular e exibir o resultado
    document.getElementById("verResultado").addEventListener("click", calcularResultadoQuiz);

    // Botão para reiniciar o quiz
    document.getElementById("limparQuiz").addEventListener("click", function () {
        document.querySelectorAll(".resposta-quiz").forEach(function (btn) {
            btn.classList.remove("selecionada");
            btn.setAttribute("aria-pressed", "false");
        });
        const respostaFinal = document.getElementById("respostaFinal");
        respostaFinal.style.display = "none";
        respostaFinal.innerHTML = "";
    });
}

// ==========================
// R4 — FUNÇÃO: calcular resultado do quiz
// Usa condicionais (if / else if / else) para determinar o perfil vencedor
// ==========================
function calcularResultadoQuiz() {
    const selecionadas  = document.querySelectorAll(".resposta-quiz.selecionada");
    const respostaFinal = document.getElementById("respostaFinal");

    // Condicional: verifica se todas as perguntas foram respondidas
    if (selecionadas.length < perguntasQuiz.length) {
        respostaFinal.innerHTML = `
            <strong>⚠️ Atenção</strong>
            <p>Responda todas as ${perguntasQuiz.length} perguntas antes de ver o resultado.</p>
        `;
        respostaFinal.className = "resultado-final alerta";
        respostaFinal.style.display = "block";
        return; // Interrompe a função
    }

    // Contadores de pontos por perfil
    let pontosFront = 0;
    let pontosBack  = 0;
    let pontosFull  = 0;

    // Loop: percorre as respostas selecionadas e acumula os pontos
    selecionadas.forEach(function (resposta) {
        const perfilResposta = resposta.getAttribute("data-perfil");

        // Condicional: incrementa o contador do perfil correspondente
        if (perfilResposta === "front") {
            pontosFront++;
        } else if (perfilResposta === "back") {
            pontosBack++;
        } else {
            pontosFull++;
        }
    });

    respostaFinal.className = "resultado-final";
    respostaFinal.style.display = "block";

    // Condicional: determina o perfil com maior pontuação e exibe o resultado
    if (pontosFront > pontosBack && pontosFront > pontosFull) {
        respostaFinal.innerHTML = `
            <strong>🎨 Resultado: Perfil Front-End</strong>
            <p>Você combina com criação de interfaces, layouts e experiência do usuário.</p>
            <p><strong>Próximos passos:</strong> CSS avançado, responsividade, React e animações.</p>
        `;
    } else if (pontosBack > pontosFront && pontosBack > pontosFull) {
        respostaFinal.innerHTML = `
            <strong>⚙️ Resultado: Perfil Back-End</strong>
            <p>Você combina com lógica, banco de dados, APIs e regras de negócio.</p>
            <p><strong>Próximos passos:</strong> Node.js, Python, SQL, autenticação e servidores.</p>
        `;
    } else {
        respostaFinal.innerHTML = `
            <strong>🚀 Resultado: Perfil Full Stack</strong>
            <p>Você quer entender o projeto de ponta a ponta — front e back juntos!</p>
            <p><strong>Próximos passos:</strong> JavaScript completo, React, Node.js, banco de dados e deploy.</p>
        `;
    }
}

// ==========================
// R9 — FUNÇÃO ASSÍNCRONA: carregar frase motivacional via API
// Usa fetch + async/await para buscar dados de uma API pública
// API utilizada: quoteslate.it (substituta da quotable.io, que foi descontinuada)
// Fallback local garante funcionamento mesmo sem conexão
// ==========================
async function carregarFrase() {
    const textoEl = document.getElementById("textoFrase");
    const autorEl = document.getElementById("autorFrase");
    const btnNova = document.getElementById("novaFrase");

    // Frases locais usadas como fallback quando a API não está disponível
    const frasesFallback = [
        { texto: "O único jeito de fazer um trabalho brilhante é amar o que você faz.", autor: "Steve Jobs"  },
        { texto: "Código é como humor: quando precisa ser explicado, não é bom.",        autor: "Cory House" },
        { texto: "Primeiro faça funcionar, depois faça rápido, depois faça bonito.",      autor: "Ken Beck"   },
        { texto: "Simplicidade é o nível mais sofisticado da tecnologia.",                autor: "Leonardo da Vinci" },
        { texto: "A melhor forma de prever o futuro é inventá-lo.",                       autor: "Alan Kay"   }
    ];

    // Função interna que realiza a requisição à API
    async function buscarFrase() {
        textoEl.style.opacity = "0.4";
        textoEl.textContent   = "Buscando frase...";
        autorEl.textContent   = "";

        try {
            // API pública de frases — substituta da quotable.io (descontinuada em 2024)
            const resposta = await fetch("https://api.quoteslate.it/api/quotes/random");

            // Condicional: verifica se a requisição retornou sucesso (status 2xx)
            if (!resposta.ok) {
                throw new Error("Resposta inválida da API: " + resposta.status);
            }

            const dados = await resposta.json();

            // A API quoteslate retorna { quote, author }
            textoEl.style.opacity = "1";
            textoEl.textContent   = dados.quote  || dados.content || "—";
            autorEl.textContent   = "— " + (dados.author || "Desconhecido");

        } catch (erro) {
            // Tratamento de erro: exibe frase local como fallback
            console.warn("API de frases indisponível. Usando fallback local.", erro);

            const aleatorio = Math.floor(Math.random() * frasesFallback.length);
            textoEl.style.opacity = "1";
            textoEl.textContent   = frasesFallback[aleatorio].texto;
            autorEl.textContent   = "— " + frasesFallback[aleatorio].autor;
        }
    }

    // Carrega a primeira frase ao inicializar a página
    await buscarFrase();

    // Evento do botão "Nova frase": dispara uma nova requisição
    btnNova.addEventListener("click", buscarFrase);
}

// ==========================
// R8 — FUNÇÃO: inicializar formulário de contato
// Gerencia o evento de envio e a validação em tempo real
// ==========================
function inicializarFormulario() {
    const form    = document.getElementById("formContato");
    const sucesso = document.getElementById("sucessoContato");

    // Evento de submit: impede reload e executa validação
    form.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const valido = validarFormulario();

        // Condicional: só simula o envio se todos os campos forem válidos
        if (valido) {
            sucesso.textContent = "✅ Mensagem enviada! Retornaremos em breve.";
            sucesso.classList.add("visivel");

            // Limpa o formulário e oculta a mensagem após 3 segundos
            setTimeout(function () {
                form.reset();
                sucesso.classList.remove("visivel");
            }, 3000);
        }
    });

    // Validação em tempo real: remove o estado de erro ao digitar
    const campos = form.querySelectorAll("input, textarea");
    campos.forEach(function (campo) {
        campo.addEventListener("input", function () {
            campo.classList.remove("erro");
            const idErro = "erro" + capitalizar(campo.id.replace("campo", ""));
            const erroEl = document.getElementById(idErro);
            if (erroEl) erroEl.textContent = "";
        });
    });
}

// ==========================
// R8 — FUNÇÃO: validar todos os campos do formulário
// Retorna true se todos estiverem corretos, false se houver erro
// ==========================
function validarFormulario() {
    let valido = true;

    const nome     = document.getElementById("campoNome").value.trim();
    const email    = document.getElementById("campoEmail").value.trim();
    const assunto  = document.getElementById("campoAssunto").value.trim();
    const mensagem = document.getElementById("campoMensagem").value.trim();

    // Limpa os erros anteriores antes de revalidar
    limparErros();

    // Validação do nome: mínimo 3 caracteres
    if (nome.length < 3) {
        exibirErro("campoNome", "erroNome", "Por favor, informe seu nome completo.");
        valido = false;
    }

    // Validação do e-mail: formato básico com @ e domínio
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        exibirErro("campoEmail", "erroEmail", "Informe um e-mail válido (ex: nome@email.com).");
        valido = false;
    }

    // Validação do assunto: mínimo 4 caracteres
    if (assunto.length < 4) {
        exibirErro("campoAssunto", "erroAssunto", "Informe o assunto da mensagem.");
        valido = false;
    }

    // Validação da mensagem: mínimo 20 caracteres
    if (mensagem.length < 20) {
        exibirErro("campoMensagem", "erroMensagem", "A mensagem precisa ter pelo menos 20 caracteres.");
        valido = false;
    }

    return valido;
}

// ==========================
// R7 — FUNÇÕES AUXILIARES NOMEADAS
// Funções pequenas e reutilizáveis que suportam o código principal
// ==========================

// Exibe mensagem de erro visual em um campo específico do formulário
function exibirErro(idCampo, idErro, mensagem) {
    document.getElementById(idCampo).classList.add("erro");
    document.getElementById(idErro).textContent = mensagem;
}

// Remove todas as marcações de erro do formulário
function limparErros() {
    document.querySelectorAll(".campo-grupo input, .campo-grupo textarea")
        .forEach(function (campo) { campo.classList.remove("erro"); });

    document.querySelectorAll(".erro-msg")
        .forEach(function (msg) { msg.textContent = ""; });
}

// Capitaliza a primeira letra de uma string
// Usada para montar dinamicamente os IDs dos campos de erro
function capitalizar(texto) {
    if (!texto) return "";
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// ==========================
// BOTÃO VOLTAR AO TOPO
// Aparece após o usuário sair da seção inicial/hero
// Scroll suave ao clicar
// ==========================
(function inicializarVoltarTopo() {
    const btn = document.getElementById("voltarTopo");
    if (!btn) return;

    // Mostra o botão quando o usuário passou o hero (aprox. 400px)
    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            btn.classList.add("visivel");
        } else {
            btn.classList.remove("visivel");
        }
    }, { passive: true });

    // Scroll suave ao clicar
    btn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
})();
