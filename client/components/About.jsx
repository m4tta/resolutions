import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class About extends React.Component {
  setVar() {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="route"
        transitionEnterTimeout={600}
        transitionAppearTimeout={600}
        transitionLeaveTimeout={400}
        transitionAppear={true}>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ut deserunt hic itaque
          amet. Nulla tempora eveniet vero laboriosam ipsam quaerat aliquid asperiores fugit? Tempore repellat
          dolor eius molestias sequi.</p>
        <button onClick={this.setVar}>Sign Up</button>
      </ReactCSSTransitionGroup>
    );
  }

}

export default About;
