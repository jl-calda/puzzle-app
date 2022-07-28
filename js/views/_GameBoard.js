import View from "./_View.js";

export default class GameBoard extends View {
  constructor() {
    super();
    this.elements = {};
    this.elements.root = GameBoard.createRoot();
  }

  static createRoot() {
    const range = document.createRange();
    range.selectNode(document.body);
    const el = `<div data-id="puzzle-container" class="p-6 shadow-2xl rounded-2xl bg-white"></div>`;
    const fragment = range.createContextualFragment(el).children[0];
    return fragment;
  }

  renderPuzzle(rows, columns, tileWidth, tileHeight) {
    while (this.elements.root.firstChild) {
      this.elements.root.removeChild(this.elements.root.lastChild);
    }
    const puzzleBoard = this._createElement("div", {
      classes: ["flex", "flex-col"],
      attributes: null,
      text: null,
    });
    for (let col = 0; col < columns; col++) {
      const container = this._createElement("div", {
        classes: ["flex"],
        attributes: null,
        text: null,
      });
      for (let row = 0; row < rows; row++) {
        const imgContainer = this._createElement("div", {
          classes: [
            `h-[${Math.floor(tileHeight)}px]`,
            `w-[${Math.floor(tileWidth)}px]`,
            "drop-shadow-lg",
            "bg-gray-50",
            "border-zinc-100",
            "border-2",
          ],
          attributes: null,
          text: null,
        });
        imgContainer.addEventListener("dragenter", (e) => e.preventDefault());
        imgContainer.addEventListener("dragover", (e) => e.preventDefault());
        imgContainer.addEventListener("drop", (e) => {
          const id = e.dataTransfer.getData("text/plain");
          const img = document.getElementById(id);
          e.target.append(img);
          const answerArr = Array.from(
            this._getAllElements("img", null, this.elements.root)
          ).map((img) => img.id);
          this.bindCheckPuzzle(answerArr);
        });
        container.append(imgContainer);
      }
      puzzleBoard.append(container);
    }

    this.elements.root.append(puzzleBoard);
  }

  checkPuzzle(callback) {
    this.bindCheckPuzzle = callback;
  }
}
