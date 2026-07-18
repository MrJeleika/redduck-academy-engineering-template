// 05-adversarial/src/Ledger.java
// A minimal points ledger. Accounts hold points, and transfer moves points between accounts.
// Plain Java, no framework.
import java.util.HashMap;
import java.util.Map;

public class Ledger {
    private final Map<String, Integer> balances = new HashMap<>();

    public Ledger(Map<String, Integer> initial) {
        balances.putAll(initial);
    }

    public int balanceOf(String account) {
        return balances.getOrDefault(account, 0);
    }

    public void transfer(String from, String to, int amount) {
        int available = balanceOf(from);
        if (available < amount) {
            throw new IllegalStateException("insufficient balance");
        }
        balances.put(from, available - amount);
        balances.put(to, balanceOf(to) + amount);
    }
}
