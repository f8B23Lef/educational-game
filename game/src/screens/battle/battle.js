import Swal from 'sweetalert2';
import $ from 'jquery';

import iceArrow from './sounds/iceArrow.mp3';
import fireball from './sounds/fireball.mp3';
import painPlayer from './sounds/painPlayer.mp3';
import painEnemy from './sounds/painEnemy.mp3';

import { loadImages } from '../../components/loader/loader';
import Canvas from '../../components/canvas/canvas';
import Player from '../../components/players/player';
import Enemy from '../../components/players/enemy';
import { showSpellDialog, showGameOverMessage, showNewRoundMessage, saveCallback as sendCallback } from '../../components/modalDialog/modalDialog';
import renderScoreScreen from '../score/score';
// import showSpellDialog from '../../components/gameManager/gameManager';

// let playerName = null;
// const enemyName = 'EnemyName';

const o = {};

const checkGameOver = () => {
  if (o.player.hp <= 0 || o.enemy.hp <= 0) {
    return true;
  }
  return false;
};

const checkPlayerWin = () => {
  if (o.enemy.hp <= 0) {
    o.player.score += 1;
    o.player.round += 1;
    // save name + score in LocalStorage or DB
    return true;
  }
  return false;
};

const appendScoreToLocalStorage = (key = 'ice-wastelands') => {
  console.log('appendScoreToLocalStorage()');
  let score = localStorage.getItem(key);
  score = score ? JSON.parse(score) : {};

  if (!score[o.player.name] || score[o.player.name] < o.player.score) {
    score[o.player.name] = o.player.score;
  }

  localStorage.setItem(key, JSON.stringify(score));

  console.log(JSON.parse(localStorage.getItem(key)));
};

const tmp = async () => {
  if (await !checkGameOver()) {
    console.log('show');
    await showSpellDialog();
  } else if (await checkPlayerWin()) {
    console.log('draw');
    const audio = new Audio(painEnemy);
    await audio.play();
    await showNewRoundMessage();
    console.log('draw2');
    await drawBattleScreen();
    console.log('draw3');
    await Canvas.drawRound(o.player.round);
  } else {
    console.log('game over');
    const audio = new Audio(painPlayer);
    await audio.play();
    await appendScoreToLocalStorage();
    // await Canvas.drawRip();
    await renderScoreScreen();
    // showGameOverMessage();// score data param
  }

  console.log('pHP = ', o.player.hp, 'eHP: ', o.enemy.hp);
  // console.log('checkGameOver = ', checkGameOver());
  // return checkGameOver();
};

const manageGame = async (isCorrect) => {
  if (isCorrect) {
    o.enemy.hp -= o.player.strength;
    // animation + sound
    await Canvas.drawFireball();
    const audio = new Audio(fireball);
    await audio.play();
    await Canvas.drawEnemyHealth(o.enemy.hp);
  } else {
    o.player.hp -= o.enemy.strength;
    // animation + sound
    await Canvas.drawIceArrow();
    const audio = new Audio(iceArrow);
    await audio.play();
    // setTimeout(Canvas.drawPlayerHealth(o.player.hp), 5000);
    await Canvas.drawPlayerHealth(o.player.hp);
  }

  setTimeout(tmp, 1500);
  // // console.log('checkGameOver = ', checkGameOver());
  // // console.log('checkPlayerWin = ', checkPlayerWin());
  // if (await !checkGameOver()) {
  //   console.log('show');
  //   await showSpellDialog();
  // } else if (await checkPlayerWin()) {
  //   console.log('draw');
  //   const audio = new Audio(painEnemy);
  //   await audio.play();
  //   await showNewRoundMessage();
  //   console.log('draw2');
  //   await drawBattleScreen();
  //   console.log('draw3');
  //   await Canvas.drawRound(o.player.round);
  // } else {
  //   console.log('game over');
  //   const audio = new Audio(painPlayer);
  //   await audio.play();
  //   await appendScoreToLocalStorage();
  //   // await Canvas.drawRip();
  //   await renderScoreScreen();
  //   // showGameOverMessage();// score data param
  // }

  // console.log('pHP = ', o.player.hp, 'eHP: ', o.enemy.hp);
  // // console.log('checkGameOver = ', checkGameOver());
  // // return checkGameOver();
};


const drawBattleScreen = () => {
  console.log('drawBattleScreen()');
  o.enemy = new Enemy();

  $('body').empty();
  Canvas.drawCanvas();

  // const player = new Player(playerName);
  Canvas.drawPlayer();
  Canvas.drawPlayerName(o.player.name);
  Canvas.drawPlayerHealth(o.player.hp);

  // const enemy = new Player(enemyName);
  Canvas.drawEnemy();
  Canvas.drawEnemyName(o.enemy.name);

  Canvas.drawRound(o.player.round);
  Canvas.drawEnemyHealth(o.enemy.hp);

  showSpellDialog();
};

export default () => {
  Swal({
    title: 'Enter your name:',
    input: 'text',
    showCancelButton: true,
    inputValidator: value => !value && 'You need to choose name!',
    // animation: false,
    // customClass: 'animated bounceIn',
  })
    .then((result) => {
      if (result.value) {
        console.log('name: ', result.value);
        // playerName = result.value;
        o.player = new Player(result.value);
        // o.enemy = new Enemy();
        loadImages(drawBattleScreen);
        sendCallback(manageGame);
        // const player = new Player(result.value);
        // drawPlayerName(player.name);
        // const enemy = new Player('Enemy');
        // drawEnemyName(enemy.name);
      }
    });
};
