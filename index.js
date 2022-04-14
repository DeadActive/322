const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

var status = false

app.use('/static', express.static('static'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
})

app.get('/status', (req, res) => {
    res.send({status})
})

app.post('/status', (req, res) => {
    if(req.body){
        status = req.body.status
    }
    res.send({status})
})

app.listen(port, () => {
    console.log('Listening on port ' + port)
})