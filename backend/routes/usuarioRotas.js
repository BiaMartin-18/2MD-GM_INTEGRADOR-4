import express from 'express';
import UsuarioController from '../controllers/UsuarioController.js';
import { authMiddleware, auditorMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Rotas de usuários (apenas admin)
router.get('/', authMiddleware, auditorMiddleware, UsuarioController.listarUsuarios);
router.post('/', authMiddleware, auditorMiddleware, UsuarioController.criarUsuario);
router.put('/:id', authMiddleware,auditorMiddleware, UsuarioController.atualizarUsuario);
router.delete('/:id', authMiddleware, auditorMiddleware, UsuarioController.excluirUsuario);

// Rotas OPTIONS para CORS (preflight requests)
router.options('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(200);
});

router.options('/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(200);
});




export default router;

