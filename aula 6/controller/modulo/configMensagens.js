/**
 * Objetivo: arquivo responsavel pela configuração e padronização das mensagens da API
 * Data: 17-04-2026
 * autor: hugo
 * versão: 1.0
 **/

// Objeto padrão de resposta da API (base para todas as respostas)
const DEFAULT_MESSAGE = {
    api_description: 'API para gerenciar o controle de filmes', // descrição da API
    development:     'Hugo Alves Vieira', // nome do desenvolvedor
    version:         '1.0.4.26', // versão da API

    status: Boolean,      // status da resposta (true ou false)
    status_code: Number,  // código HTTP da resposta (200, 201, 400, etc.)
    Response: {}          // objeto que pode armazenar dados de retorno
}

// mensagem de erro da api (quando a requisição está inválida)
const ERROR_BAD_REQUEST = {
    status: false, 
    status_code: 400, 
    message:'Os dados enviados na requisição não estão corretos...'
}

// mensagens de sucesso da api (quando um item é criado com sucesso)
const SUCESS_CREATED_ITEM = {
    status: true, 
    status_code: 201, 
    message: 'requisitos inseridos com sucesso'
} 

const ERROR_INTERNAL_SERVER_MODEL = {
    status: false, 
    status_code: 500, 
    message:'Não foi possivel processar a requisição por conta de erro na modelagem de dados.'
}

const ERROR_CONTENT_TYPE = {
    status: false, 
    status_code: 415, 
    message:'Não foi possivel processar a requisição, pois formato de dados aceito pela api é somente json.'
}

const ERROR_INTERNAL_SERVER_CONTROLLER = {
    status: false, 
    status_code: 500, 
    message:'Não foi possivel processar a requisição por conta de erro no controle de dados.'
}


// exporta os objetos para serem usados em outros arquivos do projeto
module.exports = {
    ERROR_BAD_REQUEST,
    SUCESS_CREATED_ITEM,
    DEFAULT_MESSAGE,
    ERROR_INTERNAL_SERVER_MODEL,
    ERROR_CONTENT_TYPE,
    ERROR_INTERNAL_SERVER_CONTROLLER
}