import Phaser from 'phaser';
import companyLogo from '../assets/old-neza-log.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('companyLogo', companyLogo);
    this.load.html('namesForm', './names-form.html');
  }

  create() {
    this.scene.start('Preloader');
  }
}