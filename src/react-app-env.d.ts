/// <reference types="react-scripts" />

type EnhancedCanvasContext = CanvasRenderingContext2D & {
  drawLine: (from: Coords, to: Coords, color?: string) => void
  drawCircle: (coords: Coords, radius: number, color?: string) => void
};

type Coords = { x: number, y: number };

type Entity = {
  gridCoords: Coords
  draw: (context: EnhancedCanvasContext) => void
};