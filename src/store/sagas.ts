import { takeLatest, all, takeEvery } from 'redux-saga/effects';
import * as TYPES from '../types';

import { fetchPerson, fetchPlanets, fetchPersonWithChannel } from '../actions';

function* mysaga() {
  yield all([
    takeLatest(TYPES.FETCH_STAR_WARS_REQUEST,fetchPerson),
    takeLatest(TYPES.FETCH_STAR_WARS_PLANET_REQUEST, fetchPlanets),
    takeLatest(TYPES.FETCH_STAR_WARS_REQUEST_CHANNEL, fetchPersonWithChannel),
    // takeLatest(TYPES.QUEUE_CHANNEL_REQUESTS, fetchPersonWithChannel)
  ]);
}

export default mysaga