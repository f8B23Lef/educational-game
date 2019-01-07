import $ from 'jquery';
import './score.css';
import template from './score.template';
import Landing from '../landing/landing';

class Score {
  static render() {
    console.log('score 1');
    $('body').empty();
    console.log('score 2');
    // $('body').prepend(template);
    $('body').prepend(template());
    console.log('score 3');

    console.log('fghfgh', document.querySelector('.score'));

    document.querySelector('.button-score').focus();

    document.querySelector('.button-score').addEventListener('click', () => {
      console.log('click score');
      $('body').empty();
      Landing.render();
    });
  }
}

export default Score;
