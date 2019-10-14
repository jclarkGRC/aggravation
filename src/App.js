import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import rootReducer from './reducers/index';
import routes from './routes';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {main: '#212121'},
    type: 'dark'
  }
});

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            {routes}
          </Provider>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;