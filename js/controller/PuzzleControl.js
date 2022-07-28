import { GameStateBuilder } from "../api/GameStateBuilder.js";
import { PuzzleView } from "../views/PuzzleView.js";
import GameBoard from "../views/_GameBoard.js";
import PiecesBoard from "../views/_PiecesBoard.js";
import SettingsBoard from "../views/_SettingsBoard.js";

export default class PuzzleControl {
  constructor(id, model) {
    this.root = document.getElementById(id);
    this.div = document.createElement("div");
    this.div.classList.add("flex");
    this.model = model;
    this.view = new PuzzleView();
    this.board = new GameBoard();
    this.pieces = new PiecesBoard();
    this.settings = new SettingsBoard();
    this.view.settings.changeSettings = this.bindChangeSettings;
    this.view.board.checkPuzzle(this.bindCheckPuzzle);
    this.onDisplayPuzzle();
    // this.displayPuzzle();

    // this.div.append(this.board.elements.root, this.settings.elements.root);
    this.root.append(this.view.elements.root);
    console.log(this.board.elements.root);
  }

  onDisplayPuzzle = () => {
    this.view.displayPuzzle(
      this.model.rows,
      this.model.columns,
      this.model.tileWidth,
      this.model.tileHeight,
      this.model.choicesImgArr,
      this.model.fullImg,
      this.model.pcRows,
      this.model.pcColumns
    );
  };

  bindChangeSettings = async (difficulty) => {
    this.model = await GameStateBuilder.build(difficulty);
    this.onDisplayPuzzle();
  };

  bindCheckPuzzle = async (answerArr) => {
    console.log("test");
    console.log(answerArr);
    if (JSON.stringify(answerArr) === JSON.stringify(this.model.answer)) {
      alert("you is panalo");
      this.model = await GameStateBuilder.build();
      this.onDisplayPuzzle();
    }
  };
}
