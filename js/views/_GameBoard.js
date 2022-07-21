import View from "./_View.js";
import Tile from "./_Tile.js";

export default class GameBoard extends View {
  constructor(settings) {
    super();
    this.width = settings.width;
    // console.log(settings.width);
    // console.log(this.width);
    this.height = settings.width;
    this.rows = settings.rows;
    this.columns = settings.columns;
    this.photoURL = settings.photoURL;
    console.log(this.photoURL);
    this.elements = {};
    this.elements.root = GameBoard.createRoot();
    this.createGameBoard();
    // this.testRenderImg();
    // this.elements.tiles = GameBoard.createGameBoard(settings);
    // this.elements.root.append(GameBoard.createGameBoard(settings));
  }

  static createRoot() {
    const range = document.createRange();
    range.selectNode(document.body);
    const el = `<div data-id="puzzle-container">Gameboard</div>`;
    const fragment = range.createContextualFragment(el).children[0];
    // console.log(fragment);
    return fragment;
  }

  async testRenderImg(settings) {
    const tilesize = this.width / this.rows;
    const canvas = document.createElement("canvas");
    canvas.width = tilesize;
    canvas.height = tilesize;
    const context = canvas.getContext("2d");
    const img = new Image();
    img.src = this.photoURL;
    context.drawImage(img, 0, 0, tilesize, tilesize);
    const img2 = new Image();
    img2.src = canvas.toDataURL();
    this.elements.root.append(img2);
  }

  createGameBoard(settings) {
    const div = document.createElement("div");
    const tilesize = this.width / this.rows;
    // let y = this.rows;
    // let x = this.columns;
    console.log(tilesize);
    for (let y = 0; y < this.rows; y = y + 1) {
      console.log("this is run");
      for (let x = 0; x < this.columns; x = x + 1) {
        // console.log("this is run2");
        const tile = Tile.createTile(
          this.photoURL,
          x * tilesize,
          y * tilesize,
          tilesize,
          tilesize
        );
        console.log(tile);
        div.append(tile);
      }
    }
    this.elements.root.append(div);
    // console.log(this.elements.root);
  }
}
