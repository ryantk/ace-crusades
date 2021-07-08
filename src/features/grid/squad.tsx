import { store } from "../../app/store";
import { getSelectedSquadMember } from "../selection";

export const baseSquadMember: SquadMember = {
  gridCoords: { x: 0, y: 0 },
  number: 0,
  name: "Base Player",

  draw(context, cell) {
    const drawCoords = cell.centeredGridCoords();
    const playerSize = (cell.tileHeight * 0.65) / 2;
    const isSelected = getSelectedSquadMember(store.getState()) === this.number;

    context.drawCircle(drawCoords, playerSize, { 
      color: isSelected ? "#00ff00" : "#00aa00" 
    });
  }
};

export const makeSquadMemberAt = (gridCoords: Coords, number: number, name: string): SquadMember => ({
  ...baseSquadMember,
  gridCoords,
  number,
  name
});
