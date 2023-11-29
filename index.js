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

// Configurar rota para arquivos JavaScript no diretório 'scripts'
app.use('/scripts', (req, res, next) => {
    res.header('Content-Type', 'application/javascript'); // Corrigido para 'application/javascript'
    next();
  }, express.static(path.join(__dirname, 'scripts')));
  
  // Configurar rota para arquivos JavaScript no diretório 'scripts/js'
  app.use('/js', express.static(path.join(__dirname, 'scripts/js')));

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
    router.get('/VenezuelaFinal3',function(req,res){
        res.sendFile(path.join(__dirname+'/venezuela\\arVenezuela\\venezuelaFinal3.html'));
    })
    
    
// FIM VENEZUELA

// HAITI
    router.get('/HaitiAlteracaoOuAutoricacao',function(req,res){
        res.sendFile(path.join(__dirname+'/haiti\\haitiARorAP.html'));
    })
    router.get('/HaitiValidadeCRNM',function(req,res){
        res.sendFile(path.join(__dirname+'/haiti\\apHaiti\\haitiValidadeCRNM.html'));
    })
    router.get('/HaitiDados',function(req,res){
        res.sendFile(path.join(__dirname+'/haiti\\arHaiti\\haitiNomeFiliacao.html'));
    })
    router.get('/HaitiDados2',function(req,res){
        res.sendFile(path.join(__dirname+'/haiti\\apHaiti\\haitiDocVencido\\haitiDados2.html'));
    })
    router.get('/HaitiDados3',function(req,res){
        res.sendFile(path.join(__dirname+'/haiti\\apHaiti\\haitiDocValido\\haitiDados3.html'));
    })
    router.get('/HaitiContatarPF',function(req,res){
        res.sendFile(path.join(__dirname+'/haiti\\apHaiti\\haitiDocVencido\\haitiContatarPF.html'));
    })
    router.get('/HaitiFinal1',function(req,res){
        res.sendFile(path.join(__dirname+'/haiti\\arHaiti\\haitiFInal1.html'));
    })
    router.get('/HaitiFinal2',function(req,res){
        res.sendFile(path.join(__dirname+'/haiti\\apHaiti\\haitiDocVencido\\haitiFinal2.html'));
    })
    router.get('/HaitiFinal3',function(req,res){
        res.sendFile(path.join(__dirname+'/haiti\\apHaiti\\haitiDocValido\\haitiFinal3.html'));
    })
// FIM HAITI

//documento
router.get('/Doc',function(req,res){
    res.sendFile(path.join(__dirname+'/documento\\documento.html'));
})
router.get('/Doc2',function(req,res){
    res.sendFile(path.join(__dirname+'/documento\\documento2.html'));
})
//fim documento

router.get('/sobre',function(req,res){
    res.sendFile(path.join(__dirname+'/sobre.html'));
})


app.use('/', router);

/*
// Conectando ao banco de dados (arquivo conectando.js)
const conectando = require('./scripts/conectando.js');
conectando.conectar();
*/


app.listen(process.env.port || 3000);

console.log("Server rodando na 3000");