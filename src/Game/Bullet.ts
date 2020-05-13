import { Texture, Sprite } from 'pixi.js'
import { getTexture } from './utils'

export default class Player {
  texture: Texture;
  sprite: Sprite;

  constructor (x: number, y: number) {
    this.texture = Texture.from(getTexture('bullet'))
    this.sprite = new Sprite(this.texture)
    this.sprite.height = 40
    this.sprite.width = 40
    this.sprite.x = x
    this.sprite.y = y
  }

  move (): void {
    this.sprite.y -= 1
  }
}
