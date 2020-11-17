import Entity from './entities';

class CarrierShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprEnemy2', 'CarrierShip');
    // this.play('sprEnemy2');
  }
}

export default CarrierShip;
