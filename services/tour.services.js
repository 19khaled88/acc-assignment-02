const Tour = require("../models/tour.model")


exports.getTourServices=async(queryObject,sortQuery)=>{
 
    const tours = await Tour.find(queryObject).sort(sortQuery.sort).select(sortQuery.fields)
    return tours
}

exports.getTourByIdServices=async(id)=>{
    const tour = await Tour.findById(id)
    return tour
}

exports.postTourServices=async(tour)=>{
    const tours = await tour.save()
    return tours
}

exports.updateTourByIdServices=async(id,doc)=>{
   const result = await Tour.updateOne({_id:id},{$set:doc})
   return result
}

exports.getTopViewedServices=async(view, limit)=>{
    const result = await Tour.find({}).sort({view:view}).limit(limit)
    return result
}

exports.getTopCheapestTourServices=async(price,limit)=>{
    const result = await Tour.find({}).sort({price:price}).limit(limit)
    return result
}