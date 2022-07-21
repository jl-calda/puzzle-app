export default class Tile {
  static createTile(imgURL, x, y, tileSize) {
    const canvas = document.createElement("canvas");
    canvas.width = tileSize;
    canvas.height = tileSize;
    const context = canvas.getContext("2d");
    const img = new Image();
    img.src = imgURL;
    context.drawImage(img, x, y, tileSize, tileSize);
    const img2 = new Image();
    img2.src = canvas.toDataURL();
    return img2;
  }
}
