-- Migration: Fazer inserção de dados iniciais na tabela auditoria
-- Data: 2025-11-19
-- Descrição: Fazer inserção de dados iniciais na tabela auditoria para teste do sistema

USE PDI;

INSERT INTO auditoria (data_auditoria, resultado, part_number, auditor_responsavel) VALUES
('2025-10-01 09:00:00', 'Aprovado', 'ABC12345', 2),
('2025-11-02 10:30:00', 'Reprovado', 'BRF29816', 5),
('2025-11-03 14:00:00', 'Pendente', 'KLT78237', 9),
('2025-09-04 11:00:00', 'Aprovado', 'HGF91278', 2),
('2025-09-05 13:30:00', 'Aprovado', 'PLM44729', 5),
('2025-11-06 15:00:00', 'Reprovado', 'QWE56371', 9),
('2025-10-07 09:45:00', 'Pendente', 'RTY82902', 2),
('2025-11-08 10:15:00', 'Aprovado', 'UIO10293', 5),
('2025-11-09 14:30:00', 'Reprovado', 'ASD41684', 9),
('2025-11-10 11:15:00', 'Aprovado', 'FGH93515', 2),
('2025-11-11 13:00:00', 'Pendente', 'JKL28736', 5),
('2025-12-12 16:00:00', 'Pendente', 'ZXC72017', 9),
('2025-10-29 09:30:00', 'Reprovado', 'BNM54308', 2),
('2025-11-14 10:45:00', 'Pendente', 'WER65929', 5),
('2025-11-15 12:00:00', 'Aprovado', 'TYU98441', 9),
('2025-09-16 14:15:00', 'Aprovado', 'IOP22562', 2),
('2025-11-17 15:45:00', 'Reprovado', 'GHJ31093', 5),
('2025-10-18 09:20:00', 'Pendente', 'VBN77834', 9),
('2025-10-19 11:10:00', 'Aprovado', 'MKO66215', 2),
('2025-11-20 13:40:00', 'Reprovado', 'LPO55086', 5);



SELECT * FROM auditoria;