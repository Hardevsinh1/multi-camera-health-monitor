// Load environment variables from .env
import dotenv from "dotenv";

dotenv.config();

// Configuration object
// object is freezed to prevent accidental change
const config = Object.freeze({
    cameraCount: Number(process.env.CAMERA_COUNT) || 10,

    reportInterval: Number(process.env.REPORT_INTERVAL) || 30000,

    backendUrl:
        process.env.BACKEND_URL ||
        "http://localhost:4000/api/health",

    faultProbability:
        Number(process.env.FAULT_PROBABILITY) || 0.03,
});

// Export configuration
export default config;