import Entity from './entities';

class Player extends Entity {
  constructor(scene, x, y, key) {
    super(scene, x, y, key, 'Player');
  }
}

export default Player;
