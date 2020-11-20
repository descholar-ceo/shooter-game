import Phaser from 'phaser';
import companyLogo from '../assets/old-neza-log.png';
import namesForm from '../assets/names-form.html';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('companyLogo', companyLogo);
    this.load.html('namesForm', namesForm);
  }

  create() {
    this.scene.start('Preloader');
  }
}