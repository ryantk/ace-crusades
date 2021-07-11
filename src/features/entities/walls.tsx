export const makeWallAt = (gridCoords: Coords, side: GridSide): Wall => ({
  gridCoords,
  side,

  draw(context, cell) {
    let from: Coords;
    let to: Coords;

    switch (this.side) {
      case 'left': 
        from = cell.tl;
        to = cell.bl
        break;
      case 'right':
        from = cell.tr;
        to = cell.br;
        break;
      case 'top':
        from = cell.tl;
        to = cell.tr;
        break;
      default:
        from = cell.bl;
        to = cell.br;
        break;
    }

    context.drawLine(from, to, { thickness: 10, color: '#a0a0a0' });
  }
})
