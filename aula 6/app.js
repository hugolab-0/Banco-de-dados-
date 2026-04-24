// importe das dependencias para criar a API 
const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')


// import da controller
const controllerFilme = require('./controller/filme/controller_filmes.js')

// criando um projeto para manipular dados do body da api em formato JSON
const bodyParserJSON = bodyParser.json()

// criando um objeto para manipular o express
const app =  express()

// conjunto de permissões a serem aplicas do CORs na API 
const corsOptions = {
    origin: ['*'], //A origem da requisição, podendo ser o IP ou o "*"(todos)
    methods: 'GET, POST, PUT, DELETE, OPTIONS', //Os methods são os verbos(metodos) que serao liberados na API (GET, POST, PUT e DELETE)
    allowedHeaders: ['content-type', 'autorization'] //AllowedHeader são permissões de cabeçalho do cors
}
// decretado o que o app ira usar e da onde ele vai tirar as configurações
// ele serve para configurações da API usando o CORS
app.use(cors(corsOptions))

// ENDPOINTS
app.post('/v1/senai/locadora/filme', bodyParserJSON, async function(req, res){

    // recebe o conteudo dentro do body da requisição
    let dados = req.body
 
    let contentType = req.headers['content-type']
    let result = await controllerFilme.inserirNovoFilme(dados, contentType)

        res.status(result.status_code)
        res.json(result)
})

app.get('/v1/senai/locadora/lista/filme', async function(req, res) {
    let result = await controllerFilme.listaFilme()

    res.status(result.status_code)
    res.json(result)
    
})

app.get('/v1/senai/locadora/filme/:id', async function(req, res) {

    let id = req.params.id
    
    let result = await controllerFilme.buscarFilme(id)

    res.status(result.status_code)
    res.json(result)
    
})


// serve para inicar a API para receber requisiçõess
app.listen(8080, function(){
    console.log('arquivo pronto')
})