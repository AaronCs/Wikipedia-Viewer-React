import React, { Component } from 'react';
import { Throttle } from 'react-throttle';
import { connect } from 'react-redux';
import { search, clearResults } from '../actions/index';

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
    handleClick() {
        this.props.clearResults();
    }
    render() {
        // Possibly put a throttle on input, too?
      return(
        <Throttle time='200' handler='onSubmit'>
            <form className='searchbar__form--center' onSubmit={this.handleSearch.bind(this)}>
                <div className='searchbar__input--center'>
                    <input onChange={this.handleInputChange.bind(this)} />
                    <button type='submit'>Search</button>
                    <button type='button' onClick={this.handleClick.bind(this)}>Clear</button>
                </div>
            </form>
        </Throttle>
      );
    }
    // TODO: Don't forget to prevent default.
}

export default connect(null, { search, clearResults })(SearchBar);
