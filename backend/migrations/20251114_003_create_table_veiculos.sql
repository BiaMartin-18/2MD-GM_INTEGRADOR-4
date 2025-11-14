-- Migration: Criar tabela produtos
-- Data: 2025-01-15
-- Descrição: Tabela para armazenar produtos do sistema

USE PDI;

CREATE TABLE IF NOT EXISTS veiculos (
    part_number VARCHAR (8) PRIMARY KEY,
    modelo ENUM('Montana', 'Tracker', 'Spin') NOT NULL,
    defeito VARCHAR(255) NOT NULL,
    descrição TEXT,
    grau_defeito VARCHAR(50) NOT NULL,
    status_veiculo VARCHAR(50) NOT NULL,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

