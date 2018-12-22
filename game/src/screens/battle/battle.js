import $ from 'jquery';
import Canvas from '../../components/canvas/canvas';
import { showModalDialog } from '../../components/modalDialog/modalDialog';

export default () => {
  $('body').empty();
  Canvas.drawCanvas();
  Canvas.drawPlayer();
  Canvas.drawEnemy();
  Canvas.drawRound();
  // Canvas.drawText();
  showModalDialog();
};
