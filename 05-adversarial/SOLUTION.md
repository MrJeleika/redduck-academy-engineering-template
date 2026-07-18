# Solution

## Language

language: "typescript"

## The attack

The attacker starts with 0 points and the victim with 100. The attacker calls `transfer("attacker", "victim", -100)`. The guard `available < amount` is `0 < -100`, which is false, so it passes. Moving a negative amount runs the transfer backwards: the attacker's balance becomes `0 - (-100) = 100`, and the victim's becomes `100 + (-100) = 0`. The attacker ends with 100 points they were never given, using only the public `transfer` and `balanceOf`.

## Why it works at the design level

The caller controls the sign of `amount`, a value the system should control itself. `transfer` assumes `amount` is positive but never enforces it, so the caller can pass a negative amount and reverse the direction of the transfer. The flaw is not one missing check. It is a design that hands the caller authority over whether points move out of an account or into it.

## Patch or elimination?

A patch rejects a non-positive amount at runtime, for example `if (amount <= 0) throw new Error("amount must be positive")`. An elimination makes a negative amount impossible to express, by typing `amount` as a value that cannot be negative, so the sign is never in the caller's hands. Elimination is stronger, because a value that cannot be negative cannot carry this attack at all, while a runtime check can be bypassed or left off another code path. I would eliminate it.
