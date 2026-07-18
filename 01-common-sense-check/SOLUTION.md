# Solution

## Language

language: "typescript"

## The flaw

The order total is computed from the `price` field on each request item, and the caller controls that field. Send `createOrder("o1", { items: [{ productId: "sku-blue-tshirt", quantity: 1, price: 1 }] })`. The server computes `total = 1 * 1 = 1` cent and stores that, even though the real price is 2000 cents. The caller can pay any amount they choose, including 0 or a negative number.

## The fix

I removed the `price` field from `OrderItem`, so the request no longer carries a price. `createOrder` now looks up each product in `CATALOG` by `productId` and uses the catalog price. An unknown `productId` is rejected with an error. The caller has no way to influence the price.

## Patch or elimination?

Elimination. Rather than keep the client price and add a check that it equals the catalog price, I removed the client-supplied price from the request shape. There is no longer a value for the caller to control, so there is nothing left to attack.
