// 03-core-periphery/src/Store.ts
// A minimal user store. No framework, no build step required.

export interface UserRecord {
  username: string;
  passwordHash: string;
  role: string;
}

function hash(password: string): string {
  return `hash:${password}`;
}

export class UserStore {
  private users: Record<string, UserRecord> = {
    alice: { username: "alice", passwordHash: "hash:alice-pw", role: "admin" },
    bob: { username: "bob", passwordHash: "hash:bob-pw", role: "member" },
  };

  verify(username: string, password: string): boolean {
    const user = this.users[username];
    if (!user) return false;
    return user.passwordHash === hash(password);
  }

  getUser(username: string): UserRecord | undefined {
    return this.users[username];
  }

  report(): string[] {
    return Object.keys(this.users).map((name) => {
      const user = this.getUser(name)!;
      return `${user.username} (${user.role}) ${user.passwordHash}`;
    });
  }
}
