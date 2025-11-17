import express from 'express';
import AuthController from '../controllers/AuthController.js';
import { authMiddleware, auditorMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Rotas públicas de autenticação
router.post('/login', AuthController.login);
router.post('/registrar', AuthController.registrar);

// Rotas protegidas (precisam de autenticação)
router.get('/perfil', authMiddleware, AuthController.obterPerfil);

// Nova Rota Protegida por Autorização (Apenas Auditor/Admin)
//router.get('/dashboard-auditor', authMiddleware, auditorMiddleware, AuthController.acessoAuditor); 
// ^ Usa a autenticação E a autorização.

// Rotas OPTIONS para CORS (preflight requests)
router.options('/login', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.sendStatus(200);
});

router.options('/registrar', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.sendStatus(200);
});

router.options('/perfil', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(200);
});

export default router;


