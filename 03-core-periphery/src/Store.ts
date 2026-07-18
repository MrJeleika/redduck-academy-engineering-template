// 03-core-periphery/src/Store.ts
// The corrected user store. The UserRecord type, the seed users, and the hash
// helper are given in ./store-data and are not part of what you edit here.

import { SEED_USERS, UserRecord, hash } from "./store-data";

export interface PublicProfile {
  username: string;
  role: string;
}

// The narrow interface: the only way anything outside the core reaches it.
// Every method is hash-free, so a holder of this interface has no path to a hash.
export interface UserDirectory {
  verify(username: string, password: string): boolean;
  getPublicProfile(username: string): PublicProfile | undefined;
  usernames(): string[];
}

// Core: the only place the hash lives. `users` is private and the class exposes
// nothing beyond UserDirectory, so the hash cannot be reached from outside.
export class UserStore implements UserDirectory {
  private users: Record<string, UserRecord> = SEED_USERS;

  verify(username: string, password: string): boolean {
    const user = this.users[username];
    if (!user) return false;
    return user.passwordHash === hash(password);
  }

  getPublicProfile(username: string): PublicProfile | undefined {
    const user = this.users[username];
    if (!user) return undefined;
    return { username: user.username, role: user.role };
  }

  usernames(): string[] {
    return Object.keys(this.users);
  }

  // Admin convenience: hand back a user's full record. Guarded by a role check.
  getUser(requesterRole: string, username: string): UserRecord | undefined {
    if (requesterRole !== "admin") return undefined;
    return this.users[username];
  }
}

// Periphery: a free function holding only the narrow interface. It has no
// reference to `users` and no method that yields a hash, so there is no code
// path from here to the secret.
export function report(directory: UserDirectory): string[] {
  return directory.usernames().map((name) => {
    const profile = directory.getPublicProfile(name)!;
    return profile.username + " (" + profile.role + ")";
  });
}
