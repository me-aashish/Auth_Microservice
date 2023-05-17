const validateRequest = (req,res,next) => {
    if(!req.body.email || !req.body.password){
        res.status(400).json({
            success: false,
            data: {},
            message: "something went wrong",
            err : "email or password missing in the request"
        });
    }
    next();
}

const isAdminValidation = (req,res,next) => {
    if(!req.body.id){
        res.status(400).json({
            success: false,
            data: {},
            message: "something went wrong",
            err : "user id not given"
        });
    }
    next();
}

module.exports = {
    validateRequest,
    isAdminValidation
}