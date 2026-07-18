// 01-common-sense-check/src/checkout.ts
// A minimal order service. Fix the flaw. No framework, no build step required.

export interface CatalogEntry { name: string; price: number } // price in cents
// The request no longer carries a price: the client cannot supply one.
export interface OrderItem { productId: string; quantity: number }
export interface OrderRequest { items: OrderItem[] }
// A stored line records the price that was actually charged (from the catalog).
export interface OrderLine { productId: string; quantity: number; price: number }
export interface Order { id: string; items: OrderLine[]; total: number }

// Product catalog.
export const CATALOG: Record<string, CatalogEntry> = {
  "sku-blue-tshirt": { name: "Blue T-shirt", price: 2000 },
  "sku-red-mug": { name: "Red mug", price: 900 },
};

const orders: Order[] = [];

// Create an order from a request, store it, and return it.
export function createOrder(id: string, request: OrderRequest): Order {
  let total = 0;
  const lines: OrderLine[] = [];
  for (const item of request.items) {
    const entry = CATALOG[item.productId];
    if (entry === undefined) {
      throw new Error(`Unknown product: ${item.productId}`);
    }
    const price = entry.price; // trusted price, looked up by productId
    total += item.quantity * price;
    lines.push({ productId: item.productId, quantity: item.quantity, price });
  }
  const order: Order = { id, items: lines, total };
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
