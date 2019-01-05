import template from './canvas.template';
import './canvas.css';
import { getImagesObj } from '../loader/loader';

class Canvas {
  // constructor() {
  //   this.canvas = 4;
  // }

  static drawCanvas() {
    const contentEl = document.querySelector('body');
    contentEl.insertAdjacentHTML('afterBegin', template);
  }

  static drawPlayer() {
    const player = getImagesObj().player[0];

    const spriteWidth = player.width;
    const spriteHeight = player.height;

    const cols = 5;
    const rows = 1;

    const frameWidth = spriteWidth / cols;
    const frameHeight = spriteHeight / rows;

    let curFrame = 0;
    const frameCount = 5;

    const dx = 160;
    const dy = 440;

    let sx = 0;
    const sy = 0;

    const ctx = document.getElementById('canvas').getContext('2d');

    function updateFrame() {
      ctx.clearRect(dx, dy, frameWidth, frameHeight);

      curFrame = (curFrame + 1) % frameCount;
      sx = curFrame * frameWidth;
    }

    function draw() {
      // setTimeout(() => {
      //   requestAnimationFrame(draw);
      //   // Drawing code goes here
      //   updateFrame();
      //   ctx.drawImage(player, sx, sy, frameWidth, frameHeight, dx, dy, frameWidth, frameHeight);
      //   // requestAnimationFrame(draw);
      // }, 250);


      updateFrame();
      ctx.drawImage(player, sx, sy, frameWidth, frameHeight, dx, dy, frameWidth, frameHeight);
      // requestAnimationFrame(draw);
    }
    setInterval(draw, 250);
    // draw();
  }

  static drawEnemy() {
    const randomInteger = (min = 0, max = 2) => Math.floor(min + Math.random() * (max + 1 - min));

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

    setInterval(updateBreath, 1000 / 30);

    const head = getImagesObj().head[randomInteger()];
    const body = getImagesObj().body[randomInteger()];

    const leftLeg = getImagesObj().leftLeg[randomInteger()];
    const rightLeg = getImagesObj().rightLeg[randomInteger()];

    const leftArm = getImagesObj().leftArm[randomInteger()];
    const rightArm = getImagesObj().rightArm[randomInteger()];

    const dxHead = 1030;
    const dyHead = 440;

    const dxBody = 1060;
    const dyBody = 570;

    const dxLeftLeg = 1050;
    const dyLeftLeg = 730;

    const dxRightLeg = 1110;
    const dyRightLeg = 730;

    const dxLeftArm = 1150;
    const dyLeftArm = 610;

    const dxRightArm = 1000;
    const dyRightArm = 610;

    const ctx = document.getElementById('canvas').getContext('2d');

    function updateFrame() {
      ctx.clearRect(dxRightArm, dyRightArm, rightArm.width, rightArm.height);
      ctx.clearRect(dxLeftLeg, dyLeftLeg, leftLeg.width, leftLeg.height);
      ctx.clearRect(dxRightLeg, dyRightLeg, rightLeg.width, rightLeg.height);
      ctx.clearRect(dxBody, dyBody, body.width, body.height);
      ctx.clearRect(dxLeftArm, dyLeftArm, leftArm.width, leftArm.height);
      ctx.clearRect(dxHead, dyHead, head.width, head.height);
    }

    function draw() {
      updateFrame();
      ctx.drawImage(rightArm, dxRightArm, dyRightArm - breathAmt);
      ctx.drawImage(leftLeg, dxLeftLeg, dyLeftLeg);
      ctx.drawImage(rightLeg, dxRightLeg, dyRightLeg);
      ctx.drawImage(body, dxBody, dyBody);
      ctx.drawImage(leftArm, dxLeftArm, dyLeftArm - breathAmt);
      ctx.drawImage(head, dxHead, dyHead - breathAmt);

      requestAnimationFrame(draw);
    }
    // setInterval(updateBreath, 1000 / 60);
    // setInterval(draw, 250);
    draw();
  }

  static drawPlayerName(name) {
    const ctx = document.getElementById('canvas').getContext('2d');
    ctx.font = '30px Georgia';
    ctx.fillStyle = 'white';
    ctx.fillText(name, 300, 75);
  }

  static drawEnemyName(name) {
    const ctx = document.getElementById('canvas').getContext('2d');
    ctx.font = '30px Georgia';
    ctx.fillStyle = 'white';
    ctx.fillText(name, 1000, 75);
  }

  static drawRound(round) {
    const ctx = document.getElementById('canvas').getContext('2d');
    // const canvas = document.getElementById('canvas');
    // canvas.width = canvas.width;
    // ctx.drawImage(getImagesObj().round[0], 600, 30);
    // ctx.clearRect(630, 40, 250, 250);
    // ctx.drawImage(getImagesObj().nameContainer[0], 250, 40);
    // ctx.drawImage(getImagesObj().nameContainer[0], 950, 40);
    ctx.font = '30px Roboto, Georgia';
    ctx.fillStyle = 'white';
    ctx.fillText(`Round ${round}`, 630, 80);
    // ctx.fillStyle = 'green';
    // ctx.fillText('Player1', 300, 75);
    // ctx.fillStyle = 'red';
    // ctx.fillText('Enemy', 1000, 75);
  }

  static drawPlayerHealth(hp) {
    const ctx = document.getElementById('canvas').getContext('2d');
    ctx.clearRect(200, 100, 200, 30);
    // Create gradient
    const grd = ctx.createLinearGradient(200, 0, 400, 0); // x0, y0, x1, y1
    grd.addColorStop(0, 'red');
    grd.addColorStop(0.4, 'green');

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(200, 100, hp * 2, 30); // x, y, w, h
    ctx.strokeStyle = '#FF0000';
    ctx.strokeRect(200, 100, 200, 30);
  }

  static drawEnemyHealth(hp) {
    const ctx = document.getElementById('canvas').getContext('2d');
    ctx.clearRect(1060, 100, 200, 30);
    // Create gradient
    const grd = ctx.createLinearGradient(1060, 0, 1260, 0); // x0, y0, x1, y1
    grd.addColorStop(0, 'red');
    grd.addColorStop(0.4, 'green');

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(1060, 100, hp * 2, 30); // x, y, w, h
    ctx.strokeStyle = '#FF0000';
    ctx.strokeRect(1060, 100, 200, 30);
  }

  static drawFireball() {
    console.log('drawFireball()');

    const fireball = getImagesObj().fireball[0];

    const ctx = document.getElementById('canvas').getContext('2d');
    // ctx.save();ctx.restore();
    let x = 450;
    const y = 500;
    let requestID = null;

    function update() {
      // if don't substarct 5 it leaves a trail of fireball
      ctx.clearRect(x - 5, y, fireball.width, fireball.height);
    }

    function draw() {
      update();

      if (x > 840) {
        cancelAnimationFrame(requestID);
        return;
      }

      ctx.drawImage(fireball, x, y);
      x += 7;

      requestID = requestAnimationFrame(draw);
    }
    draw();
  }

  static drawIceArrow() {
    console.log('drawIceArrow()', getImagesObj());

    // const freezeImg = new Image();
    // freezeImg.src = freeze;

    const iceArrow = getImagesObj().iceArrow[0];

    const ctx = document.getElementById('canvas').getContext('2d');
    // ctx.save();ctx.restore();
    let x = 900;
    const y = 500;
    let requestID = null;

    function update() {
      // if don't add 7 it leaves a trail of iceArrow
      ctx.clearRect(x + 7, y, iceArrow.width, iceArrow.height);
    }

    function draw() {
      update();

      if (x < 420) {
        cancelAnimationFrame(requestID);
        return;
      }

      ctx.drawImage(iceArrow, x, y);
      x -= 7;

      requestID = requestAnimationFrame(draw);
    }
    draw();
  }

  // static drawRip() {
  //   console.log('drawRip()');
  //   const ctx = document.getElementById('canvas').getContext('2d');
  //   // ctx.clearRect(1060, 100, 200, 30);
  //   const ripImg = new Image();
  //   ripImg.src = 'https://banner2.kisspng.com/20180215/tvq/kisspng-headstone-drawing-cartoon-clip-art-above-cliparts-5a85d0244a90e2.2645982415187190123054.jpg';
  //   ctx.drawImage(ripImg, 1000, 500);
  // }
}

export default Canvas;
