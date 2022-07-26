export class GameState {
  constructor(
    rows,
    columns,
    choicesQty,
    fullImg,
    unshuffledImgArr,
    shuffledImgArr,
    shuffledChoicesArr,
    answer
  ) {
    this.rows = rows;
    this.columns = columns;
    this.choicesQty = choicesQty;
    this.fullImg = fullImg;
    this.choicesImgArr = shuffledChoicesArr;
    this.shuffledImgArr = shuffledImgArr;
    this.unshuffledImgArr = unshuffledImgArr;
    this.answer = answer;
  }
}
