import { call, put } from 'redux-saga/effects';
import TemperatureActions from '../Redux/TemperatureRedux';
import convertFromKelvin from '../Helpers/ConvertFromKelvin';

export function * getTemperature (api, action) {
  const { city } = action;
  // make the call to the api
  const response = yield call(api.getCity, city);

  // success?
  if (response.ok) {
    const data = response.data;
    const kelvin = (data && data.main && typeof data.main.temp_max == "number") ? data.main.temp_max : undefined;
    const temperature = convertFromKelvin(kelvin);
    yield put(TemperatureActions.temperatureSuccess(temperature, 'bonus'));
  } else {
    yield put(TemperatureActions.temperatureFailure());
  }
}
