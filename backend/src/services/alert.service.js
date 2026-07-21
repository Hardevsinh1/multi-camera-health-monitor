import Alert from "../models/alert.model.js";

class AlertService {

    async processHealthReport(healthData) {

        await this.checkHighCpu(healthData);

    }

    async checkHighCpu(healthData) {

        if (healthData.cpu <= 85) {
            return;
        }
    
        const existingAlert = await Alert.findOne({
    
            cameraId: healthData.cameraId,
    
            faultType: "HIGH_CPU",
    
            status: "ACTIVE"
    
        });
    
        if (existingAlert) {
            return;
        }
    
        await Alert.create({
    
            cameraId: healthData.cameraId,
    
            faultType: "HIGH_CPU",
    
            status: "ACTIVE",
    
            message: `CPU usage is ${healthData.cpu.toFixed(2)}%`
    
        });
    
        console.log(
            `🚨 HIGH_CPU alert created for ${healthData.cameraId}`
        );
    
    }

}
// await this.checkHighMemory(healthData);

// await this.checkHighStorage(healthData);

// await this.checkHighLatency(healthData);

// await this.checkOffline(healthData);
export default new AlertService();