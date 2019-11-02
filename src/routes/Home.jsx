
import React from 'react';

import { Grid } from '@material-ui/core';
import StartupCard from '../components/StartupCard';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

class Home extends React.Component {

  render() {

    return (
      <Grid container spacing={3}>

        <Grid item xs={12} sm={4}>
          <StartupCard image="https://picsum.photos/200" name="teste" description="teste"></StartupCard>
        </Grid >
        <Grid item xs={12} sm={4}>
          <StartupCard image="https://picsum.photos/200" name="teste" description="teste"></StartupCard>
        </Grid >        <Grid item xs={12} sm={4}>
          <StartupCard image="https://picsum.photos/200" name="teste" description="teste"></StartupCard>
        </Grid >        <Grid item xs={12} sm={4}>
          <StartupCard image="https://picsum.photos/200" name="teste" description="teste"></StartupCard>
        </Grid >        <Grid item xs={12} sm={4}>
          <StartupCard image="https://picsum.photos/200" name="teste" description="teste"></StartupCard>
        </Grid >        <Grid item xs={12} sm={4}>
          <StartupCard image="https://picsum.photos/200" name="teste" description="teste"></StartupCard>
        </Grid >        <Grid item xs={12} sm={4}>
          <StartupCard image="https://picsum.photos/200" name="teste" description="teste"></StartupCard>
        </Grid >        <Grid item xs={12} sm={4}>
          <StartupCard image="https://picsum.photos/200" name="teste" description="teste"></StartupCard>
        </Grid >        <Grid item xs={12} sm={4}>
          <StartupCard image="https://picsum.photos/200" name="teste" description="teste"></StartupCard>
        </Grid >
      </Grid>
    );
  }
};

Home.propTypes = {

};

export default Home;