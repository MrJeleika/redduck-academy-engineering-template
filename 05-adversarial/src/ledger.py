# 05-adversarial/src/ledger.py
# A minimal points ledger. Accounts hold points, and transfer moves points between accounts.
# No framework required.


class Ledger:
    def __init__(self, initial=None):
        self._balances = dict(initial or {})

    def balance_of(self, account):
        return self._balances.get(account, 0)

    def transfer(self, sender, recipient, amount):
        available = self.balance_of(sender)
        if available < amount:
            raise ValueError("insufficient balance")
        self._balances[sender] = available - amount
        self._balances[recipient] = self.balance_of(recipient) + amount
