import template from './canvas.template';
import './canvas.css';
import player from './img/warrior2_sprite-min.png';

class Canvas {
  static drawCanvas() {
    const contentEl = document.querySelector('body');
    contentEl.insertAdjacentHTML('afterBegin', template);
  }

  static drawSprite() {
    // Width and height for our canvas
    const canvasWidth = 1600;
    const canvasHeight = 900;

    // the with and height of our sprite sheet
    const spriteWidth = 1639; // warrior
    const spriteHeight = 400;

    // we are having 1 rows and 5 cols in the current sprite sheet
    const rows = 1;
    const cols = 5;

    // To get the width of a single sprite we divided the width of sprite with the number of cols
    // because all the sprites are of equal width and height
    const width = spriteWidth / cols;

    // Same for the height we divided the height with number of rows
    const height = spriteHeight / rows;

    // Each row contains 8 frame and at start we will display the first frame (assuming the index from 0)
    let curFrame = 0;

    // The total frame is 5
    const frameCount = 5;

    // x and y coordinates to render the sprite
    const x = 250;
    const y = 460;

    // x and y coordinates of the canvas to get the single frame
    let srcX = 0;
    const srcY = 0;

    // Getting the canvas
    const canvas = document.getElementById('canvas');

    // setting width and height of the canvas
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Establishing a context to the canvas
    const ctx = canvas.getContext('2d');

    // Creating an Image object for our character
    // const character = new Image();
    const character = new Image();

    // Setting the source to the image file
    // character.src = monster;
    character.src = player;

    function updateFrame() {
      // ctx.clearRect(x, y, width, height);
      ctx.clearRect(x, y, width, height);

      // Updating the frame index
      curFrame = ++curFrame % frameCount;
      // Calculating the x coordinate for spritesheet
      // srcX = curFrame * width;
      srcX = curFrame * width;
      // srcXH = curFrame * widthH;
    }

    function draw() {
      // Updating the frame
      updateFrame();
      // Drawing the image
      ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height);
      // requestAnimationFrame(draw);
    }
    setInterval(draw, 250);
    // draw();
  }
}

export default Canvas;
