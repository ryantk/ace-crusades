export const enhanceContext = (context: CanvasRenderingContext2D): EnhancedCanvasContext => ({
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