<?php

echo 'Conectou';
// Configurações de conexão com o banco de dados (substitua pelos seus próprios dados)
$host = 'localhost';
$usuario = 'usuario';
$senha = 'senha';
$banco = 'base_de_dados';
$port = '3306';

// Conexão com o banco de dados
$conexao = new mysqli($host, $usuario, $senha, $banco, $port);

// Verifica a conexão
if ($conexao->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conexao->connect_error);
}


// Recupera os dados do formulário (assumindo que os dados são enviados como JSON)
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);

// Prepara a instrução SQL para inserção dos dados na tabela
$sql = "INSERT INTO dados_pessoais (nome, mae, est_cvl, cid_nasc, sobrenome, pai, data_nasc) VALUES (?, ?, ?, ?, ?, ?, ?)";

// Prepara a declaração SQL
$stmt = $conexao->prepare($sql);

// Verifica se a preparação da declaração foi bem-sucedida
if ($stmt === false) {
    die("Erro na preparação da declaração SQL: " . $conexao->error);
}

// Vincula os parâmetros à declaração
$stmt->bind_param("sssssss", $data['nombre'], $data['madreNombre'], $data['estadoCivil'], $data['ciudadNacimiento'], $data['sobrenome'], $data['nombrePadre'], $data['fechaNascimento']);

// Executa a declaração
if ($stmt->execute() === false) {
    die("Erro na execução da declaração SQL: " . $stmt->error);
}

// Fecha a declaração e a conexão
$stmt->close();
$conexao->close();

// Responde ao cliente (pode ser útil para depuração)
echo "Dados inseridos com sucesso no banco de dados!";
?>
