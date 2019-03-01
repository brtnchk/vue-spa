const Chance = require('chance');
const chance = new Chance();

/**
 * Обозначения маски [0010110110]
 * 0 - видимый элемент(кирпичик)
 * 1 - скрытый элемент(кирпичик)
 * */
export class RedactionStrategy {
  constructor(content, options) {
    this.content = content;
    this.options = options;

    this.bricks = this.getContentBricks();
    this.hiddenBricks = this.getCountOfHiddenBricks();
    this.rawMask = this.getRawMask();
    this.mask = this.shuffle();
  }

  getContentBricks() {
    return 25;
  }

  getCountOfHiddenBricks() {
    return Math.round(this.bricks*this.options.hiddenPercent/100);
  }

  getRawMask() {
    let rawMask = new Array(this.bricks);

    for (let i = 0; i < this.bricks; i++) {
      rawMask[i] = (i < this.hiddenBricks) ? 1 : 0;
    }

    return rawMask;
  }

  shuffle() {
    return chance.shuffle(this.rawMask);
  }

  toString() {
    if (this.mask) return this.mask.join('');
    return '';
  }
}
