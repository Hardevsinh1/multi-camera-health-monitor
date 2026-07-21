import mongoose from "mongoose";
import config from "../config/config.js";
const connectDB = async () => {

    try {

        await mongoose.connect(config.mongoUri);

        console.log("MongoDB Connected");

    } catch (error) {

        console.error("MongoDB Connection Failed");

        process.exit(1);

    }

};

export default connectDB;