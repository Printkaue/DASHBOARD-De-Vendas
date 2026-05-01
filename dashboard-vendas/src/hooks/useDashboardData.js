import { useState, useEffect } from "react";
import axios from "axios";

const BASE = "http://127.0.0.1:8000";

export function useDashboardData(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchALL() {

            const [revenue, products, byDate] = await Promise.all([
                axios.get(`${BASE}/sales/revenue`),
                axios.get(`${BASE}/top_products/top_producst`),
                axios.get(`${BASE}/revenue_by_date/get_revenue_by_date`),
            ]);

            setData({
                total: revenue.data.total,
                products: products.data,
                byDate: byDate.data,
            });
            setLoading(false);
        }

        fetchALL();

    }, []);

    return {data, loading}
}