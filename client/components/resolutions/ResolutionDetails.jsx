import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

class ResolutionDetails extends TrackerReact(React.Component) {
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

  resolution() {
    return ResolutionsStore.findOne(this.props.id);
  }

  render() {
    let res = this.resolution();
    if (!res) {
      return <h1>Loading...</h1>;
    }

    return (
      <div>
        <h1>{res.text}</h1>
      </div>
    );
  }

}

export default ResolutionDetails;
