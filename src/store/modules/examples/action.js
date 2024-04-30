import * as types from '../types';

export function clickButtonRequest() {
  return {
    type: types.clickedButtonRequest,
  };
}

export function clickButtonFailure() {
  return {
    type: types.clickedButtonFailure,
  };
}
export function clickButtonSuccess() {
  return {
    type: types.clickedButtonSuccess,
  };
}
