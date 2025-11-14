-- Migration: Criar tabela logs
-- Data: 2025-10-28
-- Descrição: Tabela para registrar logs de acesso às rotas da API

USE PDI;

INSERT INTO usuarios (nome, email, senha, tipo_usuario, turno)
VALUES ('Isabela', 'isa@gmail.com', '1234', 'FT', '1° Turno');


SELECT * FROM usuarios;

