import express from 'express';
import RatingController from './ratingController.js';

let ratingController = new RatingController()
let ratingRouter = express.Router();

ratingRouter.post('/', (req,res,next)=>{
    ratingController.postReview(req,res,next)
});

ratingRouter.get('/property/:propertyId', (req,res,next)=>{
    ratingController.getReviewsByPropertyId(req,res,next)

});
export default ratingRouter;