import { makeSquadMemberAt } from "../squad";

const squad = [
  makeSquadMemberAt({ x: 1, y: 1 }),
  makeSquadMemberAt({ x: 2, y: 1 }),
  makeSquadMemberAt({ x: 3, y: 1 })
];

const walls: Wall[] = [

]

const level: LevelDefinition = {
  squad,
  walls
}

export default level;