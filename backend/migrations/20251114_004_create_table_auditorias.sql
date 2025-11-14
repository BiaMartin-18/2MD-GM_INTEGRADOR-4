,-- Migration: Inserir dados iniciais
-- Data: 2025-01-15
-- Descrição: Dados iniciais para teste do sistema

USE PDI;

CREATE TABLE IF NOT EXISTS auditoria (
    id_auditorias INT PRIMARY KEY AUTO_INCREMENT,
    data_auditoria DATETIME DEFAULT CURRENT_TIMESTAMP,
    resultado VARCHAR(255) NOT NULL,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
