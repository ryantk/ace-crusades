/// <reference types="react-scripts" />

type EnhancedCanvasContext = CanvasRenderingContext2D & {
  drawLine: (from: Coords, to: Coords, color?: string) => void
  drawCircle: (coords: Coords, radius: number, color?: string) => void
};

type Coords = { x: number, y: number };

type Entity = {
  gridCoords: Coords // The location on the board of the entity
  draw: (context: EnhancedCanvasContext) => void
};

type SquadMember = Entity & {
  drawCoords: Coords // The EXACT x,y on canvas of where it will be drawn
  playerSize: number // radius of the circle for now
}

type GridSide = "left" | "right" | "top" | "bottom";

type Wall = {
  gridCoords: Coords,
  side: GridSide
}

type LevelDefinition = {
  rows: number
  cols: number
  squad: SquadMember[]
  walls: Wall[]
};
