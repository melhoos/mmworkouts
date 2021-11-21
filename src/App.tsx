import React from 'react';
import './styles/App.scss';
import Footer from './components/footer';
import Header from './components/header';
import SearchExercises from './components/searchexercises/searchexercises';
// import Workouts from './components/workouts/workouts';
// import AddExercise from './components/addexercise/addExercise';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <SearchExercises />
      {/* <AddExercise /> */}
      {/* <Workouts /> */}
      <Footer />
    </div>
  );
}

export default App;
