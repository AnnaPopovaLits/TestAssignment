import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { createStore, applyMiddleware, Store } from 'redux';
import { persistStore } from 'redux-persist';

import sagas from './sagas';
import reducers, { IApplicationState } from './reducers';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import { AnyAction } from 'typescript-fsa';
import { Persistor } from 'redux-persist/es/types';

const sagaMiddleware: SagaMiddleware<object> = createSagaMiddleware();

const store: Store<IApplicationState & PersistPartial, AnyAction>  = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

const persistor: Persistor = persistStore(store);

sagaMiddleware.run(sagas);

export default { store, persistor };
