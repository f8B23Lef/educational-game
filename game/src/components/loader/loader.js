import player1 from './img/players/warrior2.png';
import head1 from './img/heads/head1.png';
import head2 from './img/heads/head2.png';
import head3 from './img/heads/head3.png';
import body1 from './img/bodies/body1.png';
import body2 from './img/bodies/body2.png';
import body3 from './img/bodies/body3.png';
import leftLeg1 from './img/leftLegs/leftLeg1.png';
import leftLeg2 from './img/leftLegs/leftLeg2.png';
import leftLeg3 from './img/leftLegs/leftLeg3.png';
import rightLeg1 from './img/rightLegs/rightLeg1.png';
import rightLeg2 from './img/rightLegs/rightLeg2.png';
import rightLeg3 from './img/rightLegs/rightLeg3.png';
import leftArm1 from './img/leftArms/leftArm1.png';
import leftArm2 from './img/leftArms/leftArm2.png';
import leftArm3 from './img/leftArms/leftArm3.png';
import rightArm1 from './img/rightArms/rightArm1.png';
import rightArm2 from './img/rightArms/rightArm2.png';
import rightArm3 from './img/rightArms/rightArm3.png';

const players = [player1];
const heads = [head1, head2, head3];
const bodies = [body1, body2, body3];
const leftLegs = [leftLeg1, leftLeg2, leftLeg3];
const rightLegs = [rightLeg1, rightLeg2, rightLeg3];
const leftArms = [leftArm1, leftArm2, leftArm3];
const rightArms = [rightArm1, rightArm2, rightArm3];

const countImages = players.length + heads.length + bodies.length
  + leftLegs.length + rightLegs.length
  + leftArms.length + rightArms.length;
let countLoadedImages = 0;

const imagesObj = {
  player: [],
  head: [],
  body: [],
  leftLeg: [],
  rightLeg: [],
  leftArm: [],
  rightArm: [],
};

const isReady = () => countImages === countLoadedImages;
// let r = 0;
// Object.keys(o).forEach((item) => {
//   console.log(item);
//   o[item].forEach((q) =>  {
//   console.log(q);
//   r++;
//   })
// });

const formImagesObj = (arr, key, callback) => {
  arr.forEach((item) => {
    const img = new Image();
    img.onload = () => {
      imagesObj[`${key}`].push(img);
      countLoadedImages += 1;
      if (isReady() && callback) {
        callback();
        console.log(imagesObj);
        console.log(imagesObj.player[0].src);
      }
    };
    img.src = item;
  });
};

export const loadImages = (callback) => {
  // const pathToHeads = require.context('./img', false).keys();
  // console.log(pathToHeads);
  formImagesObj(players, 'player', callback);
  formImagesObj(heads, 'head', callback);
  formImagesObj(bodies, 'body', callback);
  formImagesObj(leftLegs, 'leftLeg', callback);
  formImagesObj(rightLegs, 'rightLeg', callback);
  formImagesObj(leftArms, 'leftArm', callback);
  formImagesObj(rightArms, 'rightArm', callback);

  // heads.forEach((item) => {
  //   const img = new Image();
  //   img.onload = () => {
  //     imagesObj.head.push(img);
  //     // if (images.length === 2) console.log('Ok');
  //     console.log('imagesObj: ', imagesObj);
  //   };
  //   // img.src = `./img/${item}`;
  //   img.src = item;
  // });

  // pathToHeads.forEach((item) => {
  //   const img = new Image();
  //   img.onload = () => {
  //     if (item.includes('head')) {
  //       imagesObj.head.push(img);
  //     } else if (item.includes('body')) {
  //       imagesObj.body.push(img);
  //     }
  //     console.log('imagesObj = ', imagesObj);

  //     // if (isReady(pathToHeads.length)) {

  //     // }
  //   };
  //   img.src = `images/${item}`;
  // });
};

export const getImagesObj = () => imagesObj;
