import { call, put, take, fork, spawn, throttle, cancel, actionChannel } from 'redux-saga/effects';

import * as TYPES from '../types'
import log_state from '../selectors/starWars'

export const api = (url : string) => fetch(url).then(res => res.json())

export const fetchStarWarsRequest = () => ({type: TYPES.FETCH_STAR_WARS_REQUEST})

export const confirmFetchRequest = () => ({
  type: TYPES.CONFIRMATION
})

function* handleInput(input:unknown) {
  
}
function* watchInput() {
  yield throttle(500, 'INPUT_CHANGED', handleInput)
}

export const cancelRequest = () => ({
  type: TYPES.CANCELLD
})

export function * fetchPerson() {
  try {
    console.log('entered');
    yield take(TYPES.CONFIRMATION)
    console.log('passed confirmation')
    yield fork(api, 'https://dog.ceo/api/breeds/list/all')
    const image = yield spawn(api, 'https://dog.ceo/api/breeds/image/random')
    const person = yield call(api, 'https://swapi.co/api/people/');
    yield put({type: TYPES.FETCH_STAR_WARS_SUCCESS, data: person.results});
    yield log_state();
    yield take(TYPES.CANCELLD);
    yield cancel(image)
  } catch (e) {
    console.log("e ", e);

  }
};

export const fetchStarWarsPlanetRequest = () => {
  return {
    type: TYPES.FETCH_STAR_WARS_PLANET_REQUEST
  }
}

export  function* fetchPlanets() {
  try {
    const planet = yield call(api, 'https://swapi.co/api/planets/');
    yield put({
      type: TYPES.FETCH_STAR_WARS_PLANETS_SUCCESS,
      data: planet.results
    })
  } catch (error) {
 console.log("error ", error);
    
  }
};



export const fetchChannelRequests = () => {
  return {
    type: TYPES.FETCH_STAR_WARS_REQUEST_CHANNEL
  }
};


export const queueChannelRequests = () => {
  return {
    type: TYPES.QUEUE_CHANNEL_REQUESTS
  }
};


export function* fetchPersonWithChannel(){//takeOneAtMost
  const chan = yield actionChannel(TYPES.QUEUE_CHANNEL_REQUESTS);
  for (let i = 1; i >= 1; i++) {
    yield take(chan)
    yield call(api, 'https://swapi.co/api/people/')
    yield put({type: TYPES.QUEUE_CHANNEL_REQUESTS_SUCCESS, data: i})
  }
};


export function* fetchForkedPerson() {
  try {
     const person = yield call(api, 'https://swapi.co/api/people/')
     yield put({type: TYPES.FETCH_STAR_WARS_SUCCESS, data: person.results})
  } catch (e) {
      console.log(e)
  }
}

export function* forkedFetchPerson() {
  const syncPersons = yield fork(fetchForkedPerson)
  yield take('STOP_BACKGROUND_FETCH')
  yield cancel(syncPersons)
}

