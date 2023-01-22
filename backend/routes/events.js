const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const Events = require('../models/Events');
const router = express.Router()

// ROUTE 1: new event Data
router.post('/newevent',fetchuser, async (req, res)=>{
    try {
        const {name, description, etype, date_time, venue, food, quantity, mdescription} = req.body;
        const event = new Events({
            name, description, etype, date_time, venue, food, quantity, mdescription
        })
        const savedData = await event.save();
        res.json(savedData)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error Occured");
    }
})

module.exports = router