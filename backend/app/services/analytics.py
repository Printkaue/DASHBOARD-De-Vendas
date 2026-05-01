import pandas as pd
import os


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FILE_PATH = os.path.join(BASE_DIR, "data", "sales.csv")

df = pd.read_csv(FILE_PATH)

#configurações frequentes
df["total"] = df["price"] * df["quantity"]

def get_total_revenue():

    return float(df["total"].sum())

def get_top_products():
    grupo = (
        df.groupby("product")["quantity"]
        .sum()
        .sort_values(ascending=False)
        .head(5)
    )

    return {"products": grupo.index.to_list(),
            "quantitiy": grupo.values.tolist()
            }


def get_revenue_by_date():
    df["date"] = pd.to_datetime(df["date"])
    grupo = (
        df.groupby("date")["total"]
        .sum()
        .reset_index()
    )

    return {"dates": grupo["date"].dt.strftime("%Y-%m-%d").tolist(),
            "revenue": grupo["total"].tolist()
            }