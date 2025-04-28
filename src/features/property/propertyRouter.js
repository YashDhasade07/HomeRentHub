import express from "express";
import PropertyController from "./propertyController.js";

let propertyController = new PropertyController()
let properteyRouter = express.Router();

properteyRouter.post("/property", (req, res, next) => {
    propertyController.createProperty(req, res, next)
});

properteyRouter.get("properties", (req, res, next) => {
    propertyController.getProperty(req, res, next)
});

properteyRouter.get("properties/:id", (req, res, next) => {
    propertyController.getPropertyById(req, res, next)
});

properteyRouter.patch("properties/:id", (req, res, next) => {
    propertyController.updateProperty(req, res, next)
});

properteyRouter.delete("properties/:id", (req, res, next) => {
    propertyController.deleteProperty(req, res, next)
});

export default properteyRouter;
