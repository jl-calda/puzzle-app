import View from './_View.js';

export default class Tile extends View {
  static createTile(img, x, y, tileSize) {
    const img2 = new Image();
    img2.classList.add(...['border-2', 'border-sky-200', 'pointer']);
    img2.draggable = true;
    img2.dataset.id = x / tileSize;
    // img.src = imgURL;
    // img.onload = function () {
    const canvas = document.createElement('canvas');
    canvas.width = tileSize;
    canvas.height = tileSize;
    canvas.id = x;
    // console.log(canvas.width);
    const context = canvas.getContext('2d');
    context.drawImage(img, x, y, tileSize, tileSize, 0, 0, tileSize, tileSize);
    const dataURL = canvas.toDataURL('image/png');
    img2.src = dataURL;
    // return this;
    // };
    return img2;
  }
}
