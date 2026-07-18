# Solution

## Problem 1

**Verdict:** bypass exists

**The exact constraint:** To know the total, you must read every record.

**Reasoning:** The constraint belongs to one method (summing on demand), not to the outcome (knowing the total). The total does not require re-reading all records if the sum is maintained as records change.

**If a bypass exists, how it removes the constraint:** Keep a running total that is updated when a record is added, changed, or removed, or use a database aggregate the store maintains. Reading the dashboard then reads one number. The finished design never loads all records, so it does not pay the constraint at all.

## Problem 2

**Verdict:** no bypass

**The exact constraint:** Delivery can only be confirmed by exchanging messages over a channel that can drop any message.

**Reasoning:** This is intrinsic to the outcome. Any confirmation must itself travel back over the same unreliable channel and can be dropped, and the acknowledgement of that acknowledgement can be dropped, without end. This is the two-generals result: certainty of delivery over a channel that can drop the final message is impossible, so the constraint belongs to the outcome, not to any single method. Retrying only lowers the probability of loss, it never removes it.

**If a bypass exists, how it removes the constraint:** Not applicable.

## Problem 3

**Verdict:** bypass exists

**The exact constraint:** You must catch the duplicate submission as it happens.

**Reasoning:** The constraint belongs to the method of detecting the second click in time, not to the outcome of charging once. If a repeated request has no additional effect, timing stops mattering.

**If a bypass exists, how it removes the constraint:** Make the operation idempotent. The client sends a request id with the submission, and the server records that id and treats any later request with the same id as a no-op. A double-click sends the same id twice and is charged once. The finished design never needs to catch the second click in time, so the constraint is gone.
