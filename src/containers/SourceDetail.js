import React, { Component } from 'react';

class SourceDetailView extends Component {
  render() {
    return (
        <div>
            <h3>Source Detail View</h3>
            <div>ID: {this.props.match.params.sourceId}</div>
        </div>
    );
  }
}

export default SourceDetailView;