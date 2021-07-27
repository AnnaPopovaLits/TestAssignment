import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import reduxStore from './src/modules/store';
import HomeScreen from './src/screens/main/HomeScreen';

const { store, persistor } = reduxStore;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <HomeScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
