-- Migration: Criar tabela usuarios
-- Data: 2025-01-15
-- Descrição: Tabela para armazenar usuários do sistema

USE PDI;

CREATE TABLE IF NOT EXISTS usuarios (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipo_usuario ENUM('Auditor', 'FT', 'Engenheiros') NOT NULL,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    turno VARCHAR(50) NOT NULL,
);

