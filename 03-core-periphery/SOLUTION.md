# Solution

## Language

language: "typescript"

## What was the problem

The password hash lived in the same records a convenience feature could read. `getUser` returned the full `UserRecord` including `passwordHash`, and `report()` called `getUser` and printed the hash for every user. So any caller reaching `report` (or `getUser`) obtained the secret through a convenience path, not through `verify`.

## The split

The core is `UserStore`. It holds the hashes in a private field and exposes a narrow interface: `verify(username, password)` and `getPublicProfile(username)`, which returns only `username` and `role`. Neither returns a hash. I removed `getUser` entirely. `report()` is periphery and now calls `getPublicProfile`, so it can list users and roles but has no way to reach a hash.

## Removal versus guarding

I removed the path to the secret rather than guarding it. No method returns a hash, so no periphery code can obtain one, no matter what checks exist. A vector that no longer exists cannot be reached, which is stronger than a vector that exists behind a check that could be bypassed, forgotten, or added back later.
