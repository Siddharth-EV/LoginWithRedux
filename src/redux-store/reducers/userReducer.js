import * as types from '../actions/types';

const initialState = {
  userDetails: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        userDetails: action.payload,
      };

    case types.DELETE_USER:
      return {
        ...state,
        userDetails: {},
      };

    default:
      return state;
  }
}
