import pool from "../../config/postgres.js";
import ApplicationError from "../../middlewares/ApplicationError.js";
export default class UserRepository{
    constructor(){
        this.pool = pool;
    }

    async registerUser(name, role, email, hashedPass){
        try {
            const query = `
                INSERT INTO users (name, role, email, password)
                VALUES ($1, $2, $3, $4);
            `;
            const values = [name, role, email, hashedPass];
            await this.pool.query(query,values)
        } catch (error) {
            throw new ApplicationError('something went wrong while user registration',400)
        }
    }

    async loginUser(email){
        try {
            const query = `
            SELECT id, name, role, email, password
            FROM users
            WHERE email = $1
            `;
    
            const {rows} = await this.pool.query(query,[email]);
            if(!rows.length){
                throw new ApplicationError('User not found',40)
            }
            return rows[0];
        } catch (error) {
            if(error instanceof ApplicationError){
                throw error
            }
            throw new ApplicationError('something went wrong while logging in',400)
        }
    }

}