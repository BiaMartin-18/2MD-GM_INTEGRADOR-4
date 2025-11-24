-- Migration: Criar tabela logs
-- Data: 2025-10-28
-- Descrição: Tabela para registrar logs de acesso às rotas da API

USE PDI;

INSERT INTO veiculos (part_number, modelo, defeito, descrição, grau_defeito, status_veiculo) VALUES
('ABC1234', 'Montana', 'Pequeno ruído na porta dianteira', 'Ruído leve ao abrir e fechar a porta', 'Leve', 'Manutenção'),
('BRF2981', 'Spin', 'Vibração leve no painel', 'Pequena vibração percebida em marcha lenta', 'Leve', 'Aguardando revisão'),
('KLT7823', 'Tracker', 'Alinhamento leve fora', 'Veículo puxa levemente para a direita', 'Médio', 'Manutenção'),
('HGF9127', 'Montana', 'Barulho no porta-malas', 'Ruído vindo da tampa ao passar em buracos', 'Leve', 'Manutenção'),
('PLM4472', 'Spin', 'Sensor de estacionamento intermitente', 'Sensor falha ocasionalmente', 'Leve', 'Aguardando revisão'),
('QWE5637', 'Tracker', 'Trava da porta dura', 'Trava apresenta resistência ao destravar', 'Leve', 'Manutenção'),
('RTY8290', 'Montana', 'Farol desalinhado', 'Feixe de luz levemente para baixo', 'Leve', 'Manutenção'),
('UIO1029', 'Spin', 'Ruído no banco do motorista', 'Estalo leve ao movimentar o banco', 'Leve', 'Aguardando revisão'),
('ASD4168', 'Tracker', 'Revestimento interno solto', 'Acabamento lateral levemente deslocado', 'Leve', 'Manutenção'),
('FGH9351', 'Montana', 'Barulho no painel ao acelerar', 'Pequena oscilação de peça interna', 'Leve', 'Manutenção'),
('JKL2873', 'Spin', 'Luz de teto oscilando', 'Conexão fraca causa oscilação da iluminação interna', 'Leve', 'Aguardando revisão'),
('ZXC7201', 'Tracker', 'Porta do passageiro desalinhada', 'Leve desalinhamento no fecho da porta', 'Médio', 'Manutenção'),
('BNM5430', 'Montana', 'Tampa de combustível dura', 'Dificuldade ao abrir a tampa externa', 'Leve', 'Aguardando revisão'),
('WER6592', 'Spin', 'Ruído na parte traseira', 'Ruído metálico pequeno em paralelepípedos', 'Leve', 'Manutenção'),
('TYU9844', 'Tracker', 'Sensor de chuva impreciso', 'Ativa com atraso leve em chuvas leves', 'Leve', 'Aguardando revisão'),
('IOP2256', 'Montana', 'Vidro elétrico lento', 'Velocidade de subida um pouco reduzida', 'Leve', 'Manutenção'),
('GHJ3109', 'Spin', 'Pequena vibração no volante', 'Perceptível somente em altas velocidades', 'Leve', 'Aguardando revisão'),
('VBN7783', 'Tracker', 'Calota solta', 'Uma das calotas não fixa totalmente', 'Leve', 'Manutenção'),
('MKO6621', 'Montana', 'Luz interna traseira falhando', 'Oscila devido a mau contato', 'Leve', 'Manutenção'),
('LPO5508', 'Spin', 'Assento traseiro rangendo', 'Rangido leve ao pressionar', 'Leve', 'Aguardando revisão');


SELECT * FROM veiculos;