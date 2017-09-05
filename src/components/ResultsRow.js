import React, { Component } from 'react';

class ResultsRow extends Component {
  modifyChildren(el) {
    const className = `${el.props.className} ${this.props.otherChildClasses}`;
    const props = {
      className
    };
    return React.cloneElement(el, props);
  }
  renderChildren() {
    return this.props.elements.map((child) => {
      return this.modifyChildren(child);
    });
  }
  render() {
    const {otherParentClasses, elements } = this.props;
    return(
      <div className={`tile is-parent ${otherParentClasses}`}>
        {this.renderChildren()}
      </div>
    );
  }
}

export default ResultsRow;