// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
import test from 'ava';
import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import XButton from '../../App/Components/XButton';
import { shallow } from 'enzyme';

// Basic wrapper
const wrapper = shallow(<XButton onPressDelegate={() => {}} text='howdy' />);

test('component exists', t => {
  t.is(wrapper.length, 1) // exists
})

test('component structure', t => {
  t.is(wrapper.name(), 'TouchableOpacity') // the right root component
  t.is(wrapper.children().length, 1) // has at least 1 child
  t.is(wrapper.children().first().name(), 'Text') // that child is Text
});

test('onPressDelegate', t => {
  let i = 0 // i guess i could have used sinon here too... less is more i guess
  const onPress = () => {i++};
  const wrapperPress = shallow(<XButton onPressDelegate={onPress} text='hi' />);

  // uses the right handler
  t.is(i, 0);
  wrapperPress.simulate('press');
  t.is(i, 1);
})

test('renders children when passed', t => {
  const wrapperChild = shallow(<XButton onPressDelegate={() => {}}><Text>Howdy</Text></XButton>);

  t.is(wrapperChild.children().length, 1) // has 1 child
  t.is(wrapperChild.children().first().name(), 'Text') // that child is Text
});

test('renders icon when passed', t => {
  const wrapperChild = shallow(<XButton onPressDelegate={() => {}} text='hi' icon={<Icon name='bars' />} />);

  t.is(wrapperChild.children().length, 2) // has 1 child
  t.is(wrapperChild.children().first().name(), 'Icon');
});
