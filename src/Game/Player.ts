import { Texture, Sprite, Application } from 'pixi.js'
import { getTexture } from './utils'

export default class Player {
  texture: Texture;
  sprite: Sprite;
  timeFromLastShot: number;

  constructor (app: Application) {
    this.texture = Texture.from(getTexture('player'))
    this.sprite = new Sprite(this.texture)
    this.sprite.height = 40
    this.sprite.width = 40
    this.sprite.y = app.view.height * 0.8
    this.timeFromLastShot = 0
  }

  move (mouseX: number, delta: number): void {
    this.sprite.x = mouseX
    this.timeFromLastShot += delta
    if (this.timeFromLastShot > 12) {
      this.timeFromLastShot = 0
      console.log('ass')
    }
  }
}
