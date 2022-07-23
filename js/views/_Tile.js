export default class Tile {
  static createTile(img, x, y, tileSize) {
    const img2 = new Image();
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

function getBase64FromImageUrl(URL) {
  var img = new Image();
  img.src = URL;
  img.onload = function () {
    var canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;

    var ctx = canvas.getContext('2d');
    ctx.drawImage(this, 0, 0);

    var dataURL = canvas.toDataURL('image/png').replace;

    alert(dataURL.replace(/^data:image\/(png|jpg);base64,/, ''));
  };
}
