const express = require('express');

const app = express();

const path = require('path');

const router = express.Router();

const mime = require('mime');



const mysql = require('mysql');

// Configuração do MySQL
const connection = mysql.createConnection({
    host: 'localhost', // ou o IP do seu host Docker, dependendo do seu ambiente
    user: 'user',
    password: '4321',
    database: 'ImigrantesDados',
    port: '3306' // Porta exposta no contêiner
});

// Conectar ao MySQL
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }

    console.log('Conectado ao MySQL!');

    // Comando SQL para criar o banco de dados
    const createDatabaseQuery = 'CREATE DATABASE IF NOT EXISTS ImigrantesDados';

    // Executar o comando SQL para criar o banco de dados
    connection.query(createDatabaseQuery, (err, result) => {
        if (err) {
            console.error('Erro ao criar o banco de dados:', err);
        } else {
            console.log('Banco de dados criado com sucesso!');
        }

        // Fechar a conexão após a execução do comando
        connection.end();
    });
});


router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
})

//VELEZUELA
    router.get('/VenezuelaAlteracaoOuAutoricacao',function(req,res){
        res.sendFile(path.join(__dirname+'/venezuela\\venezuelaARorAP.html'));
    })
    router.get('/VenezuelaAlteracaoOuAutoricacao',function(req,res){
        res.sendFile(path.join(__dirname+'/venezuela\\venezuelaARorAP.html'));
    })
    router.get('/VenezuelaValidadeCRNM',function(req,res){
        res.sendFile(path.join(__dirname+'/venezuela\\apVenezuela\\venezeulaValidadeCRNM.html'));
    })
    router.get('/VenezuelaNomeEFiliacao',function(req,res){
        res.sendFile(path.join(__dirname+'/venezuela\\arVenezuela\\venezuelaNomeFiliacao.html'));
    })
    router.get('/VenezuelaContatarPF',function(req,res){
        res.sendFile(path.join(__dirname+'/venezuela\\apVenezuela\\venezuelaDocVencido\\venezuelaContatarPF.html'));
    })
    router.get('/VenezuelaDados',function(req,res){
        res.sendFile(path.join(__dirname+'/venezuela\\apVenezuela\\venezuelaDocVencido\\venezuelaDados.html'));
    })
    router.get('/VenezuelaDados2',function(req,res){
        res.sendFile(path.join(__dirname+'/venezuela\\apVenezuela\\venezuelaDocValido\\venezuelaDados2.html'));
    })
    router.get('/VenezuelaFinal1',function(req,res){
        res.sendFile(path.join(__dirname+'/venezuela\\apVenezuela\\venezuelaDocVencido\\finalVenezuela1.html'));
    })
    router.get('/VenezuelaFinal2',function(req,res){
        res.sendFile(path.join(__dirname+'/venezuela\\apVenezuela\\venezuelaDocValido\\venezuelaFinal2.html'));
    })
    
    
// FIM VENEZUELA

// HAITI
    router.get('/HaitiAlteracaoOuAutoricacao',function(req,res){
        res.sendFile(path.join(__dirname+'/haiti\\haitiARorAP.html'));
    })
    router.get('/HaitiValidadeCRNM',function(req,res){
        res.sendFile(path.join(__dirname+'/haiti\\apHaiti\\haitiValidadeCRNM.html'));
    })
// FIM HAITI


router.get('/sobre',function(req,res){
    res.sendFile(path.join(__dirname+'/sobre.html'));
})

router.get('/styles/nacionalidade.css', function(req, res) {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname + '/styles/nacionalidade.css'));
  });

router.get('/scripts/nacionalidade.js', function(req, res) {
    res.setHeader('Content-Type', 'text/js');
    res.sendFile(path.join(__dirname + '/scripts/nacionalidade.js'));
  });


app.use('/', router);

app.listen(process.env.port || 3000);

console.log("Server rodando na 3000");