import app from "./src/app.js"

const PORT = 5000

//escutar a porta
app.listen(PORT, () => {
    console.log(`Servidor rodando no http://localhost:${PORT}`)
})
