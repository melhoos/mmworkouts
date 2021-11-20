import React from 'react';
import './styles/App.scss';
import Footer from './components/footer';
import Header from './components/header';
import Exercises from './components/exercises/exercises';
// import AddExercise from './components/addexercise/addExercise';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Exercises />
      {/* <AddExercise /> */}
      <Footer />
    </div>
  );
}

export default App;
