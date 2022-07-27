import View from './_View.js';
export default class SettingsBoard extends View {
  constructor() {
    super();
    this.elements = {};
    this.elements.root = SettingsBoard.createRoot();
    // this.elements.settings = this._getElement(
    //   `[data-id="settings-container"]`,
    //   { classes: ['flex'], attributes: null, text: null },
    //   this.elements.root
    // );
    this.elements.img = this._getElement(
      `[data-id="img-container"]`,
      null,
      this.elements.root
    );
    //radio buttons
    this.elements.settings = this._getAllElements(
      `input[type="radio"]`,
      null,
      this.elements.root
    );
    console.log('debug', this.elements.settings);
    this.elements.settings.forEach((radio) => {
      radio.addEventListener('change', (e) => {
        this.changeSettings(e.target.value);
      });
    });
  }
  // static
  static createRoot() {
    const range = document.createRange();
    range.selectNode(document.body);
    const el = `<section data-id="settings-container">
                    <figure data-id="img-container"></figure>
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

  renderSettings(url) {
    while (this.elements.img.firstChild) {
      this.elements.img.removeChild(this.elements.img.lastChild);
    }
    // this.elements.root = SettingsBoard.createRoot();
    const container = this._createElement('div');
    const img = this._createElement('img', {
      classes: ['h-{200px}', 'w-{200px}'],
      attributes: [{ attr: 'src', value: url }],
      text: null,
    });
    container.append(img);
    this.elements.img.append(container);
  }

  changeSettings(difficulty) {
    console.log('change to', difficulty);
  }
}
