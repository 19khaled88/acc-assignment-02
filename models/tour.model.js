const mongoose = require('mongoose')


const TourSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name field must not be empty"] ,
        trim:true,
    },
    image:{
        type:String,
        required:[true,"Image field must not be empty"]  
    },
    price:{
        type:Number,
        required:[true,"Price field must not be empty"],
        min:[0,'Price can\'t be negative']
    },
    location:{
        type:String,
        required:[true,"Location field must not be empty"]  
    },
    view:{
        type:Number,
    },
},{timestamps:true})

const Tour = mongoose.model("Tour",TourSchema)

module.exports = Tour