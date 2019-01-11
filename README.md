# Secret Writer

Writes the content of an AWS Secret Manager secret to the filesystem.

Secret writer can write an entire secrets object or a single secret value to the filesystem:

## How can I use this in my project?

```bash
npm i secret-writer
```

### write an entire secret

```javascript
const secretWriter = require('secret-writer');

secretWriter.writeSecretToFileSystem('/some/file/path', 'ALL_THE_SECRETS');
```

### write a specific secret value

```javascript
const secretWriter = require('secret-writer');

secretWriter.writeSecretToFileSystem('/some/file/path', 'ALL_THE_SECRETS', 'SOME_SECRET');
```
