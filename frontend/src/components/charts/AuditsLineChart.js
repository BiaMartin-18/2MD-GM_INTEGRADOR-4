// components/charts/AuditsLineChart.js
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AuditsLineChart = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
      <XAxis dataKey="mes" stroke="#666" />
      <YAxis stroke="#666" />
      <Tooltip 
        contentStyle={{ backgroundColor: '#1b2130', border: 'none', color: '#fff', borderRadius: '4px' }}
      />
      <Line 
        type="monotone" 
        dataKey="total"   // <-- AQUI MUDA
        stroke="#00bcd4" 
        strokeWidth={3}
        activeDot={{ r: 8 }}
        name="Auditorias por mês"
      />
    </LineChart>
  </ResponsiveContainer>
);

export default AuditsLineChart;
