
import React from 'react';

import { Grid, CircularProgress, Avatar, Typography, Box, Container, Paper } from '@material-ui/core';
import StartupCard from '../components/StartupCard';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Rating from '@material-ui/lab/Rating';

const GET_STARTUP = gql`
query getStartup($id:ID!){
    Segment(id:$id) {
        name,
        Startups{
            name,
            description,
            annualReceipt,
            imageUrl,
        }
  }
}
`;

class Startup extends React.Component {

    render() {
        console.log(this.props.match.params.id);
        return (
            <Grid container col={1} spacing={3} justify="center">

                <Query query={GET_STARTUP} variables={{ id: this.props.match.params.id }}>

                    {({ loading, error, data }) => {
                        if (loading) return <Grid item ><CircularProgress /></Grid>;
                        if (error) return `Error! ${error}`;

                        return (
                            <React.Fragment>
                                <Grid item xs={12} >
                                    <div style={{ borderRadius: "100%", margin: "0 auto", height: 200, width: 200, backgroundImage: `url(${data.Segment.Startups[0].imageUrl})`, backgroundPosition: "center center", backgroundSize: "contain" }}></div>
                                </Grid>
                                <Grid item xs={12} ><Typography align="center" variant="h4" >{data.Segment.Startups[0].name}</Typography></Grid>
                                <Grid item xs={12} ><Typography align="center" variant="h5">{data.Segment.name}</Typography></Grid>
                                <Grid item xs={12} ><Paper><Box p={3}><Typography variant="bold">{data.Segment.Startups[0].description}</Typography></Box></Paper></Grid>
                                <Grid item xs={12} ><Paper><Box p={3} ><Typography>Proposta</Typography>
                                    <Rating
                                        name="simple-controlled"
                                    />
                                </Box></Paper>

                                </Grid>
                            </React.Fragment >
                        );
                    }}
                </Query>
            </Grid >)
    }
};


export default Startup;