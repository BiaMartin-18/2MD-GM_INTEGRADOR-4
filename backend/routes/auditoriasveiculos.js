import express from "express";
import {
  getAuditoriasVeiculos,
  createAuditoriaVeiculo,
  updateAuditoriaVeiculo,
  deleteAuditoriaVeiculo
} from "../controllers/auditoriasVeiculosController.js";

const router = express.Router();

// ================= GET =================
router.get("/", getAuditoriasVeiculos);

// ================= POST =================
router.post("/", createAuditoriaVeiculo);

// ================= PUT =================
// Recebe o part_number como parâmetro
router.put("/:part_number", updateAuditoriaVeiculo);

// ================= DELETE =================
// Recebe o part_number como parâmetro
router.delete("/:part_number", deleteAuditoriaVeiculo);

export default router;
