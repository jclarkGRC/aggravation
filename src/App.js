import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import rootReducer from './reducers/index';
import routes from './routes';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <div className="App">
          <Provider store={store}>{routes}</Provider>
      </div>
    );
  }
}

export default App;