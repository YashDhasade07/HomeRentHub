import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserRepository from "./userModel.js";
import ApplicationError from "../../middlewares/ApplicationError.js";
export default class UserController {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async registerUser(req, res, next) {
    try {
      let { name, role, email, password } = req.body;
      let hashedPass = await bcrypt.hash(password, 10);
      await this.userRepository.registerUser(name, role, email, hashedPass);
      res.send("User Registered Sucessfully");
    } catch (error) {
        console.log(error);
        if(error instanceof ApplicationError){
            next(error)
        }
        next(new ApplicationError('something went wrong while user registration',400))
    }
  }

  async loginUser(req, res, next) {
    try {
      let { email, password } = req.body;
      let user = await this.userRepository.loginUser(email);
      let isPassword = await bcrypt.compare(password, user.password);
      if (isPassword) {
        let token = jwt.sign(
          { userId: user.id, role: user.role },
          "aeshdytrnckdsdhyc",
          { expiresIn: "10h" }
        );
        res.send(token);
      } else {
        throw new ApplicationError('incorrect credentials',400);
      }
    } catch (error) {
        console.log(error);
        if(error instanceof ApplicationError){
            next(error)
        }
        next(new ApplicationError('something went wrong while logging in',400))
    }
  }
}
