const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express()
const PORT = 3000;
const FILE_PATH = './db/pharmacos.json';

const corsOptions = {
    origin: '*',
    // origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 // Para alguns navegadores que requerem suporte para 204
};

app.use(express.json(), cors(corsOptions));

app.post('/', (req, res) => {
    const pharmacoData = req.body;
    fs.writeFile(FILE_PATH, JSON.stringify(pharmacoData), 'utf8', (err) => {
        if(!err){
            res.status(200).send("Dados gravados com sucesso")
        } else {
            res.status(500).send("Erro ao escrever no banco de dados.")
        }
    })
})

app.get('/', (req, res) => {
    console.log("get path")
    if(fs.existsSync(FILE_PATH)){
        fs.readFile(FILE_PATH, 'utf-8', (err, data) => {
            if(!err){
                res.status(200).json(JSON.parse(data));
            }else{
                res.status(500).send("Não foi possível acessar o arquivo.\nTente novamente mais tarde");
            }
        })
    }else{
        res.status(400).send("Não existem dados salvos no servidor.");
    }
})

app.listen(PORT, ()=>{
    console.log("Server running on Port 3000")
})