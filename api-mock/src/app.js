import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Olá Node js")
});

export default app;

const cadastros = [
{
id: 1,
nome: "Fernanda Silva",
telefone: "11987654321",
cpf: "123.456.789-00",
email: "fernanda@gmail.com",
idade: 28,
endereco: "Rua das Flores, 123"
},

{
id: 2,
nome: "Caio Oliveira",
telefone: "11922223333",
cpf: "987.654.321-11",
email: "caio@gmail.com",
idade: 32,
endereco: "Avenida Brasil, 450"
},

{
id: 3,
nome: "Pedro Almeida",
telefone: "21999998888",
cpf: "321.654.987-55",
email: "pedro@hotmail.com",
idade: 45,
endereco: "Rua Central, 999"
}
];

function cadastroPorId(id){
    return cadastros.filter((cadastro) => cadastro.id == id)
}

function buscarCadastroId(id){
    return cadastros.findIndex((cadastro) => cadastro.id == id)
}

//altorizando atualização
app.use(express.json())


//Lista de cadastros
app.get("/cadastros", (req, res) => {
    res.send(cadastros)
})

//Encontrar cadastro por Id
app.get("/cadastros/:id", (req, res) => {
    let index = req.params.id;

    res.json(cadastroPorId(index))
})

//Post para cadastrar mais uma pessoa
app.post("/cadastros", (req, res) => {
    cadastros.push(req.body);

    res.status(201).send(`Cadastro realizado com sucesso!`)
})

//Alterando por Id
app.put("/cadastros/:id", (req, res) => {
    let index = buscarCadastroId(req.params.id);
    cadastros[index].nome = req.body.nome;
    cadastros[index].telefone = req.body.telefone;
    cadastros[index].cpf = req.body.cpf;
    cadastros[index].email = req.body.email;
    cadastros[index].idade = req.body.idade;
    cadastros[index].endereco = req.body.endereco;

    res.json(cadastros);
})

//Rota excluir
app.delete("/cadastros/:id", (req, res) => {
    let index = buscarCadastroId(req.params.id)
    cadastros.splice(index, 1);
    
    res.send(`Cadastro ${req.params.id} excluido com sucesso!`)
<<<<<<< HEAD
})
=======
})

>>>>>>> 89e3467ad766a3fb1ba1fc956cc741840aab492e
