import Phaser from 'phaser';
import config from '../config/config';
import Button from '../objects/button';

export default class NamesScene extends Phaser.Scene {
  constructor() {
    super('NamesScene');
  }

  create() {
    this.titleText = this.add.text(
      (config.width / 8), (config.height / 2) - 200,
      'Welcome to SpaceShooter game\n=========', { fontSize: '42px', fill: '#ffffff' },
    );
    this.scoreText = this.add.text(
      (config.width / 6), (config.height / 2) - 50,
      'Enter your name: ', { fontSize: '32px', fill: '#ffffff' },
    );
    this.add.dom('namesForm');
    this.restartButton = new Button(
      this, (config.width / 2) + 50, (config.height / 2) + 50, 'blueButton1', 'blueButton2', 'Start game', 'Title',
    );
  }
}
