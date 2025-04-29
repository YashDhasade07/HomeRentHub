import express from 'express';
import cors from 'cors';
import ApplicationError from './src/middlewares/ApplicationError.js';
import favRouter from './src/features/favorites/favoriteRouter.js';
import properteyRouter from './src/features/property/propertyRouter.js';
import ratingRouter from './src/features/rating/ratingRouter.js';
import userRouter from './src/features/user/userRouter.js';
import bookingRouter from './src/features/booking/bookingRouter.js';
let app = express();
app.use(express.json())
app.use(cors());

app.use('/auth', userRouter)
app.use('/properties', properteyRouter)
app.use('/bookings', bookingRouter)
app.use('/reviews', ratingRouter)
app.use('/favorites', favRouter)

app.use((err,req,res,next)=>{
    if(err instanceof ApplicationError){
        res.status(err.status).send(`API returned with error message ${err.message} with status code ${err.status}`)
    }else{
        res.status(500).send(`something went wrong`);
    }
})

app.use((req,res)=>{
    res.status(500).send('API not Found')
})

app.listen(3100,()=>{
    console.log('server connected with port 3100')
})