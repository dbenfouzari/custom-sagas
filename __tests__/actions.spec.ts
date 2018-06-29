import { createRequestTypes } from '../src/actions';

describe('createRequestTypes', () => {
  it('should return 9', () => {
    expect(createRequestTypes('TEST')).toEqual({
      'REQUEST': 'TEST_REQUEST',
      'SUCCESS': 'TEST_SUCCESS',
      'FAILURE': 'TEST_FAILURE',
    })
  });
});
