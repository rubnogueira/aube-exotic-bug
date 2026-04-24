# Aube Exotic Bug

Not all the dependencies are installed.

### Usage

```bash
pnpm i
node index.js
# It works

rm -rf node_modules
aube install
node index.js

node:internal/modules/cjs/loader:1476
  const err = new Error(message);
              ^

Error: Cannot find module 'bin-wrapper'
Require stack:
```