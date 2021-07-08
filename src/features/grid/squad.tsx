export const baseSquadMember: SquadMember = {
  gridCoords: { x: 0, y: 0 },

  draw(context, cell) {
    const drawCoords = cell.centeredGridCoords();
    const playerSize = (cell.tileHeight * 0.65) / 2;

    context.drawCircle(drawCoords, playerSize, { color: "#00ff00" });
  }
};

export const makeSquadMemberAt = (gridCoords: Coords): SquadMember => ({
  ...baseSquadMember,
  gridCoords
});
