# 04. Build a content-derived factory

## Context

A factory builds items and gives each one an identifier. Here the identifier must come from the
item's own content, so anyone holding the content can recompute the identifier and check it, with
no registry to query and no central keeper to trust.

Lesson: The factory pattern and content-derived identity.

## What to do

1. Open `src/` and read the factory. Two functions are left for you: one that creates an item,
   and one that recomputes an item's identifier from content alone.
2. Implement both so the identifier is derived from the content and nothing else. Anyone holding
   the same content must be able to recompute the same identifier and verify it.
3. Read the demo. It creates an item, has a second party recompute the identifier from the same
   content and checks the two match, then tampers with one field and checks the identifier no
   longer matches. When your functions are right, both checks pass.
4. Fill in `SOLUTION.md`: why the content-derived identifier beats a registry entry, and what
   changes when the content changes.

## Rules

- The reviewer reads your code, it does not run it. Keep both functions readable and callable the
  same way.
- Derive the identifier from the content only. No timestamps, counters, sequence numbers, or
  random values.
- The same content must always produce the same identifier, no matter what order its fields are in.
- Do not keep a registry or any shared state that maps content to identifiers. The recomputation
  must stand on its own.

You are graded on the code and on your explanation in SOLUTION.md.
