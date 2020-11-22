import Phaser from 'phaser';
import blueButton1 from '../assets/blue_button02.png';
import blueButton2 from '../assets/blue_button03.png';
import box from '../assets/grey_box.png';
import checkBox from '../assets/blue_boxCheckmark.png';
import bgMusic from '../assets/TownTheme.mp3';
import sprExplosion from '../assets/sprExplosion.png';
import sprEnemy0 from '../assets/sprEnemy0.png';
import sprEnemy1 from '../assets/sprEnemy1.png';
import sprEnemy2 from '../assets/sprEnemy2.png';
import sprLaserEnemy0 from '../assets/sprLaserEnemy0.png';
import sprLaserPlayer from '../assets/sprLaserPlayer.png';
import sprPlayer from '../assets/sprPlayer.png';
import sndExplode0 from '../assets/sndExplode0.wav';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    this.make.image({
      x: 400, y: 150, key: 'companyLogo', scale: { x: 0.3, y: 0.3, add: true },
    });

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: (height / 2) - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: (width / 2),
      y: (width / 2) - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: (width / 2),
      y: (width / 2) + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', value => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on('fileprogress', fileValue => {
      assetText.setText(`Loading asset: ${fileValue.key}`);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
    });

    this.timeEvent = this.time.delayedCall(1000, this.ready, [], this);

    this.load.image('blueButton1', blueButton1);
    this.load.image('blueButton2', blueButton2);
    this.load.image('box', box);
    this.load.image('checkBox', checkBox);
    this.load.audio('bgMusic', bgMusic);
    this.load.spritesheet('sprExplosion', sprExplosion, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('sprEnemy0', sprEnemy0, { frameWidth: 16, frameHeight: 16 });
    this.load.image('sprEnemy1', sprEnemy1);
    this.load.spritesheet('sprEnemy2', sprEnemy2, { frameWidth: 16, frameHeight: 16 });
    this.load.image('sprLaserEnemy0', sprLaserEnemy0);
    this.load.image('sprLaserPlayer', sprLaserPlayer);
    this.load.spritesheet('sprPlayer', sprPlayer, { frameWidth: 16, frameHeight: 16 });
    this.load.audio('sndExplode0', sndExplode0);

    this.anims.create({
      key: 'sprEnemy0',
      frames: this.anims.generateFrameNumbers('sprEnemy0'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'sprEnemy2',
      frames: this.anims.generateFrameNumbers('sprEnemy2'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'sprExplosion',
      frames: this.anims.generateFrameNumbers('sprExplosion'),
      frameRate: 20,
      repeat: 0,
    });

    this.anims.create({
      key: 'sprPlayer',
      frames: this.anims.generateFrameNumbers('sprPlayer'),
      frameRate: 20,
      repeat: -1,
    });
  }

  ready() {
    this.scene.start('NamesScene');
    this.readyCount += 1;
    if (this.readyCount === 1) {
      this.scene.start('NamesScene');
    }
  }
}