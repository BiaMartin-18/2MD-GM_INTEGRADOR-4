-- Migration: Criar tabela logs
-- Data: 2025-10-28
-- Descrição: Tabela para registrar logs de acesso às rotas da API

USE PDI;

ALTER TABLE auditoria
add column auditor_responsavel INT;