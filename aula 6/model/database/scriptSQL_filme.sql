# criando o database de filmes 
create database db_filmes_20261_a;

# indicando que vai usar 
use db_filmes_20261_a;

# criando a tabela de filmes 
create table tbl_filme(
# complementos dentro da tabela
	id int not null primary key auto_increment,
    nome varchar(80) not null,
    data_lancamento date not null,
    duracao time not null,
    sinopse text not null,
    avaliacao decimal(3,2) default null,
    valor decimal (4,4) not null default 0,
    capa varchar(255)
);
# mostrar tabela
show tables;

# inserir dados
insert into  tbl_filme (nome, data_lancamento, duracao, sinopse, avaliacao, valor, capa)
values('Pecadores',
		'2025-04-03',
        '2:12:00',
        'Dois irmãos gêmeos tentam deixar suas vidas problemáticas para trás e retornam à sua cidade natal para recomeçar.
         Lá, eles descobrem que um mal ainda maior está à espreita para recebê-los de volta.',
        '3',
		 '45.30',
         'https://upload.wikimedia.org/wikipedia/pt/thumb/d/de/Pecadores.webp/250px-Pecadores.webp.png')