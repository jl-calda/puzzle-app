import Puzzle from './js/views/Puzzle.js';

const app = new Puzzle('root');
// import { PuzzleApi } from "./js/api/PuzzleApi.js";

// const puzzle = await PuzzleApi.fetchImageURL(
//   "https://picsum.photos/seed/picsum/200/300"
// );
// console.log("index", puzzle);
// const img = document.getElementById("img");

// // const source = URL.createObjectURL(puzzle);
// img.src = puzzle;

// let cols = 4;
// let rows = 4;

// function cutImageUp() {
//   var imagePieces = [];
//   for (var x = 0; x < cols; ++x) {
//     for (var y = 0; y < rows; ++y) {
//       var canvas = document.createElement("canvas");
//       canvas.width = widthOfOnePiece;
//       canvas.height = heightOfOnePiece;
//       var context = canvas.getContext("2d");
//       context.drawImage(
//         image,
//         x * widthOfOnePiece,
//         y * heightOfOnePiece,
//         widthOfOnePiece,
//         heightOfOnePiece,
//         0,
//         0,
//         canvas.width,
//         canvas.height
//       );
//       imagePieces.push(canvas.toDataURL());
//     }
//   }

//   // imagePieces now contains data urls of all the pieces of the image

//   // load one piece onto the page
//   var anImageElement = document.getElementById("myImageElementInTheDom");
//   anImageElement.src = imagePieces[0];
// }
