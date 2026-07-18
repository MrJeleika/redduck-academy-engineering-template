// 03-core-periphery/src/StoreData.cs
// Given scaffolding for this task. You do not need to change this file.
// It provides the user record type, the seed users, and the password hashing helper.
using System.Collections.Generic;

public record UserRecord(string Username, string PasswordHash, string Role);

public static class StoreData
{
    public static string Hash(string password) => $"hash:{password}";

    public static Dictionary<string, UserRecord> SeedUsers() => new()
    {
        ["alice"] = new UserRecord("alice", "hash:alice-pw", "admin"),
        ["bob"] = new UserRecord("bob", "hash:bob-pw", "member"),
    };
}
