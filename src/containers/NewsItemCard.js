import React from 'react';
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    minWidth: 200,
    margin: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  theCard: {
      display: 'flex',
      flexWrap: 'wrap',
  },
};

let NewsItemCard = ({ thenews, classes }) => (
    thenews?
    <div className={classes.theCard} >{thenews.map(x => <Card className={classes.card} key={x.id}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Git of the day
        </Typography>
        <Typography variant="h5" component="h4">
            {x.description.slice(0, 50)}
        </Typography>
        <Typography color="textSecondary">
          adjective
        </Typography>
      </CardContent>   
        <CardActions>
            <a href={x.url} target="_blank"><Button size="small">Learn More</Button></a>
        </CardActions></Card>)}</div>:
    null
)

const mapStateToProps = (state) => ({
  thenews: state.newslist,
})

NewsItemCard = connect(
  mapStateToProps,
  null
)(NewsItemCard)

export default withStyles(styles)(NewsItemCard);
