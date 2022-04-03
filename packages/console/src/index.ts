import colors from "./list";

const close: string = "\x1b[0m";

export default class ConsoleStyle {
  static bold(str: string) {
    return colors.bold + str + close;
  }
  static underline(str: string) {
    return colors.underline + str + close;
  }
  static reverse(str: string) {
    return colors.reverse + str + close;
  }
  static reset(str: string) {
    return colors.reset + str + close;
  }
  static bright(str: string) {
    return colors.bright + str + close;
  }
  static dim(str: string) {
    return colors.dim + str + close;
  }
  static underscore(str: string) {
    return colors.underscore + str + close;
  }
  static blink(str: string) {
    return colors.blink + str + close;
  }
  static hidden(str: string) {
    return colors.hidden + str + close;
  }
  static fgblack(str: string) {
    return colors.fgblack + str + close;
  }
  static fgred(str: string) {
    return colors.fgred + str + close;
  }
  static fggreen(str: string) {
    return colors.fggreen + str + close;
  }
  static fgyellow(str: string) {
    return colors.fgyellow + str + close;
  }
  static fgblue(str: string) {
    return colors.fgblue + str + close;
  }
  static fgmagenta(str: string) {
    return colors.fgmagenta + str + close;
  }
  static fgcyan(str: string) {
    return colors.fgcyan + str + close;
  }
  static fgwhite(str: string) {
    return colors.fgwhite + str + close;
  }
  static bgblack(str: string) {
    return colors.bgblack + str + close;
  }
  static bgred(str: string) {
    return colors.bgred + str + close;
  }
  static bggreen(str: string) {
    return colors.bggreen + str + close;
  }
  static bgyellow(str: string) {
    return colors.bgyellow + str + close;
  }
  static bgblue(str: string) {
    return colors.bgblue + str + close;
  }
  static bgmagenta(str: string) {
    return colors.bgmagenta + str + close;
  }
  static bgcyan(str: string) {
    return colors.bgcyan + str + close;
  }
  static bgwhite(str: string) {
    return colors.bgwhite + str + close;
  }
}
