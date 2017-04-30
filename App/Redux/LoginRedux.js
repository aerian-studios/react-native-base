/**
 * An example login Redux - some of the boilerplate can be reduced by redux-sauce
 */
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT} from './actionTypes';


const Creators = {
  loginRequest: (username, password) => {
    return {
      type: LOGIN_REQUEST,
      username,
      password
    };
  },
  loginSuccess: username => {
    return {
      type: LOGIN_SUCCESS,
      username
    };
  },
  loginFailure: error => {
    return {
      type: LOGIN_FAILURE,
      error
    };
  },
  logout: () => ({type: LOGOUT})
};

export const LoginTypes = {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT};
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  username: null,
  error: null,
  fetching: false
});

/* ------------- Reducers ------------- */

// we're attempting to login
export const request = state => state.merge({ fetching: true });

// we've successfully logged in
export const success = (state, { username }) => state.merge({ fetching: false, error: null, username });

// we've had a problem logging in
export const failure = (state, { error }) => state.merge({ fetching: false, error });

// we've logged out
export const logout = state => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return request(state);
    case LOGIN_SUCCESS:
      return success(state, action);
    case LOGIN_FAILURE:
      return failure(state, action);
    default:
      return logout(state);
  }
}

/* ------------- Selectors ------------- */

// Is the current user logged in?
export const isLoggedIn = loginState => loginState.username !== null
