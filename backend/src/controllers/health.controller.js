import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import healthService from "../services/health.service.js";

class HealthController {

    receiveHealthData = asyncHandler(async (req, res) => {

        const healthData = req.body;

        if (!healthData.cameraId) {
            throw new ApiError(400, "Camera ID is required");
        }

        const result =
            await healthService.processHealthData(
                healthData
            );

        return res.status(200).json(
            new ApiResponse(
                200,
                result,
                "Health data processed successfully"
            )
        );

    });

}

export default new HealthController();