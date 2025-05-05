import pool from "../../config/postgres.js";
import ApplicationError from "../../middlewares/ApplicationError.js";
export default class BookingRepository {
  constructor() {
    this.pool = pool;
  }

  async createBooking(propertyId, renterId, startDate, endDate) {
    try {
      let query = `
            INSERT INTO bookings(property_id, renter_id, start_date, end_date)
            VALUES ($1, $2, $3, $4)
            `;
      const values = [propertyId, renterId, startDate, endDate];
      await this.pool.query(query, values);
    } catch (error) {
        throw ApplicationError('something went wrong while booking property',400)
    }
  }

  async getBookings(renterId) {
    try {
      const query = `
          SELECT * FROM bookings 
          WHERE renter_id = $1
        `;

      const { rows } = await this.pool.query(query, [renterId]);
      return rows;
    } catch (error) {
        throw ApplicationError('something went wrong while getting your bookings',400)
    }
  }

  async getBookingRequests(ownerId) {
    try {
      const query = `
               SELECT 
               b.id AS booking_id,
                b.property_id,
                b.renter_id,
                b.status,
                b.start_date,
                b.end_date,
                b.created_at AS booking_created_at,
                p.title AS property_title,
                p.city,
                p.address,
                u.name AS renter_name,
                u.email AS renter_email
      FROM bookings b
      JOIN users u ON b.renter_id = u.id
      JOIN properties p ON b.property_id = p.id
      WHERE p.owner_id = $1
      ORDER BY b.created_at DESC
    `;

      const { rows } = await this.pool.query(query, [ownerId]);
      return rows;
    } catch (error) {
        throw ApplicationError('something went wrong while getting your bookings requests',400)
    }
}

async updateBookingRequests(ownerId,bookingId,status) {
    try {
        const query = `
        UPDATE bookings
      SET status = $3
      WHERE id = $2
      AND property_id IN (
        SELECT id FROM properties WHERE owner_id = $1
        )
        RETURNING *
        `;
        const { rows } = await this.pool.query(query, [ownerId,bookingId,status]);
        return rows[0];
    } catch (error) {
        throw ApplicationError('something went wrong while updating booking status',400)
    }
  }
}
