import { useCallback, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useGameDimensions } from "../../app/hooks";
import { getSelectedSquadMember } from "../selection";
import { appearsOnGridTile, makeCell } from "./cell";
import { enhanceContext } from "./context";
import { levelDefinitions } from "./levels";


export default function Grid() {
  const { screenHeight } = useGameDimensions();

  const levelNumber = 1;

  const selectedSquadMember = useSelector(getSelectedSquadMember);

  const { squad, rows, cols, walls } = levelDefinitions[levelNumber];

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const tileHeight = 80;
  const canvasWidth = cols * tileHeight;
  const canvasHeight = rows * tileHeight;

  const drawGrid = useCallback((sContext: EnhancedCanvasContext) => {
    let entities = [
      squad,
      walls
    ].flat();

    sContext.clear();
    console.log("HERE")

    for (let x = 1; x <= cols; x++) {
      for (let y = 1; y <= rows; y++) {
        const cell = makeCell({ x, y }, tileHeight);  

        cell.draw(sContext);

        entities
          .filter(appearsOnGridTile(cell.gridCoords))
          .forEach(entity => entity.draw(sContext, cell));
      }
    }
  }, [cols, rows, tileHeight, selectedSquadMember]);

  useEffect(() => {
    if (canvasRef.current)
      drawGrid(
        enhanceContext(
          canvasRef.current.getContext('2d')!
        )
      );
  }, [drawGrid]);

  return (
    <div id="viewport" style={{ height: screenHeight, width: "100%" }}>
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} style={{  }} />
    </div>
  );
}
