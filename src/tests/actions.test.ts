import { call, put, take, fork, cancel } from 'redux-saga/effects'
import { createMockTask } from '@redux-saga/testing-utils';
import { fetchPerson, api, fetchForkedPerson } from '../actions'
import * as TYPES from '../types'
import { forkedFetchPerson } from '../actions/index';

describe('fetchPerson', () => {
  const personGen = fetchPerson()
  it('should hit api', () => {
    personGen.next();
    expect(personGen.next().value).toEqual(fork(api, 'https://dog.ceo/api/breeds/list/all'))
  });

  it('on success dispatch success action', () => {
    const person = {results: []}
    personGen.next();
    personGen.next();
    expect(personGen.next(person).value)
        .toEqual(put({type: TYPES.FETCH_STAR_WARS_SUCCESS, data: person.results}))
})
})

describe('forkedFetchPerson', () => {
  const forkedGen = forkedFetchPerson();

  it('forks the service', () => {
    const expectedYield = fork(fetchForkedPerson)
    expect(forkedGen.next().value).toEqual(expectedYield)
  });

  it('waits for stop action and then cancels the service', () => {
    const mockTask = createMockTask()

    const expectedTakeYield = take('STOP_BACKGROUND_FETCH')
    expect(forkedGen.next(mockTask).value).toEqual(expectedTakeYield)

    const expectedCancelYield = cancel(mockTask)
    expect(forkedGen.next().value).toEqual(expectedCancelYield)
  })

})
