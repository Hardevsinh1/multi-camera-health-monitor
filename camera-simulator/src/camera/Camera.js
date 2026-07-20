import MetricsGenerator from "../metrics/MetricsGenerator.js";

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

    getHealthData() {
        return {
            cameraId: this.cameraId,
            cpu: this.cpu,
            memory: this.memory,
            storageUsed: this.storageUsed,
            storageCapacity: this.storageCapacity,
            latency: this.latency,
            heartbeat: this.lastHeartbeat,
            online: this.online,
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

        this.cpu = metrics.cpu;
        this.memory = metrics.memory;
        this.storageUsed = metrics.storageUsed;
        this.latency = metrics.latency;
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