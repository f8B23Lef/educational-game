import 'bootstrap';
import './landing.css';

import Navigation from '../../components/navigation/navigation';
import Content from '../../components/content/content';

import Battle from '../battle/battle';

class Landing {
  static render() {
    Navigation.render();
    Content.render();

    document.querySelector('.button-start').focus();

    document.querySelectorAll('.button-start').forEach((button) => {
      button.addEventListener('click', () => {
        console.log('click');
        const battle = new Battle();
        battle.start();
      });
    });
  }
}

export default Landing;
