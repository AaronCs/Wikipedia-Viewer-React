import React, { Component } from 'react';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
    };
  }
  handleClick() {
    this.setState((prevState, props) => {
      return {
        hidden: !prevState.hidden,
      };
    });
  }
  renderMessage() {
    return (
      <article className='message is-primary column'>
        <div className='message-header'>
          <p>Important!</p>
          <button className='delete' aria-label='delete' onClick={this.handleClick.bind(this)}></button>
        </div>
        <div className='message-body'>
          Message
        </div>
      </article>
    );
  }
  render() {
    return (
      <div className='container'>
        <div className='columns'>
          <div className='column'></div>
          { this.state.hidden ? null : this.renderMessage() }
          <div className='column'></div>
        </div>
      </div>
    );
  }
}

export default Messages;