import Phaser from 'phaser';
import config from '../config/config';
import Button from '../objects/button';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.gameButton = new Button(this, config.width / 2, (config.height / 2) - 100, 'blueButton1', 'blueButton2', 'Play', 'Game');
    this.optionsButton = new Button(this, config.width / 2, config.height / 2, 'blueButton1', 'blueButton2', 'Settings', 'Options');
    this.creditsButton = new Button(this, config.width / 2, (config.height / 2) + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits');
    this.leaderboardButton = new Button(this, config.width / 2, (config.height / 2) + 200, 'blueButton1', 'blueButton2', 'Leaderboard', 'LeaderboardScene');
    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }
}
