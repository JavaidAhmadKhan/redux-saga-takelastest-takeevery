import { takeLatest, put } from "redux-saga/effects";

export function* onIncrement() {
  yield console.log("I am incremented");

  yield put({ type: "INCREMENT_FROM_SAGA" });
}

export function* incrementSaga() {
  yield takeLatest("INCREMENT", onIncrement);
}
