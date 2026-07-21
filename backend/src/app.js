import express from "express";
import cors from "cors";
import ApiResponse from "./utils/ApiResponse.js"
import healthRoutes from "./routes/health.routes.js";
import errorMiddleware from "./middleware/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    return res.status(200).json(

        new ApiResponse(
            200,
            req.body,
            "Health data received"
        )
    
    );
});

app.use("/api/health", healthRoutes);

app.use(errorMiddleware);

export default app;