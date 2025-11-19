"use client";

// Alterado: Usamos AreaChart e Area (estrutura do seu último código)
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// --- DADOS DE EXEMPLO (Defeitos por Lote/Semana) ---
// 'name' representa o Lote de Produção ou a Semana
// 'value' representa a Quantidade de Defeitos Registrados (NÃO é um valor monetário)
const data = [
  { name: 'LOTE 01', value: 85, target: 90 },
  { name: 'LOTE 05', value: 72, target: 90 },
  { name: 'LOTE 10', value: 58, target: 70 }, // Ponto de destaque: 58 Defeitos
  { name: 'LOTE 15', value: 65, target: 70 },
  { name: 'LOTE 20', value: 55, target: 60 },
];

// --- COMPONENTE DO TOOLTIP PERSONALIZADO (Pop-up Escuro) ---
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    // payload[0].value é a quantidade de defeitos
    const defectsCount = payload[0].value.toLocaleString('pt-BR');
    
    // Supondo que a data de registro seja no final da semana/lote
    const dateLabel = `Final do ${label}`;

    return (
      <div 
        style={{ 
          backgroundColor: '#00076bff', // Cor de fundo escura (azul petróleo)
          color: 'white', 
          padding: '10px', 
          borderRadius: '4px',
          textAlign: 'center',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
        }}
      >
        <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', fontSize: '10px' }}>DEF. NO PERÍODO</p>
        <p style={{ fontSize: '18px', margin: '0' }}>{defectsCount} Unidades</p>
        <p style={{ fontSize: '12px', margin: '0', opacity: 0.8 }}>{dateLabel}</p>
      </div>
    );
  }

  return null;
};

// --- COMPONENTE DO GRÁFICO ---
export default function QualityPerformanceChart() {
  // Simula o valor de destaque (último ponto ou ponto de maior interesse)
  const latestDefects = 58; // Valor do LOTE 10
  const trendChange = -15.4; // Exemplo: Redução de defeitos
  
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* 1. ESTILOS CSS INSERIDOS AQUI PARA A ANIMAÇÃO DO BOTÃO */}
     
      
      {/* Informação de Destaque Esquerda (Adaptado para Defeitos) */}
      <div style={{ position: 'absolute', top: '10%', left: '0', zIndex: 10, paddingLeft: '20px' }}>
        <p style={{ color: '#25398fff', fontSize: '1.2rem', margin: '0 0 5px 0' }}>Total de Defeitos (Lote Atual)</p>
        <h2 style={{ color: '#040b6eff', fontSize: '8rem', margin: '0' }}>{latestDefects}</h2>
        <p style={{ color: trendChange < 0 ? '#296dffff' : '#214bc0ff', fontSize: '0.8rem', fontWeight: 'bold' }}>
          <span style={{ marginRight: '5px' }}>{trendChange < 0 ? '↓' : '↑'} {Math.abs(trendChange)}%</span> em relação ao Lote anterior
        </p>
        
      </div>

      {/* Navegação de Mês (Seta Esquerda) */}
      <button 
        className="btn btn-light rounded-circle shadow-sm" 
        style={{ position: 'absolute', top: '50%', left: '20%', transform: 'translateY(-50%)', zIndex: 10 }}
      >
        &lt;
      </button>

      {/* Navegação de Mês (Seta Direita) */}
      <button 
        className="btn btn-light rounded-circle shadow-sm" 
        style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)', zIndex: 10 }}
      >
        &gt;
      </button>

      {/* ResponsiveContainer para o gráfico */}
      <ResponsiveContainer width="100%" height="100%">
        {/* Alterado: Usando AreaChart para permitir preenchimento de área */}
        <AreaChart
          data={data}
          // Ajusta a margem esquerda para dar espaço ao texto de destaque
          margin={{ top: 20, right: 30, left: 300, bottom: 5 }} 
        >
          {/* DEFINIÇÃO DOS GRADIENTES (DEGRADE) */}
          <defs>
            {/* Gradiente vertical para o preenchimento da Área */}
            <linearGradient id="colorValueFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="40%" stopColor="#052fffff" stopOpacity={1.2}/>
              <stop offset="95%" stopColor="#086bffff" stopOpacity={0.2}/>
            </linearGradient>
            {/* Gradiente horizontal para a linha (stroke) */}
            <linearGradient id="colorValueStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2127cfff"/>
              <stop offset="100%" stopColor="#1033a7ff"/>
            </linearGradient>
          </defs>

          {/* Grade: Apenas linhas horizontais suaves */}
          <CartesianGrid 
            strokeDasharray="3 3" 
            vertical={false} 
            stroke="#e0e0e0" 
          />
          
          {/* Eixo X: Lotes/Semanas */}
          <XAxis 
            dataKey="name" 
            tickLine={false} 
            axisLine={false} 
            padding={{ left: 30, right: 30 }} 
            tick={{ fill: '#7da9fcff' }}
          />
          
          {/* Eixo Y: Oculto */}
          <YAxis hide={true} domain={['auto', 'auto']} />
          
          {/* Tooltip Personalizado */}
          <Tooltip 
            content={<CustomTooltip />} 
            cursor={{ stroke: '#0c2b91ff', strokeWidth: 1 }} // Linha tracejada vertical ao passar o mouse
          />
          
          {/* Linha Principal (Defeitos) - Agora é uma Área para ter o preenchimento degradê */}
          <Area 
            type="monotone" 
            dataKey="value" 
            // Aplicando o gradiente definido acima para o STROKE (linha)
            stroke="url(#colorValueStroke)" 
            // Aplicando o gradiente definido acima para o FILL (preenchimento da área)
            fill="url(#colorValueFill)"
            strokeWidth={2}
            dot={false} 
            activeDot={{ 
              r: 4, 
              stroke: '#3c80e7ff', 
              strokeWidth: 2, 
              fill: 'white',
              cursor: 'pointer'
            }} 
          />
          
          {/* Linha de Meta/Target (Opcional - Linha cinza tracejada sem degradê) */}
          <Area // Mantido como Area apenas para consistência, mas sem fill
            type="monotone"
            dataKey="target"
            stroke="#95A5A6"
            strokeDasharray="5 5"
            strokeWidth={1}
            dot={false}
            fill="none" // Importante: sem preenchimento para a linha de meta
          />
          
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}