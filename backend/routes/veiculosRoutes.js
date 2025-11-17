import express from "express";
import { getVeiculos } from "../controllers/veiculosController.js";

const router = express.Router();

router.get("/", getVeiculos);

export default router;
