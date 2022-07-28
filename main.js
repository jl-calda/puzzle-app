import { GameStateBuilder } from "./js/api/GameStateBuilder.js";
import PuzzleControl from "./js/controller/PuzzleControl.js";

const gameState = await GameStateBuilder.build("normal");

const app = new PuzzleControl("root3", gameState);
console.log("app", app);
