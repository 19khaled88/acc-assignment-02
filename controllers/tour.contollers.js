const Tour = require("../models/tour.model")
const { getTourServices, postTourServices, updateTourByIdServices, getTopViewedService, getTopViewedServices, getTopCheapestTourServices, getTourByIdServices } = require("../services/tour.services")

const getAllTourController =async (req,res,next)=>{
   try {
    let queryObject = {...req.query}
    const excludeFields = ['sort','page','limit']
    excludeFields.forEach(element=> delete queryObject[element])
    const sortQuery ={}
    if(req.query.sort){
        const sortBy = req.query.sort.split(',').join('')
        sortQuery.sort = sortBy
    }

    if(req.query.fields){
        const fields = req.query.fields.split(',').join('')
        sortQuery.fields = fields
    }
    
    const tours =await getTourServices(queryObject,sortQuery)
    res.status(200).json({
        status:'Success',
        data:tours
    })
   } catch (error) {
    res.status(400).json({
        status:'failed',
        message:"Can't get the data"
    })
   }
}

const getTourByIdController=async(req,res,next)=>{
    const {id} = req.params
    try {
        const tour =await getTourByIdServices(id)
        res.status(200).json({
            status:'successful',
            data:tour
        })
    } catch (error) {
        res.status(400).json({
            status:"failed",
            message:"Could't find tour by id",
            error:error.message
        })
    }
}

const getCustomizedQueryController=async(req,res, next)=>{
    console.log(req.query)
    res.send(req.query)
}
const postTourController =async(req,res)=>{
    const tour = new Tour(req.body)
    try {
      const tourPost =  await postTourServices(tour)
      res.send(tourPost)
    } catch (error) {
            res.status(400).json({
            status:"failed",
            message:"Could't created new tour",
            error:error.message
        })
    }
   
}

const updateController=async(req,res,next)=>{
    try {
        const {id} = req.params;
        const doc = req.body
        const result = await updateTourByIdServices(id,doc)
        res.status(200).json({
            status:'successful',
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:"failed",
            message:"Could't update the tour request",
            error:error.message
        })
    }
}

const getTopViewedTourController=async(req,res,next)=>{
     try {
        const view = -1 
        const limit = 3
        const topViewed =await getTopViewedServices(view, limit)
        res.status(200).json({
            status:'successful',
            "messgage":"Top 3 Viewed Tour list",
            data:topViewed
        })
     } catch (error) {
        res.status(400).json({
            status:"failed",
            message:"Could't get top viewed tours",
            error:error.message
        })
     }
}

const getTopCheapestTourController=async(req,res,next)=>{
    try {
        const price = -1 
        const limit = 3
        const topViewed =await getTopCheapestTourServices(price, limit)
        res.status(200).json({
            status:'successful',
            "messgage":"Top 3 cheapest Tour list",
            data:topViewed
        })
     } catch (error) {
        res.status(400).json({
            status:"failed",
            message:"Could't get top cheapest tours",
            error:error.message
        })
     } 
}



module.exports={getCustomizedQueryController,getTourByIdController,getAllTourController,postTourController,updateController,getTopViewedTourController,getTopCheapestTourController}