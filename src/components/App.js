import React from 'react';
import SearchBar from './SearchBar';
import ResultsContainer from './ResultsContainer';
import Messages from './Messages';

const App = () => {
  return(
    <div>
      <header className='hero'>
        <a className='hero-body' href="https://en.wikipedia.org">
          <h1 className='title is-1 has-text-centered'>Wikipedia Search Viewer</h1>
        </a>
      </header>
      <div className='section'>
        <SearchBar />
      </div>
      <div className='section'>
        <ResultsContainer/>
      </div>
      <div>
        <Messages />
      </div>
    </div>
  );
};

export default App;
