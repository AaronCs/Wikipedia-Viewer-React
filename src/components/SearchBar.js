import React, { Component } from 'react';
import { Throttle } from 'react-throttle';
import { connect } from 'react-redux';
import { search } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            lastSearch: '',
        };
    }
    handleInputChange(e) {
        e.preventDefault();
        this.setState({ input: e.target.value });
    }
    handleSearch(e) {
        e.preventDefault();
        if(this.state.input !== this.state.lastSearch && this.state.input !== ' ') {
            this.props.search(this.state.input);
            this.setState({lastSearch: this.state.input});
        }
    }
    render() {
        // Possibly put a throttle on input, too?
      return(
          <div>
              <Throttle time='200' handler='onSubmit'>
                  <form onSubmit={this.handleSearch.bind(this)}>
                    <input onChange={this.handleInputChange.bind(this)} />
                    <button type='submit'>Search</button>
                  </form>
              </Throttle>
          </div>
      );
    }
    // TODO: Don't forget to prevent default.
}

export default connect(null, { search })(SearchBar);
