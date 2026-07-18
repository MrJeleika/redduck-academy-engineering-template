# 03. Apply core and periphery

## Context

A single user store holds every user record. Each record has a username, a role, and a password
hash. The store verifies passwords, and it also offers convenience features built on top of the
same records.

Apply the core and periphery pattern to this store. Split it so that the records and the password
hashes live inside a core that exposes only a narrow interface, and so that nothing outside that
core can reach a hash.

Lesson: Core and periphery.

## What to do

1. Open `src/` and read the store.
2. Split it into a core and a periphery. The core holds the records and the hashes and exposes
   only a narrow interface. The periphery is rebuilt on top of that interface.
3. Design the split so the goal holds by construction. A caller outside the core should have no
   way to obtain a hash because no path to it exists, rather than because a guard sits in front of
   the path.
4. Fill in `SOLUTION.md`.

## Rules

- Keep the store constructible and its operations callable the same way. It must still verify
  passwords and still list its users.
- Do not weaken the task by removing the role or the hash from the records.
- Nothing outside the core may obtain a hash, on its own or inside a record.

The reviewer reads your code, it does not run it. You are graded on the split and on your
explanation as much as on the code.
