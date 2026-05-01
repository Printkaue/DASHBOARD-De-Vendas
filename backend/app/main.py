from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import sales, top_products, get_revenue_by_date

app = FastAPI(title="DahbordVendas")

#permite chamadas do frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(sales.router) #total de vendas
app.include_router(top_products.router)#produtos mais vendidos
app.include_router(get_revenue_by_date.router)#vendas por data
