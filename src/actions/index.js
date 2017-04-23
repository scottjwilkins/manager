
import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};
export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    loginUserSpin(dispatch);
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch((err) => loginUserFail(dispatch, err));
    });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};
const loginUserFail = (dispatch, err) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: err
  });
};
const loginUserSpin = (dispatch) => {
  dispatch({
    type: LOGIN_USER
  });
};
