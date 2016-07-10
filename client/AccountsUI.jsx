import React from 'react';
import ReactDOM from 'react-dom';

class AccountsUI extends React.Component {

  componentDidMount(){
    this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
  }

  componentWillUnmount() {
    blaze.remove(this.view);
  }

  render() {
    return (
      <span ref="container" />
    );
  }

}

export default AccountsUI;
