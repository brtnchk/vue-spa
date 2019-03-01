import { ImgMaskStrategy, TextMaskStrategy } from "./strategy";

export class MaskCreator {
  constructor(masks) {
    for (let key in masks) {
      if (masks.hasOwnProperty(key)) {
        this[key] = masks[key];
      }
    }
  }

  create(data, options) {
    return new this[data.type](data.value, options);
  }
}

export const maskCreator = new MaskCreator({text: TextMaskStrategy, img: ImgMaskStrategy});
