import jwt from "jsonwebtoken";
import ApplicationError from "./ApplicationError.js";
export default function jwtAuthentication(req, res, next) {
  try {
    let token = req.headers["authorization"];
    if (!token) {
        res.send('plese provide token')
    }

   let user = jwt.verify(token,'aeshdytrnckdsdhyc');
   if(!user){
     throw new ApplicationError('you are not Authorised to access this url',123)
    }
    req.user = user;
    next()
  } catch (error) {
    throw new ApplicationError('Something went wrong while authentication',402)
  }
}
