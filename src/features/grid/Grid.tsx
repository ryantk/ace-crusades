import { useCallback, useEffect, useRef } from "react";
import { useGameDimensions } from "../../app/hooks";
import { appearsOnGridTile, makeCell } from "./cell";
import { enhanceContext } from "./context";
import { levelDefinitions } from "./levels";


export default function Grid() {
  const { screenHeight } = useGameDimensions();

  const levelNumber = 1;

  const { squad, rows, cols, walls } = levelDefinitions[levelNumber];

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const tileHeight = 80;
  const canvasWidth = cols * tileHeight;
  const canvasHeight = rows * tileHeight;

  const drawGrid = useCallback((sContext: EnhancedCanvasContext) => {
    for (let x = 1; x <= cols; x++) {
      for (let y = 1; y <= rows; y++) {
        const cell = makeCell({ x, y }, tileHeight);  

        cell.draw(sContext);

        squad.filter(appearsOnGridTile(cell.gridCoords)).forEach(squadMember => {
          squadMember.draw(sContext, cell);
        });

        walls.filter(appearsOnGridTile(cell.gridCoords)).forEach(wall => {
          // wall
        })
      }
    }
  }, [canvasWidth, canvasHeight, tileHeight]);

  useEffect(() => {
    if (canvasRef.current)
      drawGrid(
        enhanceContext(
          canvasRef.current.getContext('2d')!
        )
      );
  }, [drawGrid]);

  return (
    <div id="viewport" style={{ height: screenHeight, width: "100%", padding: 20 }}>
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} style={{  }} />
    </div>
  );
}
