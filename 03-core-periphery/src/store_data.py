# 03-core-periphery/src/store_data.py
# Given scaffolding for this task. You do not need to change this file.
# It provides the seed users and the password hashing helper.


def hash_password(password):
    return "hash:" + password


SEED_USERS = {
    "alice": {"username": "alice", "passwordHash": "hash:alice-pw", "role": "admin"},
    "bob": {"username": "bob", "passwordHash": "hash:bob-pw", "role": "member"},
}
