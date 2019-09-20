/**
 * Tests for HomePage sagas
 */

import { takeLatest } from 'redux-saga/effects';

import { LOAD_REPOS } from 'containers/App/constants';

import githubData, { getRepos } from '../saga';

describe('githubDataSaga Saga', () => {
  const githubDataSaga = githubData();

  it('should start task to watch for LOAD_REPOS action', () => {
    const takeLatestDescriptor = githubDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_REPOS, getRepos));
  });
});
