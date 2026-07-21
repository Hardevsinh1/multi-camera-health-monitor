import CameraHealth from "../models/cameraHealth.model.js";
import CameraStatus from "../models/cameraStatus.model.js";
import alertService from "./alert.service.js";

class HealthService {

    // async processHealthData(healthData) {

    //     const payload = {
    //         ...healthData,
    //         // camera may have wrong time
    //         heartbeat: new Date()
    //     };
    //     return await CameraHealth.create(payload);

    // }

    async processHealthData(healthData) {

        const payload = {
            ...healthData,
            heartbeat: new Date()
        };
        

        // 1. Save history
        const savedHealth =
            await CameraHealth.create(payload);
    
        // 2. Update latest status
        const currentStatus = await CameraStatus.findOneAndUpdate(
    
            {
                cameraId: payload.cameraId
            },
    
            {
                $set: {
                    ...payload,
                    lastHeartbeat: payload.heartbeat
                }
    
            },
    
            {
                upsert: true,
                returnDocument: "after"
            }
    
        );

        await alertService.processHealthReport(payload);
    
        return {
            history: savedHealth,
            currentStatus
        };
    
    }

}

export default new HealthService();