export default class GameState {
  static async fetchImageURL() {
    const url = "https://random.imagecdn.app/500/500";
    const response = await fetch(url);
    const data = await response.blob();
    const source = URL.createObjectURL(data);
    return source;
  }
}

// const settings =
