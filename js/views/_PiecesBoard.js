import View from './_View.js';

export default class PiecesBoard extends View {
  constructor() {
    super();
    this.columns = 6;
    this.rows = 18;
    this.tileHeight = 80;
    this.tileWidth = 80;
    this.elements = {};
    this.elements.root = PiecesBoard.createRoot();
  }

  static createRoot() {
    const range = document.createRange();
    range.selectNode(document.body);
    const el = `<div data-id="pieces-container">PieceBoard</div>`;
    const fragment = range.createContextualFragment(el).children[0];
    // console.log(fragment);
    return fragment;
  }

  renderPieces(imgsArr) {
    while (this.elements.root.firstChild) {
      this.elements.root.removeChild(this.elements.root.lastChild);
    }
    // this.elements.root = PiecesBoard.createRoot();
    const piecesBoard = this._createElement('div', {
      classes: ['flex', 'flex-col'],
      attributes: null,
      text: null,
    });
    for (let i = 0; i < this.columns; i++) {
      const container = this._createElement('div', {
        classes: ['flex'],
        attributes: null,
        text: null,
      });
      for (let j = 0; j < this.rows; j++) {
        const imgContainer = this._createElement('div', {
          classes: [
            `h-[${this.tileHeight}px]`,
            `w-[${this.tileWidth}px]`,
            'border-box',
            'border-2',
            'border-amber-700',
            'inline-block',
            'bg-gray-200',
          ],
          attributes: null,
          text: null,
        });

        const indexNo = i * this.rows + j;
        // console.log(indexNo);
        // console.log(imgsArr.length);
        if (imgsArr.length > indexNo) {
          const img = this._createElement('img', {
            classes: null,
            attributes: [
              { attr: 'src', value: imgsArr[indexNo].src },
              { attr: 'id', value: imgsArr[indexNo].id },
              { attr: 'alt', value: 'puzzle-piece' },
              { attr: 'draggable', value: true },
            ],
            text: null,
          });
          img.addEventListener('dragstart', (e) =>
            e.dataTransfer.setData('text/plain', e.target.id)
          );
          imgContainer.append(img);
        }
        // if()
        imgContainer.addEventListener('dragenter', (e) => e.preventDefault());
        imgContainer.addEventListener('dragover', (e) => e.preventDefault());
        imgContainer.addEventListener('drop', (e) => {
          console.log(e);

          if (!e.target.querySelector('img')) {
            const id = e.dataTransfer.getData('text/plain');
            const img = document.getElementById(id);
            e.target.append(img);
          }
        });
        container.append(imgContainer);
      }
      piecesBoard.append(container);
    }
    this.elements.root.append(piecesBoard);
  }
}
