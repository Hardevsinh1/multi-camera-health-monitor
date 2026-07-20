import config from "./config/config.js";
import Camera from "./camera/Camera.js";


console.log("Simulator Configuration");
console.log(config);

const camera = new Camera({
    cameraId: "CAM001",
    name: "Entrance Camera",
    location: "Main Gate"
});

console.log(camera);