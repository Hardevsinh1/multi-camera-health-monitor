// models/alert.model.js

import mongoose from "mongoose";

const alertSchema = new mongoose.Schema(
    {
        cameraId: {
            type: String,
            required: true,
            index: true,
        },

        faultType: {
            type: String,
            required: true,
            enum: [
                "HIGH_CPU",
                "HIGH_MEMORY",
                "HIGH_STORAGE",
                "HIGH_LATENCY",
                "OFFLINE",
            ],
        },

        status: {
            type: String,
            enum: ["ACTIVE", "RESOLVED"],
            default: "ACTIVE",
        },

        message: {
            type: String,
            required: true,
        },

        startedAt: {
            type: Date,
            default: Date.now,
        },

        resolvedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Alert", alertSchema);