// import * as dotenv from 'dotenv'
// dotenv.config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.PORT || 9000
const tourRoute =require('./routes/tour.routes.js')
const countVisitor = require('./middleware/countVisitor.js')
require('dotenv').config()
const db = require('./utils/db.js')
const Tour = require('./models/tour.model.js')

app.use(express.json())
app.use(cors())


// app.use(countVisitor)
db


app.use("/",(req,res)=>{
    res.send('Welcome to ACC, assignment 02')
})

app.use('/tours', tourRoute)

app.all('*',(req,res)=>{
    res.send('No route found')
})

app.listen(port, ()=>{console.log(`Server is running on port ${port}`)})