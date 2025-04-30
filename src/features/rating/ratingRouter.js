import express from 'express';
import RatingController from './ratingController.js';
import jwtAuthentication from '../../middlewares/jwtAuthentication.js';

let ratingController = new RatingController()
let ratingRouter = express.Router();

ratingRouter.post('/', jwtAuthentication, (req,res,next)=>{
    ratingController.postReview(req,res,next)
});

ratingRouter.get('/property/:propertyId', (req,res,next)=>{
    ratingController.getReviewsByPropertyId(req,res,next)

});
export default ratingRouter;