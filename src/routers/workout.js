const express = require('express')
const Workout = require('../model/workout')

const router = new express.Router();



router.post('/workout', async(req,res)=>{

    const workout = new Workout(req.body)

    try {
        await workout.save()
        res.status(201).send(workout)
    } catch (error) {
        res.status(500).send()
        
    }
})

router.get('/workout',async(req,res)=>{
    try {
        const workout = await Workout.find()

        if(workout == null ){
            res.status(404).send({error :' Does not contain any workout'})
        }

        res.send(workout)
    } catch (error) {
        res.status(500).send()
        
    }
})


module.exports= router