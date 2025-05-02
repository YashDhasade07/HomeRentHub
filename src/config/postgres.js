
import { Pool } from "pg";

const pool = new Pool({
    connectionString: 'postgres://postgres:root@localhost:5432/homerenthub'
});

pool.on('connect', ()=>{
    console.log('Connected to Postgres');
})

pool.on('error', ()=>{
    console.log('Connection failed');
})

export default pool;






// postgres://postgres:rootUser@localhost:5432/homerenthub

// import { Client } from "pg";

// export default async function connectToPostgres() {
//   const client = new Client({
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: "rootUser",
//     database: "homerenthub",
//   });

//   try {
//     await client.connect();
//     console.log("connected to postgres sucesfully");
//     return client;
//   } catch (error) {
//     console.log(error);
//     throw new Error("connection failed ");
//   }
// }
