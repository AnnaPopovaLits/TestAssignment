import { combineReducers, Reducer } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import persistReducer from 'redux-persist/lib/persistReducer';
import { PersistConfig } from 'redux-persist';

import listModule, { IListState } from './list';

export interface IApplicationState {
  list: IListState;
}

const rootPersistConfig: PersistConfig<IApplicationState> = {
  key: 'root',
  timeout: 10000,
  version: 1,
  storage: AsyncStorage,
  blacklist: [],
  whitelist: [],
};

const reducers: Reducer<IApplicationState> = combineReducers<IApplicationState>(
  {
    list: listModule.reducer,
  },
);

export default persistReducer(rootPersistConfig, reducers);
