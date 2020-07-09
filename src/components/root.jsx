import React from 'react';
import Drawer from './navigation';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return <Drawer />;
  }
}
export default Root;
