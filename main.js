import PuzzleControl from './js/controller/PuzzleControl.js';
import PuzzleApi from './js/api/PuzzleApi.js';
import PuzzleView from './js/views/PuzzleView.js';

async function renderApp() {
  let model = new PuzzleApi();
  await model._init();
  console.log(model);
  const app = new PuzzleControl('root', model);
  return app;
}

renderApp();
