
export default class PropertyController{
    constructor(){
        this.propertyRepository = new PropertyRepository()
    }

    async createProperty(req,res,next){
        try {
            if(req.user.role == owner){
                let ownerId = req.user.userId;
                let {title,description,city,address,type,rent} = req.body;
                await this.propertyRepository.createProperty(ownerId,title,description,city,address,type,rent);
                res.send('Propertey registered successfully')
            }else{
                res.send('Login as owner to list a property')
            }
        } catch (error) {
            
        }
    }

    async getProperty(req,res,next){
        try {
            let filter = req.query;
            let properties = await this.propertyRepository.getProperty(filter);
            res.send(properties)
        } catch (error) {
            
        }
    }

    async getPropertyById(req,res,next){
        try {
            let id = req.params.id;
            let propertey = await this.propertyRepository.getPropertyById(id);
            res.send(propertey)
        } catch (error) {
            
        }
    }

    async updateProperty(req,res,next){
        try {
            let ownerId = req.user.userId;
            let id = req.params.id;
            let propertey = await this.propertyRepository.updateProperty(ownerId,id);
            res.send(propertey)
        } catch (error) {
            
        }
    }

    async deleteProperty(req,res,next){
        try {
            let ownerId = req.user.userId;
            let id = req.params.id;
            let propertey = await this.propertyRepository.deleteProperty(ownerId,id);
            res.send(propertey)
        } catch (error) {
            
        }
    }
}