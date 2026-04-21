# Aube Exotic Bug

Unable to install dependency with github commit hash.

### Usage

```bash
pnpm i
# It works

aube install

 WARN aube::commands::install: node-expat@https://codeload.github.com/PruvoNet/node-expat/tar.gz/0732e16b0b679da2d12e062f78b3a511f419bb65: registry response has no `dist.integrity`, importing without content verification. Set `strict-store-integrity=true` to refuse instead.
aube 1.0.0-beta.9 by en.dev — fetching  [==================================================================================================] 65/65
Error:   × node-expat@https://codeload.github.com/PruvoNet/node-expat/tar.gz/0732e16b0b679da2d12e062f78b3a511f419bb65: package.json content mismatch:
  │ tarball declares node-expat@2.4.1
```