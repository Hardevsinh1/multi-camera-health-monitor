class Camera {
    constructor({ cameraId, name, location }) {
        // Identity
        this.cameraId = cameraId;
        this.name = name;
        this.location = location;

        // Runtime State
        this.online = true;

        this.cpu = 0;
        this.memory = 0;
        this.storageUsed = 0;
        this.storageCapacity = 256;

        this.latency = 0;

        this.lastHeartbeat = null;
    }

    updateHeartbeat() {
        this.lastHeartbeat = new Date();
    }
}

export default Camera;