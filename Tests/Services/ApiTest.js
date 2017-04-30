import test from 'ava';
import API from '../../App/Services/Api';
import FixtureAPI from '../../App/Services/FixtureApi';

test('Api returns something', t => {
    const fixtureApi = API.create();

    t.true(fixtureApi && typeof fixtureApi.getCity === 'function');
});
