import React from 'react';

class ResolutionsForm extends React.Component {
  addResolution(e) {
    e.preventDefault();
    const resolution = this.refs.resolution;
    const text = resolution.value.trim();
    if (text) {
      Meteor.call('addResolution', text, (error, data) => {
        if (error) {
          Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o' );
        } else {
          resolution.value = '';
        }
      });
    }
  }
  render() {
    return (
      <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
        <input type="text" ref="resolution" placeholder="Finish React Meteor Series" />
      </form>
    );
  }

}

export default ResolutionsForm;
