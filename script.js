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
"(root㉿vitor)-[~/©vitordev01]",
"└─# Hub Ferramentas OSINT",
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

  // remove tudo que não for número
  numero = numero.replace(/\D/g, "");

  const url = `https://wa.me/${numero}`;
  window.open(url, "_blank");
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

