import Phaser from 'phaser';
import Player from '../entities/player';
import config from '../config/config';
// import logoImg from '../assets/logo.png';

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' });
  }

  // preload() {
  //   // this.load.image('logo', logoImg);
  // }

  create() {
    this.player = new Player(this, config.width * 0.5, config.height * 0.5, 'sprPlayer');
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  update() {
    this.player.update();

    if (this.keyW.isDown) {
      this.player.moveUp();
    } else if (this.keyS.isDown) {
      this.player.moveDown();
    }

    if (this.keyA.isDown) {
      this.player.moveLeft();
    } else if (this.keyD.isDown) {
      this.player.moveRight();
    }
  }
}

export default GameScene;
