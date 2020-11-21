import Phaser from 'phaser';
import config from '../config/config';
import { savePlayerScore } from '../helpers/apiInteractions';
import Button from '../objects/button';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOverScene');
  }

  create() {
    const { score, playerNames } = this.sys.game.globals;
    this.titleText = this.add.text(
      (config.width / 2) - 100, (config.height / 2) - 200,
      'Game Over\n=========', { fontSize: '62px', fill: '#ffffff' },
    );
    this.scoreText = this.add.text(
      (config.width / 2) - 100, (config.height / 2) - 50,
      `Your score is: ${score}`, { fontSize: '32px', fill: '#ffffff' },
    );
    this.restartButton = new Button(this, (config.width / 2) + 50, (config.height / 2) + 50, 'blueButton1', 'blueButton2', 'Restart', 'Game');
    this.restartButton = new Button(this, (config.width / 2) + 50, (config.height / 2) + 150, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    savePlayerScore(playerNames, score);
  }
}
