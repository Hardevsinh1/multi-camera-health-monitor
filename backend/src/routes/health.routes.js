import { Router } from "express";
import healthController from "../controllers/health.controller.js";

const router = Router();

router.post("/", healthController.receiveHealthData);

export default router;