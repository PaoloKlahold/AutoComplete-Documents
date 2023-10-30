const express = require('express');

const app = express();

const path = require('path');

const router = express.Router();

const mime = require('mime');


router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
})

router.get('/sobre',function(req,res){
    res.sendFile(path.join(__dirname+'/sobre.html'));
})

router.get('/HaitiAlteracaoOuAutoricacao',function(req,res){
    res.sendFile(path.join(__dirname+'/haiti\\haitiARorAP.html'));
})
router.get('/VenezuelaAlteracaoOuAutoricacao',function(req,res){
    res.sendFile(path.join(__dirname+'/venezuela\\venezuelaARorAP.html'));
})
router.get('/HaitiValidadeCRNM',function(req,res){
    res.sendFile(path.join(__dirname+'/haiti\\apHaiti\\haitiValidadeCRNM.html'));
})
router.get('/VenezuelaValidadeCRNM',function(req,res){
    res.sendFile(path.join(__dirname+'/venezuela\\apVenezuela\\venezeulaValidadeCRNM.html'));
})

app.use('/', router);

app.listen(process.env.port || 3000);

console.log("Server rodando na 3000");