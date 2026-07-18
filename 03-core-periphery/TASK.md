# 03. Apply core and periphery

## The problem

A single user store holds every user record. Each record has a username, a role, and a password
hash. Its one legitimate job is to verify passwords. The original version also bolted on two
conveniences that shared the same records: a lookup that handed back a user's whole record, and a
report that built its rows by calling that lookup. Because the report read the full record, every
row it produced carried a password hash out of the store. Anyone who could call the report, or the
lookup, got the hash without ever attacking the store. That is the leak.

## Your job

Apply the core and periphery pattern so the leak cannot happen by construction:

- The core keeps the records and the password hashes and exposes only a narrow interface: verify,
  plus a hash-free way to read a user's public profile (username and role).
- The report becomes periphery, rebuilt on top of that narrow interface, so it can list users but
  has no way to reach a hash.

The point is to remove the path to the hash, not to guard it. A caller outside the core should
have no way to obtain a hash because no method returns one, not because a check stands in front of
one.

## Steps

1. Pick ONE language and edit only that language's store file. Leave the other three untouched.

   | Language   | Edit this file  |
   | ---------- | --------------- |
   | TypeScript | `src/Store.ts`  |
   | Python     | `src/store.py`  |
   | Java       | `src/Store.java`|
   | C#         | `src/Store.cs`  |

   Do not edit the `store-data` / `StoreData` file next to it. It is given: it holds the record
   type, the seed users, and the password hashing helper. `verify` is already written for you.

2. In that file, add the narrow, hash-free public-profile lookup (username and role), and rebuild
   the report on top of it so it lists every user without ever exposing a hash. Do not add back any
   method that returns a full record or a hash.

3. Declare your language at the top of `SOLUTION.md`. Keep only the one you used, for example
   `language: "python"`. Your submission is graded against that language's file, so this must be a
   single value. If you leave all four options in, the review is rejected.

4. Below that in `SOLUTION.md`, in a few sentences: name what leaked in the original, say what you
   put in the core and what you left in the periphery, and explain why nothing outside the core can
   reach a hash now (removed, not guarded).

5. Push your work to your own fork and submit the repository URL.

## Rules

- The store must still be constructible, still verify passwords, and still list its users.
- Keep the role and the hash in the records. Do not weaken the task by deleting them.
- Nothing outside the core may obtain a hash, on its own or inside a record.

The reviewer reads your code, it does not run it. You are graded on the split and on your
explanation as much as on the code.
