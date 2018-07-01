import { entities } from "../src/reducers";

describe('(REDUCERS) entities', function () {
  it('should merge correctly', () => {
    const state = {
      contacts: {
        1: { id: 1, firstName: 'TEST' }
      }
    };

    const action = {
      response: {
        entities: {
          contacts: {
            2: { id: 2, firstName: 'TEST 2' }
          }
        }
      }
    };

    expect(entities(state, action)).toEqual({
      contacts: {
        1: { id: 1, firstName: 'TEST' },
        2: { id: 2, firstName: 'TEST 2' }
      }
    })

    expect(entities(state, {
      response: {
        entities: {
          contacts: {
            2: { id: 2, firstName: 'TEST 2' }
          }
        }
      }
    })).toEqual({
      contacts: {
        1: { id: 1, firstName: 'TEST' },
        2: { id: 2, firstName: 'TEST 2' }
      }
    });

    expect(entities(state, {})).toEqual({
      contacts: {
        1: { id: 1, firstName: 'TEST' }
      }
    });

    expect(entities(undefined, {})).toEqual({
      contacts: {}
    })
  })
});
