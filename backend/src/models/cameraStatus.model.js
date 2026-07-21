import mongoose from "mongoose";

const cameraStatusSchema = new mongoose.Schema({

    cameraId: {
        type: String,
        required: true,
        unique: true,
        index: true
    },

    name: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    cpu: Number,

    memory: Number,

    storageUsed: Number,

    storageCapacity: Number,

    latency: Number,

    online: Boolean,

    faultType: String,

    lastHeartbeat: Date

}, {
    timestamps: true
});

export default mongoose.model(
    "CameraStatus",
    cameraStatusSchema
);