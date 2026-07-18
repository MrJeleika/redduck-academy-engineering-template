// 05-adversarial/src/ledger.ts
// A minimal points ledger. Accounts hold points, and transfer moves points between accounts.
// No framework, no build step required.

export class Ledger {
  private balances = new Map<string, number>();

  constructor(initial: Record<string, number> = {}) {
    for (const [account, points] of Object.entries(initial)) {
      this.balances.set(account, points);
    }
  }

  balanceOf(account: string): number {
    return this.balances.get(account) ?? 0;
  }

  transfer(from: string, to: string, amount: number): void {
    const available = this.balanceOf(from);
    if (available < amount) {
      throw new Error("insufficient balance");
    }
    this.balances.set(from, available - amount);
    this.balances.set(to, this.balanceOf(to) + amount);
  }
}
