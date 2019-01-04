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

  console.log('fghfgh', document.querySelector('.score'));

  document.querySelector('.button-score').focus();

  // document.querySelector('div').addEventListener('keydown', (key) => {
  //   console.log('click score -> ', key);

  //   if (key.code === 'Enter') {
  //     console.log('enter');
  //   }
  // });

  document.querySelector('.button-score').addEventListener('click', () => {
    console.log('click score');
    $('body').empty();
    renderLandingScreen();
  });
};
