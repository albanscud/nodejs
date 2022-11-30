const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const { success, getUniqueId } = require('./helper.js')
let cryptos = require ('./mock-cryptos');

const app = express()
const port = 3000

app
  .use(favicon(__dirname + '/favicon.ico'))
  .use(morgan('dev'))

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

app.post('/api/cryptos', (req, res) => { 
    const id = getUniqueId(cryptos)
    const cryptoCreated = { ...req.body, ... {id: id, created :new Date ()}}
    cryptos.push(cryptoCreated)
    const message = `une crypto ${cryptoCreated.name} a bien été créée`
    res.json(success(message, cryptoCreated))
})

app.listen(port,() => console.log(`notre application est bien demarée sur : http://localhost:${port}`))