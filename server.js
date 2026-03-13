const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

app.get("/", (req, res) => 
{
    res.send("Servidor rodando!");
});

function ProcessarDadosUpperCase(dados)
{
    const dadosProcess = dados.map(item => item.toUpperCase());

    return dadosProcess;
}

function ProcessaDadosBase64(dados)
{
    // percorre todo o array recebido
    const dadosConvertidos = dados.map((item) => 
    {
        // converte cada string para base64
        const base64 = Buffer.from(item).toString('base64');

        // retorna o valor convertido
        return base64;
    });

    // retorna o novo array
    return dadosConvertidos;


}

//ROTA PUBLICA
app.post("/", (req, res) => {
    
    const { instruction, batch } = req.body;

    if (instruction === "uppercase")
    {
        
        const relatorio = ProcessarDadosUpperCase(batch);

        res.json(
        {
            status: "processado uppercase",
            processed: relatorio
        });
    }
    else if (instruction === "base64")
    {
        // chama a função que converte os dados
        const relatorio = ProcessaDadosBase64(batch);   

        // retorna resposta em JSON
        res.json(
        {
            status: "processado base64",
            processed: relatorio
        });   
    }
    else 
    {
        console.log("ERROR!");
    }
});


app.listen(3000, () => {
    console.log("Server started on port 3000");

});