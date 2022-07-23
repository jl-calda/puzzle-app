// import GameState from "./GameState";

export default class PuzzleApi {
  constructor() {
    this.gameSettings = {
      width: 500,
      rows: 4,
      columns: 4,
      numberPhoto: 2,
      puzzleURL: null,
      choicesURL: null,
      shuffled: null,
      answer: null,
    };
    this._init();
    this.difficulty = 'normal';
    this.settingObj = {
      easy: { columns: 3, rows: 3, numberPhoto: 1 },
      normal: { columns: 4, rows: 4, numberPhoto: 1 },
      hard: { columns: 6, rows: 6, numberPhoto: 3 },
      omegahard: { columns: 10, rows: 10, numberPhoto: 5 },
    };
  }

  static async fetchImageURL() {
    // const url = '../../capsule_616x353.jpg';
    const url = 'https://picsum.photos/v2/list';
    const response = await fetch(url);
    const data = await response.blob();
    const source = URL.createObjectURL(data);
    return source;
  }

  async _init() {
    const choicesURL = [];
    for (let i = 0; i < this.gameSettings.numberPhoto; i++) {
      // const url = await PuzzleApi.fetchImageURL();
      const url = 'https://random.imagecdn.app/500/500';

      const response = await fetch(url);
      const data = await response.blob();
      const source = URL.createObjectURL(data);
      choicesURL.push(source);
    }
    this.gameSettings.choicesURL = choicesURL;
    this.gameSettings.puzzleURL = choicesURL[0];
    // console.log(this.gameSettings);
  }

  updateGridSize(difficulty) {
    this.gameSettings.rows = this.settingObj.difficulty.rows;
    this.gameSettings.columns = this.settingObj.difficulty.columns;
    this.gameSettings.numberPhoto = this.settingObj.difficulty.numberPhoto;
  }
}
