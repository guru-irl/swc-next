/*---
description: An unbroken optional chain is not an assignment target.
negative: { phase: parse, type: SyntaxError }
---*/
a?.b[k] = v;
