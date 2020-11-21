import Phaser from 'phaser';
import Config from './config/config';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import TitleScene from './scenes/TitleScene';
import OptionsScene from './scenes/OptionsScene';
import CreditsScene from './scenes/CreditsScene';
import GameOverScene from './scenes/GameOverScene';
import NamesScene from './scenes/NamesScene';
import Model from './model';

class Game extends Phaser.Game {
  constructor() {
    super(Config);
    const model = new Model();
    this.globals = {
      model, bgMusic: null, score: 0, playerNames: '',
    };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('NamesScene', NamesScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('GameOverScene', GameOverScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
