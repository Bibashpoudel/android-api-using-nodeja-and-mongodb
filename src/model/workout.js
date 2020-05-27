

const mongooes = require('mongoose')


const workOut = mongooes.model('workout',{
   
    image:{
        type:String,
        require:true

    },
    name:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    }
})


module.exports=workOut