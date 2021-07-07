export const useGameDimensions = () => {
  const { innerWidth, innerHeight } = window;
  const screenHeight = Math.min(innerWidth, innerHeight) - 20;

  return { screenHeight };
}