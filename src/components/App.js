import React from 'react';
import SearchBar from './SearchBar';
import ResultsContainer from './ResultsContainer';

const App = () => {
  return(
    <div>
      <header>
        <a href="https://en.wikipedia.org">
          <h1>Wikipedia Search Viewer</h1>
        </a>
      </header>
      <div>
        <SearchBar />
      </div>
      <div>
        <ResultsContainer/>
      </div>
    </div>
  );
};

export default App;
