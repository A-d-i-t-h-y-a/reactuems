const mongoose = require('mongoose')

// const URI = 'mongodb://localhost:27017/PS'
// const URI = 'mongodb+srv://user:project_school@cluster0.eik21oe.mongodb.net/?retryWrites=true&w=majority'
const URI = `mongodb+srv://adithya:project_school@cluster0.eik21oe.mongodb.net/?retryWrites=true&w=majority`

const connectToMongo = ()=>{
    mongoose.connect(URI, ()=>{
        console.log("connected to mongo successfully");
    })
}

module.exports = connectToMongo;