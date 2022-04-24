module.exports = (app)=>{
    //importar a configuração do database
    var conexao = require('../config/database')

    //executar a conexao
    conexao()

    //importar modelo mygrid
    var mygrid = require('../models/mygrid')

    //abrir formulário
    app.get('/mygrid',async(req,res)=>{
        var resultado = await mygrid.find()
        res.render('mygrid.ejs',{dados:resultado})
        //console.log(resultado)
    })

    //gravar as informações do formulário no banco de dados
    app.post('/mygrid',(req,res)=>{
        var documento = new mygrid({
            titulo:req.body.titulo,
            texto:req.body.texto
        }).save()
        .then(()=>{res.redirect('/mygrid')})
        .catch(()=>{res.send('Não foi possível gravar')})   
    })
}