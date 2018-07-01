import {action, actionTypesFor, createRequestTypes} from '../src/actions';

describe('createRequestTypes', () => {
  it('should return 9', () => {
    expect(createRequestTypes('TEST')).toEqual({
      'REQUEST': '@api_sagas/TEST_REQUEST',
      'SUCCESS': '@api_sagas/TEST_SUCCESS',
      'FAILURE': '@api_sagas/TEST_FAILURE',
    });
  });

  it('should throw an error about no param given', () => {
    expect(() => {
      createRequestTypes('')
    }).toThrow(Error('No `base` param given'))
  })
});

describe('actions', () => {
  it('should return ok', () => {
    expect(action('@api_sagas/TEST_REQUEST', { id: 123 })).toEqual({
      type: '@api_sagas/TEST_REQUEST',
      id: 123
    })
  });
  it('should return ok without payload', () => {
    expect(action('@api_sagas/TEST_REQUEST')).toEqual({
      type: '@api_sagas/TEST_REQUEST'
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
      type: '@api_sagas/TEST_REQUEST',
      id: '123'
    });

    expect(myTypes.success('123', 'Coucou')).toEqual({
      type: '@api_sagas/TEST_SUCCESS',
      id: '123',
      response: 'Coucou'
    });

    expect(myTypes.failure('123', 'You so bad')).toEqual({
      type: '@api_sagas/TEST_FAILURE',
      id: '123',
      error: 'You so bad'
    })
  });
});
