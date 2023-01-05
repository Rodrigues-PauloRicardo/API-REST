//CRIAR PASTA SRC NA PASTA RAIZ
// npm init -y   para criar package.json
// npm install express --save
//npm install dodemon -D     --- PARA ATUALIZAÇÃO AUTOMÁTICA
// Acrescentar no package.jason no script    "dev": "nodemon src/app.js",
// npm run dev utilizar no lugar do node src/app.js (iniciar Arquivo)

import express from 'express'     // importar express
const app = express()             // criar uma instancia express


app.get('/', (req, res) => {        //criar rota padrão   
//res.send('hello word!!!')
res.render('home')
//C:\Users\rober\Documents\GitHubProjClonados\API-REST\index.html
   
})

const selecoes =[
    {id: 1, selecao:'Brasil', grupo: 'G'},
    {id: 2, selecao:'Suíça', grupo: 'G'},
    {id: 3, selecao:'Sérvia', grupo: 'G'},
    {id: 4, selecao:'Camarões', grupo: 'G'},
]

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})


app.post('/selecoes', (req, res) => {
    res.status(201).selecoes.push()
})


export default app



