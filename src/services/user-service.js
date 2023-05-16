const UserRepository = require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/serverConfig')
const userRepositoryObj = new UserRepository();
const bcrypt = require('bcrypt');

class UserService{

    async create(data){
        try {
            const user = await userRepositoryObj.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong on service layer");
            throw error;
        }
    }

    // async signIn(email , password){
    //    try {
    //         // step 1 -> fetch the user using email
    //         const user = await userRepositoryObj.getUserByEmail(email);
            
    //         // step 2 -> compare incoming plain password with the stored encrypted password
    //         const passwordsMatch = this.comparePassword(password,user.password);
            
    //         if(!passwordsMatch){
    //             console.log("Password dosn't match");
    //             throw { err : "Incorrect password"};
    //         }

    //         const newJWT = this.createToken({email : user.email, id : user.id});
    //         return newJWT;
    //    } catch (error) {
    //        console.log('Something went wrong in sign in process');
    //        throw error;
    //    }

    // }

    comparePassword(plainPassword , encryptedPassword){
       try {
        return bcrypt.compareSync(plainPassword,encryptedPassword);
       } catch (error) {
           console.log("Something went wron in passowrd comparison");
           throw error;
       }
    }

    createToken(user){
        try {
            const response = jwt.sign(user,JWT_KEY, {expiresIn:'1h'});
            return response;
        } catch (error) {
            console.log('Something went wrong in token creation');
        }
    }

    verifyToken(token){
        try {
            const response = jwt.verify(token,JWT_KEY);
            return response;
        } catch (error) {
            console.log('Something went wrong in token verification');
        }
    }
}

module.exports = UserService;