import { makeSquadMemberAt } from "../../entities/squad";
import { makeWallAt } from "../../entities/walls";

const squad = [
  makeSquadMemberAt({ x: 1, y: 1 }, 1, "Commander Cuthbert"),
  makeSquadMemberAt({ x: 1, y: 2 }, 2, "Marine Ken"),
  makeSquadMemberAt({ x: 1, y: 3 }, 3, "General Jess")
];

const walls: Wall[] = [
  makeWallAt({ x: 2, y: 1 }, "left"),
  makeWallAt({ x: 2, y: 2 }, "left"),
  makeWallAt({ x: 2, y: 3 }, "left"),
  makeWallAt({ x: 2, y: 4 }, "left"),
  makeWallAt({ x: 2, y: 4 }, "left"),
  makeWallAt({ x: 2, y: 4 }, "bottom"),
  makeWallAt({ x: 3, y: 4 }, "bottom"),
  makeWallAt({ x: 4, y: 4 }, "bottom"),
  makeWallAt({ x: 5, y: 4 }, "left"),
  makeWallAt({ x: 5, y: 3 }, "left"),
  makeWallAt({ x: 5, y: 2 }, "left"),
  makeWallAt({ x: 5, y: 1 }, "left"),

  makeWallAt({ x: 2, y: 6 }, "top"),
  makeWallAt({ x: 2, y: 6 }, "left"),
  makeWallAt({ x: 2, y: 7 }, "left"),
  makeWallAt({ x: 2, y: 8 }, "left"),
  makeWallAt({ x: 2, y: 9 }, "left"),
  makeWallAt({ x: 2, y: 10 }, "left"),
  makeWallAt({ x: 3, y: 6 }, "top"),
  makeWallAt({ x: 4, y: 6 }, "top"),
  makeWallAt({ x: 4, y: 6 }, "top"),
  makeWallAt({ x: 4, y: 6 }, "right"),
  makeWallAt({ x: 4, y: 7 }, "right"),
  makeWallAt({ x: 4, y: 8 }, "right"),
  makeWallAt({ x: 4, y: 9 }, "right"),
  makeWallAt({ x: 4, y: 10 }, "right"),
];

const rows = 10;
const cols = 50;

const level: LevelDefinition = {
  rows,
  cols,
  squad,
  walls
}

export default level;
