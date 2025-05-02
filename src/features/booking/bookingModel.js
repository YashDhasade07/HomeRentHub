import pool from "../../config/postgres.js";

export default class BookingRepository{
    constructor(){
        this.pool= pool
    }

    async createBooking(propertyId, renterId, startDate, endDate){
        try {
            let query = `
            INSERT INTO bookings(property_id, renter_id, start_date, end_date)
            VALUES ($1, $2, $3, $4)
            `
            const values = [propertyId, renterId, startDate, endDate];
            await this.pool.query(query,values)
        } catch (error) {
            
        }
    }

    async getBookings(renterId){
        try {
            
            const query = `
          SELECT * FROM bookings 
          WHERE renter_id = $1
        `;
    
        const { rows } = await this.pool.query(query, [renterId]);
        return rows;
        } catch (error) {
            
        }
    }

    async getBookingRequests(ownerId) {
        try {
            const query = `
              SELECT * FROM bookings
              WHERE owner_id = $1
            `;
            const { rows } = await this.pool.query(query, [ownerId]);
            return rows;
        } catch (error) {
            
        }
      }
}