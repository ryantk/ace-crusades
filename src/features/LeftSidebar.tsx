import React from 'react';
import { levelDefinitions } from './grid/levels';
import "./LeftSidebar.css";

export default function LeftSidebar() {
  const levelNumber = 1;

  const { squad } = levelDefinitions[levelNumber];

  return (
    <div id="leftSidebar">
      {squad.map((squadMember, i) => 
        <div className="playerIcon" key={i}>
        </div>
      )}
    </div>
  );
}
