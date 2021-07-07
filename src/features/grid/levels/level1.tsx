import { makeSquadMemberAt } from "../squad";

const squad = [
  makeSquadMemberAt({ x: 1, y: 1 }),
  makeSquadMemberAt({ x: 2, y: 1 }),
  makeSquadMemberAt({ x: 3, y: 1 })
];

const walls: Wall[] = [

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