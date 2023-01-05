import app from "./src/app.js"

const PORT = 5000                  // definir porta padrao

//escutar a porta
app.listen(PORT, () => {           // escutar eventos para porta
    console.log(`Servidor rodando no http://localhost:${PORT}`)
})

