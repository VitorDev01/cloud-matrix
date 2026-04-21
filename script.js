function randomText () {
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

    setTimeout(function(){
        cloud.removeChild(e);
    },2000)

}

setInterval(function(){
    rain()
},20);

  function verificarSenha(){

let senha = prompt("Parece que vc não tem permissão aqui :):");

if(senha === "vocemeachou"){

window.open("https://www.google.com/search?q=inurl%3At.me+intext%3Apuxadas","_blank");

}

else{

alert("ACESSO NEGADO");

}

}
//animação h1

const lines = [
"(root㉿God'sEye.js)-[~/©vitordev01]",
"└─#Investigação Digital && ",
"└─#Osint + Cyber Segurança ",
];

let lineIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 50;

function typeEffect() {
  const el = document.querySelector(".typing");

  let currentLine = lines[lineIndex];

  if (!isDeleting) {
    el.innerHTML = lines
      .slice(0, lineIndex)
      .join("<br>") +
      (lineIndex > 0 ? "<br>" : "") +
      currentLine.substring(0, charIndex++);

  } else {
    el.innerHTML = lines
      .slice(0, lineIndex)
      .join("<br>") +
      (lineIndex > 0 ? "<br>" : "") +
      currentLine.substring(0, charIndex--);
  }

  if (!isDeleting && charIndex === currentLine.length) {
    setTimeout(() => {
      if (lineIndex < lines.length - 1) {
        lineIndex++;
        charIndex = 0;
      } else {
        isDeleting = true;
      }
    }, 800);
  }

  else if (isDeleting && charIndex === 0) {
    if (lineIndex > 0) {
      lineIndex--;
      charIndex = lines[lineIndex].length;
    } else {
      isDeleting = false;
    }
  }

  setTimeout(typeEffect, isDeleting ? 40 : speed);
}

typeEffect();
//caixa zap
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

// caixa id gmail
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

//x posts
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

//curtidos do insta
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

// ENTER funcionando
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("userInput");

  if (input) {
    input.addEventListener("keypress", function (e) {
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

// ============== busca facebook =====================
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
  res.innerHTML = "🔍 Escaneando dados...";

  setTimeout(() => {

    // parsing seguro
    let partes = val.split("-");
    let nascimento = new Date(partes[0], partes[1]-1, partes[2]);

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

    function signo(d,m){
      if((m==3&&d>=21)||(m==4&&d<=19)) return "Áries - Fogo";
      if((m==4&&d>=20)||(m==5&&d<=20)) return "Touro - Terra";
      if((m==5&&d>=21)||(m==6&&d<=20)) return "Gêmeos - Ar";
      if((m==6&&d>=21)||(m==7&&d<=22)) return "Câncer - Água";
      if((m==7&&d>=23)||(m==8&&d<=22)) return "Leão - Fogo";
      if((m==8&&d>=23)||(m==9&&d<=22)) return "Virgem - Terra";
      if((m==9&&d>=23)||(m==10&&d<=22)) return "Libra - Ar";
      if((m==10&&d>=23)||(m==11&&d<=21)) return "Escorpião - Água";
      if((m==11&&d>=22)||(m==12&&d<=21)) return "Sagitário - Fogo";
      if((m==12&&d>=22)||(m==1&&d<=19)) return "Capricórnio - Terra";
      if((m==1&&d>=20)||(m==2&&d<=18)) return "Aquário - Ar";
      return "Peixes - Água";
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
      1:"Aprendizado",
      2:"Serviço",
      3:"Alianças",
      4:"Oportunidades",
      5:"Definição",
      6:"Bênção",
      7:"Descanso"
    };

    // ================= SOMA =================
    let somaTotal = val.replaceAll("-","").split("")
      .reduce((a,b)=>a+parseInt(b),0);

    // ARCANO
    let arcanoNum = somaTotal;
    while (arcanoNum > 22) {
      arcanoNum = arcanoNum.toString().split("")
        .reduce((a,b)=>a+parseInt(b),0);
    }

    // REDUZIDO
    let reduzido = arcanoNum;
    while (reduzido > 9) {
      reduzido = reduzido.toString().split("")
        .reduce((a,b)=>a+parseInt(b),0);
    }

    let arcanos = {
      1:"O Mago",2:"A Sacerdotisa",3:"A Imperatriz",4:"O Imperador",
      5:"O Hierofante",6:"Os Enamorados",7:"O Carro",8:"A Justiça",
      9:"O Eremita",10:"A Roda",11:"A Força",12:"O Enforcado",
      13:"A Morte",14:"Temperança",15:"O Diabo",16:"A Torre",
      17:"A Estrela",18:"A Lua",19:"O Sol",20:"Julgamento",
      21:"O Mundo",22:"O Louco"
    };

    let hebraico = {
      1:"א (Alef)",2:"ב (Bet)",3:"ג (Gimel)",4:"ד (Dalet)",
      5:"ה (He)",6:"ו (Vav)",7:"ז (Zayin)",8:"ח (Chet)",
      9:"ט (Tet)",10:"י (Yod)",11:"כ (Kaf)",12:"ל (Lamed)",
      13:"מ (Mem)",14:"נ (Nun)",15:"ס (Samekh)",16:"ע (Ayin)",
      17:"פ (Pe)",18:"צ (Tsade)",19:"ק (Qof)",20:"ר (Resh)",
      21:"ש (Shin)",22:"ת (Tav)"
    };

    let hebraicoSignificado = {
      1:"Unidade / início",
      2:"Casa / dualidade",
      3:"Movimento / crescimento",
      4:"Porta / estrutura",
      5:"Revelação / graça",
      6:"Conexão / ligação",
      7:"Perfeição espiritual",
      8:"Vida / transcendência",
      9:"Verdade / bem",
      10:"Ação / mão",
      11:"Força / potencial",
      12:"Aprendizado",
      13:"Transformação",
      14:"Continuidade",
      15:"Proteção",
      16:"Visão",
      17:"Expressão",
      18:"Justiça",
      19:"Propósito",
      20:"Liderança",
      21:"Poder",
      22:"Aliança"
    };

    // ================= RESULTADO =================
    res.innerHTML = `
      <p>🧬 Idade: ${anos} anos ${meses} meses</p>
      <p>🎂 Aniversário em: ${mesesRest}m ${diasRest}d</p>
      <p>♈ Signo: ${signo(d,m)}</p>
      <p>📊 Geração: ${ger}</p>

      <p>🧭 Ciclo: ${ciclo}º ano - ${fases[ciclo]}</p>

      <hr>

      <p>🔢 Número base: ${reduzido}</p>
      <p>🃏 Arcano: ${arcanoNum} - ${arcanos[arcanoNum]}</p>

      <p>✡️ Letra: ${hebraico[arcanoNum]}</p>
      <p>📖 Significado: ${hebraicoSignificado[arcanoNum]}</p>
    `;

  }, 800);
}
