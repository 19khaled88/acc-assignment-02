exports.tourValidator=async(req,res,next)=>{
    if(req.body.name && typeof req.body.name !== 'string'){
      return  res.status(400).json({status:'failed', message:'Name field must be string' });
    } 
    if(req.body.price && typeof req.body.price !== 'number'){
      return  res.status(400).json({status:'failed', message:'Price field must be Number'})
    }
    if(req.body.location && typeof req.body.location !== 'string'){
      return  res.status(400).json({status:'failed', message:'Location field must be string'})
    }
    if(req.body.view && typeof req.body.view !== 'number'){
      return  res.status(400).json({status:'failed', message:'View field must be Number'})
    }
    next()
}