const express = require("express");
const app = express();
const PORT = 3000;

// mock
const nomes = [
  { id: 1, nome: "Fernanda", idade: "18" },
  { id: 2, nome: "Caio", idade: "23" },
  { id: 3, nome: "Pedro", idade: "56" },
  { id: 4, nome: "Samuel", idade: "45" },
  { id: 5, nome: "Doris", idade: "33" },
];

//Criando funções auxiliares
//Retornar o objeto por ID
function buscarNomesPorId(id){
    return nomes.filter((nome) => nome.id == id)
}

//Pegar a posição ou index do elemento do array por id
function buscarIdNomes(id){
    return nomes.findIndex((nome) => nome.id == id)
}

//rota com /
app.get("/", (req, res) => {
    res.send('Bem vindo! 😁')
})

//Rota teste
app.get("/teste", (req,res) => {
    res.send('API nodePeople está funcionando!')
})

//Buscando nomes (lista nomes)
app.get("/listaNomes", (req,res) => {
    res.send(nomes)

})

//Buscando pot ID
app.get("/listaNomes/:id", (req, res) => {
    let index = req.params.id;

    res.json(buscarNomesPorId(index))
})

//Criando rota excluir
app.delete("/listaNomes/:id", (req, res) => {
    let index = buscarIdNomes(req.params.id)
    nomes.splice(index, 1);
    res.send(`Nomes com id ${req.params.id} excluida com sucesso!`)
})



app.listen(PORT, () => {
    console.log(`servidor rodando no endereço http://localhost:${PORT}`);
})



