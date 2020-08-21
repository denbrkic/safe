import React from 'react';
import './App.scss';
import Wrapper from './hoc/Wrapper/Wrapper';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import ControlPanel from './containers/ControlPanel/ControlPanel';

function App() {
  return (
    <Provider store={store}>
      <Wrapper componentName="App">
        <ControlPanel />
      </Wrapper>
    </Provider>
  );
}

export default App;
