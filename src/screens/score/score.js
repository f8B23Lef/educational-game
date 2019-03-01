import $ from 'jquery';
import './score.css';
import template from './score.template';
import Landing from '../landing/landing';

class Score {
  static render() {
    $('body').empty();
    $('body').prepend(template());

    document.querySelector('.button-score').focus();

    document.querySelector('.button-score').addEventListener('click', () => {
      $('body').empty();
      Landing.render();
    });
  }
}

export default Score;
