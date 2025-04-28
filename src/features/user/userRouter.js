import express from 'express';
import UserController from './userController.js';
let userController = new UserController();
let userRouter = express.Router();

userRouter.post('/register',(req,res,next)=>{
    userController.registerUser(req,res,next);
})

userRouter.post('/login',(req,res,next)=>{
    userController.loginUser(req,res,next);
})


export default userRouter;