import BookingRepository from "./bookingModel.js";

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
    } catch (error) {}
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
    } catch (error) {}
  }

  async getBookingRequests(req, res, next) {
    try {
      if (req.user.role == "owner") {
        let ownerId = req.user.userId;
        let requests =await this.bookingRepository.getBookingRequests(ownerId);
        res.json(requests);
      } else {
        res.send("login as owner first");
      }
    } catch (error) {}
  }

  async updateBookingRequests(req, res, next) {
    try {
      if (req.user.role == "owner") {
        let ownerId = req.user.userId;
        let {status} = req.body;
        let requests =await this.bookingRepository.updateBookingRequests(ownerId,status);
        res.json(requests);
      } else {
        res.send("login as owner first");
      }
    } catch (error) {}
  }
}
