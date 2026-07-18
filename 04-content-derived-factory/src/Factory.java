// 04-content-derived-factory/src/Factory.java
// A content-derived factory. Fill in create() and derive(). Plain Java, no framework.
// Compile and run: javac src/Factory.java && java -cp src Factory
import java.util.LinkedHashMap;
import java.util.Map;

public class Factory {
    // An item: the content it was built from, and an id derived from that content.
    record Item(Map<String, String> content, String id) {}

    // TODO: return an Item holding the content and an id derived from its content (use derive).
    static Item create(Map<String, String> content) {
        throw new UnsupportedOperationException("not implemented");
    }

    // TODO: recompute the id from the content alone, with no registry and no shared state,
    // so the demo passes.
    static String derive(Map<String, String> content) {
        throw new UnsupportedOperationException("not implemented");
    }

    public static void main(String[] args) throws Exception {
        Map<String, String> content = new LinkedHashMap<>();
        content.put("title", "Quarterly report");
        content.put("body", "Revenue held steady.");
        content.put("author", "avery");

        Item item = create(content);

        // Second party holds only the content, in a different field order, and derives the id itself.
        Map<String, String> sameContent = new LinkedHashMap<>();
        sameContent.put("author", "avery");
        sameContent.put("body", "Revenue held steady.");
        sameContent.put("title", "Quarterly report");
        if (!derive(sameContent).equals(item.id())) {
            throw new AssertionError("same content must derive the same id");
        }

        // Tamper with one field. The derived id must no longer match the original.
        Map<String, String> tampered = new LinkedHashMap<>(content);
        tampered.put("body", "Revenue tripled.");
        if (derive(tampered).equals(item.id())) {
            throw new AssertionError("changed content must change the id");
        }

        System.out.println("ok: " + item.id());
    }
}
