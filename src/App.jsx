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
import Startup from './routes/Startup';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Box pt={3} pb={10}>
        <Container maxWidth="lg" >
          <Switch>
            <Route path="/ranking" component="Ranking" />
            <Route path="/startup/:id" component={Startup} />
            <Route path="/" component={Home} />
          </Switch>
        </Container>
      </Box>
      <BottomMenu>
      </BottomMenu>
    </Router>
  );
}

export default App;