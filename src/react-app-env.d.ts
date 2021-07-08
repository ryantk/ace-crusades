/// <reference types="react-scripts" />

type LineCustomisation = {
  color?: string,
  thickness?: number
}

type EnhancedCanvasContext = CanvasRenderingContext2D & {
  clear: () => void
  drawLine: (from: Coords, to: Coords, options?: LineCustomisation) => void
  drawCircle: (coords: Coords, radius: number, options?: LineCustomisation) => void
};

type Coords = { x: number, y: number };

type GridCell = {
  tl: Coords
  tr: Coords
  bl: Coords
  br: Coords
  gridCoords: Coords
  tileHeight: number
  draw: (context: EnhancedCanvasContext) => void
  centeredGridCoords: () => Coords
}

type Entity = {
  gridCoords: Coords // The location on the board of the entity
  draw: (context: EnhancedCanvasContext, cell: GridCell) => void
};

type SquadMember = Entity & {
  number: number
  name: string
};

type GridSide = "left" | "right" | "top" | "bottom";

type Wall = Entity & {
  side: GridSide
}

type LevelDefinition = {
  rows: number
  cols: number
  squad: SquadMember[]
  walls: Wall[]
};
