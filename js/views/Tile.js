class Tile {
  static makeTile(dataURL) {
    const img = new Image();
    img.src = dataURL;
    return img;
  }
}

export { Tile };
