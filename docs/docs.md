# 🚗 Controle PDI - GM

Sistema desenvolvido para controle de gerenciamento de manutenções preventivas e corretivas dos veículos da frota GM.

# 📌 Sumário

- Sobre o Projeto
- Tecnologias Utilizadas
- Estrutura do Projeto
- Arquitetura do Backend
- Arquitetura do Frontend
- Como Começar
- Funcionalidades Implementadas
- Documentação Adicional
- Licença
- Suporte

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

```
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
└── README.md               # Documentação geral
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
│   ├── auditoriaController.js   # Controla auditorias gerais (criação, edição, consulta)
│   ├── auditoriasVeiculosController.js   # Auditorias específicas de veículos (detalhes, histórico, status)
│   ├── AuthController.js   # Autenticação (login, registro, perfil)
│   ├── dashboardController.js   # Dados do dashboard (gráficos, estatísticas, contadores)
│   ├── UsuarioController.js   # Autenticação (login, registro, perfil)
│   ├── ProdutoController.js # CRUD de produtos
│   ├── CriptografiaController.js # Demonstração de criptografia
│   └──veiculosController.js # Controle de veículos (CRUD, status, filtro, consulta)
│
├── middlewares/
│   ├── authMiddleware.js   # Validação de tokens JWT
│   ├── uploadMiddleware.js # Validação e processamento de uploads
│   ├── logMiddleware.js    # Registro de requisições no banco
│   └── errorMiddleware.js  # Tratamento centralizado de erros
│
├── models/
│   ├── ProdutoModel.js     # Modelo de dados de produtos
│   ├── UsuarioModel.js     # Modelo de dados de usuários
│   └── veiculosModel.js    # Modelo de dados de veículos
│
├── routes/
│   ├── auditoriaRoutes.js        # Rotas de auditorias
│   ├── auditoriasveiculos.js        # Junta duas tabelas (auditoria e veículos)
│   ├── authRotas.js        # Rotas de autenticação
│   ├── produtoRotas.js     # Rotas de produtos
│   ├── usuarioRotas.js     # Rotas de usuários (admin)
│   ├── veiculosid.js     # Pesquisa por ID
│   ├── veiculosRoutes.js # Rotas de veículos
│   └── dashboardRoutes.js # Rotas de dashboard
│
├── uploads/ 
│   ├── arquivos/ # Upload de arquivos
│   └── imagens/ # Upload de imagens
│
├── utils/
│   └── ApiError.js # API de tratamento de erros
│
├── migrations/
│   ├── 20251114_001_create_database.sql      # Criação do banco
│   ├── 20251114_002_create_table_usuarios.sql # Tabela de usuários
│   ├── 20251114_003_create_table_veiculos.sql # Tabela de veículos
│   ├── 20251114_004_create_table_auditorias.sql # Tabela de auditorias
│   ├── 20251114_005_alter_table_addcolumm.sql # Adiciona coluna em tabela de auditorias
│   ├── 20251114_006_alter_table_FK.sql # Altera tabela de auditorias
│   ├── 20251114_007_alter_table_addcolumm.sql # Adiciona coluna em tabela de auditorias
│   ├── 20251114_008_alter_table_FK.sql # Altera tabela de auditorias
│   ├── 20251119_009_insert_table_usuarios.sql # Insere dados de usuários
│   ├── 20251119_010_insert_table_veiculos.sql # Insere dados de veículos
│   └── 20251119_011_insert_table_auditoria.sql  # Insere dados de auditorias
│
└── dev-utils/
    ├── gerar-hash-senha.js # Utilitário para gerar hash de senhas
    ├── gerar-jwt-secret.js # Utilitário para gerar secret JWT
    ├── README.md # 
    ├── upload-arquivo.html # 
    ├── upload-imagem.html # 
    └── verificar-logs.js   # Utilitário para verificar logs
```

## 🎨 Arquitetura do Frontend

O frontend utiliza **Next.js 16** com **App Router**:

```
frontend/
├── src/
│   └── app/
│       ├── auditor/      # Pasta com os arquivos da página de auditor
│       ├── dashboard/      # Pasta com os arquivos da página de dashboard
│       ├── login/      # Pasta com os arquivos da página de login
│       ├── suporte/      # Pasta com os arquivos da página de suporte
│       ├── veiculos/      # Pasta com os arquivos da página de veículos
│       ├── layout.jsx      # Layout principal da aplicação
│       ├── page.jsx        # Página inicial
│       ├── globals.css     # Estilos globais
│       └── page.module.css # Estilos da página inicial
│
│   └── components/
│       ├── blocks/      # Pasta com Navbar e Footer
│       ├── charts/      # Pasta com Gráficos do Dashboard
│       ├── cardcarros/      # Pasta com Cards dos Veículos
│       ├── faqsection/      # Pasta com componente de Perguntas Frequentes
│       ├── BootstrapClient.jsx      # Importação do Bootstrap
│       ├── Card.jsx        # Modelo padrão de card do bootstrap
│       └── FinisherParticles.js # Fundo dinâmico
│
└── public/                 # Arquivos estáticos (imagens, ícones)
```

## 🚀 Como Começar

### Pré-requisitos

- Node.js (versão 14 ou superior)
- MySQL (versão 5.7 ou superior)
- npm ou yarn
- Git

### 1. Clonar o Repositório

```bash
git clone <url-do-repositorio>
cd 2MD-GM_INTEGRADOR
```

### 2. Configurar o Backend

#### 2.1. Instalar Dependências

```bash
cd backend
npm install
```

#### 2.2. Configurar Variáveis de Ambiente

Copie o arquivo de exemplo e configure suas credenciais:

```bash
cp env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=
DB_NAME=PDI
PORT=3001
NODE_ENV=development
JWT_SECRET=seu_secret_jwt_aqui
JWT_EXPIRES_IN=1h
```

#### 2.3. Executar Migrations

Execute os arquivos SQL na ordem correta no MySQL:

1. 20251114_001_create_database.sql      # Criação do banco
2. 20251114_002_create_table_usuarios.sql # Tabela de usuários
3. 20251114_003_create_table_veiculos.sql # Tabela de veículos
4. 20251114_004_create_table_auditorias.sql # Tabela de auditorias
5. 20251114_005_alter_table_addcolumm.sql # Adiciona coluna em tabela de auditorias
6. 20251114_006_alter_table_FK.sql # Altera tabela de auditorias
7. 20251114_007_alter_table_addcolumm.sql # Adiciona coluna em tabela de auditorias
8. 20251114_008_alter_table_FK.sql # Altera tabela de auditorias
9. 20251119_009_insert_table_usuarios.sql # Insere dados de usuários
10. 20251119_010_insert_table_veiculos.sql # Insere dados de veículos
11. 20251119_011_insert_table_auditoria.sql  # Insere dados de auditorias

#### 2.4. Iniciar o Servidor Backend

```bash
npm start
```

O servidor estará rodando em `http://localhost:3001`

### 3. Configurar o Frontend

#### 3.1. Instalar Dependências

```bash
cd ../frontend
npm install
```

#### 3.2. Iniciar o Servidor de Desenvolvimento

```bash
npm run dev
```

O frontend estará rodando em `http://localhost:3000` 

## 📚 Funcionalidades Implementadas

### Backend

- ✅ Autenticação JWT (login, registro, perfil)
- ✅ CRUD completo de produtos
- ✅ CRUD de usuários (apenas admin)
- ✅ Upload de imagens com validação
- ✅ Sistema de logs de requisições
- ✅ Paginação em listagens
- ✅ Validação de dados
- ✅ Tratamento centralizado de erros
- ✅ Middleware de autenticação
- ✅ CORS configurado

### Frontend

- ✅ Estrutura base Next.js 16
- ✅ Bootstrap 5 integrado
- ✅ Bootstrap Icons disponível

## 📖 Documentação Adicional

- **Backend**: Veja o [README.md do backend](backend/README.md) para detalhes completos da API

## 📝 Licença

Este projeto está sob a licença GPLV3. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍🏫 Suporte

Para dúvidas ou problemas, consulte:
- Documentação do backend: `backend/README.md`
- Professor responsável pelo projeto