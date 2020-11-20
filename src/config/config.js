import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  backgroundColor: 0x000000,
  width: 600,
  height: 650,
  pixelArt: true,
  roundPixels: true,
};
