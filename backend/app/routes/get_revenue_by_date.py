from fastapi import APIRouter
from app.services.analytics import get_revenue_by_date

router = APIRouter(prefix="/revenue_by_date", tags=["revenue_by_date"])

@router.get("/get_revenue_by_date")
def revenue_date():
    return get_revenue_by_date()