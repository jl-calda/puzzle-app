export class GameState {
  constructor(
    rows,
    columns,
    pcRows,
    pcColumns,
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
    this.pcRows = pcRows;
    this.pcColumns = pcColumns;
    this.tileHeight = tileHeight;
    this.tileWidth = tileWidth;
    this.choicesQty = choicesQty;
    this.fullImg = fullImg;
    this.choicesImgArr = shuffledChoicesArr;
    this.unshuffledImgArr = unshuffledImgArr;
    this.answer = answer;
  }
}
