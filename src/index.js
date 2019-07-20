const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => res.send('API'))

app.listen(8080, () => console.log('API carregada com sucesso'))