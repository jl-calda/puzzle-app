import PuzzleApi from "../api/PuzzleApi.js";
import PuzzleView from "../views/PuzzleView.js";

export default class PuzzleControl {
  constructor(id) {
    this.root = document.getElementById(id);
    this.model = new PuzzleApi();
    this.views = new PuzzleView(this.model.gameSettings);
    this.root.append(this.views.elements.root);
  }

  async getModel() {
    const model = await new PuzzleApi();
  }
  init() {}
}
