import { IApplicationState } from '../reducers';

export const listSelector = (state: IApplicationState) =>
  state.list.data;

export const listLoaderSelector = (state: IApplicationState) =>
  state.list.loading;

export const listErrorSelector = (state: IApplicationState) =>
  state.list.error;
