function enviarDados() {
    // Obtenha os valores dos campos do formulário
    var nombre = document.getElementById('SuNombre1').value;
    var madreNombre = document.getElementById('MadreNombre1').value;
    var estadoCivil = document.getElementById('estadoCivil').value;
    var ciudadNacimiento = document.getElementById('Ciudad de nacimiento1').value;
    var sobrenome = document.getElementById('SuSobrenome1').value;
    var nombrePadre = document.getElementById('NombrePadre1').value;
    var fechaNascimento = document.getElementById('FechaDeNascimento1').value;

    // Crie um objeto com os dados do formulário
    var dados = {
      nombre: nombre,
      madreNombre: madreNombre,
      estadoCivil: estadoCivil,
      ciudadNacimiento: ciudadNacimiento,
      sobrenome: sobrenome,
      nombrePadre: nombrePadre,
      fechaNascimento: fechaNascimento
    };

    // Use AJAX para enviar os dados para o servidor
    var xhr = new XMLHttpRequest();
    xhr.open('POST', './scripts/envia.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // A resposta do servidor está disponível em xhr.responseText
        console.log(xhr.responseText);
        // Você pode adicionar aqui lógica adicional conforme necessário
      }
    };

    // Converta o objeto de dados para JSON antes de enviar
    var dadosJSON = JSON.stringify(dados);
    xhr.send(dadosJSON);
  }