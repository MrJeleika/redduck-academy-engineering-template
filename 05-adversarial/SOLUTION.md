# Solution

## The attack

Describe, as a short sequence of steps, what a rational adversary does through the public interface
to end with points they were never given. Name the starting balances, the exact call you make, and
the ending balances.

## Why it works at the design level

Explain the cause at the level of the design. Which value does the caller control that the system
should have controlled itself, and what does that let the caller do?

## Patch or elimination?

State your fix and classify it. Does it patch the attack, by rejecting the bad input at runtime, or
eliminate the condition, by making the bad input impossible to express at all? Say which, and why
removing the condition is stronger than guarding it.
