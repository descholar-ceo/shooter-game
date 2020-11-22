import Phaser from 'phaser';
import config from '../config/config';
import isNamesValid from '../helpers/validations';

export default class NamesScene extends Phaser.Scene {
  constructor() {
    super('NamesScene');
  }

  create() {
    this.titleText = this.add.text(
      (config.width / 8), (config.height / 2) - 200,
      'Welcome to SpaceShooter game', { fontSize: '42px', fill: '#ffffff' },
    );
    this.enterNamesText = this.add.text(
      (config.width / 4), (config.height / 2) - 50,
      'Enter your name: ', { fontSize: '32px', fill: '#ffffff' },
    );
    this.namesForm = this.add.dom((config.width / 2), (config.height / 2) + 50).createFromCache('namesForm');
    this.namesForm.addListener('click');
    this.namesForm.on('click', event => {
      const clickedElement = event.target;
      if (clickedElement.name === 'continueBtn') {
        const enteredNames = document.querySelector('#name').value;
        if (isNamesValid(enteredNames)) {
          this.sys.game.globals.playerNames = enteredNames;
          this.namesForm.removeListener('click');
          this.scene.start('Title');
        } else {
          this.enterNamesText.setText('Your name is required');
        }
      }
    });
  }
}
