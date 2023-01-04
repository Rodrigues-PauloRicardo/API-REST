
import app from "./app.js"

const port = 5000

//escutar a porta
app.listen(port, () => {
    console.log(`Servidor rodando no http://localhost:${port}`)
})