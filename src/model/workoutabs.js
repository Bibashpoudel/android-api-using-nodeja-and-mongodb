

const mongooes = require('mongoose')


const leg = mongooes.model('abs',{
   
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


module.exports=leg