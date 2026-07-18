// 01-common-sense-check/src/Checkout.java
// A minimal order service. Fix the flaw. Plain Java, no framework.
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class Checkout {
    record CatalogEntry(String name, int price) {} // price in cents
    record OrderItem(String productId, int quantity, int price) {}
    record OrderRequest(List<OrderItem> items) {}
    record Order(String id, List<OrderItem> items, int total) {}

    // Product catalog.
    static final Map<String, CatalogEntry> CATALOG = Map.of(
        "sku-blue-tshirt", new CatalogEntry("Blue T-shirt", 2000),
        "sku-red-mug", new CatalogEntry("Red mug", 900)
    );

    static final List<Order> ORDERS = new ArrayList<>();

    // Create an order from a request, store it, and return it.
    static Order createOrder(String id, OrderRequest request) {
        int total = 0;
        for (OrderItem item : request.items()) {
            total += item.quantity() * item.price();
        }
        Order order = new Order(id, request.items(), total);
        ORDERS.add(order);
        return order;
    }

    // Look up a stored order by its id.
    static Order getOrder(String id) {
        for (Order order : ORDERS) {
            if (order.id().equals(id)) {
                return order;
            }
        }
        return null;
    }
}
