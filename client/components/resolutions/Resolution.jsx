import React from 'react';

class Resolution extends React.Component {
  toggledChecked() {
    Meteor.call('toggleResolution', this.props.resolution);
  }
  deleteResolution() {
    Meteor.call('deleteResolution', this.props.resolution);
  }
  render() {
    const resolution = this.props.resolution;
    const resolutionClass = resolution.complete ? "checked" : "";
    const status = resolution.complete ? <span className="completed">Completed</span> : '';
    if (resolution) {
      return (
        <li className={resolutionClass}>
          <input
            type="checkbox"
            readOnly={true}
            checked={resolution.complete}
            onClick={this.toggledChecked.bind(this)}/>
          {resolution.text}
          {status}
          <button className="btn-cancel" onClick={this.deleteResolution.bind(this)}>&times;</button>
        </li>
      );
    } else {
      return '';
    }
  }

}

export default Resolution;
