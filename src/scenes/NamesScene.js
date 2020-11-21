import Phaser from 'phaser';
import config from '../config/config';

export default class NamesScene extends Phaser.Scene {
  constructor() {
    super('NamesScene');
  }

  create() {
    this.titleText = this.add.text(
      (config.width / 8), (config.height / 2) - 200,
      'Welcome to SpaceShooter game', { fontSize: '42px', fill: '#ffffff' },
    );
    this.scoreText = this.add.text(
      (config.width / 4), (config.height / 2) - 50,
      'Enter your name: ', { fontSize: '32px', fill: '#ffffff' },
    );
    this.add.dom((config.width / 2), (config.height / 2) + 50).createFromCache('namesForm');
  }
}
