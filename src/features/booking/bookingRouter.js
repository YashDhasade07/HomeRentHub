import express from 'express';
import BookingController from './bookingController.js';

let bookingRouter = express.Router();
let bookingController = new BookingController();


bookingRouter.post('/', (req,res,next)=>{
    bookingController.createBooking(req,res,next);
})

bookingRouter.get('/my-bookings', (req,res,next)=>{
    bookingController.getBookings(req,res,next);
})
//owner
bookingRouter.get('/my-bookings-requests', (req,res,next)=>{
    bookingController.getBookingRequests(req,res,next);
})

bookingRouter.put('/my-bookings-requests', (req,res,next)=>{
    bookingController.updateBookingRequests(req,res,next);

})

export default bookingRouter;
