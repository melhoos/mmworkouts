import React from 'react';
import './styles/App.scss';
import Footer from './components/footer';
import Home from './components/home';
import Admin from './components/admin';
import { Route, Switch } from 'wouter';

function App(): JSX.Element {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/exercises">
          {() => <div> Exercises coming soon </div>}
        </Route>
        <Route path="/exercisegenerator">
          {() => <div> Exercise generator coming soon </div>}
        </Route>
        <Route path="/whatsnext">
          {() => <div> What's next coming soon </div>}
        </Route>
        <Route path="/admin" component={Admin} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
