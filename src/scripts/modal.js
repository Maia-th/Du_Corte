// Obtém os elementos das imagens e dos modais
var cardsPrecos= document.querySelectorAll(".BarbServ");
var modais = document.querySelectorAll(".modal");

// Adiciona eventos de clique para exibir os modais
cardsPrecos.forEach(function (imagem, index) {
  imagem.onclick = function () {
    modais[index].style.display = "block";
  };
});

// Obtém os elementos dos botões fechar
var closeBtns = document.querySelectorAll(".close");

// Adiciona eventos de clique para fechar os modais
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.parentElement.parentElement;
    modal.style.display = "none";
  };
});

// Fecha os modais se o usuário clicar fora deles
window.onclick = function (event) {
  modais.forEach(function (modal) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};
