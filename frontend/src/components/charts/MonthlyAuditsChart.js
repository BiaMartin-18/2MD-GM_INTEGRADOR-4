// components/charts/MonthlyAuditsChart.js
import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const MonthlyAuditsChart = ({ data = [] }) => {
  // data expected: [ { mes: "Oct", total: 12 }, ... ]
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 20, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="mes" />
        <YAxis />
        <Tooltip formatter={(value) => [value, "Auditorias"]} />
        <Legend />
        <Bar dataKey="total" name="Total Auditorias" fill="#2045ff" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MonthlyAuditsChart;
