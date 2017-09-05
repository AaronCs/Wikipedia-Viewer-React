import React, { Component } from 'react';
import { connect } from 'react-redux';

import ResultsSingle from './ResultsSingle';
import ResultsRow from './ResultsRow';

// TODO: If searchResults is null, then do not display anything.

class ResultsContainer extends Component {
  getResults() {
      if(this.props.searchResults.length === 0) {
        return(
          <div>
            Search for something!
          </div>
        );
      }
      return this.props.searchResults.map( (data, i) => {
          // TODO: Add conditionals for Bulma tiles.
          let maxLength = 50;
          let tileSize = 3;
          if(data.desc.length > maxLength) {
            data.desc = data.desc.slice(0, maxLength + 1).concat('. . .');
            return (
            <div key={i} className={'tile is-parent'}>
              <ResultsSingle key={i} title={data.title} link={data.link} desc={data.desc}/>
            </div>
            );
          }
          return (
          <div key={i} className={'tile is-parent'}>
            <ResultsSingle key={i} title={data.title} link={data.link} desc={data.desc}/>
          </div>
          );
      });
  }
  renderResults() {
    // Only 3 results per row.
    // Make it so that long results are vertical.
    let results = this.getResults();
    let newResults = [];
    let currResults = [];
    let otherParentClasses = '';
    let otherChildClasses = '';
    for(let i = 0; i < results.length; ++i) {
      if(i % 3 == 0 && i != 0) {
        newResults.push(<ResultsRow key={i} elements={currResults}/>);
        currResults = [];
      }
      currResults.push(results[i]);
    }
    if(currResults.length > 0) {
      otherParentClasses = 'test';
    }
    newResults.push(
      <ResultsRow key={results.length} elements={currResults} otherParentClasses={otherParentClasses} 
      otherChildClasses={otherChildClasses} />
    );
    return newResults;
  }
  render() {
    return(
      <div className='container is-fluid'>
        {this.renderResults()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
  };
}

export default connect(mapStateToProps)(ResultsContainer);
