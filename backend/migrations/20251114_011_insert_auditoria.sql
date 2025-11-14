-- Migration: Criar tabela logs
-- Data: 2025-10-28
-- Descrição: Tabela para registrar logs de acesso às rotas da API

USE PDI;

INSERT INTO auditoria (data_auditoria, resultado, part_number, auditor_responsavel)
VALUES ('2025-11-14 10:00:00', 'Aprovado', 'XFGHY567', 2);

SELECT * FROM auditoria;
