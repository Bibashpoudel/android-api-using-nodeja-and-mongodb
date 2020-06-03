const express = require('express')
const Abs = require('../model/workoutabs')

const router = new express.Router();



router.post('/workout/abs', async(req,res)=>{

    const abs = new Abs(req.body)

    try {
        await abs.save()
        res.status(201).send(abs)
    } catch (error) {
        res.status(500).send()
        
    }
})

router.get('/workout/abs',async(req,res)=>{
    try {
        const abs = await Abs.find()

        if(abs == null ){
            res.status(404).send({error :' Does not contain any workout'})
        }

        res.send(abs)
    } catch (error) {
        res.status(500).send()
        
    }
})



module.exports= router