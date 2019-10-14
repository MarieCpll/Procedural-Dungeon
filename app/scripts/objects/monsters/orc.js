import Monster from './monster';

export default class Orc extends Monster{
  /**
  *  Orc monster class.
  *
  *  @constructor
  *  @class Monster
  *  @extends Phaser.GameObjects.Sprite
  *  @param {Phaser.Scene} scene - The scene that owns this sprite.
  *  @param {object} monsterInfo - JSON object with details of the monster to be created.
  *      monsterInfo.animKey = animation key.
  *      monsterInfo.spriteStr = sprite reference.
  */

  constructor(scene, x, y, config) {
    super(scene, x, y, config);
  }
}