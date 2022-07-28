import View from "./_View.js";

export default class PiecesBoard extends View {
  constructor() {
    super();
    this.elements = {};
    this.elements.root = PiecesBoard.createRoot();
  }

  static createRoot() {
    const range = document.createRange();
    range.selectNode(document.body);
    const el = `<div data-id="pieces-container" class="p-8 shadow-2xl rounded-2xl bg-white space-y-4 mx-auto"></div>`;
    const fragment = range.createContextualFragment(el).children[0];
    // console.log(fragment);
    return fragment;
  }

  renderPieces(columns, rows, tileHeight, tileWidth, imgsArr) {
    while (this.elements.root.firstChild) {
      this.elements.root.removeChild(this.elements.root.lastChild);
    }
    // this.elements.root = PiecesBoard.createRoot();
    const piecesBoard = this._createElement("div", {
      classes: ["flex", "flex-col"],
      attributes: null,
      text: null,
    });
    for (let i = 0; i < columns; i++) {
      const container = this._createElement("div", {
        classes: ["flex"],
        attributes: null,
        text: null,
      });
      for (let j = 0; j < rows; j++) {
        const imgContainer = this._createElement("div", {
          classes: [
            `h-[${tileHeight}px]`,
            `w-[${tileWidth}px]`,
            "drop-shadow-lg",
            "bg-gray-50",
            "border-zinc-100",
            "border-2",
          ],
          attributes: null,
          text: null,
        });

        const indexNo = i * rows + j;
        // console.log(indexNo);
        // console.log(imgsArr.length);
        if (imgsArr.length > indexNo) {
          const img = this._createElement("img", {
            classes: ["rounded-md"],
            attributes: [
              { attr: "src", value: imgsArr[indexNo].src },
              { attr: "id", value: imgsArr[indexNo].id },
              { attr: "alt", value: "puzzle-piece" },
              { attr: "draggable", value: true },
            ],
            text: null,
          });
          img.addEventListener("dragstart", (e) =>
            e.dataTransfer.setData("text/plain", e.target.id)
          );
          imgContainer.append(img);
        }
        // if()
        imgContainer.addEventListener("dragenter", (e) => e.preventDefault());
        imgContainer.addEventListener("dragover", (e) => e.preventDefault());
        imgContainer.addEventListener("drop", (e) => {
          console.log(e);

          if (!e.target.querySelector("img")) {
            const id = e.dataTransfer.getData("text/plain");
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
