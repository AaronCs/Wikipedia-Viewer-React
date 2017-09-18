import React, { Component } from 'react';

// TODO: Columns is for the number of singles displayed.

class ResultsColumn extends Component {
  modifyChildren(el) {
    const className = `${el.props.className} ${this.props.otherChildClasses}`;
    const props = {
      className
    };
    return React.cloneElement(el, props);
  }
  renderChildren() {
    if(this.props.otherChildClasses != null) {
      return this.props.elements.map((child) => {
        return this.modifyChildren(child);
      });
    }
    return this.props.elements;
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

export default ResultsColumn;