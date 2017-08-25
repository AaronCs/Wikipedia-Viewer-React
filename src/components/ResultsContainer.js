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
      // TODO: Limit description word limit.
      return this.props.searchResults.map( (data, i) => {
          let maxLength = 50;
          if(data.desc.length > maxLength) {
            data.desc = data.desc.slice(0, maxLength + 1).concat('. . .');
          }
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
