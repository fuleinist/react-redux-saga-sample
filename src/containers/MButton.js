import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

// function MButton( props ) {
  // const { classes, getNews } = props;

  // return (
    // <Button variant="contained" color="primary" className={classes.button} onClick={props.getNews}>
      // Press to see News
    // </Button>
    // );
// }

let MButton = ( { classes, getNews } ) => (
    <Button variant="contained" color="primary" className={classes.button} onClick={getNews}>
      Press to see News
    </Button>
)

const mapDispatchToProps = {
  getNews: getNews,
};

MButton = connect(
  null,
  mapDispatchToProps,
)(MButton);

export default withStyles(styles)(MButton);
