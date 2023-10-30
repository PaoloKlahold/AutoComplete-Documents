const mime = require('mime');

// Configura o tipo MIME correto para o arquivo script.js
mime.define({
  'application/javascript': ['js']
});

alert('Está puxando o script.js');

const btnHaiti = document.querySelector('#btnHaiti');

btnHaiti.addEventListener('click', function() {
  alert('Haitiano');
});