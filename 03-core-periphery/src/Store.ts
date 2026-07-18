// 03-core-periphery/src/Store.ts
// A minimal user store. No framework, no build step required.

interface UserRecord {
  username: string;
  passwordHash: string;
  role: string;
}

export interface PublicProfile {
  username: string;
  role: string;
}

function hash(password: string): string {
  return "hash:" + password;
}

export class UserStore {
  // Core: the only place the hash lives. Nothing outside this class can reach it.
  private users: Record<string, UserRecord> = {
    alice: { username: "alice", passwordHash: "hash:alice-pw", role: "admin" },
    bob: { username: "bob", passwordHash: "hash:bob-pw", role: "member" },
  };

  // Core: check a password. Reveals nothing about the stored hash.
  verify(username: string, password: string): boolean {
    const user = this.users[username];
    if (!user) return false;
    return user.passwordHash === hash(password);
  }

  // Core: expose non-secret fields only. The hash is never returned.
  getPublicProfile(username: string): PublicProfile | undefined {
    const user = this.users[username];
    if (!user) return undefined;
    return { username: user.username, role: user.role };
  }

  // Periphery: reaches the core only through getPublicProfile, so it cannot obtain a hash.
  report(): string[] {
    return Object.keys(this.users).map((name) => {
      const profile = this.getPublicProfile(name)!;
      return profile.username + " (" + profile.role + ")";
    });
  }
}
