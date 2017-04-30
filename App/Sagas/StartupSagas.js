import { put, select } from 'redux-saga/effects'
import TemperatureActions from '../Redux/TemperatureRedux'

// exported to make available for tests
export const selectTemperature = (...state) => {
  return state.temperature.temperature
}
// process STARTUP actions
export function * startup (action) {
  const temp = yield select(selectTemperature);
  // only fetch new temps when we don't have one yet
  if (typeof temp !== 'number') {
    yield put(TemperatureActions.temperatureRequest('San Francisco'))
  }
}
