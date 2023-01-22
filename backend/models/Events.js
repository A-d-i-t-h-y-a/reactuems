const mongoose = require('mongoose')
const {Schema} = mongoose

const eventSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    etype:{
        type:String,
        required: true
    },
    date_time:{
        type: Date,
        required: true
    },
    venue:{
        type:String,
        required: true
    },
    food:{
        type:String,
        required: true
    },
    quantity:{
        type:String,
        required: true
    },
    mdescription:{
        type:String,
        required: true
    }
})

const Events = mongoose.model('Schedules', eventSchema)
Events.createIndexes()
module.exports = Events