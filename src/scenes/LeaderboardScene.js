import Phaser from 'phaser';
import config from '../config/config';
import { retrievePlayerScore } from '../helpers/apiInteractions';
import Button from '../objects/button';

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('LeaderboardScene');
  }

  // eslint-disable-next-line class-methods-use-this
  preload() {
    retrievePlayerScore();
    this.topScoredPlayers = JSON.parse(localStorage.getItem('topTenPlayers'));
  }

  create() {
    this.titleText = this.add.text(
      (config.width / 4), (config.height / 2) - 200,
      'Top 10 players', { fontSize: '42px', fill: '#ffffff' },
    );
    this.menuButton = new Button(this, 400, 550, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    const players = this.topScoredPlayers;
    for (let index = 0; index < players.length; index += 1) {
      if (players[index]) {
        this.add.text(
          (config.width / 4), (config.height / 2) - 120 + (index * 30),
          `${index + 1}. ${players[index][0]}: ${players[index][1]}`, { fontSize: '24px', fill: '#ffffff' },
        );
      }
    }
  }
}
