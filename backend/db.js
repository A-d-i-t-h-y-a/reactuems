const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const URI = `${process.env.URI}`
// const URI = `mongodb+srv://adithya:project_school@cluster0.eik21oe.mongodb.net/test`
// const URI = `mongodb+srv://adithya:project_school@cluster0.eik21oe.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)

const connectToMongo = ()=>{
    mongoose.connect(URI, ()=>{
        console.log("connected to mongo successfully");
    })
}

module.exports = connectToMongo;