const mysql = require('mysql');

function conectar(){
    // Configurações do banco de dados
    const connection = mysql.createConnection({
    host: 'localhost', // O host é 'localhost' porque o MySQL está sendo executado no mesmo host que o aplicativo Node.js
    user: 'usuario',
    password: 'senha',
    database: 'base_de_dados',
    port: 3306, // A porta padrão do MySQL
    });

    // Conectar ao banco de dados
    connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }

    console.log('Conectado ao banco de dados MySQL');

    const deleteTableSQL = 'DROP TABLE IF EXISTS dados_pessoais';

    // Realize as operações no banco de dados aqui
            // Script SQL para criar a tabela
            const createTableSQL = `
            CREATE TABLE dados_pessoais (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(255) NOT NULL,
                mae VARCHAR(255) NOT NULL,
                est_cvl VARCHAR(20) NOT NULL,
                cid_nasc VARCHAR(100) NOT NULL,
                sobrenome VARCHAR(255) NOT NULL,
                pai VARCHAR(255) NOT NULL,
                data_nasc DATE NOT NULL
            );
            `;

            // Executar o script SQL
            connection.query(createTableSQL, (err, results, fields) => {
            if (err) {
            console.error('Erro ao criar a tabela:', err);
            return;
            }

            console.log('Tabela criada com sucesso');
            });

        
    });
}

module.exports = {
    conectar: conectar
  };