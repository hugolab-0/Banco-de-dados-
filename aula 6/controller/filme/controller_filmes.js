/************
 * Objetivo: Arquivo responsavel pela validação, tratamento 
 *           e manipulação de dados para o CRUD de filmes
 * 
 * data: 17/04/2026
 * autor: Hugo 
 * Versão: 1.0
 *************/


const config_message = require('../modulo/configMensagens.js')

// improte do arquivo dao para fazer o crud do filme no banco
const filmeDAO = require('../../model/DAO/filme.js')

// Função para inserir um novo filme
const inserirNovoFilme = async function(filme) {

    // fazendo um clone do objeto JSON para manipular a sua estrutura local sem 
    // modificar a estrututra original
    let message = JSON.parse(JSON.stringify(config_message))

    if(filme.nome == '' || filme.nome == null || filme.nome.length > 80 || filme.nome == undefined) {
        message.ERROR_BAD_REQUEST.field =  '[NOME] INVALIDO'
        

    }
    else if(filme.data_lancamento == undefined || filme.data_lancamento.length != 10 || filme.data_lancamento == null || filme.data_lancamento == '') {
        message.ERROR_BAD_REQUEST.field = '[DATA_LANCAMENTO] INVALIDA'

    }
    else if(filme.duracao == '' || filme.duracao == null || filme.duracao == undefined || filme.duracao.length > 5) {
        message.ERROR_BAD_REQUEST.field = '[DURACAO] INVALIDA'

    }
    else if(filme.sinopse == '' || filme.sinopse == null || filme.sinopse == undefined ) {
        message.ERROR_BAD_REQUEST.field = '[SINOPSE] INVALIDA'

    }
    else if(isNaN(filme.avaliacao) || filme.avaliacao.length > 3) {
        message.ERROR_BAD_REQUEST.field = '[AVALIACAO] INVALIDA'
        
    }
    else if(filme.valor == '' || filme.valor == null || filme.valor == undefined || filme.valor.length > 5 || isNaN(filme.valor)) {
        message.ERROR_BAD_REQUEST.field = '[VALOR] INVALIDA'
        
    }
    else if(filme.capa.length > 255){
        message.ERROR_BAD_REQUEST.field = '[CAPA] INVALIDA'
    }
    else{ 
        let result = await filmeDAO.insertFilme(filme)
    }
}

// função para atualizar um filme
const atualizarFilme = async function() {
    
}

// função para retornar todos os filmes
const listaFilme = async function() {
    
}

// função para buscar um filme pelo ID
const buscarFilme = async function() {
    
}

