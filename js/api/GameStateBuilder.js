import { GameState } from './GameState.js';

export class GameStateBuilder {
  static difficulties() {
    const difficulties = {
      easy: { columns: 3, rows: 3, choicesQty: 1 },
      normal: { columns: 4, rows: 4, choicesQty: 2 },
      hard: { columns: 5, rows: 5, choicesQty: 2 },
      omegahard: { columns: 6, rows: 6, choicesQty: 3 },
    };
    return difficulties;
  }

  static puzzleDimension() {
    const puzzleDim = {
      width: 500,
      height: 500,
    };
    return puzzleDim;
  }

  static to2DArray(array, row, column) {
    const arr = [];
    for (let i = 0; i < column; i++) {
      const innerArr = [];
      for (let j = 0; j < row; j++) {
        const indexNo = i * column + j;
        innerArr.push(array[indexNo]);
      }
      arr.push(innerArr);
    }
    return arr;
  }

  static shuffleArray(array) {
    let currentIndex = array.length;
    let randomIndex;
    const shuffleArray = array.slice();

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [shuffleArray[currentIndex], shuffleArray[randomIndex]] = [
        shuffleArray[randomIndex],
        shuffleArray[currentIndex],
      ];
    }
    return shuffleArray;
  }

  static async getImageURL() {
    const url = 'https://random.imagecdn.app/500/500';
    const response = await fetch(url);
    const blob = await response.blob();
    const source = URL.createObjectURL(blob);
    return source;
  }

  static async croppedImage(
    imgURL,
    boardWidth,
    boardHeight,
    rows,
    columns,
    tileHeight,
    tileWidth,
    i
  ) {
    const croppedImg = new Image(boardWidth, boardHeight);
    croppedImg.src = imgURL;
    const dataURLs = [];
    const imgsInfo = [];
    await croppedImg.decode();
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = tileWidth;
    canvas.height = tileHeight;
    for (let y = 0; y < columns; y++) {
      for (let x = 0; x < rows; x++) {
        const tileImg = context.drawImage(
          croppedImg,
          x * tileWidth,
          y * tileHeight,
          tileHeight,
          tileWidth,
          0,
          0,
          tileHeight,
          tileWidth,
          i
        );
        // context.strokeText()
        context.strokeText(`${x},${y}`, tileHeight / 2, tileWidth / 2);
        // console.log(y, x);
        const dataURL = canvas.toDataURL();
        const imgInfo = {
          src: dataURL,
          id: `${dataURL.slice(0, 5)}${y}${x}${i}`,
        };
        imgsInfo.push(imgInfo);
        // console.log(dataURL.slice(1, 120));
      }
    }

    return imgsInfo;
  }

  static async build(difficulty = 'normal') {
    const difficulties = GameStateBuilder.difficulties();
    const boardWidth = GameStateBuilder.puzzleDimension().width;
    const boardHeight = GameStateBuilder.puzzleDimension().height;
    const rows = difficulties[difficulty].rows;
    const columns = difficulties[difficulty].columns;
    const totalTiles = rows * columns;
    const choicesQty = difficulties[difficulty].choicesQty;
    const tileHeight = boardHeight / rows;
    const tileWidth = boardWidth / columns;
    //GETTING ALL URL REQUIRED
    const choicesImgArr = [];
    const fullImgsURL = [];
    for (let i = 0; i < choicesQty; i++) {
      // console.log('run', i);
      const imgURL = await GameStateBuilder.getImageURL();
      fullImgsURL.push(imgURL);
      const tileURL = await GameStateBuilder.croppedImage(
        imgURL,
        boardWidth,
        boardHeight,
        rows,
        columns,
        tileHeight,
        tileWidth,
        i
      );
      choicesImgArr.push(...tileURL);
    }
    const puzzleIndex = Math.floor(Math.random() * choicesQty);
    const fullImg = fullImgsURL[puzzleIndex];
    // const unshuffledImgArr = choicesImgArr.slice(
    //   puzzleIndex * totalTiles,
    //   totalTiles * (puzzleIndex + 1)
    // );
    const unshuffledImgArr = choicesImgArr.slice(
      puzzleIndex * totalTiles,
      totalTiles * (puzzleIndex + 1)
    );
    // console.log('unshuffled', unshuffledImgArr);

    const answer = unshuffledImgArr.map((item) => item.id);
    // console.log(answer);

    const shuffledChoicesArr = GameStateBuilder.shuffleArray(choicesImgArr);

    return new GameState(
      rows,
      columns,
      tileHeight,
      tileWidth,
      choicesQty,
      fullImg,
      unshuffledImgArr,
      shuffledChoicesArr,
      answer
    );
  }
}
