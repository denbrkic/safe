import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import ControlPanel from './containers/ControlPanel/ControlPanel';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ControlPanel />
      </div>
    </Provider>
  );
}

export default App;
