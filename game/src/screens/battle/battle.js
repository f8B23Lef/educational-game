import Swal from 'sweetalert2';
import $ from 'jquery';

import { loadImages } from '../../components/loader/loader';
import Canvas from '../../components/canvas/canvas';
import Player from '../../components/players/player';
import Enemy from '../../components/players/enemy';
import { showSpellDialog, showGameOverMessage, showNewRoundMessage, saveCallback as sendCallback } from '../../components/modalDialog/modalDialog';
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

const manageGame = async (isCorrect) => {
  if (isCorrect) {
    o.enemy.hp -= o.player.strength;
    await Canvas.drawEnemyHealth(o.enemy.hp);
    // animation + sound
  } else {
    o.player.hp -= o.enemy.strength;
    // animation + sound
    await Canvas.drawPlayerHealth(o.player.hp);
  }
  // console.log('checkGameOver = ', checkGameOver());
  // console.log('checkPlayerWin = ', checkPlayerWin());
  if (!checkGameOver()) {
    console.log('show');
    showSpellDialog();
  } else if (checkPlayerWin()) {
    console.log('draw');
    await showNewRoundMessage();
    console.log('draw2');
    await drawBattleScreen();
    console.log('draw3');
    await Canvas.drawRound(o.player.round);
  } else {
    console.log('game over');
    showGameOverMessage();// score data param
  }

  console.log('pHP = ', o.player.hp, 'eHP: ', o.enemy.hp);
  // console.log('checkGameOver = ', checkGameOver());
  // return checkGameOver();
};


const drawBattleScreen = () => {
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
