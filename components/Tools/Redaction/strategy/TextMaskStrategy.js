import { RedactionStrategy } from "./RedactionStrategy";

export class TextMaskStrategy extends RedactionStrategy {
  constructor(content, options) {
    super(content, options);
  }

  /**
   * разбиваем контент на минимальные блоки в зависимости от алгоритма (слова или буквы).
   * записываем в переменную bricks кол-во слов или кол-во букв в тексте (кол-во кирпичиков).
   * */
  getContentBricks() {
    if (!this.content) return 0;
    if (this.options.algorithm === 'words') {
      return this.content
        .trim()
        .split(" ")
        .length;
    }
    if (this.options.algorithm === 'characters') {
      return this.content
        .replace(/ +/g, "")
        .split("")
        .length;
    }
  }
}
