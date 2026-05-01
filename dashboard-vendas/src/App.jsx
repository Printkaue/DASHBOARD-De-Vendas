import { useDashboardData } from "./hooks/useDashboardData";
import { RevenueCard } from "./components/RevenueCard";
import { RevenueChart } from "./components/RevenueChart";
import { TopProducts } from "./components/TopProducts";

export default function App() {
  const { data, loading } = useDashboardData();

  if (loading) return <div className="loading">Carregando...</div>;

  return (
    <main className="dashboard">
      <h1>Dashboard de Vendas</h1>

      <RevenueCard total={data.total} />

      <section className="chart-section">
        <h2>Receita por Data</h2>
        <RevenueChart dates={data.byDate.dates} revenue={data.byDate.revenue} />
      </section>

      <section className="products-section">
        <h2>Top Produtos</h2>
        <TopProducts
          products={data.products.products}
          quantity={data.products.quantitiy}  // atenção: typo da sua API
        />
      </section>
    </main>
  );
}