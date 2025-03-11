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