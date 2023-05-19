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
        return res.status(error.statusCode).json({
            message : error.message,
            data : {},
            success : false,
            err: error.explanation
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

const isAuthenticated = async(req,res) => {
    try {
        const token = req.headers['x-access-token'];
        const response = await userServiceObj.isAuthenticated(token);
        res.status(200).json({
            data : response,
            success: true,
            message: "user is authenticated successfully",
            err: {}
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

const isAdmin = async(req,res) => {
    try {
        const adminOrNot = await userServiceObj.isAdmin(req.body.id);
        return res.status(200).json({
            data : adminOrNot,
            success: true,
            message: "successfully fetched whether user is admin or not",
            err: {}
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
    signIn,
    isAuthenticated,
    isAdmin
}