import React, { Component } from 'react';
import { connect } from 'react-redux';

import ResultsSingle from './ResultsSingle';

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
      // TODO: Return a mapping.
      return this.props.searchResults.map( (data, i) => {
          return <ResultsSingle key={i} title={data.title} link={data.link} desc={data.desc}/>;
      });
  }
  render() {
    return(
        <div className='results__container'>
          {this.getResults()}
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
