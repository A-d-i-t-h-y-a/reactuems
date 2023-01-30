const express = require('express')
const app = express();
const connectToMongo = require('./db')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT;

connectToMongo();
app.use(cors())
app.use(express.json())

app.use("/api/auth", require('./routes/auth'))
app.use("/api/event", require('./routes/events'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})