function menuShow() {
  let menuArea = document.getElementById("Menu-Open");
  let menuMobile = document.getElementById("Mobile");

  // Alternar a classe 'ativo' no menu mobile
  menuMobile.classList.toggle("ativo");

  if (menuArea.style.width === "50vw") {
    menuArea.style.width = "0vh";
    menuArea.style.display = "none";
    document.removeEventListener("click", closeMenuOnClickOutside);
  } else {
    menuArea.style.width = "50vw";
    menuArea.style.display = "block";
    setTimeout(() => {
      document.addEventListener("click", closeMenuOnClickOutside);
    }, 0); // Adiciona o listener após a abertura do menu
  }
}

function closeMenuOnClickOutside(event) {
  let menuArea = document.getElementById("Menu-Open");

  if (!menuArea.contains(event.target) && !menuArea.contains(event.target)) {
    menuShow();
  }
}
