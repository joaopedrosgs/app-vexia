
import React from 'react';

import { Grid, CircularProgress } from '@material-ui/core';
import StartupCard from '../components/StartupCard';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
const GET_ALL_STARTUPS = gql`
{
  allStartups {
    name,
    description,
    imageUrl,
    segment_id
  }
}
`;

const StartupCardList = (startups) => (
  startups.map((node) => {
    return (
      <Grid item xs={12} sm={4} key={node.segment_id}>
        <StartupCard image={node.imageUrl} name={node.name} description={node.description} segment_id={node.segment_id}></StartupCard>
      </Grid >
    );
  })

);
class Home extends React.Component {

  render() {
    return (
      <Grid container spacing={3} justify="center">

        <Query query={GET_ALL_STARTUPS}>
          {({ loading, error, data }) => {
            if (loading) {
              return <Grid item ><CircularProgress /></Grid>
                ;
            }
            if (error) {
              return `Error! ${error.message}`;
            }

            return StartupCardList(data.allStartups);
          }}
        </Query>
      </Grid >
    )
  }
};

Home.propTypes = {

};

export default Home;