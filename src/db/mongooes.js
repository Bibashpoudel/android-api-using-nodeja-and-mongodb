const mongooes = require('mongoose')


mongooes.connect('mongodb://127.0.0.1:27017/androidapi',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
})
