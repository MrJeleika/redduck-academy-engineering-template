// 03-core-periphery/src/Store.java  —  JAVA version.
// Only edit this file if you chose Java, and complete just one language.
// Then declare it at the top of SOLUTION.md:  language: "java"
//
// Given (do not edit): StoreData.java holds the record type, the seed users, and
// the hash helper. Done for you: verify, which returns only a boolean.
// Your job:
//   - add a hash-free public-profile lookup that returns username and role,
//   - rebuild report so it lists every user without ever including a hash.
// Full description in TASK.md.
import java.util.Map;

public class Store {
    static class UserStore {
        private final Map<String, StoreData.UserRecord> users = StoreData.seedUsers();

        // The one legitimate core operation. It checks a password and returns only a boolean.
        boolean verify(String username, String password) {
            StoreData.UserRecord user = users.get(username);
            if (user == null) return false;
            return user.passwordHash().equals(StoreData.hash(password));
        }

        // TODO: expose a narrow, hash-free way to read a user's public profile (username and role).

        // TODO: rebuild a report of all users that never exposes a password hash.
    }
}
