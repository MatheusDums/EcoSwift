/* HowToUse Function */
var elementosStep = document.querySelectorAll(".step");

elementosStep.forEach(function (step) {
  step.addEventListener("click", function () {
    step.classList.toggle("ativa");
  });
});

/* Reviews Carrousel */

let count = 1;
document.getElementById("radio1").checked = true;
setInterval(function () {
  nextReview();
}, 5000);

function nextReview() {
  count++;
  if (count > 4) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}

/* Menu Mobile */

function menuShow() {
  let menuMobile = document.querySelector('.menu_mobile');
  if(menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
  } else {
    menuMobile.classList.add('open')
  }
}

/* botão de mudança de tema (claro/escuro) */

const chk = document.getElementById('chk');

// Função para atualizar o tema
function aplicarTema(temaEscuro) {
    if (temaEscuro) {
        document.body.classList.add("dark");
        chk.checked = true;
    } else {
        document.body.classList.remove("dark");
        chk.checked = false;
    }
}

// Verifica a preferência do sistema
const temaSistemaEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
aplicarTema(temaSistemaEscuro);

// Adiciona um event listener para quando o usuário mudar manualmente
chk.addEventListener("change", () => {
    aplicarTema(chk.checked);
});F