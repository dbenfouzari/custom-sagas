import {action, actionTypesFor, createRequestTypes} from '../src/actions';

describe('createRequestTypes', () => {
  it('should return 9', () => {
    expect(createRequestTypes('TEST')).toEqual({
      'REQUEST': 'TEST_REQUEST',
      'SUCCESS': 'TEST_SUCCESS',
      'FAILURE': 'TEST_FAILURE',
    });

    expect(createRequestTypes('')).toEqual({
      'REQUEST': '_REQUEST',
      'SUCCESS': '_SUCCESS',
      'FAILURE': '_FAILURE',
    })
  });
});

describe('actions', () => {
  it('should return ok', () => {
    expect(action('TEST_REQUEST', { id: 123 })).toEqual({
      type: 'TEST_REQUEST',
      id: 123
    })
  });
  it('should return ok without payload', () => {
    expect(action('TEST_REQUEST')).toEqual({
      type: 'TEST_REQUEST'
    })
  });
});

describe('actionTypesFor', () => {
  it('should return ok', () => {
    expect(actionTypesFor('TEST')).toEqual({
      failure: expect.any(Function),
      success: expect.any(Function),
      request: expect.any(Function),
    });

    const myTypes = actionTypesFor('TEST');

    expect(myTypes.request('123')).toEqual({
      type: 'TEST_REQUEST',
      id: '123'
    });

    expect(myTypes.success('123', 'Coucou')).toEqual({
      type: 'TEST_SUCCESS',
      id: '123',
      response: 'Coucou'
    });

    expect(myTypes.failure('123', 'You so bad')).toEqual({
      type: 'TEST_FAILURE',
      id: '123',
      error: 'You so bad'
    })
  });
});
