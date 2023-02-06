import app from "./src/app.js"

const PORT = 5000                  // definir porta padrao

//escutar a porta
app.listen(PORT, () => {           // escutar eventos para porta
    console.log(`Servidor rodando no http://localhost:${PORT}`)
})

const Sequelize = require('sequelize');

//CONEXÃO COM O DB
const connection = new Sequelize('guiaperguntas','root','123456',{
    host: 'localhost', // onde se encontra o DB
    dialect: 'mysql' // qual o tipo de banco de dados
   
});// Nome do Banco de Dados - root q é padrao - senha



module.exports = connection;