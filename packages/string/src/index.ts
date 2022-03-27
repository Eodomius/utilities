interface String {
  isEmpty(): boolean;
  isLower(): boolean;
  isUpper(): boolean;
  toCapitalise(): string | undefined;
  camelCase(): string | undefined;
  snakeCase(): string | undefined;
  between(a: string, b: string): string | null | undefined;
  removeStr(str: string): string | undefined;
  startBy(str: string): boolean;
  endBy(str: string): boolean;
  reverse(): string | null;
}

/* It's a method that convert a string to capitalise. */
String.prototype.toCapitalise = function () {
  if (!this || !this.length) return undefined;
  const strArray = this.split(/(\.|\?|\!|\;)/);
  let output = "";
  for (let i = 0; i < strArray.length; ) {
    output += `${i !== 0 ? " " : ""}${strArray[i]
      .trim()
      .charAt(0)
      .toUpperCase()}${strArray[i].trim().substring(1)}${
      strArray[i + 1] ? strArray[i + 1] : "."
    }`;
    i += 2;
  }
  return output;
};

/* It's a method that convert a string to camel case. */
String.prototype.camelCase = function () {
  if (!this || !this.length) return undefined;
  const strArray = this.split(" ");
  let output: string = "";
  for (let i = 0; i < strArray.length; i++) {
    if (i !== 0) {
      output += `${strArray[i].charAt(0).toUpperCase()}${strArray[i].substring(
        1
      )}`;
    } else output += strArray[i];
  }
  return output;
};

/* It's a method that convert a string to snake case. */
String.prototype.snakeCase = function () {
  if (!this || !this.length) return undefined;
  const strArray = this.split(" ");
  return strArray.join("_");
};

/* It's a method that remove a string from a string. */
String.prototype.between = function (a: string, b: string) {
  if (!this || !this.length) return undefined;
  if (!a || !a.length)
    throw SyntaxError("[MISSING_PARAMETER] first character must be provided.");
  if (!b || !b.length)
    throw SyntaxError("[MISSING_PARAMETER] last character must be provided.");
  a = a.trim();
  b = b.trim();
  const strArray = this.split(a);
  const result = strArray[1].split(b)[0].trim();
  if (!result || result === "") return null;
  return result;
};

/* It's a method that remove a string from a string. */
String.prototype.removeStr = function (str) {
  if (!this || !this.length) return undefined;
  if (!str || !str.length)
    throw SyntaxError("[MISSING_PARAMETER] a parameter must be provided.");
  const result = this.split(str).join("");
  return result;
};

/* It's a method that check if the string starts with a specific string. */
String.prototype.startBy = function (start: string) {
  if (!start || !start.length || !this || !this.length)
    throw SyntaxError("[MISSING_PARAMETER] Missing parameter or argument.");
  const firstChars = this.slice(0, this.length - start.length);
  if (firstChars === start) return true;
  return false;
};

/* It's a method that check if the string ends with a specific string. */
String.prototype.endBy = function (end: string) {
  if (!end || !end.length || !this || !this.length)
    throw SyntaxError("[MISSING_PARAMETER] Missing parameter or argument.");
  const last = this.substring(end.length);
  if (last === end) return true;
  return false;
};

/* It's a method that check if the string is empty. */
String.prototype.isEmpty = function isEmpty() {
  if (!this || !this.length) return true;
  if (this === "") return true;
  else return false;
};

/* It's a method that check if the string is lower case. */
String.prototype.isLower = function () {
  if (!this || !this.length) return false;
  if (this.toLowerCase() === this) return true;
  return false;
};
/* It's a method that check if the string is upper case. */
String.prototype.isUpper = function () {
  if (!this || !this.length) return false;
  if (this.toUpperCase() === this) return true;
  return false;
};

/* It's a method that reverse the string. */
String.prototype.reverse = function () {
  if (!this || !this.length) return null;
  const strArray = this.split("");
  strArray.reverse();
  return strArray.join("");
};
