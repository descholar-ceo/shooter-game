import Phaser from 'phaser';
import Button from '../objects/button';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  // preload() {}

  create() {
    this.model = this.sys.game.globals.model;

    this.musicText = this.add.text(300, 100, 'Options', { fontSize: '42px', fill: '#fff' });
    this.musicButton = this.add.image(200, 200, 'checkBox');
    this.musicText = this.add.text(250, 190, 'Music Enabled', { fontSize: '24px', fill: '#fff' });

    this.soundButton = this.add.image(200, 300, 'checkBox');
    this.soundText = this.add.text(250, 290, 'Sound Enabled', { fontSize: '24px', fill: '#fff' });

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

    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');

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

  // update() {}
}
