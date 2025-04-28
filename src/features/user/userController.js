import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export default class UserController {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async registerUser(req, res, next) {
    try {
        let {name,role,email,password} = req.body;
        let hashedPass = await bcrypt.hash(password,10);
        await this.userRepository.registerUser(name,role,email,hashedPass);
        res.send('User Registered Sucessfully')
    } catch (error) {
        
    }
  }


  async loginUser(req, res, next) {
    try {
        let {email,password} = req.body;
        let user = await this.userRepository.loginUser(email);
        let isPassword =await bcrypt.compare(password,user.password);
        if(isPassword){
           let token =  jwt.sign({userId : user.id, role: user.role}, 'aeshdytrnckdsdhyc', {expiresIn: '10h'})
           res.send(token)
        }else{
            res.send('Credentials are incorrect')
        }
    } catch (error) {
        
    }
  }
}
