# Solution

## Language

language: "typescript"

## Why derive the identifier from content

A registry maps a name to an instance, and every consumer must query it and trust the answer. If the registry is wrong, stale, or tampered with, every consumer is deceived at once. A content-derived identifier is recomputed by each party from the content they already hold, so there is nothing to query and no authority to trust. Two parties with the same content always get the same id, and no one can place different content under the same id.

## What changes when the content changes

Because the id is a hash of the content, any change to the content changes the id. This is a feature: a substitution is detectable, since altered content no longer matches its original id. It is also a constraint: you cannot keep one id while changing the content it points to, so a content-derived id is the wrong choice when you need a stable name for something whose content will change.
