

import express from 'express'

const app = express()

//criar rota padrão
app.get('/', (req, res) => {
    res.send('hello word!!!')
})

export default app

