# Solution

## Language

language: "typescript"

## What was the problem

The report printed the password hash for every user, so anyone who read the report saw the hashes.

## The split

I moved the report onto a narrow `getPublicProfile` that returns only the username and role, so the report no longer prints a hash. I kept `getUser` for admin tooling but guarded it with a role check so only an admin caller receives the full record.

## Removal versus guarding

I guarded the sensitive path. `getUser` still returns the full record including the hash, but only when the caller passes the admin role. This keeps the convenience available while restricting who can use it.
