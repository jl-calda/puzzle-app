import View from './_View.js';
import Tile from './_Tile.js';

export default class GameBoard extends View {
  constructor(settings) {
    super();
    this.width = settings.width;
    this.height = settings.width;
    this.rows = settings.rows;
    this.columns = settings.columns;
    this.photoURL = settings.puzzleURL;
    console.log(this.photoURL);
    this.elements = {};
    this.elements.root = GameBoard.createRoot();
    this.createGameBoard();

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

  createGameBoard(settings) {
    const div = this._createElement('div', {
      classes: ['flex', 'flex-col'],
      attributes: null,
      text: null,
    });

    const img2 = new Image(this.width, this.height);
    img2.src = this.photoURL;
    div.append(img2);
    const tilesize = this.width / this.rows;
    for (let y = 0; y < this.rows; y = y + 1) {
      let els = [];
      let rowDiv = this._createElement('div', {
        classes: ['flex'],
        attributes: [{ attr: 'row', value: y }],
        text: null,
      });
      for (let x = 0; x < this.columns; x = x + 1) {
        // console.log("this is run2");
        const img = new Image();
        img.src = this.photoURL;
        img.onload = () => {
          const tile = Tile.createTile(
            img,
            x * tilesize,
            y * tilesize,
            tilesize,
            this.width,
            this.height
          );

          tile.onload = () => rowDiv.append(tile);
          rowDiv.append(tile);
        };

        // console.log(croppedImg);
      }
      div.append(rowDiv);
    }
    // console.log(board);
    this.elements.root.append(div);
    console.log(this.elements.root);
  }
}
