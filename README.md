# Dashboard de Vendas

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

Dashboard de vendas fictício desenvolvido para portfólio. Exibe dados de receita, gráfico de vendas por data e ranking dos produtos mais vendidos, consumindo uma API REST construída com FastAPI.

---

## Demonstração

![preview](https://github.com/Printkaue/DASHBOARD-De-Vendas/raw/main/preview.png)

---

## Funcionalidades

- Exibição da receita total
- Grafico de linha com receita por data
- Ranking dos 5 produtos mais vendidos com percentual de participacao
- Consumo de API REST via Axios
- Layout dark mode com tema neon

---

## Tecnologias utilizadas

**Frontend**
- React 19
- Vite
- Chart.js + react-chartjs-2
- Axios

**Backend**
- Python
- FastAPI

---

## Estrutura do projeto

```
dashboard-vendas/
├── src/
│   ├── components/
│   │   ├── RevenueCard.jsx
│   │   ├── RevenueChart.jsx
│   │   └── TopProducts.jsx
│   ├── hooks/
│   │   └── useDashboardData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

## Como rodar localmente

### Pre-requisitos

- Node.js 18+
- Python 3.10+
- npm ou pnpm

### Backend

```bash
# Entre na pasta do backend
cd backend

# Instale as dependencias
pip install fastapi uvicorn

# Rode o servidor
uvicorn app.main:app --reload
```


### Frontend

```bash
# Entre na pasta do frontend
cd dashboard-vendas

# Instale as dependencias
npm install

# Rode o servidor de desenvolvimento
npm run dev
```


---

## Endpoints da API

| Metodo | Rota | Descricao |
|--------|------|-----------|
| GET | `/sales/revenue` | Retorna a receita total |
| GET | `/top_products/top_producst` | Retorna os produtos mais vendidos |
| GET | `/revenue_by_date/get_revenue_by_date` | Retorna a receita por data |

---

## Autor

Feito por [Printkaue](https://github.com/Printkaue).