const errorHandle = (err,req,res,next)=>{
    const statusCode = statusCode || 500;
    const errorResponse = {
        error :{
            message: err.message ||'Internal Server Error',
            code: err.code || 'error interno'
        }
    }
    res.status(statusCode).json(errorResponse);
}


module.exports = errorHandle;