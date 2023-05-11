const {CustomApiError} = require('../errors/errors');

const errorMiddleware = (err,req, res, next) =>{
    if(err instanceof CustomApiError){
        return res.status(err.statusCode).json({msg:err.message});
    }
    res.status(500).json("Something went wrong please try again");
}

module.exports = errorMiddleware;