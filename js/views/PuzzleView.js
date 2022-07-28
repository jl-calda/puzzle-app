import GameBoard from "../views/_GameBoard.js";
import PiecesBoard from "../views/_PiecesBoard.js";
import SettingsBoard from "../views/_SettingsBoard.js";
import View from "./_View.js";
export class PuzzleView extends View {
  constructor() {
    super();
    this.elements = {};
    this.elements.root = PuzzleView.createRoot();
    this.board = new GameBoard();
    this.settings = new SettingsBoard();
    this.pieces = new PiecesBoard();
    this.elements.root = PuzzleView.createRoot();
    this.elements.gameboard = this._getElement(
      `[data-id="gameboard-container"]`,
      null,
      this.elements.root
    );

    this.elements.settings = this._getElement(
      `[data-id="settings-containter"]`,
      null,
      this.elements.root
    );
    this.elements.pieces = this._getElement(
      `[data-id="pieces-containter"]`,
      null,
      this.elements.root
    );

    this.elements.settings.append(this.settings.elements.root);
    this.elements.gameboard.append(this.board.elements.root);
    this.elements.pieces.append(this.pieces.elements.root);
  }

  static createRoot() {
    const range = document.createRange();
    range.selectNode(document.body);
    const el = `<div data-id="puzzle-container" class="flex flex-col p-4 bg-zinc-100 space-y-4">
                    <header data-id="puzzle-header" class="mx-auto">
                        <h1 data-id="puzzle-title" class="text-3xl font-bold">Puzzelul...</h1>
                    </header>    
                    <div class="flex p-2 space-x-4 mx-auto">
                    <div data-id="gameboard">
                            <div data-id="gameboard-container"></div>
                            <div data-id="gameboard-timer"></div>    
                    </div>
                    <div data-id="settings">
                            <div data-id="settings-containter"></div>
                    </div>
                    </div>
                    <div data-id="pieces" class="mx-auto">
                            <div data-id="pieces-containter"></div>
                    </div>
                </div>`;
    const fragment = range.createContextualFragment(el).children[0];
    // console.log(fragment);
    return fragment;
  }

  displayPuzzle(
    rows,
    columns,
    tileWidth,
    tileHeight,
    imgsArr,
    fullImgURL,
    pcColumns,
    pcRows
  ) {
    this.board.renderPuzzle(rows, columns, tileWidth, tileHeight);
    this.pieces.renderPieces(pcColumns, pcRows, tileHeight, tileWidth, imgsArr);
    this.settings.renderSettings(fullImgURL);
  }
}
