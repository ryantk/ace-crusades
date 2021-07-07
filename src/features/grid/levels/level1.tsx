import { makeSquadMemberAt } from "../squad";
import { makeWallAt } from "../walls";

const squad = [
  makeSquadMemberAt({ x: 1, y: 1 }),
  makeSquadMemberAt({ x: 2, y: 1 }),
  makeSquadMemberAt({ x: 3, y: 1 })
];

const walls: Wall[] = [
  makeWallAt({ x: 2, y: 1 }, "left"),
]

const rows = 10;
const cols = 50;

const level: LevelDefinition = {
  rows,
  cols,
  squad,
  walls
}

export default level;