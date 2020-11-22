import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'phasergame',
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  backgroundColor: 0x000,
  width: 900,
  height: 600,
  pixelArt: true,
  roundPixels: true,
};
