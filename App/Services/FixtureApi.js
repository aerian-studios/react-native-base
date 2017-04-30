export default {
  // Functions return fixtures
  getCity: (city) => {
    // This fixture only supports Boise or else returns toronto
    const boiseData = require('./boise-MOCK.json');
    const torontoData = require('./toronto-MOCK.json');
    return {
      ok: true,
      data: city.toLowerCase() === 'boise' ? boiseData : torontoData
    }
  }
}
