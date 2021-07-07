import { useEffect, useRef } from "react";
import { useGameDimensions } from "../../app/hooks";
import { appearsOnGridTile, makeCell } from "./cell";
import { enhanceContext } from "./context";
import { levelDefinitions } from "./levels";


export default function Grid() {
  const { screenHeight, tileHeight } = useGameDimensions();

  const levelNumber = 1;

  const { squad } = levelDefinitions[levelNumber];

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

  }, [screenHeight, tileHeight, squad]);

  return (
    <canvas ref={canvasRef} width={screenHeight} height={screenHeight} style={{  }} />
  );
}