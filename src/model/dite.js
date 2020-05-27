

const mongooes = require('mongoose')


const Dite = mongooes.model('Dite', {
   
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

module.exports= Dite