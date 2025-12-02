-- Migration: Criar chave estrangeira auditor_responsavel NA TABELA auditoria
-- Data: 2025-11-14
-- Descrição: criar chave estrangeira para referenciar o usuário responsável pela auditoria

USE PDI;

ALTER TABLE auditoria
ADD CONSTRAINT fk_auditoria_usuario
FOREIGN KEY (auditor_responsavel)
REFERENCES usuarios(id_usuario)
ON UPDATE CASCADE
ON DELETE SET NULL;
