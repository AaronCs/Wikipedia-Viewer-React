import React from 'react';
import SearchBar from './SearchBar';
import ResultsContainer from './ResultsContainer';

const App = () => {
  return(
    <div className=''>
      <header className='app__header--center'>
        <a href="https://en.wikipedia.org">
          <h1 className='title'>Wikipedia Search Viewer</h1>
        </a>
      </header>
      <div className='section'>
        <SearchBar />
      </div>
      <div className='section'>
        <ResultsContainer/>
      </div>
    </div>
  );
};

export default App;
