-- Migration: Criação da tabela auditoria
-- Data: 2025-11-14
-- Descrição: Tabela para armazenar auditorias realizadas

USE PDI;

CREATE TABLE IF NOT EXISTS auditoria (
    id_auditorias INT PRIMARY KEY AUTO_INCREMENT,
    data_auditoria DATETIME DEFAULT CURRENT_TIMESTAMP,
    resultado VARCHAR(255) NULL,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
