import React from 'react';
import TodoApp from './app/screens/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <TodoApp />
      </PersistGate>
    </Provider>
  );
}
