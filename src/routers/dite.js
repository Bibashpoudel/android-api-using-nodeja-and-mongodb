const express = require('express')
const Dite = require('../model/dite')

const router = new express.Router();



router.post('/dites', async(req,res)=>{

    const dite = new Dite(req.body)

    try {
        await dite.save()
        res.status(201).send(dite)
    } catch (error) {
        res.status(500).send()
        
    }
})
router.get('/dite', async(req, res)=>{
    try {
        const dite = await Dite.find()
        res.send(dite)
    } catch (error) {
        res.status(500).send()
    }
})


module.exports= router