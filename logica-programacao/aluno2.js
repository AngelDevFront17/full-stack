let nota = Number (prompt("Digite a nota do aluno:"))

if(nota >= 6){
    alert("Aprovado")
}else if(nota >= 4  && nota < 6){
    alert("Recuperação")
}else{
    alert("Reprovado")
}