



export default class RatingController{
    constructor(){
        this.ratigRepository = new RatigRepository()
    }

    async postReview(req,res,next){
        try {
            if (req.user.role == "renter") {
                let renterId = req.user.userId;
                let {propertyId, rating, comment} = req.body;
                await this.ratigRepository.postReview(propertyId,renterId, rating, comment);
                res.send('Posted review sucessfully');
              } else {
                res.send("login as renter first");
              }
        } catch (error) {
            
        }
    }

    async getReviewsByPropertyId(req,res,next){
        try {
            
                let {propertyId} = req.params;
                let reviews = await this.ratigRepository.getReviewsByPropertyId(propertyId);
                res.json(reviews);
             
        } catch (error) {
            
        }
    }
}