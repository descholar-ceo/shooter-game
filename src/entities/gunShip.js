import Phaser from 'phaser';
import Entity from './entities';

class GunShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprEnemy0', 'GunShip');
    // this.play('sprEnemy0');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
  }
}

export default GunShip;
