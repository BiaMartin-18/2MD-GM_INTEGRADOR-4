import express from 'express';
import { listarAuditorias} from '../controllers/auditoriaController.js'
import { authMiddleware, auditorMiddleware } from '../middlewares/authMiddleware.js'; // Importação do arquivo

const router = express.Router();

router.get('/',authMiddleware, auditorMiddleware, listarAuditorias);

export default router;