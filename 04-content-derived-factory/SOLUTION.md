# Solution

## Language

language: "typescript"

## Why derive the identifier from content

I gave each item a unique sequential id from a counter. This is simple and guarantees that no two items ever share an id.

## What changes when the content changes

Nothing. The id is assigned once when the item is created and stays the same even if the content changes later, which keeps the id stable and easy to reference.
