import React from 'react';
import './styles/App.scss';
import Footer from './components/footer';
import Header from './components/header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Main from './components/main';

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
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
