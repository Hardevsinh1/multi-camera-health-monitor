import config from "./config/config.js";
import Camera from "./camera/Camera.js";
import CameraManager from "./manager/CameraManager.js";
import MetricsGenerator from "./metrics/MetricsGenerator.js";

// testing simulator config (.env vars)
console.log("Simulator Configuration");
console.log(config);

// camera object creation
// const camera = new Camera({
//     cameraId: "CAM001",
//     name: "Entrance Camera",
//     location: "Main Gate"
// });

// console.log(camera);

//camera manager testing 
const manager = new CameraManager();

manager.initializeCameras();

manager.getAllCameras().forEach(camera => {
    console.log(
        `${camera.cameraId} | ${camera.name} | ${camera.location}`
    );
});


// Matrics generator testing
const current = {
    cpu: 25,
    memory: 40,
    storageUsed: 50,
    storageCapacity: 256,
    latency: 15
};

for (let i = 0; i < 10; i++) {
    Object.assign(current, MetricsGenerator.generate(current));
    console.log(current);
}