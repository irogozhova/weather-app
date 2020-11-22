import { all, call, put, takeLatest } from "redux-saga/effects";
import { getWeatherData } from "api/requests";

function* getDataSaga({ value }) {
  try {
    const data = yield call(getWeatherData, value);
    yield put({ type: "weather/getDataSuccess", data });
  } catch (e) {
    const errorStatus = e.response?.status;
    yield put({
      type: "weather/getDataFailure",
      errorStatus: errorStatus || "no status",
    });
  }
}

function* weatherSagas() {
  yield all([takeLatest("weather/getData", getDataSaga)]);
}

export default weatherSagas;
