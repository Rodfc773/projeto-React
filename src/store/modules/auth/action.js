import { func } from 'prop-types';
import * as types from '../types';

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export function loginFailure(payload) {
  return {
    type: types.LOGIN_FAILURE,
    payload,
  };
}
export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}
export function registerRequest(payload) {
  return {
    type: types.REGISTER_REQUEST,
    payload,
  };
}
export function registerSuccess(payload) {
  return {
    type: types.REGISTER_SUCCESS,
    payload,
  };
}
export function registerUpdateSuccess(payload) {
  return {
    type: types.REGISTER_UPDATE_SUCCESS,
    payload,
  };
}
export function registerFailure(payload) {
  return {
    type: types.REGISTER_FAILURE,
    payload,
  };
}
