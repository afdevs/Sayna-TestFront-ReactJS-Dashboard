import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import './App.css';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { defaulColors } from './styles/defaultColors';
import { green } from '@mui/material/colors';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: defaulColors.primary
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <div className="App">
          <Dashboard/>
        </div>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
