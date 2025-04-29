





export default class FavoriteController {
    constructor() {
      this.favoriteRepo = new FavoriteRepo();
    }
  
    async setFavorite(){
        try {
            if (req.user.role == "renter") {
                let renterId = req.user.userId;
                let {propertyId} = req.body;
                await this.favoriteRepo.setFavorite(propertyId,renterId);
                res.send('Property added to favorites');
              } else {
                res.send("login as renter first");
              }
        } catch (error) {
            
        }
    }


    async getFavorite(){
        try {
            if (req.user.role == "renter") {
                let renterId = req.user.userId;
                let favorites = await this.favoriteRepo.getFavorite(renterId);
                res.json(favorites);
              } else {
                res.send("login as renter first");
              }
        } catch (error) {
            
        }
    }
    
  }