import View from "./_View.js";
import PuzzleApi from "../api/PuzzleApi.js";
import GameBoard from "./_GameBoard.js";
import SettingsBoard from "./_SettingsBoard.js";
import GameState from "../api/GameState.js";
import PiecesBoard from "./_PiecesBoard.js";

export default class PuzzleView extends View {
  constructor(settings) {
    super();
    this.elements = {};
    this.elements.root = PuzzleView.createRoot();
    this.gameBoard = new GameBoard(settings);
    this.piecesBoard = PuzzleView.bindMakePiecesBoard();
    this.settingsBoard = PuzzleView.bindMakeSettingsBoard();
    this.elements.root.append(
      this.gameBoard.elements.root,
      this.piecesBoard,
      this.settingsBoard
    );
  }

  static createRoot() {
    const range = document.createRange();
    range.selectNode(document.body);
    const el = `<main data-id="puzzle-game">Puzzle</main>`;
    const fragment = range.createContextualFragment(el).children[0];
    // console.log(fragment);
    return fragment;
  }

  // init() {
  //   const settings = GameState.init();
  //   this.settings = settings;
  //   return settings;
  // }

  static bindMakeGameBoard(settings) {
    const gameBoard = new GameBoard(settings);
    return gameBoard.elements.root;
  }

  static bindMakePiecesBoard(settings) {
    const gameBoard = new PiecesBoard();
    return gameBoard.elements.root;
  }

  static bindMakeSettingsBoard(settings) {
    const settingsBoard = new SettingsBoard();
    return settingsBoard.elements.root;
  }
}
