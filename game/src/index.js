// import 'bootstrap';
// import $ from 'jquery';

import './index.css';
import renderLandingScreen from './screens/landing/landing';

const startApp = () => {
  renderLandingScreen();

  document.querySelector('.button-start').addEventListener('click', () => {
    console.log('click');
  });
};

startApp();
