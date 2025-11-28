# 🚗 Controle PDI - GM

Sistema desenvolvido para controle de gerenciamento de manutenções preventivas e corretivas dos veículos da frota GM.

# 📌 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Entidades](#entidades)
- [Fluxo do Sistema](#fluxo-do-sistema)
- [Endpoints da API](#endpoints-da-api)
- [Funcionalidades](#funcionalidades)
- [Telas do Sistema](#telas-do-sistema)
- [Autenticação](#autenticação)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Melhorias Futuras](#melhorias-futuras)
- [Licença](#licença)

---

## 💻 Sobre o Projeto

O **Controle PDI – GM** é um sistema destinado ao gerenciamento completo da frota GM, permitindo:

- Registrar auditorias técnicas  
- Cadastrar veículos e seus dados  
- Reportar e tratar defeitos  
- Acompanhar manutenções  
- Visualizar estatísticas em tempo real  

O foco principal é garantir **rastreabilidade, padronização de auditorias e visão clara do status dos veículos**.

---

## 🛠 Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework Web
- **MySQL** - Banco de Dados Relacional
- **JWT** - Autenticação e Autorização
- **Bcrypt** - Criptografia de senhas

### Frontend
- **Next.js** - Framework React
- **React** - Biblioteca JavaScript
- **Bootstrap** - Framework CSS
- **Bootstrap Icons** - Ícones

### Banco de Dados
- **MySQL** - Sistema de gerenciamento de banco de dados relacional

## 📁 Estrutura do Projeto

2MD-GM_INTEGRADOR/
├── backend/                 # API RESTful em Node.js
│   ├── config/             # Configurações (banco de dados, JWT)
│   ├── controllers/        # Lógica de negócio (controllers)
│   ├── middlewares/        # Middlewares (auth, upload, logs, erros)
│   ├── models/             # Modelos de dados
│   ├── routes/             # Definição de rotas
│   ├── migrations/         # Scripts SQL para criação do banco
│   ├── uploads/            # Arquivos enviados pelos usuários
│   ├── utils/              # Utilitários
│   ├── dev-utils/          # Ferramentas de desenvolvimento
│   ├── app.js              # Arquivo principal da aplicação
│   ├── package.json        # Dependências do backend
│   └── env.example         # Exemplo de variáveis de ambiente
│
├── frontend/               # Interface web em Next.js
│   ├── src/
│   │   └── app/            # Aplicação Next.js (App Router)
│   ├── public/             # Arquivos estáticos
│   ├── package.json        # Dependências do frontend
│   └── next.config.mjs     # Configuração do Next.js
│
├── docs/                   # Documentação do projeto
│   └── docs.md             # Documentação adicional
│
├── LICENSE                 # Licença do projeto
└── README.md               # Este arquivo
```

## 🏗️ Arquitetura do Backend

O backend segue o padrão **MVC (Model-View-Controller)**:

### 📂 Estrutura Detalhada do Backend

```
backend/
├── config/
│   ├── database.js         # Configuração de conexão com MySQL
│   └── jwt.js              # Configuração JWT (secret, expiração)
│
├── controllers/
│   ├── AuthController.js   # Autenticação (login, registro, perfil)
│   ├── ProdutoController.js # CRUD de produtos
│   ├── CriptografiaController.js # Demonstração de criptografia
│
├── middlewares/
│   ├── authMiddleware.js   # Validação de tokens JWT
│   ├── uploadMiddleware.js # Validação e processamento de uploads
│   ├── logMiddleware.js    # Registro de requisições no banco
│   └── errorMiddleware.js  # Tratamento centralizado de erros
│
├── models/
│   ├── ProdutoModel.js     # Modelo de dados de produtos
│   └── UsuarioModel.js     # Modelo de dados de usuários
│
├── routes/
│   ├── authRotas.js        # Rotas de autenticação
│   ├── produtoRotas.js     # Rotas de produtos
│   ├── usuarioRotas.js     # Rotas de usuários (admin)
│   └── criptografiaRotas.js # Rotas educacionais
│
├── migrations/
│   ├── 20251028_001_create_database.sql      # Criação do banco
│   ├── 20251028_002_create_table_usuarios.sql # Tabela de usuários
│   ├── 20251028_003_create_table_produtos.sql # Tabela de produtos
│   ├── 20251028_004_insert_dados_iniciais.sql # Dados iniciais
│   └── 20251028_005_create_table_logs.sql    # Tabela de logs
│
└── dev-utils/
    ├── gerar-hash-senha.js # Utilitário para gerar hash de senhas
    ├── gerar-jwt-secret.js # Utilitário para gerar secret JWT
    └── verificar-logs.js   # Utilitário para verificar logs
```

## 🎨 Arquitetura do Frontend
