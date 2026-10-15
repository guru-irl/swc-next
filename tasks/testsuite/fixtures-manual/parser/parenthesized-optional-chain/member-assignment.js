/*---
description: Parentheses end optional chains before member assignment targets.
---*/
(a?.b)[k] = v;
(a?.b).c = v;
(a?.b)[k] += v;
(a?.b).c++;
++(a?.b)[k];
[(a?.b)[k]] = values;
[((a?.b)[k])] = values;
({ x: (a?.b).c } = value);
for ((a?.b)[k] of values) {}
(a?.b.c).d = v;
(a?.b()).c = v;
((a?.b))[k] = v;
