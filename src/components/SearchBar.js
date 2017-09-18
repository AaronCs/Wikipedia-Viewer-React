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
            <form onSubmit={this.handleSearch.bind(this)}>
                <div className='field has-addons has-addons-centered'>
                    <div className='control'>
                        <input placeholder='Search...' className='input' onChange={this.handleInputChange.bind(this)} />
                    </div>
                    <div className='field is-grouped'>
                        <div className='control'>
                            <button type='submit' className='button'>Search</button>
                        </div>
                        <div className='control'>
                            <button type='button' className='button is-danger' onClick={this.handleClick.bind(this)}>Clear</button>
                        </div>
                    </div>
                </div>
            </form>
        </Throttle>
      );
    }
    // TODO: Don't forget to prevent default.
}

export default connect(null, { search, clearResults })(SearchBar);
