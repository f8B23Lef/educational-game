import './landing.css';

import Swal from 'sweetalert2';

import Nav from '../../components/navigation/nav';
import Header from '../../components/header/header';
import Content from '../../components/content/content';

import renderBattleScreen from '../battle/battle';
import { loadImages } from '../../components/loader/loader';
// import { showModalDialog } from '../../components/modalDialog/modalDialog';

const drawLandingScreen = () => {
  Nav.draw();
  Header.draw();
  Content.draw();
};

export default () => {
  drawLandingScreen();

  document.querySelector('.button-start').addEventListener('click', () => {
    console.log('click');

    // swal({
    //   text: 'Enter your name:',
    //   content: 'input',
    // })
    //   .then((value) => {
    //     if (value) {
    //       loadImages(renderBattleScreen);
    //       console.log('loaded');
    //       // $('body').empty();
    //       // renderBattleScreen();
    //     }
    //   });
    Swal({
      title: 'Enter your name:',
      input: 'text',
      showCancelButton: true,
      // animation: false,
      // customClass: 'animated bounceIn',
    })
      .then((result) => {
        if (result.value) {
          loadImages(renderBattleScreen);
        }
      });
  });
};
