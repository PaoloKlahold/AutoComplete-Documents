
// Obtenha os botões
const btnHaiti = document.querySelector('#btnHaiti');
if (btnHaiti) {
  btnHaiti.addEventListener('click', goToHaiti);
}

const btnVenezolano = document.querySelector('#btnVenezolano');

// Defina as funções que serão executadas quando os botões forem clicados
function goToHaiti() {
  window.location.href = 'https://pt.wikipedia.org/wiki/Haiti';
}

function goToVenezolano() {
  window.location.href = 'https://pt.wikipedia.org/wiki/Venezuela';
}

// Adicione os eventos onclick aos botões
btnHaiti.addEventListener('click', goToHaiti);
btnVenezolano.addEventListener('click', goToVenezolano);
