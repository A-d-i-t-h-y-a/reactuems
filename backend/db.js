const mongoose = require('mongoose')

const URI = 'mongodb://localhost:27017/PS'

const connectToMongo = ()=>{
    mongoose.connect(URI, ()=>{
        console.log("connected to mongo successfully");
    })
}

module.exports = connectToMongo;