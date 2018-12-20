import $ from 'jquery';
import Canvas from '../../components/canvas/canvas';

export default () => {
  $('body').empty();
  Canvas.drawCanvas();
  Canvas.drawPlayer();
  Canvas.drawEnemy();
  // Canvas.drawText();
};
