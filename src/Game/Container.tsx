import React, { useEffect } from 'react'
import * as PIXI from 'pixi.js'
import Player from './Player'

const Container: React.FC = () => {
  useEffect(() => {
    const app = new PIXI.Application()
    const container = document.getElementById('game-container')
    if (!container) return
    container.appendChild(app.view)

    const player = new Player(app)

    app.stage.addChild(player.sprite)

    const getMousePosition = (): number => app.renderer.plugins?.interaction?.eventData?.data?.global?.x

    app.ticker.add((delta: number) => {
      player.move(getMousePosition(), delta)
    })
  }, [])

  return <div id="game-container" />
}

export default Container
