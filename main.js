import { GameStateBuilder } from './js/api/GameStateBuilder.js';
import PuzzleControl from './js/controller/PuzzleControl.js';

const gameState = await GameStateBuilder.build('normal');
// console.log(typeof gameState);
// console.log(gameState);

// function render() {
const root = document.getElementById('root');
root.classList.add(...['grid', 'grid-cols-4']);
console.log(gameState);
// for (let i = 0; i < gameState.choicesImgArr.length; i++) {
//   const img = document.createElement('img');
//   console.log(gameState.choicesImgArr[i]);
//   img.src = gameState.choicesImgArr[i];
//   root.append(img);
//   console.log(root);
//   console.log('append', i);
// // }
// console.log('rendering');
// for (let i = 0; i < gameState.unshuffledImgArr.length; i++) {
//   for (let j = 0; j < gameState.unshuffledImgArr[i].length; j++) {
//     const img = document.createElement('img');
//     //   console.log(gameState.unshuffledImgArr[i]);
//     img.src = gameState.unshuffledImgArr[i][j].src;
//     img.dataset.id = gameState.unshuffledImgArr[i][j].id;
//     root.append(img);
//   }
//   //   console.log(root);
//   //   console.log('append', i);
// }
// // }
// const root2 = document.getElementById('root2');
// root2.classList.add(...['grid', 'grid-cols-4']);
// // render();
// for (let i = 0; i < gameState.shuffledImgArr.length; i++) {
//   const div = document.createElement('div');
//   for (let j = 0; j < gameState.shuffledImgArr[i].length; j++) {
//     const img = document.createElement('img');
//     //   console.log(gameState.unshuffledImgArr[i]);
//     img.src = gameState.shuffledImgArr[i][j].src;
//     img.dataset.id = gameState.shuffledImgArr[i][j].id;
//     div.append(img);
//   }
//   root2.append(div);
//   //   console.log(root);
//   //   console.log('append', i);
// }

// const imgsId = Array.from(root.querySelectorAll('img')).map(
//   (img) => img.dataset.id
// );

// console.log(JSON.stringify(gameState.answer.flat()) === JSON.stringify(imgsId));

// console.log(gameState.answer.flat());
// console.log(imgsId);
// JSON.stringify(imgsId);

const app = new PuzzleControl('root3', gameState);
console.log('app', app);
