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
    // this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    // this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    // this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    // this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    // this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  update() {
    const cursors = this.input.keyboard.createCursorKeys();
    this.player.update();

    if (cursors.up.isDown) {
      this.player.moveUp();
    } else if (cursors.down.isDown) {
      this.player.moveDown();
    }

    if (cursors.left.isDown) {
      this.player.moveLeft();
    } else if (cursors.right.isDown) {
      this.player.moveRight();
    }
  }
}

export default GameScene;
