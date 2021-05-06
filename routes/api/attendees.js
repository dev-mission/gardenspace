//EXPRESS: back end and node.js web application framework 
//designed for building web applications and APIs
//Used for designed for building web applications and APIs

//calling express
const express = require('express')

//Cretated when you want to create a new router object to handle requests
const router = express.Router();

//Go up 2 files and load all the javascript classes in models
const models = require('../../models')

//Anytime you are reading or writing data, they will be asynchronous
//Requesting and responding data being sent and received
router.get('/', async function(req, res){
    //Ask the models to find all "Attendees" in database
    //Use model object as for garden project
    //Backend           ->          FrontEnd
    //routes/api/attendees -> client/src/attendees/api.attendees -> client/src/attendees/attendeeform
    const rows = await models.Attendee.findAll()

    //respose send json data back to client
    res.json(rows)
})

router.post('/', async function (req, res) {
    //Build a new Attendee row in memory from the form data in the body of the request
    const row = models.Attendee.build(req.body)

    try{
        //wait for the database to save the new row
        await row.save();
        //if successful, return 201 status (created) and json data of the row
        res.status(201).json(row)
    } catch(error){
        //if database return an eror print it to console
        console.log(error)
        //Send back UNPROCESSABLE ENTITY error code and message itself
        res.status(422).json(error)
    }
})

//Export Router
module.exports = router