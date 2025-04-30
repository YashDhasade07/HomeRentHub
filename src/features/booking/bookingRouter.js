import express from 'express';
import BookingController from './bookingController.js';
import jwtAuthentication from '../../middlewares/jwtAuthentication.js';

let bookingRouter = express.Router();
let bookingController = new BookingController();


bookingRouter.post('/', jwtAuthentication, (req,res,next)=>{
    bookingController.createBooking(req,res,next);
})

bookingRouter.get('/my-bookings',jwtAuthentication, (req,res,next)=>{
    bookingController.getBookings(req,res,next);
})
//owner
bookingRouter.get('/my-bookings-requests',jwtAuthentication, (req,res,next)=>{
    bookingController.getBookingRequests(req,res,next);
})

bookingRouter.put('/my-bookings-requests',jwtAuthentication, (req,res,next)=>{
    bookingController.updateBookingRequests(req,res,next);

})

export default bookingRouter;
