const express = require('express');

const app = express();

const path = require('path');

const router = express.Router();

const mime = require('mime');


//Código necessário para o nodejs servir os arquivos estáticos do bootstrap
app.use('/styles', (req, res, next) => {
    res.header('Content-Type', 'text/css');
    next();
  }, express.static(path.join(__dirname, 'styles')));
app.use('/css', express.static(path.join(__dirname,'styles/css')))

app.use('/scripts', (req, res, next) => {
    res.header('Content-Type', 'text/js');
    next();
  }, express.static(path.join(__dirname, 'scripts')));
app.use('/js', express.static(path.join(__dirname,'scripts/js')))

const phpExpress = require('php-express')();
// Configuração do PHP
app.engine('php', phpExpress.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'php');

// Middleware para manipular solicitações PHP
app.all(/.+\.php$/, phpExpress.router);


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


app.use('/', router);


// Conectando ao banco de dados (arquivo conectando.js)
const conectando = require('./scripts/conectando.js');
conectando.conectar();



app.listen(process.env.port || 3000);

console.log("Server rodando na 3000");