import Entity from './entities';

class GunShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprEnemy0', 'GunShip');
    // this.play('sprEnemy0');
  }
}

export default GunShip;
