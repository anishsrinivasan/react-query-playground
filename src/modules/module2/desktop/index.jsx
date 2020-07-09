import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {}
});

class Desktop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return <React.Fragment>Desktop</React.Fragment>;
  }
}

Desktop.propTypes = {
  classes: PropTypes.shape.isRequired
};

export default withStyles(styles)(Desktop);
