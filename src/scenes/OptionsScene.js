import Phaser from 'phaser';
import Button from '../objects/button';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  create() {
    this.model = this.sys.game.globals.model;

    this.musicText = this.add.text(300, 10, 'Settings', { fontSize: '42px', fill: '#fff' });
    this.musicButton = this.add.image(200, 80, 'checkBox');
    this.musicText = this.add.text(250, 70, 'Music Enabled', { fontSize: '24px', fill: '#fff' });

    this.soundButton = this.add.image(200, 150, 'checkBox');
    this.soundText = this.add.text(250, 140, 'Sound Enabled', { fontSize: '24px', fill: '#fff' });

    this.helpText = this.add.text(300, 190, 'Instructions', { fontSize: '42px', fill: '#fff' });
    this.add.text(250, 250, 'Use Upper arrow key to move up', { fontSize: '24px', fill: '#fff' });
    this.add.text(250, 310, 'Use Down arrow key to move down', { fontSize: '24px', fill: '#fff' });
    this.add.text(250, 370, 'Use Right arrow key to right up', { fontSize: '24px', fill: '#fff' });
    this.add.text(250, 430, 'Use Down arrow key to move down', { fontSize: '24px', fill: '#fff' });
    this.add.text(250, 490, 'Use Space key to Shoot', { fontSize: '24px', fill: '#fff' });

    this.musicButton.setInteractive();
    this.soundButton.setInteractive();

    this.musicButton.on('pointerdown', () => {
      this.model.musicOn = !this.model.musicOn;
      this.updateAudio();
    });

    this.soundButton.on('pointerdown', () => {
      this.model.soundOn = !this.model.soundOn;
      this.updateAudio();
    });

    this.menuButton = new Button(this, 400, 550, 'blueButton1', 'blueButton2', 'Menu', 'Title');

    this.updateAudio();
  }

  updateAudio() {
    if (this.model.musicOn === false) {
      this.musicButton.setTexture('box');
      this.sys.game.globals.bgMusic.stop();
      this.model.bgMusicPlaying = false;
    } else {
      this.musicButton.setTexture('checkBox');
      if (this.model.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.model.bgMusicPlaying = true;
      }
    }

    if (this.model.soundOn === false) {
      this.soundButton.setTexture('box');
    } else {
      this.soundButton.setTexture('checkBox');
    }
  }
}
