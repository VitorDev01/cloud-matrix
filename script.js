function randomText() {
    var text = ("日2ﾊ3ﾐ4ﾋｳ5ﾅﾓｻﾜｵﾘ6ｱﾎﾃ7ﾏｹﾒｴｷﾑ8ﾕﾗｾﾈｽ9ﾀﾇﾍﾘ01")
    let letter = text[Math.floor(Math.random() * text.length)]
    return letter;
}

function rain() {

    let cloud = document.querySelector('.cloud');

    let e = document.createElement('div');

    let left = Math.floor(Math.random() * 315);
    let size = Math.random() * 1.5;

    /* variáveis que faltavam */
    let height = Math.random() * 50;
    let duration = Math.random() * 1;

    e.classList.add('text');
    cloud.appendChild(e);

    e.innerText = randomText();

    e.style.left = left + 'px';
    e.style.fontSize = 0.7 + size + 'em';
    e.style.height = 0.5 + height + 'px';
    e.style.animationDuration = 1 + duration + 's';

    setTimeout(function() {
        cloud.removeChild(e);
    }, 2000)

}

setInterval(function() {
    rain()
}, 20);

function verificarSenha() {

    let senha = prompt("Parece que vc não tem permissão aqui :):");

    if (senha === "vocemeachou") {

        window.open("https://www.google.com/search?q=inurl%3At.me+intext%3Apuxadas", "_blank");

    } else {

        alert("ACESSO NEGADO");
    }
}

window.onload = function () {
  const text = document.getElementById("scrollText");

  let pos = 0;

  function animateScroll() {
    pos -= 1.0;

    if (Math.abs(pos) >= text.scrollWidth / 2) {
      pos = 0;
    }

    text.style.transform = `translateX(${pos}px)`;

    requestAnimationFrame(animateScroll);
  }

  animateScroll();
};

// ======== OLHO ANIMADO ============ 
const iris = document.querySelector(".iris");

document.addEventListener("mousemove", (e) => {

  let x = (e.clientX / window.innerWidth - 0.5) * 40;
  let y = (e.clientY / window.innerHeight - 0.5) * 40;

  iris.style.transform =
    `translate(-50%, -50%) translate(${x}px, ${y}px)`;

});

//   ======== FUNÇÃO ESCANER ========
function scanRJ() {
    const res = document.getElementById("resultadoRJ");
     // SE JÁ ESTIVER ABERTO → FECHA
    if (res.style.display === "block") {
        res.style.display = "none";
        return;
    }

    // SE ESTIVER FECHADO → ABRE E ESCANEIA
    res.style.display = "block";
    res.classList.add("scanning");

    let progresso = 0;

    let anim = setInterval(() => {
        progresso++;

         Object.assign(res.style, {
            maxWidth: "700px",   // MENOR QUE ANTES
            width: "85%",        // OCUPA MENOS TELA
            margin: "20px auto",
            padding: "16px",
            boxSizing: "border-box"
           });

        res.innerHTML = `Leia Com Atenção... ${progresso}%`;

        if (progresso >= 100) {
            clearInterval(anim);

            res.classList.remove("scanning");
            
            res.innerHTML = `
            <p>➢ Em dezembro de 2020, uma grave falha de segurança no Ministério da Saúde expôs dados pessoais de aproximadamente 243 milhões de brasileiros (vivos e falecidos) 
            <a href="https://g1.globo.com/economia/tecnologia/noticia/2020/12/02/nova-falha-do-ministerio-da-saude-expoe-dados-de-243-milhoes-de-brasileiros-na-internet-diz-jornal.ghtml"
            style="color:#00ffcc; text-decoration: underline; text-decoration-color:#00ffcc; text-underline-offset:4px; font-weight:bold;">
            fonte: G1 Globo
            </a>.</p>
            
            <p>O vazamento ocorreu no sistema e-SUS Notifica e deixou expostos por vários meses informações como:</p>

             <p style="
              color:#ff4d4d;
              font-style: italic;
              border-left: 3px solid #ff1a1a;
              padding-left: 10px;
              margin-top: 10px;
              text-shadow: 0 0 5px #ff1a1a, 0 0 10px #ff0000;
             ">
             Nome completo
             CPF
             Endereço
             Telefone
             Dados de cadastro no SUS e em planos de saúde</p>
            
            <p>Mesmo sendo um vazamento antigo (2020), esses dados ainda circulam em fóruns, grupos de Telegram, marketplaces da deep web e são usados até hoje para golpes de engenharia social, phishing, tentativas de roubo de conta, empréstimos fraudulentos e chantagem.</p>

            <p style="
              color:#ff4d4d;
              font-style: italic;
              border-left: 3px solid #ff1a1a;
              padding-left: 10px;
              margin-top: 10px;
              text-shadow: 0 0 5px #ff1a1a, 0 0 10px #ff0000;
             ">Como seus dados básicos (nome + CPF + telefone + endereço) provavelmente já vazaram, o mais importante é fortalecer todas as suas contas para dificultar que golpistas usem essas informações contra você.</p>
             <p>Mude suas senhas de gmail e se possviel de gmail, mude telefone, evite expor seu nome todo ou nome do meio etc.., cuidado com quem você compartilha seu novo número, e sempre verifique a veracidade de sites antes de passar dados sensíveis</p>
            
              `;
        }
    }, 20);
}
// ===== ABRE ZAP NUMERO ==========
function buscarWhats() {
    let numero = document.getElementById("userWhats").value.trim();

    if (numero === "") return;

    numero = numero.replace(/\D/g, "");

    // detecta se é mobile
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
        const url = `https://api.whatsapp.com/send?phone=${numero}`;
        window.location.href = url; // abre no mobile
    } else {
        alert("Essa função é melhor usada no celular 📱");
    }
}

// ========= = CAIXA ID GMAIL = ====== 
function abrirEmail() {
    let email = document.getElementById("userEmail").value.trim();

    if (email === "") return;

    const url = `mailto:${email}`;

    window.location.href = url;
}

//caixa pinterest
function buscarPinterest() {
    const user = document.getElementById("userPinterest").value.trim();

    if (user === "") return;

    const url = `https://www.pinterest.com/${user}/`;

    window.open(url, "_blank");
}

// ENTER também funciona
document.getElementById("userPinterest").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        buscarPinterest();
    }
});

//caixa insta
const input = document.getElementById("usernameInput");
const btn = document.getElementById("enterBtn");

function abrirPerfil() {
    let username = input.value.trim();

    if (username !== "") {
        let url = "https://threads.net/@" + username;
        window.open(url, "_blank");
    } else {
        alert("Digite um usuário válido.");
    }
}

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        abrirPerfil();
    }
});

btn.addEventListener("click", abrirPerfil);


const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function buscarTagging() {
    let username = searchInput.value.trim();

    if (username !== "") {
        let query = username + " instagram + tagging";
        let url = "https://www.google.com/search?q=" + encodeURIComponent(query);
        window.open(url, "_blank");
    } else {
        alert("Digite um usuário válido.");
    }
}

searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        buscarTagging();
    }
});

searchBtn.addEventListener("click", buscarTagging);

// === POSTS APAGADOS TWITTER X =======
const archiveInput = document.getElementById("archiveInput");
const archiveBtn = document.getElementById("archiveBtn");

function buscarArchive() {
    let username = archiveInput.value.trim();

    if (username !== "") {
        let url = "https://web.archive.org/web/*/https://twitter.com/" + username + "/status/*";
        window.open(url, "_blank");
    } else {
        alert("Digite um usuário válido.");
    }
}

archiveInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        buscarArchive();
    }
});

archiveBtn.addEventListener("click", buscarArchive);

// ===== BUSCADOR DE PROCESSOS ========
function buscarProcessos() {
    const nome = document.getElementById("userProcesso").value.trim();

    if (!nome) return;

    const q = encodeURIComponent(nome);

    // JusBrasil
    window.open(`https://www.jusbrasil.com.br/busca?q=${q}`, "_blank");

    // Escavador
    window.open(`https://www.escavador.com/busca?q=${q}`, "_blank");
}

// ====== NOME MAÇONARIA ==========
function buscarMacon() {
    const nome = document.getElementById("userMacon").value.trim();

    if (!nome) return;

    const dork = `"${nome}" (maçonaria OR maçom OR "loja maçônica" OR freemason OR freemasonry OR "masonic lodge")`;

    const url = "https://www.google.com/search?q=" + encodeURIComponent(dork);

    window.open(url, "_blank");
}

document.getElementById("userMacon").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        buscarMacon();
    }
});


// === POSTS CURTIDOS NO INSTAGRAM =====
function buscar() {
    const input = document.getElementById("userInput");

    if (!input) {
        console.error("Input não encontrado");
        return;
    }

    const user = input.value.trim();

    if (user === "") {
        alert("Digite um usuário");
        return;
    }

    const query = `${user} liked by instagram`;
    const url = "https://www.google.com/search?q=" + encodeURIComponent(query);

    window.open(url, "_blank");
}

// ENTER 
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("userInput");

    if (input) {
        input.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                buscar();
            }
        });
    } else {
        console.error("Input com id userInput não encontrado no HTML");
    }
});

//caixa spotify
function buscarSpotify() {
    const user = document
        .getElementById("userSpotify")
        .value.trim()
        .replace("@", "");

    if (user === "") return;

    const url = `https://open.spotify.com/user/${user}`;
    window.open(url, "_blank");
}

//buscar em multiplas redes 
function buscarMulti() {
    let username = document.getElementById("userMulti").value.trim();
    if (!username) return;

    const sites = [
        "https://reddit.com/user/",
        "https://tiktok.com/@",
        "https://www.youtube.com/@",
    ];

    sites.forEach(site => {
        window.open(site + username, "_blank");
    });
}

// ====================== BUSCAR MULTI (agora só 4 sites) ======================
function buscarMulti() {
    let username = document.getElementById("userMulti").value.trim();
    if (!username) return;

    const sites = [
        "https://reddit.com/user/",
        "https://tiktok.com/@",
        "https://www.youtube.com/@",
        "https://snapchat.com/add/"
    ];

    sites.forEach(site => {
        window.open(site + username, "_blank");
    });
}

//gmail 
function buscarEmail() {
    let username = document.getElementById("userEmailEnum").value.trim();
    if (!username) return;

    const dominios = ["gmail.com", "outlook.com", "yahoo.com"];

    dominios.forEach(d => {
        let email = `${username}@${d}`;
        window.open(`https://www.google.com/search?q="${email}"`, "_blank");
    });
}

//phone osint
function buscarNumero() {
    let numero = document.getElementById("userNumber").value.trim();
    if (!numero) return;

    numero = numero.replace(/\D/g, "");

    // Google
    window.open("https://www.google.com/search?q=" + encodeURIComponent(`"${numero}"`), "_blank");
}


// ====================== BADOO ======================
function buscarBadoo() {
    let username = document.getElementById("userBadoo").value.trim();
    if (!username) return alert("Digite um username do Badoo!");

    const url = `https://www.google.com/search?q=%22${encodeURIComponent(username)}%22+site:badoo.com`;
    window.open(url, "_blank");
}

// ====================== HORNET ======================
function buscarHornet() {
    let username = document.getElementById("userHornet").value.trim();
    if (!username) return alert("Digite um username do Hornet!");

    const url = `https://www.google.com/search?q=%22${encodeURIComponent(username)}%22+site:hornet.com`;
    window.open(url, "_blank");
}

// ====================== GAROTOS COM LOCAL ======================
function buscarGarotosComLocal() {
    let nome = document.getElementById("garotosComLocal").value.trim();
    if (!nome) return alert("Digite um nome!");
    
    const url = `https://www.google.com/search?q=${encodeURIComponent(nome)}+garotocomlocal`;
    window.open(url, "_blank");
}

// ====================== GAROTAS COM LOCAL ======================
function buscarGarotasComLocal() {
    let nome = document.getElementById("garotasComLocal").value.trim();
    if (!nome) return alert("Digite um nome!");
    
    const url = `https://www.google.com/search?q=${encodeURIComponent(nome)}+garotacomlocal`;
    window.open(url, "_blank");
}

// ====================== FATALMODEL GAROTOS ======================
function buscarFatalmodelGarotos() {
    let nome = document.getElementById("fatalmodelGarotos").value.trim();
    if (!nome) return alert("Digite um nome!");
    
    const url = `https://www.google.com/search?q=${encodeURIComponent(nome)}+fatalmodel`;
    window.open(url, "_blank");
}

// ====================== FATALMODEL GAROTAS ======================
function buscarFatalmodelGarotas() {
    let nome = document.getElementById("fatalmodelGarotas").value.trim();
    if (!nome) return alert("Digite um nome!");
    
    const url = `https://www.google.com/search?q=${encodeURIComponent(nome)}+fatalmodel`;
    window.open(url, "_blank");
}

// ============== BUSCA FACEBOOK =====================
function buscarFacebook() {
    const input = document.getElementById("userFacebook");

    if (!input) {
        console.log("input não encontrado");
        return;
    }

    const nome = input.value.trim();

    if (!nome) {
        alert("Digite um nome");
        return;
    }

    const url = "https://www.facebook.com/search/people/?q=" + encodeURIComponent(nome);

    window.open(url, "_blank");
}

// osint simbólico
function rodar() {
    let input = document.getElementById("dataNascimento");
    let res = document.getElementById("resultado");

    if (!input || !res) {
        console.log("Elemento não encontrado");
        return;
    }

    let val = input.value;

    if (!val) {
        res.innerHTML = "⚠️ Selecione uma data";
        return;
    }

    res.style.display = "block";
    let progresso = 0;

    let anim = setInterval(() => {
        progresso++;

        res.innerHTML = `🔍 Escaneando dados... ${progresso}%`;

        if (progresso >= 100) {
            clearInterval(anim);

            // ================= TODO SEU CÓDIGO CONTINUA AQUI =================

            // parsing seguro
            let partes = val.split("-");
            let nascimento = new Date(partes[0], partes[1] - 1, partes[2]);

            if (isNaN(nascimento)) {
                res.innerHTML = "❌ Data inválida";
                return;
            }

            let hoje = new Date();

            // ================= IDADE =================
            let anos = hoje.getFullYear() - nascimento.getFullYear();
            let meses = hoje.getMonth() - nascimento.getMonth();

            if (meses < 0) {
                anos--;
                meses += 12;
            }

            if (hoje.getDate() < nascimento.getDate()) {
                meses--;
                if (meses < 0) {
                    anos--;
                    meses = 11;
                }
            }

            // ================= PRÓXIMO ANIVERSÁRIO =================
            let prox = new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate());
            if (prox < hoje) prox.setFullYear(hoje.getFullYear() + 1);

            let diff = prox - hoje;
            let diasTotal = Math.floor(diff / (1000 * 60 * 60 * 24));

            let mesesRest = Math.floor(diasTotal / 30);
            let diasRest = diasTotal % 30;

            // ================= SIGNO =================
            let d = nascimento.getDate();
            let m = nascimento.getMonth() + 1;

            function signo(d, m) {
                if ((m == 3 && d >= 21) || (m == 4 && d <= 19)) return "Áries - Impulsivo";
                if ((m == 4 && d >= 20) || (m == 5 && d <= 20)) return "Touro - Estavel";
                if ((m == 5 && d >= 21) || (m == 6 && d <= 20)) return "Gêmeos - Comunicativo";
                if ((m == 6 && d >= 21) || (m == 7 && d <= 22)) return "Câncer - Sentimental";
                if ((m == 7 && d >= 23) || (m == 8 && d <= 22)) return "Leão - Aparente";
                if ((m == 8 && d >= 23) || (m == 9 && d <= 22)) return "Virgem - Analítico";
                if ((m == 9 && d >= 23) || (m == 10 && d <= 22)) return "Libra - Indeciso";
                if ((m == 10 && d >= 23) || (m == 11 && d <= 21)) return "Escorpião - Profundo";
                if ((m == 11 && d >= 22) || (m == 12 && d <= 21)) return "Sagitário - Viajante";
                if ((m == 12 && d >= 22) || (m == 1 && d <= 19)) return "Capricórnio - Materialista";
                if ((m == 1 && d >= 20) || (m == 2 && d <= 18)) return "Aquário - Racional";
                return "Peixes - Espiritual";
            }
            // pincipado
            function planeta(d, m) {
                if ((m == 3 && d >= 21) || (m == 4 && d <= 19)) return "Marte - Violência";
                if ((m == 4 && d >= 20) || (m == 5 && d <= 20)) return "Vênus - Sensualidade";
                if ((m == 5 && d >= 21) || (m == 6 && d <= 20)) return "Mercúrio - Comunicação";
                if ((m == 6 && d >= 21) || (m == 7 && d <= 22)) return "Lua - Lilith";
                if ((m == 7 && d >= 23) || (m == 8 && d <= 22)) return "Sol - Apolo Homossexualidade";
                if ((m == 8 && d >= 23) || (m == 9 && d <= 22)) return "Mercúrio - Hermes";
                if ((m == 9 && d >= 23) || (m == 10 && d <= 22)) return "Vênus Indecisão Dualidade";
                if ((m == 10 && d >= 23) || (m == 11 && d <= 21)) return "Plutão - Hades Ocultismo";
                if ((m == 11 && d >= 22) || (m == 12 && d <= 21)) return "Júpiter Zeus Perversidade";
                if ((m == 12 && d >= 22) || (m == 1 && d <= 19)) return "Saturno - Tempo sexualidade";
                if ((m == 1 && d >= 20) || (m == 2 && d <= 18)) return "Urano - Nova Era";
                return "Leviatã - Orgulho";
            }

            // ================= GERAÇÃO =================
            let ano = nascimento.getFullYear();
            let ger = "";

            if (ano >= 1965 && ano <= 1980) ger = "X";
            else if (ano >= 1981 && ano <= 1996) ger = "Millennial";
            else if (ano >= 1997 && ano <= 2012) ger = "Z";
            else if (ano >= 2013) ger = "Beta";
            else ger = "Antiga";

            // ================= CICLO DE 7 ANOS =================
            let ciclo = anos % 7;
            if (ciclo === 0) ciclo = 7;

            let fases = {
                1: "Aprendizado",
                2: "Serviço",
                3: "Alianças",
                4: "Oportunidades",
                5: "Definição",
                6: "Bênção",
                7: "Descanso"
            };

            // ================= PONTO DE RETORNO / NÃO RETORNO =================
            let statusCiclo = "";

            if (anos >= 21 && anos <= 25) {
                statusCiclo = "Ponto de Retorno";
            } else if (anos >= 26 && anos <= 27) {
                statusCiclo = "Ainda há Retorno";
            } else if (anos >= 28 && anos <= 34) {
                statusCiclo = "Não Retorno";
            } else if (anos >= 35 && anos <= 41) {
                statusCiclo = "Retorno Complicado";
            } else if (anos >= 42) {
                statusCiclo = "Ja Decidido";
            } else {
                statusCiclo = "Ciclo inicial (formação)";
            }
            // ================= SOMA =================
            let somaTotal = val.replaceAll("-", "").split("")
                .reduce((a, b) => a + parseInt(b), 0);

            // ARCANO
            let arcanoNum = somaTotal;
            while (arcanoNum > 22) {
                arcanoNum = arcanoNum.toString().split("")
                    .reduce((a, b) => a + parseInt(b), 0);
            }

            // REDUZIDO
            let reduzido = arcanoNum;
            while (reduzido > 9) {
                reduzido = reduzido.toString().split("")
                    .reduce((a, b) => a + parseInt(b), 0);
            }

            let arcanos = {
                1: "O Mago",
                2: "A Sacerdotisa",
                3: "A Imperatriz",
                4: "O Imperador",
                5: "O Hierofante",
                6: "Os Enamorados",
                7: "O Carro",
                8: "A Justiça",
                9: "O Eremita",
                10: "A Roda",
                11: "A Força",
                12: "O Enforcado",
                13: "A Morte",
                14: "Temperança",
                15: "O Diabo",
                16: "A Torre",
                17: "A Estrela",
                18: "A Lua",
                19: "O Sol",
                20: "Julgamento",
                21: "O Mundo",
                22: "O Louco"
            };

            let hebraico = {
                1: "א (Alef)",
                2: "ב (Bet)",
                3: "ג (Gimel)",
                4: "ד (Dalet)",
                5: "ה (He)",
                6: "ו (Vav)",
                7: "ז (Zayin)",
                8: "ח (Chet)",
                9: "ט (Tet)",
                10: "י (Yod)",
                11: "כ (Kaf)",
                12: "ל (Lamed)",
                13: "מ (Mem)",
                14: "נ (Nun)",
                15: "ס (Samekh)",
                16: "ע (Ayin)",
                17: "פ (Pe)",
                18: "צ (Tsade)",
                19: "ק (Qof)",
                20: "ר (Resh)",
                21: "ש (Shin)",
                22: "ת (Tav)"
            };

            let hebraicoSignificado = {
                1: "Unidade / início",
                2: "Casa / dualidade",
                3: "Movimento / crescimento",
                4: "Porta / estrutura",
                5: "Revelação / graça",
                6: "Conexão / ligação",
                7: "Perfeição espiritual",
                8: "Vida / transcendência",
                9: "Verdade / bem",
                10: "Ação / mão",
                11: "Força / potencial",
                12: "Aprendizado",
                13: "Transformação",
                14: "Continuidade",
                15: "Proteção",
                16: "Visão",
                17: "Expressão",
                18: "Justiça",
                19: "Propósito",
                20: "Liderança",
                21: "Poder",
                22: "Aliança"
            };

            // ================= RESULTADO =================
            res.innerHTML = `
      <p>⚜︎ Geração: ${ger}</p>
      <p>☀ Idade: ${anos} anos ${meses} meses</p>
      <p>★ Aniversário em: ${mesesRest}m ${diasRest}d</p>
      <p>☉ Signo: ${signo(d,m)}</p>
      <p>⚔︎ Principado Inimigo: ${planeta(d,m)}</p>

      <p>⏱︎ Ciclo: ${ciclo}º ano - ${fases[ciclo]}</p>
      <p>⚖︎ Status do ciclo: ${statusCiclo}</p>

      <p>Ⅵ Número base: ${reduzido}</p>
      <p>🃟 Arcano: ${arcanoNum} - ${arcanos[arcanoNum]}</p>

      <p>✡ Letra hebraica: ${hebraico[arcanoNum]}</p>
      <p>☤ Significado: ${hebraicoSignificado[arcanoNum]}</p>
    `;
        }
    }, 10);
}

function calcularBastardia() {
    let res = document.getElementById("resultadoBastardia");

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.querySelector('input[name="q4"]:checked');

    if (!q1 || !q2 || !q3 || !q4) {
        res.innerHTML = "⚠️ Responda todas as perguntas";
        return;
    }

    // ===== TELA DE SCAN =====
    res.className = "scanning";
    res.innerHTML = "🔍 Escaneando origem...";

    setTimeout(() => {

        let pontos = 0;

        if (q1.value === "nao") pontos += 25;
        if (q2.value === "sim") pontos += 25;
        if (q3.value === "sim") pontos += 25;
        if (q4.value === "sim") pontos += 25;

        let porcentagem = pontos;

        // ===== ANIMAÇÃO DE CONTAGEM BASTARDIA =====
        let atual = 0;

        res.className = "final";

        let intervalo = setInterval(() => {
            if (atual >= porcentagem) {
                clearInterval(intervalo);

                res.innerHTML = `⚠️ ${porcentagem}% BASTARDIA`;
            } else {
                atual++;
                res.innerHTML = `⚠️ ${atual}%`;
            }
        }, 20);

    }, 1200);
}
// ===== ANIMAÇÃO DE CONTAGEM ÁREA TÓXICA =====
function calcularToxico() {
    let total = 5;
    let pontos = 0;

    for (let i = 1; i <= total; i++) {
        let resposta = document.querySelector(`input[name="t${i}"]:checked`);

        if (resposta && resposta.value === "sim") {
            pontos++;
        }
    }

    let porcentagem = Math.round((pontos / total) * 100);
    let res = document.getElementById("resultadoToxico");

    // contador animado
    let atual = 0;
    res.innerHTML = "";
    res.classList.add("show");

    let intervalo = setInterval(() => {
        atual++;
        res.innerHTML = `Nível de toxicidade: ${atual}%`;

        if (atual >= porcentagem) clearInterval(intervalo);
    }, 20);

    // cor dinâmica
    if (porcentagem < 30) res.style.color = "#00ff88";
    else if (porcentagem < 70) res.style.color = "#ffaa00";
    else res.style.color = "#ff0033";
}

//acordeom pesquisa pessoal
function togglePesquisa() {
  const box = document.getElementById("pesquisaBox");
  const title = document.querySelector(".toggle-title");

  if (box.style.display === "none") {
    box.style.display = "block";
    title.innerHTML = "▲ Espiritual Do Indivíduo ⚜";
  } else {
    box.style.display = "none";
    title.innerHTML = "▼ Espiritual Do Indivíduo ⚜";
  }
}
// acordeom geral
document.querySelectorAll(".accordion-title").forEach(title => {
  title.addEventListener("click", () => {
    
    const content = title.nextElementSibling;

    const isOpen = content.style.display === "block";

    // fecha todos (opcional, estilo menu único)
    document.querySelectorAll(".accordion-content").forEach(c => {
      c.style.display = "none";
    });

    document.querySelectorAll(".accordion-title").forEach(t => {
      t.innerHTML = t.innerHTML.replace("▲", "▼");
    });

    // abre o clicado
    if (!isOpen) {
      content.style.display = "block";
      title.innerHTML = title.innerHTML.replace("▼", "▲");
    }
  });
});
// informação
function toggleInfo() {
  const box = document.getElementById("infoBox");

  if (box.style.display === "flex") {
    box.style.display = "none";
  } else {
    box.style.display = "flex";
  }
}

// ====================== RECLAME AQUI ======================
function buscarReclameAqui() {
    let nome = document.getElementById("reclameAqui").value.trim();
    if (!nome) return alert("Digite um nome!");
    
    const url = `https://www.google.com/search?q=${encodeURIComponent(nome)}+reclame+aqui`;
    window.open(url, "_blank");
}

function toggleDica() {
  const box = document.getElementById("dicaBox");

  if (box.style.display === "flex") {
    box.style.display = "none";
  } else {
    box.style.display = "flex";
  }
}

function toggleDicas() {
  const box = document.getElementById("dicainsta");

  if (box.style.display === "flex") {
    box.style.display = "none";
  } else {
    box.style.display = "flex";
  }
}

function toggleDicasx() {
  const box = document.getElementById("dicax");

  if (box.style.display === "flex") {
    box.style.display = "none";
  } else {
    box.style.display = "flex";
  }
}
