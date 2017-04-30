// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
import test from 'ava';
import React from 'react';
import DrawerButton from '../../App/Components/DrawerButton';
import styles from '../../App/Components/Styles/DrawerButtonStyles';
import { shallow } from 'enzyme';

const wrapper = shallow(<DrawerButton onPressDelegate={() => {}} text='hi' />);

test('component exists', t => {
  t.is(wrapper.length, 1); // exists
});

test('component structure', t => {
  t.is(wrapper.name(), 'TouchableOpacity'); // the right root component
  t.is(wrapper.children().length, 1); // has 1 child
  t.is(wrapper.children().first().name(), 'Text'); // that child is Text
});

test('component structure can have no text', t => {
  const wrapperNoText = shallow(<DrawerButton />);

  t.is(wrapperNoText.children().length, 0); // has 1 child
});

test('component structure can have children', t => {
  const wrapperNoText = shallow(<DrawerButton children={['trxt', 'txt2']} />);

  t.is(wrapperNoText.children().length, 2); // has 1 child
});

test('onPressDelegate', t => {
  let i = 0;
  const onPressDelegate = () => i++;
  const wrapperPress = shallow(<DrawerButton onPressDelegate={onPressDelegate} text='hi' />);

  // uses the right handler
  t.is(i, 0);
  wrapperPress.simulate('press');
  t.is(i, 1);
});

test('Press styles added', t => {
  const wrapperPress = shallow(<DrawerButton selected={true} />);

  t.is(wrapperPress.prop('style'), styles.buttonPressed);
});

test('Press styles added to text child', t => {
  const wrapperPress = shallow(<DrawerButton selected={true} text='hi' />);

  t.is(wrapperPress.childAt(0).prop('style'), styles.buttonTextPressed);
});