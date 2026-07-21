import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

class HealthController {

    receiveHealthData = asyncHandler(async (req, res) => {

        const healthData = req.body;

        // Basic validation
        if (!healthData.cameraId) {
            throw new ApiError(
                400,
                "Camera ID is required"
            );
        }

        console.log("\nReceived Health Data");
        console.log(healthData);

        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    healthData,
                    "Health data received successfully"
                )
            );
    });

}

export default new HealthController();