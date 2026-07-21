import MetricsGenerator from "../metrics/MetricsGenerator.js";
import FaultEngine from "../faults/FaultEngine.js";

class Camera {
    constructor({ cameraId, name, location }) {
        // Identity
        this.cameraId = cameraId;
        this.name = name;
        this.location = location;

        // Runtime State
        this.online = true;

        this.cpu = 25;
        this.memory = 40;
        this.storageUsed = 50;
        this.storageCapacity = 256;

        this.latency = 15;

        this.lastHeartbeat = null;
        this.faultType = null;

        this.faultEngine = new FaultEngine();
    }

    // getHealthData() {
    //     return {
    //         cameraId: this.cameraId,
    //         cpu: this.cpu,
    //         memory: this.memory,
    //         storageUsed: this.storageUsed,
    //         storageCapacity: this.storageCapacity,
    //         latency: this.latency,
    //         heartbeat: this.lastHeartbeat,
    //     };
    // }

    // getHealthData() {
    //     return {
    //         cameraId: this.cameraId,
    //         cpu: this.cpu,
    //         memory: this.memory,
    //         storageUsed: this.storageUsed,
    //         storageCapacity: this.storageCapacity,
    //         latency: this.latency,
    //         heartbeat: this.lastHeartbeat,
    //         online: this.online,
    //     };
    // }

    getHealthData() {

        return {
    
            cameraId: this.cameraId,
    
            name: this.name,
    
            location: this.location,
    
            online: this.online,
    
            cpu: Number(this.cpu.toFixed(2)),
    
            memory: Number(this.memory.toFixed(2)),
    
            storageUsed: Number(this.storageUsed.toFixed(2)),
    
            storageCapacity: this.storageCapacity,
    
            latency: Number(this.latency.toFixed(2)),
    
            heartbeat: this.lastHeartbeat,
    
            faultType: this.faultEngine.currentFault
    
        };
    
    }

    updateMetrics() {
        const metrics = MetricsGenerator.generate({
            cpu: this.cpu,
            memory: this.memory,
            storageUsed: this.storageUsed,
            storageCapacity: this.storageCapacity,
            latency: this.latency,
        });

        const finalMetrics = this.faultEngine.apply(metrics);

        this.cpu = finalMetrics.cpu;
        this.memory = finalMetrics.memory;
        this.storageUsed = finalMetrics.storageUsed;
        this.latency = finalMetrics.latency;
    }

    updateHeartbeat() {
        this.lastHeartbeat = new Date();
    }

    // update matrics heartbeat return health data
    tick() {
        this.updateMetrics();
        this.updateHeartbeat();
        return this.getHealthData();
    }
}

export default Camera;