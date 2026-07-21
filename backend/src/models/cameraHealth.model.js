import mongoose from "mongoose";

const cameraHealthSchema = new mongoose.Schema({

    cameraId: {
        type: String,
        required: true,
        index: true
    },

    name: String,

    location: String,

    cpu: Number,

    memory: Number,

    storageUsed: Number,

    storageCapacity: Number,

    latency: Number,

    online: Boolean,

    faultType: String,

    heartbeat: Date

}, {
    timestamps: true
});

cameraHealthSchema.index(
    { createdAt: 1 },
    {
        expireAfterSeconds: 60 * 60 * 24 * 30
    }
);

export default mongoose.model(
    "CameraHealth",
    cameraHealthSchema
);