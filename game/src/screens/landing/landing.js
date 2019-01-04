import 'bootstrap';
import './landing.css';

// import Swal from 'sweetalert2';

import Nav from '../../components/navigation/nav';
import Header from '../../components/header/header';
import Content from '../../components/content/content';

// import showLoginDialog from '../../components/gameManager/gameManager';

import showLoginDialog from '../battle/battle';
// import { loadImages } from '../../components/loader/loader';
// import { showModalDialog } from '../../components/modalDialog/modalDialog';

const drawLandingScreen = () => {
  Nav.draw();
  Header.draw();
  Content.draw();
};

export default () => {
  drawLandingScreen();

  document.querySelector('.button-start').focus();

  document.querySelectorAll('.button-start').forEach((button) => {
    button.addEventListener('click', () => {
      console.log('click');
      showLoginDialog();
    });
  });
};
