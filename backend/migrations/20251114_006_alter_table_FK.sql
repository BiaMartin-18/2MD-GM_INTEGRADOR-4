-- Migration: Criar tabela logs
-- Data: 2025-10-28
-- Descrição: Tabela para registrar logs de acesso às rotas da API

USE PDI;


ALTER TABLE auditoria
ADD CONSTRAINT fk_auditoria_veiculo
FOREIGN KEY (part_number)
REFERENCES veiculos(part_number)
ON UPDATE CASCADE
ON DELETE CASCADE;
