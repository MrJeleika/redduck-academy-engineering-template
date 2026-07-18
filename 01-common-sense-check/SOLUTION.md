# Solution

## Language

language: "typescript"

## The flaw

A caller could send a negative price or a negative quantity, which would make the order total negative. That would let someone create an order that appears to cost less than zero.

## The fix

I added validation in `createOrder`. It now rejects any item whose price or quantity is negative, throwing an error before the total is computed. Valid requests are unaffected.

## Patch or elimination?

Patch. I kept the price on each request item and added checks that reject invalid values.
