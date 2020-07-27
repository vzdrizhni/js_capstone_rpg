import Phaser from 'phaser';
import button1Img from '../../assets/images/ui/blue_button01.png';
import itemsImg from '../../assets/images/items.png';
import charactersImg from '../../assets/images/characters.png';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('button1', button1Img);
    this.load.spritesheet('items', itemsImg, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('characters', charactersImg, { frameWidth: 32, frameHeight: 32 });
  }

  create() {
    const button = this.add.image(100, 100, 'button1');
    button.setOrigin(0.5, 0.5);

    this.add.sprite(300, 100, 'button1');
    this.add.image(300, 300, 'items', 0);

    this.physics.add.image(500, 100, 'button1');

    this.player = this.physics.add.image(32, 32, 'characters', 0);
    this.player.setScale(2);
  }
}
