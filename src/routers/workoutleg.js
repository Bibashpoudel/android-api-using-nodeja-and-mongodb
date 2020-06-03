const express = require('express')
const Leg = require('../model/workoutleg')

const router = new express.Router();



router.post('/workout/leg', async(req,res)=>{

    const leg = new Leg(req.body)

    try {
        await leg.save()
        res.status(201).send(leg)
    } catch (error) {
        res.status(500).send()
        
    }
})

router.get('/workout/leg',async(req,res)=>{
    try {
        const leg = await Leg.find()

        if(leg == null ){
            res.status(404).send({error :' Does not contain any workout'})
        }

        res.send(leg)
    } catch (error) {
        res.status(500).send()
        
    }
})



module.exports= router