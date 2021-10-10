import React from 'react';
import './App.css';
import Header from './components/Header';
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#E0C097',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Header />
    </div>
  );
}

export default App;
