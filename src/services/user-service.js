const UserRepository = require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/serverConfig')
const userRepositoryObj = new UserRepository();

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