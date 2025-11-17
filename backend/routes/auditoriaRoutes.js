import express from 'express';
import { listarAuditorias } from '../controllers/auditoriaController.js';

const router = express.Router();

// rota pública
router.get('/', listarAuditorias);

export default router;
