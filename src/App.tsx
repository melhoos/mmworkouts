import React from 'react';
import './styles/App.scss';
import Footer from './components/footer';
import Header from './components/header';
import Exercises from './components/exercises/exercises';
// import Home from './components/home';
// import Admin from './components/admin';
// import { Route, Switch } from 'wouter';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Exercises />
      <Footer />
    </div>
  );
}

export default App;
