import pool from "../../config/postgres.js";
import ApplicationError from "../../middlewares/ApplicationError.js";
export default class PropertyRepository {
  constructor() {
    this.pool = pool;
  }

  async createProperty(ownerId, title, description, city, address, type, rent) {
    try {
      let query = `
            INSERT INTO properties (owner_id, title, description, city, address, type, rent)
            VALUES ( $1, $2, $3, $4, $5, $6, $7);
            `;
      let values = [ownerId, title, description, city, address, type, rent];
      await this.pool.query(query, values);
    } catch (error) {
        throw ApplicationError('something went wrong while posting property',400)
    }
  }

  async getProperty(filter) {
    try {
      let query = "SELECT * FROM properties";
      let conditions = [];
      let values = [];

      Object.entries(filter).forEach(([key, value], index) => {
        conditions.push(`${key} = $${index + 1}`);
        values.push(value);
      });

      if (conditions.length) {
        query += " WHERE " + conditions.join(" AND ");
      }

      const { rows } = await this.pool.query(query, values);
      return rows;
    } catch (error) {
        throw new ApplicationError('something went wrong while fetching the properties',400)
    }
  }

  async getPropertyById(id) {
    try {
      let query = `
        SELECT * FROM properties
        WHERE id = $1
        `;
      let { rows } = await this.pool.query(query, [id]);
      return rows[0];
    } catch (error) {
        throw new ApplicationError('something went wrong while getting the property',400)
    }
  }

  async updateProperty(ownerId, id, status) {
    try {
      let query = `
        UPDATE properties
        SET is_available = $3
        WHERE id =$1 AND owner_id =$2
        RETURNING *
        `;
      const { rows } = await this.pool.query(query, [id, ownerId, status]);
      if (rows.length == 0) {
        throw new ApplicationError('You dont have access to update this property',400);
      }
      return rows[0];
    } catch (error) {
        if(err instanceof ApplicationError){
            throw error
        }
        throw new ApplicationError('something went wrong while updating the property',400)
    }
  }


  async deleteProperty(ownerId, id) {
    try {
      let query = `
        DELETE FROM properties
        WHERE id =$1 AND owner_id =$2
        `;
       await this.pool.query(query, [id, ownerId]);
 
    } catch (error) {
        throw new ApplicationError('something went wrong while deleting the property',400)
    }
  }
}
