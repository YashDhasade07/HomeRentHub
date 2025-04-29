import jwt from "jsonwebtoken";

export default function jwtAuthentication(req, res, next) {
  try {
    let token = req.headers["authorization"];
    if (!token) {
        res.send('plese provide token')
    }

   let user = jwt.verify(token,'aeshdytrnckdsdhyc');
   req.user = user;
   next()
  } catch (error) {

  }
}
