const UserRepository = require('../repository/user-repository');

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
}

module.exports = UserService;