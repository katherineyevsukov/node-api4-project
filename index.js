require('dotenv').config()
const express = require('express')

const server = express()

server.get('/api/users', (req, res) => {
    res.json([
        {id: 1, name: 'kat'},
        {id: 2, name: 'clem'}
    ])
})

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})
