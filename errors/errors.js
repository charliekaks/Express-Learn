class CustomApiError extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

const customError = (msg, code)=>{
    return new CustomApiError(msg, code);
}

module.exports = {CustomApiError, customError};