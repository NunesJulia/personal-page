// Seleciona elementos
const navigation = document.querySelector("#navigation");
const notebook_1 = document.querySelector("#notebook-1");

// Rolagem da janela
window.addEventListener("scroll", onScroll);
onScroll();

// Define um tempo limite após o carregamento da janela
window.onload = setTimeout(() => {
  notebook_1.style.opacity = 0;

  notebook_1.style.animation = "none";
  notebook_2.style.animation = "none";
  notebook_2_white.style.animation = "none";
  vidro.style.animation = "none";
}, 4000);

// Função chamada quando a janela é rolada
function onScroll() {
  showNavOnScroll();

  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(favorite);
  activateMenuAtCurrentSection(contact);
}

// Mostra a navegação quando a página é rolada
function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

// Revela elementos com animação na página usando a biblioteca ScrollReveal
ScrollReveal({
  origin: "bottom",
  distance: "50px",
  duration: 1000,
}).reveal(
  `#home, 
  #home img, 
  #about, 
  #about header, 
  #about p,
  #about img,
  #projects,
  #projects header,
  #projects .card,
  #knowledge,
  #knowledg header,
  #knowledg .card,
  #contact,
  #contact header`
);
