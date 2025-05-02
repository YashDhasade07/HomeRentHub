import pool from "../../config/postgres.js";

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
                throw new Error('user not found')
            }
            return rows[0];
        } catch (error) {
            
        }
    }

}