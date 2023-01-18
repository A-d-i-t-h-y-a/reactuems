const express = require('express')
const app = express();
const connectToMongo = require('./db')
const port = 5000;

connectToMongo();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})