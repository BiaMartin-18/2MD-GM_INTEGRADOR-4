-- Migration: Criar tabela logs
-- Data: 2025-10-28
-- Descrição: Tabela para registrar logs de acesso às rotas da API

USE PDI;

INSERT INTO veiculos (part_number, modelo, defeito, descrição, grau_defeito, status_veiculo)
VALUES ('XFGHY567', 'Montana', 'Gap de 2mm na porta traseira', 'Porta apresenta um espassamento incorreto', 'Médio', 'Manutenção');

SELECT * FROM veiculos;