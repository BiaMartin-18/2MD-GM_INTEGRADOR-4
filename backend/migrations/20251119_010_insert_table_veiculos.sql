-- Migration: Fzer inserção de dados iniciais na tabela veiculos
-- Data: 2025-11-19
-- Descrição: Fazer inserção de dados iniciais na tabela veiculos para teste do sistema

USE PDI;

INSERT INTO veiculos (part_number, modelo, defeito, descrição, grau_defeito, status_veiculo) VALUES
('ABC12345', 'Montana', 'Pequeno ruído na porta dianteira', 'Ruído leve ao abrir e fechar a porta', 'Leve', 'Manutenção'),
('BRF29816', 'Spin', 'Vibração leve no painel', 'Pequena vibração percebida em marcha lenta', 'Leve', 'Aguardando revisão'),
('KLT78237', 'Tracker', 'Alinhamento leve fora', 'Veículo puxa levemente para a direita', 'Médio', 'Manutenção'),
('HGF91278', 'Montana', 'Barulho no porta-malas', 'Ruído vindo da tampa ao passar em buracos', 'Leve', 'Manutenção'),
('PLM44729', 'Spin', 'Sensor de estacionamento intermitente', 'Sensor falha ocasionalmente', 'Leve', 'Aguardando revisão'),
('QWE56371', 'Tracker', 'Trava da porta dura', 'Trava apresenta resistência ao destravar', 'Leve', 'Manutenção'),
('RTY82902', 'Montana', 'Farol desalinhado', 'Feixe de luz levemente para baixo', 'Leve', 'Manutenção'),
('UIO10293', 'Spin', 'Ruído no banco do motorista', 'Estalo leve ao movimentar o banco', 'Leve', 'Aguardando revisão'),
('ASD41684', 'Tracker', 'Revestimento interno solto', 'Acabamento lateral levemente deslocado', 'Leve', 'Manutenção'),
('FGH93515', 'Montana', 'Barulho no painel ao acelerar', 'Pequena oscilação de peça interna', 'Leve', 'Manutenção'),
('JKL28736', 'Spin', 'Luz de teto oscilando', 'Conexão fraca causa oscilação da iluminação interna', 'Leve', 'Aguardando revisão'),
('ZXC72017', 'Tracker', 'Porta do passageiro desalinhada', 'Leve desalinhamento no fecho da porta', 'Médio', 'Manutenção'),
('BNM54308', 'Montana', 'Tampa de combustível dura', 'Dificuldade ao abrir a tampa externa', 'Leve', 'Aguardando revisão'),
('WER65929', 'Spin', 'Ruído na parte traseira', 'Ruído metálico pequeno em paralelepípedos', 'Leve', 'Manutenção'),
('TYU98441', 'Tracker', 'Sensor de chuva impreciso', 'Ativa com atraso leve em chuvas leves', 'Leve', 'Aguardando revisão'),
('IOP22562', 'Montana', 'Vidro elétrico lento', 'Velocidade de subida um pouco reduzida', 'Leve', 'Manutenção'),
('GHJ31093', 'Spin', 'Pequena vibração no volante', 'Perceptível somente em altas velocidades', 'Leve', 'Aguardando revisão'),
('VBN77834', 'Tracker', 'Calota solta', 'Uma das calotas não fixa totalmente', 'Leve', 'Manutenção'),
('MKO66215', 'Montana', 'Luz interna traseira falhando', 'Oscila devido a mau contato', 'Leve', 'Manutenção'),
('LPO55086', 'Spin', 'Assento traseiro rangendo', 'Rangido leve ao pressionar', 'Leve', 'Aguardando revisão');


SELECT * FROM veiculos;