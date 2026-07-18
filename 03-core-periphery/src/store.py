# 03-core-periphery/src/store.py
# A minimal user store. No framework required.


def _hash(password):
    return "hash:" + password


class UserStore:
    def __init__(self):
        self._users = {
            "alice": {"username": "alice", "passwordHash": "hash:alice-pw", "role": "admin"},
            "bob": {"username": "bob", "passwordHash": "hash:bob-pw", "role": "member"},
        }

    def verify(self, username, password):
        user = self._users.get(username)
        if user is None:
            return False
        return user["passwordHash"] == _hash(password)

    def get_user(self, username):
        return self._users.get(username)

    def report(self):
        rows = []
        for name in self._users:
            user = self.get_user(name)
            rows.append(f"{user['username']} ({user['role']}) {user['passwordHash']}")
        return rows
