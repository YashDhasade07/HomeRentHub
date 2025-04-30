import express from "express";
import FavoriteController from "./favoriteController.js";
import jwtAuthentication from "../../middlewares/jwtAuthentication.js";
let favRouter = express.Router();
let favoriteController = new FavoriteController()
favRouter.post('/',jwtAuthentication, (req,res,next)=>{
    favoriteController.setFavorite(req,res,next)
})

favRouter.get('/',jwtAuthentication, (req,res,next)=>{
    favoriteController.getFavorite(req,res,next)
})
export default favRouter;

