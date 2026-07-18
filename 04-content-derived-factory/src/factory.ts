// 04-content-derived-factory/src/factory.ts
// A content-derived factory. No framework, no build step.
// Run with: npx tsx src/factory.ts

import { strict as assert } from "node:assert";

// The content an item is built from. Any set of string fields; here, a short document.
export type Content = Record<string, string>;

export interface Item {
  content: Content;
  id: string;
}

// A counter so every item gets a unique id.
let nextId = 1;

// Assign the next sequential id.
export function derive(content: Content): string {
  return "item-" + String(nextId++);
}

// Return an Item holding the content and a fresh id.
export function create(content: Content): Item {
  return { content, id: derive(content) };
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
