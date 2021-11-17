
import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Footer from './components/Footer/Footer';


const App = () => {
  return(
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Intro} />
        <Route path="/home" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
      <Footer/>
    </Container>
  </BrowserRouter>
  )
}

export default App;