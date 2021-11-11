import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import './App.css';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { defaulColors } from './styles/defaultColors';
import { green } from '@mui/material/colors';
import { BrowserRouter } from 'react-router-dom';
import { createStyles, makeStyles } from '@mui/styles';

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

const useStyles = makeStyles(() => createStyles({
  app: {
    maxWidth: '1580px',
    marginLeft: 'auto',
    marginRight: 'auto',
    background: 'white'
  },
}));


function App() {
  const classes=useStyles();
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <div className={classes.app}>
          <Dashboard/>
        </div>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
