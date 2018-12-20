import template from './canvas.template';
import './canvas.css';
import { getImagesObj } from '../loader/loader';

class Canvas {
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

    const dx = 250;
    const dy = 460;

    let sx = 0;
    const sy = 0;

    const ctx = document.getElementById('canvas').getContext('2d');

    function updateFrame() {
      ctx.clearRect(dx, dy, frameWidth, frameHeight);

      curFrame = (curFrame + 1) % frameCount;
      sx = curFrame * frameWidth;
    }

    function draw() {
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

    const dxHead = 920;
    const dyHead = 470;

    const dxBody = 950;
    const dyBody = 600;

    const dxLeftLeg = 940;
    const dyLeftLeg = 760;

    const dxRightLeg = 1000;
    const dyRightLeg = 760;

    const dxLeftArm = 1040;
    const dyLeftArm = 640;

    const dxRightArm = 890;
    const dyRightArm = 640;

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

      // requestAnimationFrame(draw);
    }
    // setInterval(updateBreath, 1000 / 60);
    setInterval(draw, 250);
    // draw();
  }

  // static drawText() {
  //   const ctx = document.getElementById('canvas').getContext('2d');
  //   console.log('ctx', ctx);
  //   ctx.font = '20px Arial';
  //   ctx.fillStyle = 'red';
  //   ctx.fillText('Player2', 1010, 40);

  //   // Create gradient
  //   const grd = ctx.createLinearGradient(1060, 0, 1260, 0);
  //   grd.addColorStop(0, 'red');
  //   grd.addColorStop(0.4, 'green');

  //   // Fill with gradient
  //   ctx.fillStyle = grd;
  //   ctx.fillRect(1060, 60, 200, 20);
  //   ctx.strokeStyle = '#FF0000';
  //   ctx.strokeRect(1060, 60, 200, 20);
  // }
}

export default Canvas;
