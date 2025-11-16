// components/charts/BarChartComponent.js (Código Atualizado)

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComponent = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart
      data={data}
      margin={{ top: 10, right: 10, left: -15, bottom: -10 }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
      <XAxis dataKey="mes" stroke="#666" style={{ fontSize: '10px' }} />
      <YAxis stroke="#666" name="Auditorias" style={{ fontSize: '10px' }} />
      <Tooltip 
        contentStyle={{ backgroundColor: '#1b2130', border: 'none', color: '#fff', borderRadius: '4px' }}
      />
      <Legend  layout="horizontal" verticalAlign="top" align="center" wrapperStyle={{ paddingTop: '0px' }} />
      
      {/* TRÊS BARRAS: Uma para cada modelo, usando dataKey=Nome do Modelo */}
      <Bar dataKey="Tracker" fill="#15005cff" name="Tracker" />
      <Bar dataKey="Montana" fill="#052e8eff" name="Montana" />
      <Bar dataKey="Spin" fill="#2a45f4ff" name="Spin" />

    </BarChart>
  </ResponsiveContainer>
);

export default BarChartComponent;