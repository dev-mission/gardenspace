const express = require('express')

const router = express.router();

const models = require('../../models/garden')

router.get('/', async = (req,res)=>{
    const rows = await models.Garden.findAll();

    res.json(rows)
})

router.post('/', async (req, res)=>{
    const row = models.Garden.build(req.body)

    try{
        await row.save();

        res.status(201).json(row)
    }catch(error){
        console.log(error)
        res.status(422).json(error)
    }
})

module.exports = router