/*---
description: Parenthesizing a chain does not make the chain an assignment target.
negative: { phase: parse, type: SyntaxError }
---*/
(a?.b) = v;
