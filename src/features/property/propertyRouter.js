import express from "express";
import PropertyController from "./propertyController.js";
import jwtAuthentication from "../../middlewares/jwtAuthentication.js";
let propertyController = new PropertyController()
let properteyRouter = express.Router();

properteyRouter.post("/",jwtAuthentication, (req, res, next) => {
    propertyController.createProperty(req, res, next)
});

properteyRouter.get("/", (req, res, next) => {
    propertyController.getProperty(req, res, next)
});

properteyRouter.get("/:id", (req, res, next) => {
    propertyController.getPropertyById(req, res, next)
});

properteyRouter.patch("/:id",jwtAuthentication, (req, res, next) => {
    propertyController.updateProperty(req, res, next)
});

properteyRouter.delete("/:id",jwtAuthentication, (req, res, next) => {
    propertyController.deleteProperty(req, res, next)
});

export default properteyRouter;
