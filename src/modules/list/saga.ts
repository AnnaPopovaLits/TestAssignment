import { call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { AxiosResponse } from 'axios';

import { fetchListRequest } from './requests';
import { IListItem } from './interface';
import { getList } from './actions';

function* getListWorker(): SagaIterator {
  try {
    const response: AxiosResponse<Array<IListItem>> = yield call(fetchListRequest);
    yield put(getList.done({ result: response?.data }));
  } catch (error) {
    yield put(getList.failed({ error: error?.message }));
  }
}

export default function* root(): SagaIterator {
  yield takeLatest(getList.started, getListWorker);
}
