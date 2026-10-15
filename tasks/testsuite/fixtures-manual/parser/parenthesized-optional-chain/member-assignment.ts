/*---
description: Type assertions preserve parenthesized optional-chain member objects.
---*/
(a?.b as T)[k] = v;
(a?.b!)[k] = v;
(a?.b)![k] = v;
(<T>a?.b)[k] = v;
(a?.b satisfies T)[k] = v;
[(a?.b)[k] as T] = values;
