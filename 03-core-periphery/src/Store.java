// 03-core-periphery/src/Store.java
// A minimal user store. Plain Java, no framework.
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class Store {
    record UserRecord(String username, String passwordHash, String role) {}

    static class UserStore {
        private final Map<String, UserRecord> users = new LinkedHashMap<>();

        UserStore() {
            users.put("alice", new UserRecord("alice", "hash:alice-pw", "admin"));
            users.put("bob", new UserRecord("bob", "hash:bob-pw", "member"));
        }

        boolean verify(String username, String password) {
            UserRecord user = users.get(username);
            if (user == null) return false;
            return user.passwordHash().equals(hash(password));
        }

        UserRecord getUser(String username) {
            return users.get(username);
        }

        List<String> report() {
            List<String> rows = new ArrayList<>();
            for (String name : users.keySet()) {
                UserRecord user = getUser(name);
                rows.add(user.username() + " (" + user.role() + ") " + user.passwordHash());
            }
            return rows;
        }

        private static String hash(String password) {
            return "hash:" + password;
        }
    }
}
