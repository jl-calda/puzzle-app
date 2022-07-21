import View from "./_View.js";

export default class PiecesBoard extends View {
  constructor() {
    super();
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
}
