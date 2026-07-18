# Solution

## Language

language: "typescript"

## What was the problem

The password hash lived in the same records a convenience feature could read. `getUser` returned the full `UserRecord` including `passwordHash`, and `report()` called `getUser` and printed the hash for every user. So any caller reaching `report` (or `getUser`) obtained the secret through a convenience path, not through `verify`.

## The split

The core is `UserStore`. It holds the hashes in a private `users` field and implements one narrow interface, `UserDirectory`: `verify(username, password)`, `getPublicProfile(username)` (returns `username` and `role` only), and `usernames()`. Every method is hash-free, and the class exposes nothing else, so the secret cannot be reached from outside the core. I removed `getUser` entirely.

The periphery is `report`, and this is the part that makes the split real rather than cosmetic. It is a standalone function whose only argument is typed `UserDirectory`. It holds no reference to `UserStore` and no reference to `users`, so it structurally cannot read a hash even by mistake. The boundary is the type: a holder of the narrow interface has no path to the secret. Keeping `report` as a method on `UserStore` would have left it with `this.users` access, which is only privacy plus discipline, not a real boundary.

## Removal versus guarding

I removed the path to the secret rather than guarding it. No method returns a hash, and the periphery cannot even reach the record that contains one, so no periphery code can obtain a hash no matter what checks exist. A vector that no longer exists cannot be reached, which is stronger than a vector that exists behind a check that could be bypassed, forgotten, or added back later.
