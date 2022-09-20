const mongoose = require('mongoose')
const colors = require('colors')
require('dotenv').config()
const {DB_USER_NAME,DB_PASS} = process.env

mongoose.connect(`mongodb+srv://khaled:VNHAybzMnVDF6NMq@cluster0.ka5da.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
    // useCreateIndex: true
  }
)

const db = mongoose.connection;
db.on('error',console.error.bind(console, 'Connection error: '))
db.once("open",function(){
    console.log('Connected successfully')
})

module.exports = db