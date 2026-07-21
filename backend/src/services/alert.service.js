import Alert from "../models/alert.model.js";

class AlertService {

    async processHealthReport(healthData) {

        await this.checkHighCpu(healthData);

    }

    async checkHighCpu(healthData) {

        if (healthData.cpu > 85) {
    
            await this.createHighCpuAlert(healthData);
    
        } else {
    
            await this.resolveHighCpuAlert(healthData);
    
        }
    
    }

    async createHighCpuAlert(healthData) {

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

    async resolveHighCpuAlert(healthData) {

        const activeAlert = await Alert.findOne({
    
            cameraId: healthData.cameraId,
    
            faultType: "HIGH_CPU",
    
            status: "ACTIVE"
    
        });
    
        if (!activeAlert) {
            return;
        }
    
        activeAlert.status = "RESOLVED";
    
        activeAlert.resolvedAt = new Date();
    
        await activeAlert.save();
    
        console.log(
            `✅ HIGH_CPU alert resolved for ${healthData.cameraId}`
        );
    
    }
}
// await this.checkHighMemory(healthData);

// await this.checkHighStorage(healthData);

// await this.checkHighLatency(healthData);

// await this.checkOffline(healthData);
export default new AlertService();