/*Enunciado:
Crie um programa que peça um número e mostre uma mensagem 
dizendo se ele é positivo, negativo ou igual a zero.*/

let numeros = Number (prompt("Digite um número: "))

if(numeros > 0){
    alert("Seu número é positivo")
}else if(numeros < 0){
    alert("Seu número é negativo")
}else{
    alert("O número é igual a zero")
}