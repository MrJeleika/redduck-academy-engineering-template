# 03-core-periphery/src/store.py  —  PYTHON version.
# Only edit this file if you chose Python, and complete just one language.
# Then declare it at the top of SOLUTION.md:  language: "python"
#
# Given (do not edit): store_data.py holds the seed users and the hash helper.
# Done for you: verify, which checks a password and returns only a boolean.
# Your job:
#   - add a hash-free public-profile lookup that returns username and role,
#   - rebuild report so it lists every user without ever including a hash.
# Full description in TASK.md.

from store_data import SEED_USERS, hash_password


class UserStore:
    def __init__(self):
        self._users = SEED_USERS

    # The one legitimate core operation. It checks a password and returns only a bool.
    def verify(self, username, password):
        user = self._users.get(username)
        if user is None:
            return False
        return user["passwordHash"] == hash_password(password)

    # TODO: expose a narrow, hash-free way to read a user's public profile (username and role).

    # TODO: rebuild a report of all users that never exposes a password hash.
