export default class GameBoard {
  static createGameBoard() {}
}



class Puzzle {
  constructor() {
    this.root = this.createRoot();
    this._cols = 4;
    this._rows = 4;
    this._tileSize = 100;
    this._width = this._cols * this._tileSize;
    this._height = this._cols * this._tileSize;
  }

  makeGrid() {
    const container = document.createElement('div');
    for (let y = 0; y < this._height; y = y + this._tileSize) {
      for (let x = 0; x < this._width; x = x + this._tileSize) {
        const croppedImg = CroppedImage.createCroppedImage(
          imgURL,
          x,
          y,
          this._tileSize
        );
        this.root.append(croppedImg);
      }
    }
  }

  createRoot() {
    const range = document.createRange();
    range.selectNode(document.body);
    const root = range.createContextualFragment(`<div></div>`).children[0];
    return root;
  }
}

class CroppedImage {
  constructor(imgURL, x, y, tileSize) {
    this.imgURL = imgURL;
    this.sx = x;
    this.sy = y;
    this.tileSize = tileSize;
  }

  static createCroppedImage(imgURL, x, y, tileSize) {
    const canvas = document.createElement('canvas');
    canvas.width = this.tileSize;
    canvas.height = this.tileSize;
    const context = canvas.getContext('2d');
    const img = new Image();
    img.src = this.imgURL;
    context.drawImage(img, this.sx, this.sy, tileSize, tileSize);
    const img2 = new Image();
    img2.src = canvas.toDataURL();
    return img2;
  }
}
// sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
