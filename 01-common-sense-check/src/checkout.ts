// 01-common-sense-check/src/checkout.ts
// A minimal order service. No framework, no build step required.

export interface CatalogEntry { name: string; price: number } // price in cents
export interface OrderItem { productId: string; quantity: number }
export interface OrderRequest { items: OrderItem[] }
export interface Order { id: string; items: OrderItem[]; total: number }

// Product catalog.
export const CATALOG: Record<string, CatalogEntry> = {
  "sku-blue-tshirt": { name: "Blue T-shirt", price: 2000 },
  "sku-red-mug": { name: "Red mug", price: 900 },
};

const orders: Order[] = [];

// Create an order from a request, store it, and return it.
export function createOrder(id: string, request: OrderRequest): Order {
  let total = 0;
  for (const item of request.items) {
    const entry = CATALOG[item.productId];
    if (entry === undefined) {
      throw new Error("unknown product: " + item.productId);
    }
    total += item.quantity * entry.price;
  }
  const order: Order = { id, items: request.items, total };
  orders.push(order);
  return order;
}

// Look up a stored order by its id.
export function getOrder(id: string): Order | undefined {
  for (const order of orders) {
    if (order.id === id) {
      return order;
    }
  }
  return undefined;
}
