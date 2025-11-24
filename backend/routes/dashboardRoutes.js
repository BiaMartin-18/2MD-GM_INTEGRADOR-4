// backend/routes/dashboardRoutes.js
import express from "express";
import { getDashboardData, getDashboardCards } from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/dados", getDashboardData); // gráficos
router.get("/cards", getDashboardCards); // values para os 4 cards

export default router;
