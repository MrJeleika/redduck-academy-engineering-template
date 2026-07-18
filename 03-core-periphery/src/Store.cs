// 03-core-periphery/src/Store.cs
// A minimal user store. Plain C#, no framework.
using System.Collections.Generic;

public record UserRecord(string Username, string PasswordHash, string Role);

public class UserStore
{
    private readonly Dictionary<string, UserRecord> _users = new()
    {
        ["alice"] = new UserRecord("alice", "hash:alice-pw", "admin"),
        ["bob"] = new UserRecord("bob", "hash:bob-pw", "member"),
    };

    public bool Verify(string username, string password)
    {
        if (!_users.TryGetValue(username, out var user)) return false;
        return user.PasswordHash == Hash(password);
    }

    public UserRecord? GetUser(string username)
    {
        return _users.TryGetValue(username, out var user) ? user : null;
    }

    public List<string> Report()
    {
        var rows = new List<string>();
        foreach (var name in _users.Keys)
        {
            var user = GetUser(name)!;
            rows.Add($"{user.Username} ({user.Role}) {user.PasswordHash}");
        }
        return rows;
    }

    private static string Hash(string password) => $"hash:{password}";
}
