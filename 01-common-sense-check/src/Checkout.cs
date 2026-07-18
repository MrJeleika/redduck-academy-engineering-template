// 01-common-sense-check/src/Checkout.cs
// A minimal order service. Fix the flaw. Plain C#, no framework.
using System.Collections.Generic;

public record CatalogEntry(string Name, int Price); // price in cents
public record OrderItem(string ProductId, int Quantity, int Price);
public record OrderRequest(List<OrderItem> Items);
public record Order(string Id, List<OrderItem> Items, int Total);

public static class Checkout
{
    // Product catalog.
    public static readonly Dictionary<string, CatalogEntry> Catalog = new()
    {
        ["sku-blue-tshirt"] = new CatalogEntry("Blue T-shirt", 2000),
        ["sku-red-mug"] = new CatalogEntry("Red mug", 900),
    };

    static readonly List<Order> Orders = new();

    // Create an order from a request, store it, and return it.
    public static Order CreateOrder(string id, OrderRequest request)
    {
        int total = 0;
        foreach (var item in request.Items)
        {
            total += item.Quantity * item.Price;
        }
        var order = new Order(id, request.Items, total);
        Orders.Add(order);
        return order;
    }

    // Look up a stored order by its id.
    public static Order? GetOrder(string id)
    {
        foreach (var order in Orders)
        {
            if (order.Id == id)
            {
                return order;
            }
        }
        return null;
    }
}
