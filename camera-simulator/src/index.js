import config from "./config/config.js";
import Camera from "./camera/Camera.js";
import CameraManager from "./manager/CameraManager.js";

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