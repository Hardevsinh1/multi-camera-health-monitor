import ApiError from "../utils/ApiError.js";

const errorMiddleware = (err, req, res, next) => {

    // Convert unknown errors into ApiError
    if (!(err instanceof ApiError)) {

        err = new ApiError(
            500,
            err.message || "Internal Server Error"
        );

    }

    return res.status(err.statusCode).json({

        statusCode: err.statusCode,

        success: false,

        message: err.message,

        data: null

    });

};

export default errorMiddleware;