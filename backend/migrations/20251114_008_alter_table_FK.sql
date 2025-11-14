-- Migration: Criar tabela logs
-- Data: 2025-10-28
-- Descrição: Tabela para registrar logs de acesso às rotas da API

USE PDI;

ALTER TABLE auditoria
ADD CONSTRAINT fk_auditoria_usuario
FOREIGN KEY (auditor_responsavel)
REFERENCES usuarios(id_usuario)
ON UPDATE CASCADE
ON DELETE SET NULL;
