import Phaser from 'phaser';
import Player from '../entities/player';
import GunShip from '../entities/gunShip';
import config from '../config/config';
// import logoImg from '../assets/logo.png';

class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.player = new Player(this, config.width * 0.5, config.height * 0.5, 'sprPlayer');
    this.cursors = this.input.keyboard.createCursorKeys();
    this.enemies = this.add.group();
    this.enemyLasers = this.add.group();
    this.playerLasers = this.add.group();
    this.time.addEvent({
      delay: 1000,
      callback() {
        const enemy = new GunShip(this, Phaser.Math.Between(0, config.width), 0);
        this.enemies.add(enemy);
      },
      callbackScope: this,
      loop: true,
    });
  }

  update() {
    this.player.update();

    if (this.cursors.up.isDown) {
      this.player.moveUp();
    } else if (this.cursors.down.isDown) {
      this.player.moveDown();
    }

    if (this.cursors.left.isDown) {
      this.player.moveLeft();
    } else if (this.cursors.right.isDown) {
      this.player.moveRight();
    }
  }
}

export default GameScene;
