import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { levelDefinitions } from './grid/levels';
import "./LeftSidebar.css";
import { getSelectedSquadMember, selectSquadMember } from './selection';

export default function LeftSidebar() {
  const dispatch = useDispatch();

  const selectedSquadMember = useSelector(getSelectedSquadMember);

  const levelNumber = 1;

  const { squad } = levelDefinitions[levelNumber];

  const handleSquadMemberSelect = (number: number) => () => {
    dispatch(selectSquadMember(number + 1));
  }

  return (
    <div id="leftSidebar">
      {squad.map((squadMember, i) => 
        <div 
          className={`playerIcon ${selectedSquadMember === i+1 ? 'selected' : ''}`} 
          key={i} 
          onClick={handleSquadMemberSelect(i)}
        >
          <span className="playerName">{squadMember.name}</span>
        </div>
      )}
    </div>
  );
}
