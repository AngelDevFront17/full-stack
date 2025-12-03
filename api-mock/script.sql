-- Cria o banco de dados aonde vamos trabalhar
create database sistema_produtos;

use sistema_produtos;

-- Cria a tabela 'produtos' com algumas colunas básicas
create table produtos (
id int auto_increment primary key, -- ID único
nome varchar(100) not null, -- Nome do produto
email varchar(120) not null, -- email
telefone varchar(20), -- Telefone
cpf varchar(14), -- CPF
endereco varchar(150) -- Endereço simples
);

-- Insere dois registros
insert into produtos (nome, email, telefone, cpf, endereco) values
('Gustavo Martins', 'gustavo.m@gmail.com', '1195784-4316', '358.467.461-00', 'Rua maranhao'),
('Luana Rufino', 'luana@gmail.com', '1195897-9361', '458.467.780-00', 'Rua luandre');


-- Selecione o registro onde o id = 1
select * from produtos where id = 1;
select * from produtos where id = 2;

select * from produtos;
