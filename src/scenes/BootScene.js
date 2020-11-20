import Phaser from 'phaser';
import companyLogo from '../assets/old-neza-log.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('companyLogo', companyLogo);
  }

  create() {
    this.scene.start('Preloader');
  }
}