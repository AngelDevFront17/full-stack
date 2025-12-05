-- Criando tabela Dados pessoais
create table dados_pessoais (
id int auto_increment primary key,
nome varchar(150) not null,
idade varchar(10) not null,
rg varchar(14) not null,
cpf varchar(14) not null,
titulo varchar(20) not null,
sangue varchar(3) not null
);

insert into dados_pessoais (nome, idade, rg, cpf, titulo, sangue) values
('Joana Ribeiro','18', '48.678.279-6', '467.578.965-00', '467585294646', 'A+'),
('Taina Oliveira', '25', '37.257.265-4', '579.587.123-05', '493856376636', 'O-'),
('David Guimaraes', '34', '45.377.595-3', '486.258.741-00', '999722979582', 'AB-'),
('Marlon Souza', '33', '97.257.295-4', '348.321.675-00', '857544319567', 'A+'),
('Romario Oliveira', '37', '36.297.955-4', '497.358.764-01', '689856726973', 'A+'),
('Alberto Alves', '40', '49.677.555-3', '677.597.999-00', '959765496757','O+'),
('Janaina Junqueira', '29', '67.267.765-2', '378.697.264-00', '587877795897', 'AB+');

select * from dados_pessoais;

