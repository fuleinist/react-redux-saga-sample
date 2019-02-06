import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {

  const json = yield fetch('https://api.github.com/search/repositories?q=${payload.query}&sort=stars')
    .then(response => response.json(), );
   console.log(json.items)
  yield put({ type: "NEWS_RECEIVED", json: json.items, });
}

function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
