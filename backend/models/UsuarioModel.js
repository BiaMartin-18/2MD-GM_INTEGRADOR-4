import { 
    create, 
    read, 
    update, 
    deleteRecord, 
    comparePassword, 
    hashPassword,
    getConnection
} from '../config/database.js';

class UsuarioModel {

    // Listar usuários
    static async listarTodos(pagina = 1, limite = 10) {
        const offset = (pagina - 1) * limite;
        const conn = await getConnection();

        try {
            const sql = `
                SELECT id_usuario, nome, email, tipo_usuario, turno, data_criacao, data_atualizacao
                FROM usuarios
                ORDER BY id_usuario DESC
                LIMIT ? OFFSET ?
            `;

            const [usuarios] = await conn.query(sql, [limite, offset]);

            const [totalRes] = await conn.execute(`SELECT COUNT(*) AS total FROM usuarios`);
            const total = totalRes[0].total;

            return {
                usuarios,
                total,
                pagina,
                limite,
                totalPaginas: Math.ceil(total / limite),
            };
        } finally {
            conn.release();
        }
    }

    // Buscar por ID
    static async buscarPorId(id) {
        const rows = await read("usuarios", `id_usuario = ${id}`);
        return rows[0] || null;
    }

    // Buscar por email
    static async buscarPorEmail(email) {
        const rows = await read("usuarios", `email = '${email}'`);
        return rows[0] || null;
    }

    // Criar usuário
    static async criar(dadosUsuario) {
        const senhaHash = await hashPassword(dadosUsuario.senha);

        const dados = {
            nome: dadosUsuario.nome,
            email: dadosUsuario.email.toLowerCase(),
            senha: senhaHash,
            tipo_usuario: dadosUsuario.tipo_usuario,
            turno: dadosUsuario.turno || null
        };

        return await create("usuarios", dados);
    }

    // Atualizar usuário
    static async atualizar(id, dadosUsuario) {
        if (dadosUsuario.senha) {
            dadosUsuario.senha = await hashPassword(dadosUsuario.senha);
        }

        return await update("usuarios", dadosUsuario, `id_usuario = ${id}`);
    }

    // Excluir usuário
    static async excluir(id) {
        return await deleteRecord("usuarios", `id_usuario = ${id}`);
    }

    // Verificar login
    static async verificarCredenciais(email, senha) {
        const usuario = await this.buscarPorEmail(email);

        if (!usuario) return null;

        const senhaValida = await comparePassword(senha, usuario.senha);
        if (!senhaValida) return null;

        // Retornar dados formatados
       return {
    id: usuario.id_usuario,
    nome: usuario.nome,
    email: usuario.email,
    tipo_usuario: usuario.tipo_usuario,  // <-- manter sempre o nome real
    turno: usuario.turno
};

    }
}

export default UsuarioModel;
