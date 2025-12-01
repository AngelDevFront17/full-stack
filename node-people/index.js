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

const times = [
  { id: 1, nome: "Corinthians", estado: "SP", titulos: 7 },
  { id: 2, nome: "Palmeiras", estado: "SP", titulos: 11 },
  { id: 3, nome: "Santos", estado: "SP", titulos: 8 },
  { id: 4, nome: "Flamengo", estado: "RJ", titulos: 7 },
  { id: 5, nome: "Vasco", estado: "RJ", titulos: 4 },
  { id: 6, nome: "Atlético Mineiro", estado: "MG", titulos: 3 },
  { id: 7, nome: "Cruzeiro", estado: "MG", titulos: 4 },
];

//Pegar time por ID
function encontrarTimeId(id){
    return times.filter((time) => time.id == id)
    
}

function buscarTimeId(id){
    return times.findIndex((time) => time.id == id)
}

//lista de Times
app.get("/times", (req, res) => {
    res.send(times)
})


app.get("/times/:id", (req, res) => {
    let index = req.params.id;

    res.json(encontrarTimeId(index))
})

//Incluindo Time com o POST
app.post("/times", (req, res) => {
    times.push(req.body)

    res.status(201).send(`Time adicionado com sucesso`)
})

app.use(express.json())

//deletar time
app.delete("/times/:id", (req, res) => {
let Index = excluirIdTimes(req.params.id)
times.splice(Index, 1);
res.send(`Time com id ${req.params.id} excluído com sucesso!`)
})

// alterar id
app.put("/times/:id", (req, res) => {
  let index = buscarTimeId(req.params.id);
  times[index].nome = req.body.nome;
  times[index].estado = req.body.estado;
  times[index].titulos = req.body.titulos;

  res.json(times);
});




//Indicar para express ler body com json
app.use(express.json())

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

//Criando POST para cadastrar
app.post("/listaNomes", (req, res) => {
    nomes.push(req.body);
    res.status(201).send('Nomes cadastrados com sucesso!')
}) //necessário liberar para ser adicionado express ler body com json ☝️

//Criando rota excluir
app.delete("/listaNomes/:id", (req, res) => {
    let index = buscarIdNomes(req.params.id)
    nomes.splice(index, 1);
    res.send(`Nomes com id ${req.params.id} excluida com sucesso!`)
}) 

// alterar id
app.put("/listaNomes/:id", (req, res) => {
  let index = buscarIdNomes(req.params.id);
  nomes[index].nome = req.body.nome;
  nomes[index].idade = req.body.idade;

  res.json(nomes);
});


app.listen(PORT, () => {
    console.log(`servidor rodando no endereço http://localhost:${PORT}`);
})



