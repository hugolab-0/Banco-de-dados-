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
const filmeDAO = require('../../model/DAO/filme/filme.js')

// Função para inserir um novo filme
const inserirNovoFilme = async function(filme, contentType) {


    // fazendo um clone do objeto JSON para manipular a sua estrutura local sem 
    // modificar a estrututra original
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        

    if(String(contentType).toUpperCase() == 'APPLICATION/JSON') {

    let validar = await validarDados(filme)

    if(validar) {
        return validar
    }
    else{ 
        // encaminha os dados do filme para o dao
        let result = await filmeDAO.insertFilme(filme)

        if(result) { // 201
            message.DEFAULT_MESSAGE.status = message.SUCESS_CREATED_ITEM.status
            message.DEFAULT_MESSAGE.status_code = message.SUCESS_CREATED_ITEM.status_code
            message.DEFAULT_MESSAGE.message = message.SUCESS_CREATED_ITEM.message
        }
        else{ // 500 (model)
            return  message.ERROR_INTERNAL_SERVER_MODEL
        }


        return message.DEFAULT_MESSAGE
    }
    }else {
        return message.ERROR_CONTENT_TYPE
    }

} catch (error) {// 500 (controler)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
}
}

// função para atualizar um filme
const atualizarFilme = async function() {
    
}

// função para retornar todos os filmes
const listaFilme = async function() {
    // fazendo um clone do objeto JSON para manipular a sua estrutura local sem 
    // modificar a estrututra original
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        let result = await filmeDAO.selectAllFilme()

        if(result) {
            if(result.length > 0) {
                message.DEFAULT_MESSAGE.status = message.SUCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code = message.SUCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.result = result

                return message.DEFAULT_MESSAGE

            }else {
                return message.ERROR_NOT_FOUND
            }

        }else {
            return message.ERROR_INTERNAL_SERVER_MODEL
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
    
}

// função para buscar um filme pelo ID
const buscarFilme = async function() {
    
}

const validarDados = async function(filme) {
       // fazendo um clone do objeto JSON para manipular a sua estrutura local sem 
    // modificar a estrututra original
    let message = JSON.parse(JSON.stringify(config_message))

    
    if(filme.nome == '' || filme.nome == null || filme.nome.length > 80 || filme.nome == undefined) {
        message.ERROR_BAD_REQUEST.field =  '[NOME] INVALIDO'
        return message.ERROR_BAD_REQUEST
    }
    else if(filme.data_lancamento == undefined || filme.data_lancamento.length != 10 || filme.data_lancamento == null || filme.data_lancamento == '') {
        message.ERROR_BAD_REQUEST.field = '[DATA_LANCAMENTO] INVALIDA'
        return message.ERROR_BAD_REQUEST

    }
    else if(filme.duracao == '' || filme.duracao == null || filme.duracao == undefined || filme.duracao.length < 5) {
        message.ERROR_BAD_REQUEST.field = '[DURACAO] INVALIDA'
        return message.ERROR_BAD_REQUEST

    }
    else if(filme.sinopse == '' || filme.sinopse == null || filme.sinopse == undefined ) {
        message.ERROR_BAD_REQUEST.field = '[SINOPSE] INVALIDA'
        return message.ERROR_BAD_REQUEST

    }
    else if(isNaN(filme.avaliacao) || filme.avaliacao.length > 3) {
        message.ERROR_BAD_REQUEST.field = '[AVALIACAO] INVALIDA'
        return message.ERROR_BAD_REQUEST

    }
    else if(filme.valor == '' || filme.valor == null || filme.valor == undefined || filme.valor.split('.')[0].length > 3 || isNaN(filme.valor)) {
        message.ERROR_BAD_REQUEST.field = '[VALOR] INVALIDA'
        return message.ERROR_BAD_REQUEST
    }
    else if(filme.capa.length > 255){
        message.ERROR_BAD_REQUEST.field = '[CAPA] INVALIDA'
        return message.ERROR_BAD_REQUEST
    }else {
        return false
    }
}

module.exports = {
    inserirNovoFilme
}