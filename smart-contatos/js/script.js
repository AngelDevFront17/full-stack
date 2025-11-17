const inputNome = document.getElementById("nome")
const inputEmail = document.getElementById("email")
const inputTel = document.getElementById("telefone")

function btnCadastrar(event){
    //alert("Digite os valores antes do cadastro!")
    event.preventDefault(); //Solucionar problema de preventDefault, a menssagem não vai sumir
    console.log(event)
    console.log(inputNome.value)
    console.log(inputEmail.value)
    console.log(inputTel.value)

}