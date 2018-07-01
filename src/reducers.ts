import merge from 'lodash.merge';

const initialState = { contacts: {} };

interface State {
  contacts: {}
}

interface Action {
  response?: {
    entities?: {}
  }
}

export const entities = (state:State = initialState, action: Action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state;
};
