-- Migration: Criar coluna auditor_responsavel NA TABELA auditoria
-- Data: 2025-11-14
-- Descrição: Ciar coluna auditor_responsavel para referenciar o usuário responsável pela auditoria

USE PDI;

ALTER TABLE auditoria
add column auditor_responsavel INT;