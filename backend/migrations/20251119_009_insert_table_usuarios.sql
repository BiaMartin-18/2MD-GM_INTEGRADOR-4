-- Migration: Criar tabela logs
-- Data: 2025-10-28
-- Descrição: Tabela para registrar logs de acesso às rotas da API

USE PDI;

INSERT INTO usuarios (nome, email, senha, tipo_usuario, turno)
VALUES 
('Ana Karoline', 'anaKarol@gm.com', '$2a$10$DihIO1hp391Po5FXGZUOD.wIRUxLwO3tRhEQRIBEMl0/G81CaQFby', 'FT', '2° Turno'),
('Paloma de Souza', 'palomadesouza@gm.com', '$2a$10$kh025N8cj4XIhV.s8c9pZuxUI.TY56eX9fXqO3CFGuZkuryduoVQm', 'Auditor', '2° Turno'),
('Beatriz Martin', 'beatrizmartin@gm.com', '$2a$10$hsAMijIFF6Yz5KgTRf/37OHNDMpWDSakdNW6zFe560td4VhV4FDre', 'Engenheiro', '2° Turno'),
('Pedro Silva', 'pedrosilva@gm.com', '$2a$10$1rKaRpmZa1UmYsiSZ6K.ouBAmq5G/uiT86Y0VVS6P1yB/v4bJQjA.', 'FT', '1° Turno'),
('André Ferreira', 'andreferreira@gm.com', '$2a$10$BySiVRDJmQcLftnK1BCSwO0tnQrzNGbDz/Lep4.VK2h/IOjENk0zm', 'Auditor', '1° Turno'),
('Flávio Andrade', 'flavioandrade@gm.com', '$2a$10$1JdNZ6EMbQ5xDdLETSTzduZ/B/2UMyUxQ2So7offCbaUkDOaCL5iq', 'Engenheiro', '1° Turno'),
('Vanessa Dias', 'vanessadias@gm.com', '$2a$10$1AM6WFVvtzE9ZSMltXADZeXLzth3u9tS8KQ7WTBdkyjv6/gGRK7my', 'FT', '2° Turno'),
('Ricardo Firmino', 'ricadofirmino@gm.com', '$2a$10$Rx/PeTyNLwIWIoqEGCrW4OhH8y1Uj7/R.ZUxPwYQOvdOsYNcjK16K', 'FT', '1° Turno'),
('Carlos Perreira', 'carlosperreira@gm.com', '$2a$10$0oHqoFEgrluRKtYqrZ0sq.hIdppCI2gNtGpRcyvfTOwj.Jrt9Wkpu', 'Auditor', '2° Turno'),
('Raissa Oliveira', 'raisaaoliveira@gm.com', '$2a$10$Jq6HQyDww4KU54fSsC8.ZefmAW1GVwGVzLtl300zRdR4MRTAOkZ46', 'Engenheiro', '1° Turno');


select * from usuarios;