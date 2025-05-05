import PropertyRepository from "./propertyModel.js";
import ApplicationError from "../../middlewares/ApplicationError.js";

export default class PropertyController{
    constructor(){
        this.propertyRepository = new PropertyRepository()
    }

    async createProperty(req,res,next){
        try {
            if(req.user.role == 'owner'){
                let ownerId = req.user.userId;
                let {title,description,city,address,type,rent} = req.body;
                await this.propertyRepository.createProperty(ownerId,title,description,city,address,type,rent);
                res.send('Propertey registered successfully')
            }else{
                res.send('Login as owner to list a property')
            }
        } catch (error) {
            console.log(error);
            if(error instanceof ApplicationError){
            next(error)
            }
            next(new ApplicationError('something went wrong while posting property',400))
        }
    }

    async getProperty(req,res,next){
        try {
            let filter = req.query;
            let properties = await this.propertyRepository.getProperty(filter);
            res.send(properties)
        } catch (error) {
            console.log(error);
            if(error instanceof ApplicationError){
            next(error)
            }
            next(new ApplicationError('something went wrong while getting property',400))
        }
    }

    async getPropertyById(req,res,next){
        try {
            let id = req.params.id;
            let propertey = await this.propertyRepository.getPropertyById(id);
            res.send(propertey)
        } catch (error) {
            console.log(error);
            if(error instanceof ApplicationError){
            next(error)
            }
            next(new ApplicationError('something went wrong while getting property',400))
        }
    }

    async updateProperty(req,res,next){
        try {
            let ownerId = req.user.userId;
            let id = req.params.id;
            let status = req.body.status;
            let propertey = await this.propertyRepository.updateProperty(ownerId,id,status);
            res.send(propertey)
        } catch (error) {
            console.log(error);
            if(error instanceof ApplicationError){
            next(error)
            }
            next(new ApplicationError('something went wrong while updating property',400))
        }
    }

    async deleteProperty(req,res,next){
        try {
            let ownerId = req.user.userId;
            let id = req.params.id;
            await this.propertyRepository.deleteProperty(ownerId,id);
            res.send(`propertey deleted sucessfully`)
        } catch (error) {
            console.log(error);
            if(error instanceof ApplicationError){
            next(error)
            }
            next(new ApplicationError('something went wrong while deleting property',400))
        }
    }
}