import { useEffect, useRef, useState } from "react";
import { useGameDimensions } from "../../app/hooks";

type EnhancedCanvasContext = CanvasRenderingContext2D & {
  drawLine: (from: Coords, to: Coords, color?: string) => void
  drawCircle: (coords: Coords, radius: number, color?: string) => void
};
type Coords = { x: number, y: number };
type Entity = {
  gridCoords: Coords
  draw: (context: EnhancedCanvasContext) => void
};

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

const enhanceContext = (context: CanvasRenderingContext2D): EnhancedCanvasContext => ({
  ...context,

  drawCircle(coords: Coords, radius: number, color = "#000000") {
    context.fillStyle = color;
    context.beginPath();
    context.lineWidth = 0;
    context.arc(coords.x, coords.y, radius, 0, 2 * Math.PI);
    context.fill();
  },

  drawLine(from: Coords, to: Coords, color = "#000000") {
    context.fillStyle = color;
    context.lineWidth = 1;
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.y); 
    context.stroke();
  }
});

const appearsOnGridTile = (tileCoords: Coords) => (entity: Entity) => {
  return entity.gridCoords.x === tileCoords.x && entity.gridCoords.y === tileCoords.y;
};

// const drawOn = (context: EnhancedCanvasContext) => (entity: Entity) => entity.draw(context);

export default function Grid() {
  const { screenHeight, tileHeight } = useGameDimensions();

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const drawGrid = (sContext: EnhancedCanvasContext) => {
      for (let x = 0, cellX = 1; x < screenHeight; x += tileHeight, cellX++) {
        for (let y = 0, cellY = 1; y < screenHeight; y += tileHeight, cellY++) {
          const cell = {
            tl: { x, y },
            tr: { x: x + tileHeight, y },
            bl: { x, y: y + tileHeight },
            br: { x: x + tileHeight, y: y + tileHeight },
            gridCoords: { x: cellX, y: cellY },

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
          }

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

      canvasRef.current.addEventListener('click', (e) => {
        
      });
    }

  }, [screenHeight, tileHeight, player]);

  return (
    <canvas ref={canvasRef} width={screenHeight} height={screenHeight} style={{  }} />
  );
}