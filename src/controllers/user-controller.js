const UserService = require('../services/user-service');

const userServiceObj = new UserService();

const create = async(req,res) => {
    try {
       const response = await userServiceObj.create({
           email : req.body.email,
           password : req.body.password
       });
       res.status(201).json({
           data : response,
           success : true,
           message : "Successfully created the user",
           err : {}
       })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : "Something went wrong",
            data : {},
            success : false,
            err: error
        });
    }
}

const signIn = async(req,res) => {
    try {
        const response = await userServiceObj.signIn(req.body.email,req.body.password);
        return res.status(201).json({
            data : response,
            success : true,
            message : "successfully signed in",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : "Something went wrong",
            data : {},
            success : false,
            err: error
        });
    }
}

module.exports = {
    create,
    signIn
}