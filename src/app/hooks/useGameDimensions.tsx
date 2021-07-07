import { numColumns } from "../../features/config/config";

export const useGameDimensions = () => {
  const { innerWidth, innerHeight } = window;
  const screenHeight = Math.min(innerWidth, innerHeight) - 20;
  const tileHeight = screenHeight / numColumns;

  return { screenHeight, tileHeight }
}