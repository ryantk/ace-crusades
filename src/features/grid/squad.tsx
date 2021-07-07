export const baseSquadMember: SquadMember = {
  playerSize: 10,
  drawCoords: { x: 0, y: 0 }, 
  gridCoords: { x: 0, y: 0 },

  draw(context: EnhancedCanvasContext) {
    context.drawCircle(this.drawCoords, this.playerSize, "#00ff00");
  }
};

export const makeSquadMemberAt = (gridCoords: Coords): SquadMember => ({
  ...baseSquadMember,
  gridCoords
})