import React from 'react';
import SearchBar from './SearchBar';
import ResultsContainer from './ResultsContainer';

const App = () => {
  return(
    <div className='app__grid'>
      <header className='grid__col--2 grid__row--1'>
        <a href="https://en.wikipedia.org">
          <h1>Wikipedia Search Viewer</h1>
        </a>
      </header>
      <div className='grid__col--2 grid__row--2 app__search'>
        <SearchBar />
      </div>
      <div className='grid__col--2 grid__row--2 app__results'>
        <ResultsContainer/>
      </div>
    </div>
  );
};

export default App;
