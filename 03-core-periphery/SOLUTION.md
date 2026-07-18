# Solution

## What was the problem

Explain why a caller outside the store could reach a password hash before your change. Say which
part held the secret and what path led to it.

## The split

Describe your core and your periphery. Say what the narrow interface exposes, what it refuses to
return, and how the periphery does its job without ever reaching a hash.

## Removal versus guarding

Explain the difference between deleting the path to the secret and keeping the path behind a
check. Say which one your split does, and why a vector that no longer exists is stronger than one
that is guarded.
