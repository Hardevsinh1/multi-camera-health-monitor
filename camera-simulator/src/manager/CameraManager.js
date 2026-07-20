import Camera from "../camera/Camera.js";
import config from "../config/config.js";

class CameraManager {
    constructor() {
        this.cameras = [];
    }

    initializeCameras() {
        const locations = [
            "Main Gate",
            "Parking",
            "Warehouse",
            "Reception",
            "Office Floor",
            "Server Room",
            "Lobby",
            "Loading Dock",
            "Conference Room",
            "Cafeteria",
        ];

        for (let i = 0; i < config.cameraCount; i++) {
            const camera = new Camera({
                cameraId: `CAM${String(i + 1).padStart(3, "0")}`,
                name: `Camera ${i + 1}`,
                location: locations[i % locations.length],
            });

            this.cameras.push(camera);
        }
    }

    getAllCameras() {
        return this.cameras;
    }

    updateAllCameras() {

        // this.cameras.forEach(camera => {
    
        //     camera.tick();
    
        // });
    
        this.cameras.forEach(camera => {

            const healthData = camera.tick();
        
            console.log(healthData);
        
        });
    }
}

export default CameraManager;