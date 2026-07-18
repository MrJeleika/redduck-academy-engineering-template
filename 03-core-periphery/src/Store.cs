// 03-core-periphery/src/Store.cs  —  C# version.
// Only edit this file if you chose C#, and complete just one language.
// Then declare it at the top of SOLUTION.md:  language: "csharp"
//
// Given (do not edit): StoreData.cs holds the record type, the seed users, and
// the hash helper. Done for you: Verify, which returns only a boolean.
// Your job:
//   - add a hash-free public-profile lookup that returns username and role,
//   - rebuild Report so it lists every user without ever including a hash.
// Full description in TASK.md.
using System.Collections.Generic;

public class UserStore
{
    private readonly Dictionary<string, UserRecord> _users = StoreData.SeedUsers();

    // The one legitimate core operation. It checks a password and returns only a boolean.
    public bool Verify(string username, string password)
    {
        if (!_users.TryGetValue(username, out var user)) return false;
        return user.PasswordHash == StoreData.Hash(password);
    }

    // TODO: expose a narrow, hash-free way to read a user's public profile (username and role).

    // TODO: rebuild a report of all users that never exposes a password hash.
}
