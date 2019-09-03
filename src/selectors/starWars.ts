import {select} from "redux-saga/effects";

export default function * log_state() {
  const selector = yield select(state => state.starWars)
  console.log("selector ", selector);
};