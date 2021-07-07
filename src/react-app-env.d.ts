/// <reference types="react-scripts" />

type EnhancedCanvasContext = CanvasRenderingContext2D & {
  drawLine: (from: Coords, to: Coords, color?: string) => void
  drawCircle: (coords: Coords, radius: number, color?: string) => void
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
  draw: (context: EnhancedCanvasContext, cell?: GridCell) => void
};

type SquadMember = Entity;

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
