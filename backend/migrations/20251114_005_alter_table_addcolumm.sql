-- Migration: Adiconar coluna part_number NA TABELA auditoria
-- Data: 2025-11-14
-- Descrição: Adicionar coluna part_number para referenciar o veículo auditado


USE PDI;

ALTER TABLE auditoria
add COLUMN part_number VARCHAR(8);

