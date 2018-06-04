import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme, AppBar, Toolbar, Grid, Button } from 'material-ui';
import Home from './home/Home';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={createMuiTheme({typography: {fontFamily: 'Quicksand'}})}>
        <Grid container style={{maxWidth: 1000, margin: '-8px auto'}}>
          <AppBar id="app-bar" position="static" elevation="0">
            <Toolbar>
              <div style={{flex: 'auto'}}/>
              <Button>Skills</Button>
              <Button>Projects</Button>
              <Button>Certificates</Button>
              <Button>Events</Button>
              <Button>Courses</Button>
              <Button>Profiles</Button>
            </Toolbar>
          </AppBar>
          <Home/>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App/>, document.body);
