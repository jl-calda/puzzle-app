import PuzzleApi from '../api/PuzzleApi.js';
import PuzzleView from '../views/PuzzleView.js';

export default class PuzzleControl {
  constructor(id, model) {
    this.root = document.getElementById(id);
    this.model = model;
    this.views = new PuzzleView(model.gameSettings);
    this.root.append(this.views.elements.root);
  }
}
