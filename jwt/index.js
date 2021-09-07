const express = require('express')
const mongoose = require('mongoose')
const app = express()
const morgan = require('morgan')
const userRouter = require('./userRouter')

//Body-Parser
app.use(express.json())

//Middleware
app.use(morgan('dev'))

//Router
app.use('/', userRouter)

//DB Connection
mongoose.connect('mongodb://localhost:27017/private', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (error) {
        console.log('DB is not connected ')
    }
    console.log('DB is connected ')
})

//Port
app.listen(2000, () => {
    console.log('server connected 2000')
})