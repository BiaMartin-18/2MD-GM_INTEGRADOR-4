import UsuarioModel from "../models/UsuarioModel.js";

class UsuarioController {

    // GET /usuarios
    static async listarUsuarios(req, res) {
        try {
            const usuarios = await UsuarioModel.listarTodos();
            res.status(200).json({
                sucesso: true,
                dados: usuarios
            });
        } catch (error) {
            console.error("Erro ao listar usuários:", error);
            res.status(500).json({
                sucesso: false,
                erro: "Erro interno do servidor"
            });
        }
    }

    // POST /usuarios
    static async criarUsuario(req, res) {
        try {
            const { nome, email, senha, tipo } = req.body;
            
            if (!nome || !email || !senha) {
                return res.status(400).json({ sucesso: false, mensagem: "Dados incompletos" });
            }

            const novoId = await UsuarioModel.criar({
                nome,
                email,
                senha,
                tipo: tipo || "comum"
            });

            res.status(201).json({
                sucesso: true,
                mensagem: "Usuário criado",
                id: novoId
            });
        } catch (error) {
            console.error("Erro ao criar usuário:", error);
            res.status(500).json({ sucesso: false, erro: "Erro interno do servidor" });
        }
    }

    // PUT /usuarios/:id
    static async atualizarUsuario(req, res) {
        try {
            const { id } = req.params;
            const dados = req.body;

            const atualizado = await UsuarioModel.atualizar(id, dados);

            res.status(200).json({
                sucesso: true,
                mensagem: "Usuário atualizado",
                dados: atualizado
            });
        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            res.status(500).json({ sucesso: false, erro: "Erro interno do servidor" });
        }
    }

    // DELETE /usuarios/:id
    static async excluirUsuario(req, res) {
        try {
            const { id } = req.params;

            await UsuarioModel.excluir(id);

            res.status(200).json({
                sucesso: true,
                mensagem: "Usuário excluído"
            });
        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
            res.status(500).json({ sucesso: false, erro: "Erro interno do servidor" });
        }
    }
}

export default UsuarioController;
