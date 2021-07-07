import { useEffect, useRef } from "react";
import { useGameDimensions } from "../../app/hooks";
import { appearsOnGridTile, makeCell } from "./cell";
import { enhanceContext } from "./context";

const player = {
  playerSize: 10,
  drawCoords: { x: 0, y: 0 }, 
  gridCoords: { x: 0, y: 0 },

  draw(context: EnhancedCanvasContext) {
    context.drawCircle(this.drawCoords, this.playerSize, "#00ff00");
  }
};

const squadMember1 = {
  ...player,
  gridCoords: { x: 1, y: 1 }
};
const squadMember2 = {
  ...player,
  gridCoords: { x: 2, y: 1 }
};
const squadMember3 = {
  ...player,
  gridCoords: { x: 3, y: 1 }
};

const squad = [
  squadMember1,
  squadMember2,
  squadMember3
];

export default function Grid() {
  const { screenHeight, tileHeight } = useGameDimensions();

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const drawGrid = (sContext: EnhancedCanvasContext) => {
      for (let x = 0, cellX = 1; x < screenHeight; x += tileHeight, cellX++) {
        for (let y = 0, cellY = 1; y < screenHeight; y += tileHeight, cellY++) {
          const cell = makeCell({ x, y }, { x: cellX, y: cellY }, tileHeight);
          cell.draw(sContext);

          squad.filter(appearsOnGridTile(cell.gridCoords)).forEach(squadMember => {
            squadMember.drawCoords = cell.centeredGridCoords();
            squadMember.playerSize = (tileHeight * 0.65) / 2;
            squadMember.draw(sContext);
          });
        }
      }
    }

    if (canvasRef.current) {
      drawGrid(enhanceContext(canvasRef.current.getContext('2d')!));
    }

  }, [screenHeight, tileHeight, player]);

  return (
    <canvas ref={canvasRef} width={screenHeight} height={screenHeight} style={{  }} />
  );
}