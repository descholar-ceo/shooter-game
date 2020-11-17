import Phaser from 'phaser';
import Player from '../entities/player';
import config from '../config/config';
// import logoImg from '../assets/logo.png';

class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  // preload() {
  //   // this.load.image('logo', logoImg);
  // }

  create() {
    this.player = new Player(this, config.width * 0.5, config.height * 0.5, 'sprPlayer');
  }
}

export default GameScene;
