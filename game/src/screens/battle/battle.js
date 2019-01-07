import Swal from 'sweetalert2';
import $ from 'jquery';

import Loader from '../../components/loader/loader';
import Canvas from '../../components/canvas/canvas';
import Player from '../../components/player/player';
import Enemy from '../../components/enemy/enemy';
import SpellDialog from '../../components/spellDialog/spellDialog';
import MessageDialog from '../../components/messageDialog/messageDialog';
import Score from '../score/score';

class Battle {
  constructor() {
    this.characters = {};
  }

  start() {
    Swal({
      title: 'Enter your name:',
      input: 'text',
      showCancelButton: true,
      inputValidator: value => !value && 'You need to choose name!',
    })
      .then((result) => {
        if (result.value) {
          console.log('name: ', result.value, this);
          this.characters.player = new Player(result.value);

          const loader = new Loader(this, this.drawComponents);
          loader.loadAssets();
        }
      });
  }

  checkGameOver() {
    if (this.characters.player.hp <= 0 || this.characters.enemy.hp <= 0) {
      return true;
    }
    return false;
  }

  checkPlayerWin() {
    if (this.characters.enemy.hp <= 0) {
      this.characters.player.score += 1;
      this.characters.player.round += 1;

      return true;
    }
    return false;
  }

  saveScore(key = 'ice-wastelands') {
    console.log('appendScoreToLocalStorage()');
    let score = localStorage.getItem(key);
    score = score ? JSON.parse(score) : {};

    const conditionExist = score[this.characters.player.name];
    const conditionMax = score[this.characters.player.name] < this.characters.player.score;

    if (!conditionExist || conditionMax) {
      score[this.characters.player.name] = this.characters.player.score;
    }

    localStorage.setItem(key, JSON.stringify(score));

    console.log(JSON.parse(localStorage.getItem(key)));
  }

  async resolveRound() {
    console.log('resolveRound()', this);
    if (await !this.checkGameOver()) {
      console.log('show');
      await this.spellDialog.showSpellDialog();
    } else if (await this.checkPlayerWin()) {
      console.log('draw');
      await this.gameAssets.sounds.painEnemy[0].play();
      await MessageDialog.showNewRoundMessage();
      console.log('draw2');
      await this.drawComponents(this.gameAssets);
      console.log('draw3');
      await this.canvas.renderRound(this.characters.player.round);
    } else {
      console.log('game over', this.gameAssets.sounds.painPlayer[0]);
      await this.gameAssets.sounds.painPlayer[0].play();
      await MessageDialog.showGameOverMessage();
      await this.saveScore();
      await Score.render();
    }

    console.log('pHP = ', this.characters.player.hp, 'eHP: ', this.characters.enemy.hp);
  }

  async manageGame(isCorrect) {
    if (isCorrect) {
      this.characters.enemy.hp -= this.characters.player.strength;
      await this.canvas.renderFireball();
      await this.gameAssets.sounds.fireball[0].play();
      setTimeout(() => this.canvas.renderEnemyHealth(this.characters.enemy.hp), 1200);
    } else {
      this.characters.player.hp -= this.characters.enemy.strength;
      await this.canvas.renderIceArrow();
      await this.gameAssets.sounds.iceArrow[0].play();
      setTimeout(() => this.canvas.renderPlayerHealth(this.characters.player.hp), 1200);
    }

    setTimeout(this.resolveRound.bind(this), 1500);
  }

  drawComponents(assets) {
    console.log('drawComponents()', this);
    this.gameAssets = assets;

    this.characters.enemy = new Enemy();

    $('body').empty();

    this.canvas = new Canvas(this.gameAssets);
    this.canvas.renderCanvas();

    this.canvas.renderPlayer();
    this.canvas.renderPlayerName(this.characters.player.name);
    this.canvas.renderPlayerHealth(this.characters.player.hp);

    this.canvas.renderEnemy();
    this.canvas.renderEnemyName(this.characters.enemy.name);
    this.canvas.renderEnemyHealth(this.characters.enemy.hp);

    this.canvas.renderRound(this.characters.player.round);

    this.spellDialog = new SpellDialog(this, this.manageGame);
    this.spellDialog.showSpellDialog();
  }
}

export default Battle;
