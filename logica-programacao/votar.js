/*Enunciado:
Crie um programa que peça a idade de uma pessoa e mostre 
uma msg dizendo se ela pode votar ou ainda não pode*/

let votar = Number (prompt ("Digite sua idade: "))

if(votar < 16){
    alert("Você não pode votar")
}else if(votar > 15){
    alert("Seu voto é opcional")
}else if(votar >= 18){
    alert("Seu voto é obrigatorio")
}