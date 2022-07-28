import View from "./_View.js";
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
    this.elements.settings.forEach((radio) => {
      radio.addEventListener("change", (e) => {
        this.changeSettings(e.target.value);
      });
    });
  }
  // static
  static createRoot() {
    const range = document.createRange();
    range.selectNode(document.body);
    const el = `<section data-id="settings-container" class="p-2 shadow-2xl rounded-2xl bg-white space-y-4">
                    <figure data-id="img-container" class="flex flex-col justify-center items-center pt-4"></figure>
                    <div class="p-4 bg-zinc-50">
                    <h3 class="uppercase underline font-bold text-gray-700 mb-4">Difficulty</h3>
                    <form class="flex space-x-6">
                        <div>
                            <label for="easy" class="hover:text-rose-700 p-2">Easy</label><input type="radio" id="easy" value="easy" name="difficulty">
                         </div>
                        <div>
                            <label for="normal" class="hover:text-rose-700 p-2">Normal</label><input type="radio" id="normal" value="normal" name="difficulty" checked>
                        </div>
                        <div>
                            <label for="hard" class="hover:text-rose-700 p-2">Hard</label><input type="radio" id="hard" value="hard" name="difficulty">
                        </div>
                        <div>
                            <label for="omegahard" class="hover:text-rose-700 p-2">Omega Hard</label>
                            <input type="radio" id="omegahard" value="omegahard" name="difficulty">
                        </div>
                    </form>
                    </div>
                </section>`;
    const fragment = range.createContextualFragment(el).children[0];
    // console.log(fragment);
    return fragment;
  }

  renderSettings(fullImgURL) {
    while (this.elements.img.firstChild) {
      this.elements.img.removeChild(this.elements.img.lastChild);
    }
    // this.elements.root = SettingsBoard.createRoot();
    const container = this._createElement("div");
    const img = this._createElement("img", {
      classes: ["h-[400px]", "w-[400px]", "rounded-2xl", "shadow-xl"],
      attributes: [{ attr: "src", value: fullImgURL }],
      text: null,
    });
    container.append(img);
    this.elements.img.append(container);
  }

  changeSettings(difficulty) {
    console.log("change to", difficulty);
  }
}
