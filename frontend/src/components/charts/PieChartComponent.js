// components/charts/PieChartComponent.js
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const RADIAN = Math.PI / 180;

/**
 * Renderiza o label externo com linha conectora (como no modelo de imagem).
 * Esta função foi ajustada para evitar o corte do texto.
 */
const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index, name, value }) => {
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  
  // --- PARÂMETROS DE POSICIONAMENTO AJUSTADOS ---
  const lineOffset = 5;     // Espaçamento da fatia até o início da linha
  const horizontalSegment = 20; // Comprimento horizontal da linha (aumentado para dar mais espaço)
  const labelOffset = 10;    // Distância do ponto final da linha (usado para garantir margem horizontal)

  // 1. Ponto inicial da linha (próximo à borda externa da pizza)
  const sx = cx + (outerRadius + lineOffset) * cos;
  const sy = cy + (outerRadius + lineOffset) * sin;

  // 2. Ponto do meio da linha (cria o segmento horizontal)
  // O valor "40" (horizontalSegment) garante que o texto comece mais longe do centro.
  const mx = cx + (outerRadius + lineOffset + horizontalSegment) * cos;
  const my = cy + (outerRadius + lineOffset + horizontalSegment) * sin;

  // 3. Ponto final da linha (onde o texto se alinha)
  const ex = mx + (cos >= 0 ? 1 : -1) * labelOffset;
  const ey = my;

  const textAnchor = cos >= 0 ? 'start' : 'end'; // 'start' para direita, 'end' para esquerda
const textXOffset = (cos >= 0 ? 1 : -1) * 5;
  return (
    <g>
      {/* Linha conectora: M (start) -> L (middle) -> L (end) */}
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke="#999" fill="none" />
      
      {/* Texto do Label: Nome e Porcentagem */}
      <text 
        // Posição X: Ponto final da linha (ex) + um pequeno offset (2) para afastar o texto
        x={ex + textXOffset} 
        y={ey} 
        fill="#333333"      // Cor escura para visibilidade
        textAnchor={textAnchor} 
        dominantBaseline="middle" 
        fontSize="10px"          // Tamanho menor para caber melhor
        fontWeight="500"
      >
        {`${name}: ${(percent * 100).toFixed(0)}%`}
      </text>
    </g>
  );
};

const PieChartComponent = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        // Aumentado para 90 para dar espaço aos labels externos
        outerRadius={70} 
        // innerRadius REMOVIDO: Cria um gráfico de pizza cheio
        fill="#8884d8" 
        paddingAngle={0} // Sem espaço entre as fatias
        dataKey="value"
        labelLine={false}      // Desativa a linha padrão do Recharts
        label={renderCustomizedLabel} // Usa nossa função customizada para labels
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip formatter={(value, name, props) => [`${value} veículos`, props.payload.name]} />
      {/* Legenda na parte inferior */}
      <Legend layout="horizontal" align="center" verticalAlign="bottom" wrapperStyle={{ paddingTop: '15px' }} />
    </PieChart>
  </ResponsiveContainer>
);

export default PieChartComponent;