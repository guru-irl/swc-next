/*---
description: Parentheses end optional chains before delete, tags, and constructors.
---*/
delete (a?.b)[k];
(a?.b).c`text`;
new (a?.b).c();
