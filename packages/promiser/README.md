# Eodomius utilities : promiser

This module provide a function that can wait for a promise to be resolved or rejected. The function return an array of two values: te result and the error.

## Installation

**NPM**:

```bash
npm i @eodomius/promiser
```

**Yarn**:

```bash
yarn add @eodomius/promiser
```

## Importation

**CommonJS**:

```js
const { promiser } = require("@eodomius/promiser");
```

**EcmaScript modules**:

```js
import { promiser } from "@eodomius/promiser";
```

## Usage

```typescript
import { promiser } from "@eodomius/promiser";

const [result, error] = promiser(Promise.resolve(1));
if (error) {
  console.error(error);
  return;
} else {
  console.log(result);
}
```
