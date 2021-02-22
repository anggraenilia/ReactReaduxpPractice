import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { Calculation1 } from './pages';
import store from './store/store';

const MainApp = () => {
  const stateGlobal = useSelector(state => state)
  console.log("Nilai global: ", stateGlobal)
  return (
    <Calculation1 />
  )

};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}

export default App;

