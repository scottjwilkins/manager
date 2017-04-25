
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  //this return satisfies redux thunk even though no dispatch is performed
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    //passing type: 'reset' makes sure there's no back button
    .then(() => {
      dispatch({ type: EMPLOYEE_CREATE });
      Actions.employeeList({ type: 'reset' });
    });
  };
};
