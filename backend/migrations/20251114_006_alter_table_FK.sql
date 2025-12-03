-- Migration: adicionar chave estrangeira na tabela auditoria
-- Data: 2025-11-14
-- Descrição: Adicionar chave estrangeira para referenciar a tabela veiculos

USE PDI;


ALTER TABLE auditoria
ADD CONSTRAINT fk_auditoria_veiculo
FOREIGN KEY (part_number)
REFERENCES veiculos(part_number)
ON UPDATE CASCADE
ON DELETE CASCADE;
