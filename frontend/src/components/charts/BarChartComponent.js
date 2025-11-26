// components/charts/BarChartComponent.js (Código Atualizado)

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComponent = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart
      data={data}
      margin={{ top: 10, right: 10, left: -15, bottom: -10 }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
      <XAxis dataKey="mes" stroke="#d3e6f7ff" style={{ fontSize: '10px' }} />
      <YAxis stroke="#f3f3f3ff" name="Auditorias" style={{ fontSize: '10px' }} />
      <Tooltip 
        contentStyle={{ backgroundColor: '#e4ebffff', border: 'none', color: '#112eceff', borderRadius: '4px' }}
      />
      <Legend  layout="horizontal" verticalAlign="top" align="center" wrapperStyle={{ paddingTop: '0px' }} />
      
      {/* TRÊS BARRAS: Uma para cada modelo, usando dataKey=Nome do Modelo */}
      <Bar dataKey="Tracker" fill="#0184ffff" name="Tracker" />
      <Bar dataKey="Montana" fill="#034df8ff" name="Montana" />
      <Bar dataKey="Spin" fill="#29aaffff" name="Spin" />

    </BarChart>
  </ResponsiveContainer>
);

export default BarChartComponent;