export class GameState {
  constructor(
    rows,
    columns,
    tileHeight,
    tileWidth,
    choicesQty,
    fullImg,
    unshuffledImgArr,
    shuffledChoicesArr,
    answer
  ) {
    this.rows = rows;
    this.columns = columns;
    this.tileHeight = tileHeight;
    this.tileWidth = tileWidth;
    this.choicesQty = choicesQty;
    this.fullImg = fullImg;
    this.choicesImgArr = shuffledChoicesArr;
    this.unshuffledImgArr = unshuffledImgArr;
    this.answer = answer;
  }
}
