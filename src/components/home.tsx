import React from 'react';
import Logo from './logo';
import About from './about';
import Actions from './actions';

function Home(): JSX.Element {
  return (
    <>
      <header>
        <Logo />
      </header>
      <main>
        <About />
        <Actions />
      </main>
    </>
  );
}

export default Home;
