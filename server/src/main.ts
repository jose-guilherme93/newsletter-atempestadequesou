import express from 'express'

const app = express()
app.get('/', (req, res) => res.send('rodando essa porra'))
app.get('/home', (req, res) => res.send('rodando essa porra3'))



app.listen(3000, () => console.log('ewf'))