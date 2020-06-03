const express = require('express')
require('./db/mongooes')
const diteRouter =require('./routers/dite')
const absRouter = require('./routers/workoutabs')
const armRouter = require('./routers/workoutarm')
const legRouter = require('./routers/workoutleg')




const app = express()
const port = process.env.PORT





app.use(express.json())
app.use(diteRouter)
app.use(absRouter)
app.use(armRouter)
app.use(legRouter)






app.listen(port,()=>{
    console.log('server up on the port ' + port)

})

