import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
import {TEMPERATURE_FAILURE, TEMPERATURE_REQUEST, TEMPERATURE_SUCCESS} from './actionTypes';

const Creators = {
  temperatureRequest: (city) => {
    return {
      type: TEMPERATURE_REQUEST,
      city
    };
  },
  temperatureSuccess: (temperature) => {
    return {
      type: TEMPERATURE_SUCCESS,
      temperature
    };
  },
  temperatureFailure: () => {
    return {
      type: TEMPERATURE_FAILURE
    };
  }
};

export const TemperatureTypes = {TEMPERATURE_FAILURE, TEMPERATURE_REQUEST, TEMPERATURE_SUCCESS};
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  temperature: null,
  fetching: null,
  error: null,
  city: null
});

/* ------------- Reducers ------------- */

// request the temperature for a city
export const request = (state, { city }) => state.merge({ fetching: true, city, temperature: null });

// successful temperature lookup
export const success = (state, { temperature }) => state.merge({ fetching: false, error: null, temperature });

// failed to get the temperature
export const failure = (state) => state.merge({ fetching: false, error: true, temperature: null });


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TEMPERATURE_REQUEST:
            return request(state, action);
        case TEMPERATURE_SUCCESS:
            return success(state, action);
        default:
            return failure(state);
    }
};
