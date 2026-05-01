export function TopProducts({ products, quantity }) {
  const max = Math.max(...quantity);
  const total = quantity.reduce((a, b) => a + b, 0);

  const medals = ["🥇", "🥈", "🥉"];

  return (
    <ul className="product-list">
      {products.map((name, i) => (
        <li key={name} className="product-item">
          <div className="product-header">
            <div className="product-left">
              <span className="medal">{medals[i] ?? `#${i + 1}`}</span>
              <span className="name">{name}</span>
            </div>
            <div className="product-right">
              <span className="qty">{quantity[i]} un.</span>
              <span className="pct">
                {((quantity[i] / total) * 100).toFixed(0)}%
              </span>
            </div>
          </div>
          <div className="bar-track">
            <div
              className="bar-fill"
              style={{ width: `${(quantity[i] / max) * 100}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}