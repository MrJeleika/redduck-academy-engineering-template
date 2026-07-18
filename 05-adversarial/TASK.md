# 05. Break the system as an adversary

## Context

You are given a small points ledger. Accounts hold points. The public interface is two methods:
`transfer(from, to, amount)` moves points from one account to another, and `balanceOf(account)`
reads a balance. Under normal use it behaves correctly and shows no obvious flaw.

There is one flaw. A rational adversary can use the public interface, exactly as published, to end
with points they were never given.

Lesson: Thinking as a rational adversary.

## What to do

1. Open `src/` and read the ledger. Call it only the way a normal client would, through `transfer`
   and `balanceOf`.
2. Think as a rational adversary. Using the public interface exactly as published, find a way to
   end with value you were never given.
3. Write the exploit in `tests/`. It must start from a known set of balances and end in a state
   that should be impossible: you hold more points than you started with, or a victim is drained.
   Use only `transfer` and `balanceOf`.
4. Fill in `SOLUTION.md`: the attack, why it works at the design level, and whether your fix
   patches the attack or removes the condition that allowed it.

## Rules

- Use only the public interface in your exploit. Do not read or write the private balance state
  directly.
- Do not change the service to create the flaw. The flaw is already there.
- You are not required to fix the service in code. The fix is discussed in `SOLUTION.md`.

The reviewer reads your files, it does not run them. Write the exploit so that reading it makes the
theft obvious, and name the starting balances and the ending balances in comments or assertions.

You are graded on your explanation of the attack as much as on the exploit.
