import test from 'ava';
import React from 'react';
import { View, Text } from 'react-native'
import HorizontalScrollView from '../../App/Components/HorizontalScrollView';
import { shallow } from 'enzyme';


// Basic wrapper
const wrapper = shallow(<HorizontalScrollView
              onPress={() => 'lo'}
              moreTitle='more title'
              title='title'
            >
                <View><Text>lo</Text></View>
                <View><Text>lo</Text></View>
                <View><Text>lo</Text></View>
            </HorizontalScrollView>
);

test('component exists', t => {
  t.true(wrapper.length > 0) // exists
});

test.todo('Write tests to test this!!!');