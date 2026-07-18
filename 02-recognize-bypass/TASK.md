# 02. Recognize when a bypass is available

## Context

Every hard problem seems to contain a wall, a constraint that fixes the shape of every solution.
Sometimes the constraint belongs only to the first method you try, and a different method never
meets it. Sometimes the constraint is a real property of the outcome you need, and no design
removes it. This task is practice at telling those two apart. For each problem below, ask one
question of the constraint: is it intrinsic to the outcome, or only to one way of reaching it?

Lesson: Bypassing a constraint instead of fighting it.

## The three problems

### Problem 1

A dashboard must show the running total of a value across a hundred thousand records. The obvious
solution loads every record and adds the values together. It accepts the constraint that to know
the total you must read all the records. Find a bypass or argue that none exists.

### Problem 2

A sender must be certain a message reached a recipient. The only channel between them can silently
drop any message, including the acknowledgements the recipient sends back. The obvious solution adds
acknowledgements and retries until one gets through. It accepts the constraint that delivery must be
confirmed by exchanging messages over this channel. Find a bypass or argue that none exists.

### Problem 3

A payment form must avoid charging a customer twice when they double-click submit. The obvious
solution watches for the second click and blocks it in time. It accepts the constraint that you
must catch the duplicate as it happens. Find a bypass or argue that none exists.

## What to do

Open `SOLUTION.md` and fill in one section per problem. For each one, give your verdict (a bypass
exists, or no bypass exists), state the exact constraint in words, and explain your reasoning. When
you claim a bypass, show how the finished design makes the constraint irrelevant, so that no part of
the design still pays it. When you claim no bypass, explain why the constraint belongs to the
outcome itself rather than to any single method.

## Rules

- The reviewer reads your `SOLUTION.md`, it does not run anything. There is no code in this task.
- A real bypass removes the constraint from the problem. A design that only reads fewer records,
  blocks the click faster, or retries more times still pays the constraint and does not count.
