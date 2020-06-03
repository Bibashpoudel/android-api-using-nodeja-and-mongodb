const express = require('express')
const Arm = require('../model/workoutarm')

const router = new express.Router();



router.post('/workout/arm', async(req,res)=>{

    const arm = new Arm(req.body)

    try {
        await arm.save()
        res.status(201).send(arm)
    } catch (error) {
        res.status(500).send()
        
    }
})

router.get('/workout/arm',async(req,res)=>{
    try {
        const arm = await Arm.find()

        if(arm == null ){
            res.status(404).send({error :' Does not contain any workout'})
        }

        res.send(arm)
    } catch (error) {
        res.status(500).send()
        
    }
})



module.exports= router