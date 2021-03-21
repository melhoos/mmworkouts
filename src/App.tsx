import React from 'react';
import './styles/App.scss';
import Logo from './components/logo';
import About from './components/about';
import Actions from './components/actions';
import Footer from './components/footer';

function App(): JSX.Element {
  return (
    <div className="App">
      <header>
        <Logo />
      </header>
      <main>
        <About />
        <Actions />
      </main>
      <Footer />
    </div>
  );
}

export default App;
