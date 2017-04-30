/**
 * List of all actions possible in the application
 * @flow
 */
const actionTypes = {
    STARTUP: 'STARTUP',
    // temperature actions
    TEMPERATURE_REQUEST: 'TEMPERATURE_REQUEST',
    TEMPERATURE_SUCCESS: 'TEMPERATURE_SUCCESS',
    TEMPERATURE_FAILURE: 'TEMPERATURE_FAILURE',
    //login actions
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT: 'LOGOUT'
}

export const STARTUP = actionTypes.STARTUP

export const TEMPERATURE_REQUEST = actionTypes.TEMPERATURE_REQUEST
export const TEMPERATURE_SUCCESS = actionTypes.TEMPERATURE_SUCCESS
export const TEMPERATURE_FAILURE = actionTypes.TEMPERATURE_FAILURE

export const LOGIN_REQUEST = actionTypes.LOGIN_REQUEST
export const LOGIN_SUCCESS = actionTypes.LOGIN_SUCCESS
export const LOGIN_FAILURE = actionTypes.LOGIN_FAILURE
export const LOGOUT = actionTypes.LOGOUT

export default actionTypes;