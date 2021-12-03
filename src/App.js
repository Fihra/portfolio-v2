import React, { useReducer } from 'react';
import Navigate2 from './components/Navigate2';
import './App.css';
import FullContext from './components/FullContext';

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

const initialState = {
  selectedPage: "home",
  showButtons: true,
  showHeader: true
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "SELECTED_LINK":
      return {selectedPage: action.payload, showButtons: false, showHeader: false};
    case "GO_HOME":
      return {selectedPage: "home", showButtons: true, showHeader: true};
    default:
      return {selectedPage: "home", showButtons: true, showHeader: true};
  }
}

const App = () => {
  const [data, dispatch] = useReducer(reducer, initialState);

  return (
    <FullContext.Provider value={{data: data, dataDispatch: dispatch}}>
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navigate2/>
      </div>
    </ThemeProvider>
    </FullContext.Provider>
  );
}

export default App;
