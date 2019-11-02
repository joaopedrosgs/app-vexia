import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { CardMedia, CardActionArea } from '@material-ui/core';
import { Link } from "react-router-dom";


class StartupCard extends React.Component {
  render() {
    return (
      <Card>
        <CardActionArea component={Link} to={"/startup/" + this.props.segment_id}>
          <CardMedia
            component="img"
            height="140"
            image={this.props.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card >);
  }
};

StartupCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  segment_id: PropTypes.string

};

export default StartupCard;