import React from 'react';
import './App.scss';
import Wrapper from './hoc/Wrapper/Wrapper';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import Panel from './containers/Panel/Panel';

const App = () => {
  return (
    <Provider store={ store }>
      <Wrapper componentName="App">
        <Panel />
      </Wrapper>
    </Provider>
  );
}

export default App;
