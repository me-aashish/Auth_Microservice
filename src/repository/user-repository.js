const {User,Role} = require('../models/index');
const ValidationError = require('../utils/validation-error')

class UserRepository{

    async create(data){
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            if(error.name == 'SequelizeValidationError'){
                throw new ValidationError(error);
            }
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async delete(userId){
        try {
            const user = await User.destroy({
                where:{
                    id : userId
                }
            });
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async getById(userId){
        try {
            const user = await User.findByPk(userId,{
                attributes : ['email', 'id']
            });
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async getUserByEmail(userEmail){
        try {
            const user = await User.findOne({
                where : {
                    email : userEmail
                }
            });
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async isAdmin(userId){
        try {
            const adminRole = await Role.findOne({
                where : {
                    name: 'ADMIN'
                }
            });
            
            const user = await User.findByPk(userId);

            return user.hasRole(adminRole);

        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
}

module.exports = UserRepository