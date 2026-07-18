// 05-adversarial/src/Ledger.cs
// A minimal points ledger. Accounts hold points, and transfer moves points between accounts.
// Plain C#, no framework.
using System;
using System.Collections.Generic;

public class Ledger
{
    private readonly Dictionary<string, int> _balances = new();

    public Ledger(IDictionary<string, int> initial)
    {
        foreach (var entry in initial)
        {
            _balances[entry.Key] = entry.Value;
        }
    }

    public int BalanceOf(string account)
    {
        return _balances.TryGetValue(account, out var balance) ? balance : 0;
    }

    public void Transfer(string from, string to, int amount)
    {
        int available = BalanceOf(from);
        if (available < amount)
        {
            throw new InvalidOperationException("insufficient balance");
        }
        _balances[from] = available - amount;
        _balances[to] = BalanceOf(to) + amount;
    }
}
