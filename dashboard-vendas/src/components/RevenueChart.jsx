import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export function RevenueChart({ dates, revenue }) {
  // Recharts precisa de um array de objetos: [{ date, value }, ...]
  const chartData = dates.map((d, i) => ({
    date: d.slice(5),   // "2024-01-01" → "01-01"
    value: revenue[i],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip formatter={(v) => `R$ ${v}`} />
        <Line type="monotone" dataKey="value" stroke="#00ff88" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}