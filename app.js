const express = require('express')
const {success} = require('./helper.js')
let cryptos = require ('./mock-cryptos');

const app = express()
const port = 3000

app.get('/', (req,res) => res.send('hello, express 3!'))

 // nombre total de cryptos au format JSON
app.get('/api/cryptos', (req,res) => {
    const message = 'la liste des crypto a bien été trouvée'
    res.json(success(message, cryptos))
})

app.get('/api/cryptos/:id', (req,res) => {
 const id = parseInt(req.params.id)
 const crypto = cryptos.find(crypto => crypto.id === id)
 const message = 'une crypto a bien été trouvée'
 res.json(success(message, crypto))
})

app.listen(port, () => console.log())