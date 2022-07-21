import View from "./_View.js";
import GameState from "../api/GameState.js";

export default class SettingsBoard extends View {
  constructor() {
    super();
    this.elements = {};
    this.elements.root = SettingsBoard.createRoot();
    this.elements.radios = this._getAllElements(
      `input[name="difficulty"]`,
      null,
      this.elements.root
    );
    this.elements.radios.forEach((radio) =>
      radio.addEventListener("change", (e) => {
        e.preventDefault();
        const difficulty = e.target.value;
        GameState.updateDifficulty(difficulty);
      })
    );
  }

  static createRoot() {
    const range = document.createRange();
    range.selectNode(document.body);
    const el = `<section>
                    <h3>Difficulty</h3>
                    <form>
                        <div>
                            <label for="easy">Easy</label><input type="radio" id="easy" value="easy" name="difficulty">
                         </div>
                        <div>
                            <label for="normal">Normal</label><input type="radio" id="normal" value="normal" name="difficulty" checked>
                        </div>
                        <div>
                            <label for="hard">Hard</label><input type="radio" id="hard" value="hard" name="difficulty">
                        </div>
                        <div>
                            <label for="omegahard">Omega Hard</label>
                            <input type="radio" id="omegahard" value="omegahard" name="difficulty">
                        </div>
                    </form>
                </section>`;
    const fragment = range.createContextualFragment(el).children[0];
    // console.log(fragment);
    return fragment;
  }
}
