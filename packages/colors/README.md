# Eodomius utilities : Colors

This module contains useful functions for manipulate colors and have colors in node.js console.

## Installation

**NPM**:

```bash
npm i @eodomius/colors
```

**Yarn**:

```bash
yarn add @eodomius/colors
```

## Importation

**CommonJS**:

```js
const { ColorsConverter, ResolveColor } = require("@eodomius/colors");
```

**EcmaScript modules**:

```js
import { ColorsConverter, ResolveColor } from "@eodomius/colors";
```

## Convert colors

### convertHexToRGB

Convert hexadecimal color code to RGB color code

Params

- hexColor : Hexidecimal color code `string`

Return :

- RGB color code `Object`

```js
ColorsConverter.convertHexToRGB("#fff"); // Output {r:255, g:255, b:255}
```

### convertRGBToHex

Convert RGB color code to hexadecimal color code

Params

- RGB : RGB color code `Object`

Return :

- RGB color code `Object`

```js
ColorsConverter.convertHexToRGB({ r: 255, g: 255, b: 255 }); // Output #ffffff
```

## Colors

### find

Find a color by name, hex code, RGB code

Params

- arg : The argument `string`
- Options : The options `Object`

Return :

- Color `Object`

```js
ResolveColor.find("Orange", { limit: 1, sortBy: "name" });
```

### findByName

Find a color by name, hex code, RGB code

Params

- arg : The argument `string`
- Options : The options `Object`

Return :

- Color `Object`

```js
ResolveColor.findByName("Orange");
```

### findByHex

Find a color by hex code

Params

- arg : The argument `string`
- Options : The options `Object`

Return :

- Color `Object`

```js
ResolveColor.findByHex("#fff");
```

### findByRGB

Find a color by RGB code

Params

- arg : The argument `string`
- Options : The options `Object`

Return :

- Color `Object`

```js
ResolveColor.findByRGB("(255, 255, 255)");
```
