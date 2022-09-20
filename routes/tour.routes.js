const express = require('express')
const toursController = require('../controllers/tour.contollers')
const countVisitor = require('../middleware/countVisitor')
const { tourValidator } = require('../middleware/tourValidator')
const Tour = require('../models/tour.model')
const router = express.Router()

// router.get('/all',(req,res)=>{
//     res.send('tour get route')
// })

// router.post('/insert',(req,res)=>{
//     res.send('tour post route')
// })



// Tour.schema.pre('save',function(next){

// })

// Tour.schema.post('save',function(doc, next){

// })

router.route('/')
    .get(toursController.getAllTourController)
    .post(tourValidator,toursController.postTourController)
// router.route('/tours/')
//     .get(toursController.getCustomizedQueryController)
    

router.route('/trending')
    .get(toursController.getTopViewedTourController)
router.route('/cheapest')
    .get(toursController.getTopCheapestTourController)

router.route('/:id')
    .get(countVisitor,toursController.getTourByIdController)
    .patch(tourValidator,toursController.updateController)

module.exports = router