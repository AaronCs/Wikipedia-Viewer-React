import React from 'react';
import SearchBar from './SearchBar';
import ResultsContainer from './ResultsContainer';
import Messages from './Messages';

const App = () => {
  return(
    <div className='app__container'>
      <header className='hero'>
        <a className='hero-body' href="https://en.wikipedia.org">
          <h1 className='title is-1 has-text-centered'>Wikipedia Search Viewer</h1>
        </a>
      </header>
      <div className='section'>
        <SearchBar />
      </div>
      <div>
        <Messages />
      </div>
      <div className='section results__container'>
        <ResultsContainer/>
      </div>
      <footer className='section footer'>
        <div className='container'>
          <div className='has-text-centered'>
            <p>
              Built by Aaron Chan, 2017
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
