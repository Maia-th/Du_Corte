function menuShow() {
  let menuArea = document.getElementById("Menu-Open");
  let menuMobile = document.getElementById("Mobile")
  menuMobile.classList.toggle('ativo');
  
  if (menuArea.style.width == "50vw") {
    menuArea.style.width = "0vh";
  } else {
    menuArea.style.width = "50vw";
  }
}
