import { GameStateBuilder } from '../api/GameStateBuilder.js';
import GameBoard from '../views/_GameBoard.js';
import PiecesBoard from '../views/_PiecesBoard.js';
import SettingsBoard from '../views/_SettingsBoard.js';

export default class PuzzleControl {
  constructor(id, model) {
    this.root = document.getElementById(id);
    this.div = document.createElement('div');
    this.div.classList.add('flex');
    this.model = model;
    this.board = new GameBoard();
    this.pieces = new PiecesBoard();
    this.settings = new SettingsBoard();
    this.settings.changeSettings = this.bindChangeSettings;
    this.board.checkPuzzle = this.bindCheckAnswer;

    this.displayPuzzle();

    this.div.append(this.board.elements.root, this.settings.elements.root);
    this.root.append(this.div, this.pieces.elements.root);
    console.log(this.board.elements.root);
  }

  displayPuzzle = () => {
    this.renderPuzzle(
      this.model.rows,
      this.model.columns,
      this.model.tileWidth,
      this.model.tileHeight
    );
    this.renderPieces(this.model.choicesImgArr);
    this.renderSettings(this.model.fullImg);
  };

  bindChangeSettings = async (difficulty) => {
    this.model = await GameStateBuilder.build(difficulty);
    this.displayPuzzle();
  };

  bindCheckAnswer = async (answerArr) => {
    console.log('test');
    console.log(answerArr);
    if (JSON.stringify(answerArr) === JSON.stringify(this.model.answer)) {
      alert('you is panalo');
      this.model = await GameStateBuilder.build();
      this.displayPuzzle();
    }
  };

  renderPuzzle = (rows, columns, tileWidth, tileHeight) => {
    this.board.renderPuzzle(rows, columns, tileWidth, tileHeight);
  };

  renderPieces = (imgsArr) => {
    this.pieces.renderPieces(imgsArr);
  };

  renderSettings = (url) => {
    this.settings.renderSettings(url);
  };
}
