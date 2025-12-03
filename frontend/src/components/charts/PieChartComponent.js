// components/charts/PieChartComponent.js
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const RADIAN = Math.PI / 180;

// Cores fixas para as fatias
const COLORS = ["#0024eeff", "#3877ffff", "#6faaffff"];

const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index, name }) => {
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const lineOffset = 5;
  const horizontalSegment = 20;
  const labelOffset = 10;

  const sx = cx + (outerRadius + lineOffset) * cos;
  const sy = cy + (outerRadius + lineOffset) * sin;
  const mx = cx + (outerRadius + lineOffset + horizontalSegment) * cos;
  const my = cy + (outerRadius + lineOffset + horizontalSegment) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * labelOffset;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  const textXOffset = (cos >= 0 ? 1 : -1) * 5;

  return (
    <g>
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke="#d7e3ffff" fill="none" />
      <text
        x={ex + textXOffset}
        y={ey}
        fill="#faf8f8ff"
        textAnchor={textAnchor}
        dominantBaseline="middle"
        fontSize="10px"
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
        outerRadius={70}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
        labelLine={false}
        label={renderCustomizedLabel}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip formatter={(value, name, props) => [`${value} veículos`, props.payload.name]} />
      <Legend layout="horizontal" align="center" verticalAlign="bottom" wrapperStyle={{ paddingTop: '15px' }} />
    </PieChart>
  </ResponsiveContainer>
);

export default PieChartComponent;
