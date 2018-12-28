import $ from 'jquery';
import './score.css';
import { template, scoreTemplate } from './score.tamplate';
import renderLandingScreen from '../landing/landing';

export default () => {
  console.log('score 1');
  $('body').empty();
  console.log('score 2');
  // $('body').prepend(template);
  $('body').prepend(scoreTemplate());
  console.log('score 3');

  // $('body').on('click', () => {
  //   $('body').empty();
  //   console.log('click score');
  //   // renderLandingScreen();
  // });
  document.querySelector('.button-score').addEventListener('click', () => {
    console.log('click score');
    $('body').empty();
    renderLandingScreen();
  });
};
