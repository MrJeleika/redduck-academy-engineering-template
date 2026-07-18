// 03-core-periphery/src/StoreData.java
// Given scaffolding for this task. You do not need to change this file.
// It provides the user record type, the seed users, and the password hashing helper.
import java.util.LinkedHashMap;
import java.util.Map;

public class StoreData {
    public record UserRecord(String username, String passwordHash, String role) {}

    public static String hash(String password) {
        return "hash:" + password;
    }

    public static Map<String, UserRecord> seedUsers() {
        Map<String, UserRecord> users = new LinkedHashMap<>();
        users.put("alice", new UserRecord("alice", "hash:alice-pw", "admin"));
        users.put("bob", new UserRecord("bob", "hash:bob-pw", "member"));
        return users;
    }
}
