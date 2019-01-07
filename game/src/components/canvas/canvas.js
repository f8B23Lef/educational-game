import template from './canvas.template';
import './canvas.css';
import { randomInteger } from '../../utils/utils';

class Canvas {
  constructor(assets) {
    this.assets = assets;
  }

  renderCanvas() {
    const contentEl = document.querySelector('body');
    contentEl.insertAdjacentHTML('afterBegin', template);

    this.ctx = document.getElementById('canvas').getContext('2d');
  }

  renderPlayer() {
    const player = this.assets.images.player[0];

    const spriteWidth = player.width;
    const spriteHeight = player.height;

    const cols = 5;
    const rows = 1;

    const frameWidth = spriteWidth / cols;
    const frameHeight = spriteHeight / rows;

    let curFrame = 0;
    const frameCount = 5;

    const dx = 270;
    const dy = 475;

    let sx = 0;
    const sy = 0;

    const updateFrame = () => {
      this.ctx.clearRect(dx, dy, frameWidth, frameHeight);

      curFrame = (curFrame + 1) % frameCount;
      sx = curFrame * frameWidth;
    };

    const render = () => {
      updateFrame();
      this.ctx.drawImage(player, sx, sy, frameWidth, frameHeight, dx, dy, frameWidth, frameHeight);
    };

    setInterval(render, 250);
  }

  renderEnemy() {
    const breathInc = 0.1;
    let breathDir = 1;
    let breathAmt = 0;
    const breathMax = 2;

    const updateBreath = () => {
      if (breathDir === 1) {
        breathAmt -= breathInc;
        if (breathAmt < -breathMax) {
          breathDir = -1;
        }
      } else {
        breathAmt += breathInc;
        if (breathAmt > breathMax) {
          breathDir = 1;
        }
      }
    };

    setInterval(updateBreath, 33);

    const headIndex = randomInteger(0, this.assets.images.head.length - 1);
    const head = this.assets.images.head[headIndex];
    const bodyIndex = randomInteger(0, this.assets.images.body.length - 1);
    const body = this.assets.images.body[bodyIndex];

    const leftLegIndex = randomInteger(0, this.assets.images.leftLeg.length - 1);
    const leftLeg = this.assets.images.leftLeg[leftLegIndex];
    const rightLegIndex = randomInteger(0, this.assets.images.rightLeg.length - 1);
    const rightLeg = this.assets.images.rightLeg[rightLegIndex];

    const leftArmIndex = randomInteger(0, this.assets.images.leftArm.length - 1);
    const leftArm = this.assets.images.leftArm[leftArmIndex];
    const rightArmIndex = randomInteger(0, this.assets.images.leftLeg.length - 1);
    const rightArm = this.assets.images.rightArm[rightArmIndex];

    const dxHead = 1260;
    const dyHead = 480;

    const dxBody = 1290;
    const dyBody = 610;

    const dxLeftLeg = 1280;
    const dyLeftLeg = 770;

    const dxRightLeg = 1340;
    const dyRightLeg = 770;

    const dxLeftArm = 1380;
    const dyLeftArm = 650;

    const dxRightArm = 1230;
    const dyRightArm = 650;

    const updateFrame = () => {
      this.ctx.clearRect(dxRightArm, dyRightArm, rightArm.width, rightArm.height);
      this.ctx.clearRect(dxLeftLeg, dyLeftLeg, leftLeg.width, leftLeg.height);
      this.ctx.clearRect(dxRightLeg, dyRightLeg, rightLeg.width, rightLeg.height);
      this.ctx.clearRect(dxBody, dyBody, body.width, body.height);
      this.ctx.clearRect(dxLeftArm, dyLeftArm, leftArm.width, leftArm.height);
      this.ctx.clearRect(dxHead, dyHead, head.width, head.height);
    };

    const render = () => {
      updateFrame();

      this.ctx.drawImage(rightArm, dxRightArm, dyRightArm - breathAmt);
      this.ctx.drawImage(leftLeg, dxLeftLeg, dyLeftLeg);
      this.ctx.drawImage(rightLeg, dxRightLeg, dyRightLeg);
      this.ctx.drawImage(body, dxBody, dyBody);
      this.ctx.drawImage(leftArm, dxLeftArm, dyLeftArm - breathAmt);
      this.ctx.drawImage(head, dxHead, dyHead - breathAmt);

      requestAnimationFrame(render);
    };

    render();
  }

  renderPlayerName(name) {
    this.ctx.font = '30px Georgia';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(name, 320, 75);
  }

  renderEnemyName(name) {
    this.ctx.font = '30px Georgia';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(name, 1230, 75);
  }

  renderRound(round) {
    this.ctx.font = '30px Roboto, Georgia';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(`Round ${round}`, 900, 60);
  }

  renderPlayerHealth(hp) {
    this.ctx.clearRect(320, 100, 200, 30);

    const grd = this.ctx.createLinearGradient(320, 0, 520, 0);
    grd.addColorStop(0, 'red');
    grd.addColorStop(0.4, 'green');

    this.ctx.fillStyle = grd;
    this.ctx.fillRect(320, 100, hp * 2, 30);
    this.ctx.strokeStyle = '#FF0000';
    this.ctx.strokeRect(320, 100, 200, 30);
  }

  renderEnemyHealth(hp) {
    this.ctx.clearRect(1270, 100, 200, 30);

    const grd = this.ctx.createLinearGradient(1270, 0, 1470, 0);
    grd.addColorStop(0, 'red');
    grd.addColorStop(0.4, 'green');

    this.ctx.fillStyle = grd;
    this.ctx.fillRect(1270, 100, hp * 2, 30);
    this.ctx.strokeStyle = '#FF0000';
    this.ctx.strokeRect(1270, 100, 200, 30);
  }

  renderFireball() {
    console.log('drawFireball()');

    const fireball = this.assets.images.fireball[0];

    let x = 550;
    const y = 550;
    let requestID = null;

    const updateFrame = () => {
      // it leaves a trail of fireball so adds 7 to fix this
      this.ctx.clearRect(x - 7, y, fireball.width, fireball.height);
    };

    const render = () => {
      updateFrame();

      if (x > 1060) {
        cancelAnimationFrame(requestID);

        return;
      }

      this.ctx.drawImage(fireball, x, y);
      x += 7;

      requestID = requestAnimationFrame(render);
    };

    render();
  }

  renderIceArrow() {
    const iceArrow = this.assets.images.iceArrow[0];
    // ctx.save();ctx.restore();
    let x = 1070;
    const y = 580;
    let requestID = null;

    const updateFrame = () => {
      // it leaves a trail of iceArrow so adds 7 to fix this
      this.ctx.clearRect(x + 7, y, iceArrow.width, iceArrow.height);
    };

    const render = () => {
      updateFrame();

      if (x < 550) {
        cancelAnimationFrame(requestID);

        return;
      }

      this.ctx.drawImage(iceArrow, x, y);
      x -= 7;

      requestID = requestAnimationFrame(render);
    };

    render();
  }
}

export default Canvas;
