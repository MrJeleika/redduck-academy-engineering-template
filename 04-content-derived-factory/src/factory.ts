// 04-content-derived-factory/src/factory.ts
// A content-derived factory. Fill in create() and derive(). No framework, no build step.
// Run with: npx tsx src/factory.ts

import { strict as assert } from "node:assert";

// The content an item is built from. Any set of string fields; here, a short document.
export type Content = Record<string, string>;

export interface Item {
  content: Content;
  id: string;
}

// TODO: return an Item holding the content and an id derived from its content (use derive).
export function create(content: Content): Item {
  throw new Error("not implemented");
}

// TODO: recompute the id from the content alone, with no registry and no shared state,
// so the demo passes.
export function derive(content: Content): string {
  throw new Error("not implemented");
}

// Demo: create an item, have a second party derive the id from the same content, then tamper.
function demo(): void {
  const content: Content = {
    title: "Quarterly report",
    body: "Revenue held steady.",
    author: "avery",
  };

  const item = create(content);

  // Second party holds only the content, in a different field order, and derives the id itself.
  const sameContent: Content = {
    author: "avery",
    body: "Revenue held steady.",
    title: "Quarterly report",
  };
  assert.equal(derive(sameContent), item.id, "same content must derive the same id");

  // Tamper with one field. The derived id must no longer match the original.
  const tampered: Content = { ...content, body: "Revenue tripled." };
  assert.notEqual(derive(tampered), item.id, "changed content must change the id");

  console.log("ok:", item.id);
}

demo();
