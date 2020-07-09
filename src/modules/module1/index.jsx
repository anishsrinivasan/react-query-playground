import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { openSnackbar } from '../../components/snackbar/index';
import styles from './index.module.css';

const cssStyles = theme => ({
  root: {}
});

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    openSnackbar({ message: 'Init', variant: 'success' });
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root}>
          <Typography gutterBottom variant='h5'>
            Cron
          </Typography>
        </div>
        <Divider variant='middle' />
        <div className={classes.body}>
          <p className={styles.myClass}>Hello</p>
        </div>
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.shape.isRequired
};

export default withStyles(cssStyles)(Index);
