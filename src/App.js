import React from 'react';
import Header from './components/Header';
import Navigate from './components/Navigate';
import Footer from './components/Footer';
import './App.css';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      light: '#0066ff',
      main: '#a3e8ff',
      contrastText: '#ffcc00',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header/>
        <Navigate/>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
