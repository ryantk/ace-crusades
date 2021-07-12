import { useCallback, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getSelectedSquadMember } from "../selection";
import { appearsOnGridTile, makeCell } from "../entities/cell";
import { enhanceContext } from "../grid/context";
import { levelDefinitions } from "../config/levels";


export default function GameCanvas() {
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
    <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
  );
}
