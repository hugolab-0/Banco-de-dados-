/********* 
 * Objetivo: Arquivo responsavel pelo crud no Banco de dados MySQL na tabela filme
 * Data>: 15/04/2026
 * 
 * Autor: Hugo
 * Versão: 1.0
***********/

// criar uma função para cada função do crud
// async -> permite que uma função aguarde a outra ser processada antes dela


// Import da biblioteca para gerenciar o banco de dados Mysql no Node.js
const knex = require('knex')

// Import do arquivo de configuração para conexão com o DB Mysql
const knexConfig = require('../../database_config_knex/knexFile.js')

// Vai criar a conexão com o DB Mysaql
const knexConex = knex(knexConfig.development)

// inserir dados na tabla de filmes 
const insertFilme = async function(filme){

    try {
        
    
    let sql = `
    insert into  tbl_filme (
						nome,
						data_lancamento,
                        duracao,
                        sinopse,
                        avaliacao,
                        valor,
                        capa
                        )
    values (
		    ´${filme.nome}´,
		    ´${filme.data_lancamento}´,
            ´${filme.duracao}´,
            ´${filme.sinopse}´,
            if(´${filme.avaliacao}´ = '', null, ´${filme.avaliacao}´),
		    ´${filme.valor}´,
            ´${filme.capa}´
            );`

            //  Vai executar o scriptSQL no banco de dados
            let result = await knexConex.raw(sql)


            if(result) {
                return true 
            }
            else {
                return false
            }

    } catch (error) {
        return false
    }
    

}

// função para atualizar um filme existente na tabela
const updateFilme = async function(filme) {
    
}

// fução par aretornar todos os dados da tabela de filme
const selectAllFilme = async function() {
    
}

// função deve selecionar um filme especifico filtrando pelo id
const selectByIdFilme = async function(id){
    try {
        // script para retornar todos os filmes
        let sql = 'select * from tbl_filme order by id desc'

        // executa no banco de dados o script SQL para retornar os filmes
        let result = await knexConex.raw (aql)
        
        // validação para varificar se o retorno do DB é umm array
        // se o scriptSQL não for array retorna dalso
        if(Array.isArray(result )) {
            return result
        }
        else{
            return false
        }
    } catch (error) {
        return false
    }

}

// função para deletar o filme selecionado
const deleteFilme = async function(id) {
    
}

module.exports = {
    insertFilme,
    updateFilme,
    selectAllFilme,
    selectByIdFilme,
    deleteFilme
}