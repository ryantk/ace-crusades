import React from 'react';
import './App.css';

import Grid from './features/grid/Grid';
import PlayerStatus from './features/LeftSidebar';

function App() {
  return (
    <div className="App">
      <PlayerStatus />
      <Grid />
    </div>
  );
}

export default App;
