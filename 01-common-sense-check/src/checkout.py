# 01-common-sense-check/src/checkout.py
# A minimal order service. Fix the flaw. No framework required.

# Product catalog.
CATALOG = {
    "sku-blue-tshirt": {"name": "Blue T-shirt", "price": 2000},  # price in cents
    "sku-red-mug": {"name": "Red mug", "price": 900},
}

_orders = []


def create_order(order_id, request):
    """request = {"items": [{"productId": str, "quantity": int, "price": int}, ...]}.
    Creates an order, stores it, and returns it."""
    total = 0
    for item in request["items"]:
        total += item["quantity"] * item["price"]
    order = {"id": order_id, "items": request["items"], "total": total}
    _orders.append(order)
    return order


def get_order(order_id):
    """Look up a stored order by its id."""
    for order in _orders:
        if order["id"] == order_id:
            return order
    return None
