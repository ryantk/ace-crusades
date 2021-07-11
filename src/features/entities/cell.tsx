export const makeCell = ({ x, y }: Coords, tileHeight: number): GridCell => {
  const tl = {
    x: (x - 1) * tileHeight,
    y: (y - 1) * tileHeight
  };

  const tr = {
    x: tl.x + tileHeight,
    y: tl.y
  };

  const bl = {
    x: tl.x,
    y: tl.y + tileHeight
  }

  const br = {
    x: tr.x,
    y: tr.y + tileHeight
  }

  return {
    tl,
    tr,
    bl,
    br,
    gridCoords: { x, y },
    tileHeight,

    draw(context: EnhancedCanvasContext) {
      context.drawLine(this.tl, this.tr);
      context.drawLine(this.tr, this.br);

      if (this.tl.x === 0)
        context.drawLine(this.tl, this.bl);
    },

    centeredGridCoords() {
      const centeredCoords = {
        x: (this.tl.x + this.tr.x) / 2,
        y: (this.tl.y + this.bl.y) / 2
      };

      return centeredCoords;
    }
  };
};

export const appearsOnGridTile = (tileCoords: Coords) => (entity: Entity) => {
  return entity.gridCoords.x === tileCoords.x && entity.gridCoords.y === tileCoords.y;
};
