-- Migration: Fazer inserção de dados iniciais na tabela auditoria
-- Data: 2025-11-19
-- Descrição: Fazer inserção de dados iniciais na tabela auditoria para teste do sistema

USE PDI;

INSERT INTO auditoria (data_auditoria, resultado, part_number, auditor_responsavel) VALUES
('2025-10-01 09:00:00', 'Aprovado', 'ABC1234', 2),
('2025-11-02 10:30:00', 'Reprovado', 'BRF2981', 5),
('2025-11-03 14:00:00', 'Pendente', 'KLT7823', 9),
('2025-09-04 11:00:00', 'Aprovado', 'HGF9127', 2),
('2025-09-05 13:30:00', 'Aprovado', 'PLM4472', 5),
('2025-11-06 15:00:00', 'Reprovado', 'QWE5637', 9),
('2025-10-07 09:45:00', 'Pendente', 'RTY8290', 2),
('2025-11-08 10:15:00', 'Aprovado', 'UIO1029', 5),
('2025-11-09 14:30:00', 'Reprovado', 'ASD4168', 9),
('2025-11-10 11:15:00', 'Aprovado', 'FGH9351', 2),
('2025-11-11 13:00:00', 'Pendente', 'JKL2873', 5),
('2025-12-12 16:00:00', 'Pendente', 'ZXC7201', 9),
('2025-10-29 09:30:00', 'Reprovado', 'BNM5430', 2),
('2025-11-14 10:45:00', 'Pendente', 'WER6592', 5),
('2025-11-15 12:00:00', 'Aprovado', 'TYU9844', 9),
('2025-09-16 14:15:00', 'Aprovado', 'IOP2256', 2),
('2025-11-17 15:45:00', 'Reprovado', 'GHJ3109', 5),
('2025-10-18 09:20:00', 'Pendente', 'VBN7783', 9),
('2025-10-19 11:10:00', 'Aprovado', 'MKO6621', 2),
('2025-11-20 13:40:00', 'Reprovado', 'LPO5508', 5);



SELECT * FROM auditoria;