/*Algoritmo: Anos de Eleições

Início
    Declare anoInicio, anoAtual como números
    anoAtual ← 2025

    Escreva("Digite o ano da primeira eleição que você acompanhou:")
    Leia anoInicio

    Enquanto anoInicio ≤ anoAtual faça
        Escreva("Ano de eleição: ", anoInicio)
        anoInicio ← anoInicio + 2
    FimEnquanto
Fim */

let anoInicio = Number (prompt("Digite o ano da primeira eleição que você acompanhou: "))
let anoAtual = 2025 //new Date().getFullYear ao inves de 2025, pega a data atual sem ter que ficar modificando.

while(anoInicio <= anoAtual){      //utilizado como if e else em uma inline 👇  
    let tipoAno = (anoInicio % 2 === 0) ? ' ano par' : ' ano impar';
    document.write('Ano de eleição: ' + anoInicio + 'hr' + tipoAno + '<br>')
    anoInicio += 2;
}