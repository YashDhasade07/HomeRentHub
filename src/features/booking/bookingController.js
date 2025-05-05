import BookingRepository from "./bookingModel.js";
import ApplicationError from "../../middlewares/ApplicationError.js";
export default class BookingController {
  constructor() {
    this.bookingRepository = new BookingRepository();
  }

  async createBooking(req, res, next) {
    try {
      if (req.user.role == "renter") {
        let renterId = req.user.userId;
        let { properteyId, startDate, endDate } = req.body;
        await this.bookingRepository.createBooking(
          properteyId,
          renterId,
          startDate,
          endDate
        );
        res.send("Booking done sucessfully");
      } else {
        res.send("login as renter first");
      }
    } catch (error) {
        console.log(error);
        if(error instanceof ApplicationError){
        next(error)
        }
        next(new ApplicationError('something went wrong while booking',400))
    }
  }


  async getBookings(req, res, next) {
    try {
        if (req.user.role == "renter") {
            let renterId = req.user.userId;
            let bookings =await this.bookingRepository.getBookings(renterId);
            console.log('hiiiiiii');
        res.json(bookings);
      } else {
        res.send("login as renter first");
      }
    } catch (error) {
        console.log(error);
        if(error instanceof ApplicationError){
        next(error)
        }
        next(new ApplicationError('something went wrong while getting your bookings',400))
    }
  }

  async getBookingRequests(req, res, next) {
    try {
      if (req.user.role == "owner") {
        let ownerId = req.user.userId;
        let requests = await this.bookingRepository.getBookingRequests(ownerId);
        res.json(requests);
      } else {
        res.send("login as owner first");
      }
    } catch (error) {
        console.log(error);
        if(error instanceof ApplicationError){
        next(error)
        }
        next(new ApplicationError('something went wrong while getting your booking requests',400))
    }
  }
  
  async updateBookingRequests(req, res, next) {
    try {
      if (req.user.role == "owner") {
        let ownerId = req.user.userId;
        let {bookingId,status} = req.body;
        console.log({bookingId,status,ownerId});
        let requests =await this.bookingRepository.updateBookingRequests(ownerId,bookingId,status);
        res.json(requests);
      } else {
        res.send("login as owner first");
      }
    } catch (error) {
        console.log(error);
        if(error instanceof ApplicationError){
        next(error)
        }
        next(new ApplicationError('something went wrong while updating your booking status',400))
    }
  }
}
