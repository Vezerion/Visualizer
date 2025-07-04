import {
  put,
  all,
  select,
  takeLatest
} from 'redux-saga/effects';

import { createArray } from "utils";

function* resetArray() {
  const arrayLength = yield select(({ arraySettings }) => arraySettings.arrayLength);

  yield all([
    put({ type: 'COMPARISON/RESET' }),
    put({ type: 'ARRAY/SET_ARRAY', value: createArray(arrayLength) })
  ]);
}

function* setArrayLength({ value }) {
  yield put({ type: 'ARRAY/SET_LENGTH', value })
  yield resetArray();
}

function* stopArray() {
  const array = yield select(({ arraySettings }) => arraySettings.array);

  yield all([
    put({ type: 'COMPARISON/RESET' }),
    put({ type: 'ARRAY/SET_ARRAY', value: array })
  ]);
}

export default [
  takeLatest('CONTROLS/RESET_ARRAY', resetArray),
  takeLatest('CONTROLS/SET_ARRAY_LENGTH', setArrayLength),
  takeLatest('CONTROLS/STOP_ARRAY', stopArray)
];