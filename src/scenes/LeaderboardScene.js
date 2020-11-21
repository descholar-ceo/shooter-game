import Phaser from 'phaser';
import config from '../config/config';
import { retrievePlayerScore } from '../helpers/apiInteractions';

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('LeaderboardScene');
  }

  // eslint-disable-next-line class-methods-use-this
  preload() {
    retrievePlayerScore();
  }

  create() {
    this.titleText = this.add.text(
      (config.width / 4), (config.height / 2) - 200,
      'Top 10 players', { fontSize: '42px', fill: '#ffffff' },
    );
  }
}
