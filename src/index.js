const express = require('express')
require('./db/mongooes')
const userRouter =require('./routers/dite')
const taskRouter = require('./routers/workout')




const app = express()
const port = process.env.PORT





app.use(express.json())
app.use(userRouter)
app.use(taskRouter)






app.listen(port,()=>{
    console.log('server up on the port ' + port)

})

