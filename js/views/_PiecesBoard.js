import View from './_View.js';

export default class PiecesBoard extends View {
  constructor(settings) {
    super();
    this.width = 1000;
    this.height = 400;
    this.elements = {};
    this.elements.root = PiecesBoard.createRoot();

    // this._getElement(`[data-id="puzzle-container"]`);
  }

  static createRoot() {
    const range = document.createRange();
    range.selectNode(document.body);
    const el = `<div data-id="pieces-container">PieceBoard</div>`;
    const fragment = range.createContextualFragment(el).children[0];
    // console.log(fragment);
    return fragment;
  }

  static createPiecesBoard() {
    const piecesBox = this._createElement('div');
    for (col = 0; col < 12; col++) {
      let rowDiv = this._createElement('div', {
        classes: ['flex'],
        attributes: [],
        text: null,
      });
      for (row = 0; row < 12; row++) {}
    }
  }
}
