/**
 * Objetivo: arquivo responsavel pela configuração e padronização das mensagens da API
 * Data: 17-04-2026
 * autor: hugo
 * versão: 1.0
 **/

const DEFAULT_MESSAGE = {
    api_description: 'API para gerenciar o controle de filmes',
    development:     'Hugo Alves Vieira',
    version:         '1.0.4.26',

    status: Boolean,
    status_code: Number,
    Response: {}
}

// mensagem de erro da api
const ERROR_BAD_REQUEST = {status: false, status_code: 400, message:'Os dados enviados na requisição não estão corretos...'}

// mensagens de sucesso da api
const SUCESS_CREATED_ITEM = {status: true, status_code: 201, message: 'requisitos inseridos com sucesso'} 

module.exports = {
    ERROR_BAD_REQUEST,
    SUCESS_CREATED_ITEM,
    DEFAULT_MESSAGE
}