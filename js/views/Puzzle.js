import View from './View.js';
import PuzzleApi from '../api/PuzzleApi.js';
import GameBoard from './GameBoard.js';

export default class Puzzle extends View {
  constructor(rootId) {
    super();
    this.root = this._getElementById(rootId);
    this.gameBoard = this.makeGameBoard();
    this.piecesBoard = this.makePiecesBoard();
    this.makeSettingsBoard = this.makeSettingsBoard();
    this.root.append(this.gameBoard, this.piecesBoard, this.makeSettingsBoard);
  }

  makeGameBoard() {
    const gameBoard = new GameBoard(settings);
  }

  makePiecesBoard() {}

  makeSettingsBoard() {}
}
