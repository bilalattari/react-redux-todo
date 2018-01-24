import React, { Component } from 'react';
import Routers from './Route';
import {Provider} from 'react-redux'
import {MuiThemeProvider} from 'material-ui';
import store from './store'
class App extends Component {
  render() {
    return (
      <Provider  store = {store} >
        <MuiThemeProvider>
      <Routers />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
