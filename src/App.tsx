import React from 'react';
import './styles/App.scss';
import Footer from './components/footer';
import Header from './components/header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Recipies from './components/recipie/recipes';
//import WorkoutGenerator from './components/workoutgenerator/workoutgenerator';
// import SearchExercises from './components/searchexercises/searchexercises';
// import Workouts from './components/workouts/workouts';
// import AddExercise from './components/addexercise/addExercise';

function App(): JSX.Element {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#182328',
      },
      secondary: {
        main: '#12535a',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Recipies />
        {/* <WorkoutGenerator /> */}
        {/* <SearchExercises /> */}
        {/* <AddExercise /> */}
        {/* <Workouts /> */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
