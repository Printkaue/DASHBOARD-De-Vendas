from fastapi import APIRouter
from app.services.analytics import get_top_products

router = APIRouter(prefix="/top_products", tags=["top_products"])

@router.get("/top_producst")
def top_products():
    return get_top_products()