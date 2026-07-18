// 03-core-periphery/src/store-data.ts
// Given scaffolding for this task. You do not need to change this file.
// It provides the user record type, the seed users, and the password hashing helper.

export interface UserRecord {
  username: string;
  passwordHash: string;
  role: string;
}

export function hash(password: string): string {
  return "hash:" + password;
}

export const SEED_USERS: Record<string, UserRecord> = {
  alice: { username: "alice", passwordHash: "hash:alice-pw", role: "admin" },
  bob: { username: "bob", passwordHash: "hash:bob-pw", role: "member" },
};
