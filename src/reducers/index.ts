import {combineReducers} from 'redux'
import * as TYPES from '../types'
import {Person, Planet} from '../types/type'

const initialState = {
  people: [],
  planet: [],
  count: 0
}
type action_type = {data:object,type: string};

const handleStarWarsFetchSuccess = (state:{people: Array<Person>}, action: action_type) => {
  return {
    ...state,
    people: action.data
  }
}

const handleStarWarsPlanetFetchSuccess = (state:{people: Array<Planet>}, action: action_type) => {
  return {
    ...state,
    planet: action.data
  }
}

const handleStarWarsCountFetchSuccess = (state:any, action: action_type) => {
  return {
    ...state,
    count: action.data
  }
}

const starWars = (state = initialState, action:action_type) => {
  const handlers:{[index:string]:Function} = {
    [TYPES.FETCH_STAR_WARS_SUCCESS]: handleStarWarsFetchSuccess,
    [TYPES.FETCH_STAR_WARS_PLANETS_SUCCESS]: handleStarWarsPlanetFetchSuccess,
    [TYPES.QUEUE_CHANNEL_REQUESTS_SUCCESS]: handleStarWarsCountFetchSuccess,
  }
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

const rootReducer = combineReducers({starWars})

export default rootReducer