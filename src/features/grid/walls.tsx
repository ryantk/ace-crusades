export const makeWallAt = (gridCoords: Coords, side: GridSide): Wall => ({
  gridCoords,
  side,

  draw(context) {
    if (this.side === "left") {
      // context.drawLine()
    }
  }
})