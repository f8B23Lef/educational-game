// import renderLandingScreen from './screens/landing/landing';
import Landing from './screens/landing/landing';

// const screens = {
//   landing: renderLandingScreen,
//   battle: renderB,
//   score: renderS
// };

// function f(name) {
//   screens[name](f);
// }

window.onload = () => {
  Landing.render();
  // renderLandingScreen(f);
};
