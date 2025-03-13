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

/* botão de mudança de tema (claro/escuro) 
 -------------- */
/* const chk = document.getElementById('chk');
const mobileThemeButton = document.getElementById('mobile-theme-toggle');

// Função para atualizar o tema
function aplicarTema(temaEscuro) {
    if (temaEscuro) {
        document.body.classList.add("dark");
        chk.checked = true;
        mobileThemeButton.textContent = "🌙";
    } else {
        document.body.classList.remove("dark");
        chk.checked = false;
        mobileThemeButton.textContent = "☀️";
    }
}

// Verifica a preferência do sistema
const temaSistemaEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
aplicarTema(temaSistemaEscuro);

// Adiciona um event listener para quando o usuário mudar manualmente
chk.addEventListener("change", () => {
    aplicarTema(chk.checked);
});

// Adiciona um evento para o botão no mobile
mobileThemeButton.addEventListener("click", () => {
    aplicarTema(!document.body.classList.contains("dark"));
}); */

document.addEventListener("DOMContentLoaded", function () {
  const chk = document.getElementById("chk");
  const mobileThemeButton = document.getElementById("mobile-theme-toggle");

  // Função para aplicar o tema escuro ou claro
  function aplicarTema(temaEscuro) {
      if (temaEscuro) {
          document.body.classList.add("dark");
          localStorage.setItem("theme", "dark");
          if (chk) chk.checked = true;
          if (mobileThemeButton) mobileThemeButton.textContent = "☀️"; // Sol (tema claro)
      } else {
          document.body.classList.remove("dark");
          localStorage.setItem("theme", "light");
          if (chk) chk.checked = false;
          if (mobileThemeButton) mobileThemeButton.textContent = "🌙"; // Lua (tema escuro)
      }
  }

  // Verifica o tema salvo no localStorage
  const temaSalvo = localStorage.getItem("theme");

  if (temaSalvo) {
      aplicarTema(temaSalvo === "dark");
  } else {
      // Se não houver tema salvo, verifica o tema do sistema
      const temaSistemaEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
      aplicarTema(temaSistemaEscuro);
  }

  // Event listener para o checkbox
  if (chk) {
      chk.addEventListener("change", () => {
          aplicarTema(chk.checked);
      });
  }

  // Event listener para o botão mobile
  if (mobileThemeButton) {
      mobileThemeButton.addEventListener("click", () => {
          aplicarTema(!document.body.classList.contains("dark"));
      });
  }
});