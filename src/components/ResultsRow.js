import React, { Component } from 'react';

// TODO: Rows is for the number of columns.

class ResultsRow extends Component {
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
    const { otherParentClasses, elements, tileSizing } = this.props;
    // 2nd layer controls the sizing.
    return(
      <div className='tile is-ancestor'>
        <div className={`tile ${tileSizing}`}>
          <div className={`tile is-parent ${otherParentClasses}`}>
            {this.renderChildren()}
          </div>
        </div>
      </div>
    );
  }
}

export default ResultsRow;