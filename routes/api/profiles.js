const express = require('express')

const router = express.Router()

const models = require("../../models")

router.get('/', async function(req, res){
    const rows = await models.Profile.findAll()

    res.json(rows)
})

router.post('/', async function(req, res){
    const row = models.Profile.build(req.body)

    try{
        await row.save();

        res.status(201).json(row)
    }catch(error){
        console.log(error)
        res.status(422).json(error)
    }
})

module.exports = router