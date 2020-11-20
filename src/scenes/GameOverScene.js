import Phaser from 'phaser';
import config from '../config/config';
// import Button from '../objects/button';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOverScene');
  }

  create() {
    this.titleText = this.add.text(
      (config.width / 2) - 100, (config.height / 2) - 200,
      'Game Over\n=========', { fontSize: '32px', fill: '#ffffff' },
    );
  }
}
