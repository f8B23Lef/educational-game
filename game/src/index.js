// import 'bootstrap';
import $ from 'jquery';

import './index.css';
import renderLandingScreen from './screens/landing/landing';
import renderBattleScreen from './screens/battle/battle';

const startApp = () => {
  renderLandingScreen();

  document.querySelector('.button-start').addEventListener('click', () => {
    console.log('click');
    $('body').empty();
    renderBattleScreen();
  });
};

startApp();
