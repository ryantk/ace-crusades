export const enhanceContext = (context: CanvasRenderingContext2D): EnhancedCanvasContext => ({
  ...context,

  drawCircle(coords, radius, { color, thickness } = {}) {
    context.fillStyle = color || "#000000";
    context.lineWidth = thickness || 1;
    context.beginPath();
    context.arc(coords.x, coords.y, radius, 0, 2 * Math.PI);
    context.fill();
  },

  drawLine(from: Coords, to: Coords, { color, thickness } = {}) {
    context.fillStyle = color || "#000000";
    context.lineWidth = thickness || 1;
    context.beginPath();
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.y); 
    context.stroke();
  }
});
