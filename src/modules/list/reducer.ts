import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { IListState } from './interface';
import { getList } from './actions';

const INITIAL_STATE: IListState = {
  data: [],
  loading: false,
  error: null,
};

export default reducerWithInitialState<IListState>(INITIAL_STATE)
  .case(getList.started, state => {
    return {
      ...state,
      loading: true,
    };
  })
  .case(getList.done, (state, { result }) => {
    return {
      ...state,
      data: result,
      loading: false,
    };
  })
  .case(getList.failed, (state, { error }) => {
    return {
      ...state,
      error,
      loading: false,
    };
  });
