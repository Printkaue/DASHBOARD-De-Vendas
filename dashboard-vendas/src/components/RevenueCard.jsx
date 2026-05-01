export function RevenueCard({ total }) {
  return (
    <div className="card">
      <span className="label">Receita Total</span>
      <span className="value">
        {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </span>
    </div>
  );
}