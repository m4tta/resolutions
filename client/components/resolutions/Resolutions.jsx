import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Resolution from './Resolution';
import ResolutionsForm from './ResolutionsForm';

ResolutionsStore = new Mongo.Collection('resolutions');

class Resolutions extends TrackerReact(React.Component) {
  constructor() {
    super();
    this.state = {
      subscription: {
        resolutions: Meteor.subscribe('userResolutions'),
      },
    }
  }

  componentWillUnmount() {
    this.state.subscription.resolutions.stop();
  }

  resolutions() {
    return ResolutionsStore.find().fetch();
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
        <h1>My Resolutions {Session.get('test')}</h1>
        <ResolutionsForm/>
        <ReactCSSTransitionGroup
          component="ul"
          className="resolutions"
          transitionName="resolutionLoad"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={400}>
          {this.resolutions().map( (resolution) => {
            return <Resolution resolution={resolution} key={resolution._id}/>
          })}
        </ReactCSSTransitionGroup>
      </ReactCSSTransitionGroup>
    )
  }
}

export default Resolutions;
