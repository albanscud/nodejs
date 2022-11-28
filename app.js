const express = require('express')

const app = express()
const port = 3000

app.get('/', (req,res) => res.send('hello, express 3!'))

app.get('/api/cryptos/1', (req,res) => res.send ('Le bitcoin'))

app.listen(port, () => console.log(`notre application Node est démarrée sur : http://localhost:${port}`))