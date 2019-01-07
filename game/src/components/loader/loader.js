import player from './img/players/warrior.png';
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
import fireball from './img/spellEffects/fireball.png';
import iceArrow from './img/spellEffects/iceArrow.png';

import fireballSound from './sounds/fireball.mp3';
import iceArrowSound from './sounds/iceArrow.mp3';
import painPlayerSound from './sounds/painPlayer.mp3';
import painEnemySound from './sounds/painEnemy.mp3';

class Loader {
  constructor(scoupe, callback) {
    this.players = [player];
    this.heads = [head1, head2, head3];
    this.bodies = [body1, body2, body3];
    this.leftLegs = [leftLeg1, leftLeg2, leftLeg3];
    this.rightLegs = [rightLeg1, rightLeg2, rightLeg3];
    this.leftArms = [leftArm1, leftArm2, leftArm3];
    this.rightArms = [rightArm1, rightArm2, rightArm3];
    this.fireballs = [fireball];
    this.iceArrows = [iceArrow];

    this.fireballSounds = [fireballSound];
    this.iceArrowSounds = [iceArrowSound];
    this.painPlayerSounds = [painPlayerSound];
    this.painEnemySounds = [painEnemySound];

    this.scoupe = scoupe;
    this.callback = callback;

    this.countLoadedAssets = 0;
    this.countAssets = this.players.length
      + this.heads.length + this.bodies.length
      + this.leftLegs.length + this.rightLegs.length
      + this.leftArms.length + this.rightArms.length
      + this.fireballs.length + this.iceArrows.length
      + this.fireballSounds.length + this.iceArrowSounds.length
      + this.painPlayerSounds.length + this.painEnemySounds.length;

    this.assets = {
      images: {
        player: [],
        head: [],
        body: [],
        leftLeg: [],
        rightLeg: [],
        leftArm: [],
        rightArm: [],
        fireball: [],
        iceArrow: [],
      },
      sounds: {
        fireball: [],
        iceArrow: [],
        painPlayer: [],
        painEnemy: [],
      },
    };
  }

  loadAssets() {
    this.loadImages();
    this.loadSounds();
  }

  loadImages() {
    this.formImages(this.players, 'player');
    this.formImages(this.heads, 'head');
    this.formImages(this.bodies, 'body');
    this.formImages(this.leftLegs, 'leftLeg');
    this.formImages(this.rightLegs, 'rightLeg');
    this.formImages(this.leftArms, 'leftArm');
    this.formImages(this.rightArms, 'rightArm');
    this.formImages(this.fireballs, 'fireball');
    this.formImages(this.iceArrows, 'iceArrow');
  }

  loadSounds() {
    this.formSounds(this.fireballSounds, 'fireball');
    this.formSounds(this.iceArrowSounds, 'iceArrow');
    this.formSounds(this.painPlayerSounds, 'painPlayer');
    this.formSounds(this.painEnemySounds, 'painEnemy');
  }

  formImages(arr, key) {
    arr.forEach((item) => {
      const img = new Image();
      img.onload = () => {
        this.assets.images[key].push(img);
        this.countLoadedAssets += 1;
        if (this.assetsLoaded()) {
          this.callback.call(this.scoupe, this.assets);
        }
      };
      img.src = item;
    });
  }

  formSounds(arr, key) {
    arr.forEach((item) => {
      const audio = new Audio(item);
      audio.onloadeddata = () => {
        this.assets.sounds[key].push(audio);
        this.countLoadedAssets += 1;
        if (this.assetsLoaded()) {
          this.callback.call(this.scoupe, this.assets);
        }
      };
    });
  }

  assetsLoaded() {
    return this.countAssets === this.countLoadedAssets;
  }
}

export default Loader;
