from fastapi import APIRouter
from app.services.analytics import get_total_revenue

router = APIRouter(prefix="/sales", tags=["sales"])

@router.get("/revenue")
def revenue():
    return {"total": get_total_revenue()}