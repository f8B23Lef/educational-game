import 'bootstrap';
import './landing.css';

import Navigation from '../../components/navigation/navigation';
import Content from '../../components/content/content';

import renderBattleScreen from '../battle/battle';

export default () => {
  Navigation.render();
  Content.render();

  document.querySelector('.button-start').focus();

  document.querySelectorAll('.button-start').forEach((button) => {
    button.addEventListener('click', () => {
      console.log('click');
      renderBattleScreen();
    });
  });
};
