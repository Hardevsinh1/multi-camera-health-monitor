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

    updateHeartbeat() {
        this.lastHeartbeat = new Date();
    }
}

export default Camera;