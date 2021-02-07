import * as types from './types';

export const setUser = value => dispatch => {
  console.log('value',value);
  dispatch({
    type: types.SET_USER,
    payload: value,
  });
};

export const deleteUser = value => dispatch => {
  console.log(value);
  dispatch({
    type: types.DELETE_USER,
  });
};
