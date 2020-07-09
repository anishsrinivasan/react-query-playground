import React from 'react';
import Box from '@material-ui/core/Box';
// import API from '../../middleware/api';
import Mobile from './mobile';
import Desktop from './desktop';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
          <Desktop />
        </Box>
        <Box display={{ xs: 'block', sm: 'block', md: 'none' }}>
          <Mobile />
        </Box>
      </React.Fragment>
    );
  }
}

export default Index;
