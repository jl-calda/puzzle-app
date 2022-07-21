export default class PuzzleApi {
  static async fetchImageURL(url) {
    // const url = "https://picsum.photos/v2/list"; //returns 30 photos
    const response = await fetch(url);
    const data = await response.blob();
    const source = URL.createObjectURL(data);
    return source;
  }
}
