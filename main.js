import { GameStateBuilder } from "./js/api/GameStateBuilder.js";

const gameState = await GameStateBuilder.build("omegahard");
// console.log(typeof gameState);
// console.log(gameState);

// function render() {
const root = document.getElementById("root");
root.classList.add(...["grid", "grid-cols-6"]);
console.log(gameState);
// for (let i = 0; i < gameState.choicesImgArr.length; i++) {
//   const img = document.createElement('img');
//   console.log(gameState.choicesImgArr[i]);
//   img.src = gameState.choicesImgArr[i];
//   root.append(img);
//   console.log(root);
//   console.log('append', i);
// }
console.log("rendering");
for (let i = 0; i < gameState.unshuffledImgArr.length; i++) {
  for (let j = 0; j < gameState.unshuffledImgArr[i].length; j++) {
    const img = document.createElement("img");
    //   console.log(gameState.unshuffledImgArr[i]);
    img.src = gameState.unshuffledImgArr[i][j].src;
    img.dataset.id = gameState.shuffledImgArr[i][j].id;
    root.append(img);
  }
  //   console.log(root);
  //   console.log('append', i);
}
// }

// render();
for (let i = 0; i < gameState.shuffledImgArr.length; i++) {
  for (let j = 0; j < gameState.shuffledImgArr[i].length; j++) {
    const img = document.createElement("img");
    //   console.log(gameState.unshuffledImgArr[i]);
    img.src = gameState.shuffledImgArr[i][j].src;
    img.dataset.id = gameState.shuffledImgArr[i][j].id;
    root.append(img);
  }

  //   console.log(root);
  //   console.log('append', i);
}
