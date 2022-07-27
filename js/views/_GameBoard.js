import View from './_View.js';

export default class GameBoard extends View {
  constructor() {
    super();
    this.elements = {};
    this.elements.root = GameBoard.createRoot();
  }

  static createRoot() {
    const range = document.createRange();
    range.selectNode(document.body);
    const el = `<div data-id="puzzle-container">Gameboard</div>`;
    const fragment = range.createContextualFragment(el).children[0];
    // console.log(fragment);
    return fragment;
  }

  bindRenderPuzzle() {}

  renderPuzzle(rows, columns, tileWidth, tileHeight) {
    //remove old elements
    // this.elements.root = GameBoard.createRoot();
    while (this.elements.root.firstChild) {
      this.elements.root.removeChild(this.elements.root.lastChild);
    }

    // while (myNode.firstChild) {
    //   myNode.removeChild(myNode.lastChild);
    // }
    const puzzleBoard = this._createElement('div', {
      classes: ['flex', 'flex-col'],
      attributes: null,
      text: null,
    });
    for (let col = 0; col < columns; col++) {
      const container = this._createElement('div', {
        classes: ['flex'],
        attributes: null,
        text: null,
      });
      for (let row = 0; row < rows; row++) {
        const imgContainer = this._createElement('div', {
          classes: [
            `h-[${Math.floor(tileHeight)}px]`,
            `w-[${Math.floor(tileWidth)}px]`,
            'border-box',
            'border-2',
            'border-shy-200',
            'inline-block',
          ],
          attributes: null,
          text: null,
        });
        imgContainer.addEventListener('dragenter', (e) => e.preventDefault());
        imgContainer.addEventListener('dragover', (e) => e.preventDefault());
        imgContainer.addEventListener('drop', (e) => {
          const id = e.dataTransfer.getData('text/plain');
          const img = document.getElementById(id);
          e.target.append(img);
          const answerArr = Array.from(
            this._getAllElements('img', null, this.elements.root)
          ).map((img) => img.id);
          setTimeout(this.checkPuzzle(answerArr), 500);
          // seTtimeout(this.checkPuzzle(answerArr), 1000);
        });
        container.append(imgContainer);
      }
      puzzleBoard.append(container);
    }

    this.elements.root.append(puzzleBoard);
  }
}
