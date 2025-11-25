import express from "express";
import { getAuditoriasVeiculos } from "../controllers/auditoriasVeiculosController.js";

const router = express.Router();

router.get("/", getAuditoriasVeiculos);

export default router;
