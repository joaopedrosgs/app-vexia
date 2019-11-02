import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './custom.css';
import StartupCard from './components/StartupCard';
import Home from './routes/Home';
import {
  Container,
  CssBaseline,
  Box
} from '@material-ui/core';
import BottomMenu from './components/BottomMenu';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Box pt={3} pb={10}>
        <Container maxWidth="lg" >
          <Switch>
            <Route path="/about" >
              <StartupCard image="https://picsum.photos/200"
                name="teste"
                description="teste" > </StartupCard>
            </Route>
            <Route path="/users" >
              <StartupCard image="https://picsum.photos/200"
                name="teste"
                description="teste" > </StartupCard>
            </Route>
            <Route path="/" >
              < Home > </Home>
            </Route>
          </Switch>
        </Container>
      </Box>
      <BottomMenu>
      </BottomMenu>
    </Router>
  );
}

export default App;