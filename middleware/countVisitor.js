const Tour = require("../models/tour.model");

const countVisitor =async(req,res,next)=>{
    const { id} = req.params 
    const tour = await Tour.findById(id)
    const viewCount = tour.view + 1
    const update =await Tour.findByIdAndUpdate(id,{view:viewCount})
    if(!update){
      return res.status(400).json({ status:'failed', message:'View increase failed' })
    }
    next()   
}

module.exports = countVisitor