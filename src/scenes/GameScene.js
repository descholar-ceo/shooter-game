import Phaser from 'phaser';
import Player from '../entities/player';
import config from '../config/config';
// import logoImg from '../assets/logo.png';

class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.player = new Player(this, config.width * 0.5, config.height * 0.5, 'sprPlayer');
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
