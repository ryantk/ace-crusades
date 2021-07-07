import { useEffect, useRef, useState } from "react";
import { useGameDimensions } from "../../app/hooks";

export default function Grid() {
  const { screenHeight, tileHeight } = useGameDimensions();

  const [player, setPlayer] = useState({ x: 1, y: 1 });

  const canvasRef = useRef<HTMLCanvasElement>(null);

  type Coords = { x: number, y: number };

  useEffect(() => {
    const drawGrid = (context: CanvasRenderingContext2D) => {
      const sContext = {
        context,

        drawLine(from: Coords, to: Coords, color = "#000000") {
          this.context.fillStyle = color;
          this.context.lineWidth = 1;
          this.context.moveTo(from.x, from.y);
          this.context.lineTo(to.x, to.y); 
          this.context.stroke();
        },
      }

      for (let x = 0, cellX = 1; x < screenHeight; x += tileHeight, cellX++) {
        for (let y = 0, cellY = 1; y < screenHeight; y += tileHeight, cellY++) {
          const cell = {
            tl: { x, y },
            tr: { x: x + tileHeight, y },
            bl: { x, y: y + tileHeight },
            br: { x: x + tileHeight, y: y + tileHeight },
            coords: { x: cellX, y: cellY },

            drawBoundary() {
              sContext.drawLine(this.tl, this.tr);
              sContext.drawLine(this.tr, this.br);

              if (this.tl.x === 0)
                sContext.drawLine(this.tl, this.bl);
            },

            drawPlayer() {
              const playerPosition = {
                x: (this.tl.x + this.tr.x) / 2,
                y: (this.tl.y + this.bl.y) / 2
              }

              const playerSize = (tileHeight * 0.65) / 2;
              
              context.fillStyle = "#00ff00";
              context.beginPath();
              context.lineWidth = 0;
              context.arc(playerPosition.x, playerPosition.y, playerSize, 0, 2 * Math.PI);
              context.fill();
            },
          }

          cell.drawBoundary();

          if (cell.coords.x === player.x && cell.coords.y === player.y)
            cell.drawPlayer();
        }
      }
    }

    if (canvasRef.current) {
      drawGrid(canvasRef.current.getContext('2d')!);

      canvasRef.current.addEventListener('click', (e) => {
        
      });
    }

  }, [screenHeight, tileHeight, player]);

  return (
    <canvas ref={canvasRef} width={screenHeight} height={screenHeight} style={{  }} />
  );
}