import React from 'react';
import './App.css';
import {actions,originals,romance,trending,horror} from './url'
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={trending} title='Trending' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={actions} title='Action' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
    </div>
  );
}

export default App;
